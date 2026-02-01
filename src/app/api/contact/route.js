import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SUBJECTS = {
  general: 'General',
  music: 'Music',
  'software-dev': 'Software Dev',
  '3d-print-and-design': '3D Print and Design',
};

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (trimmed.length < 3 || trimmed.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

function escapeHtml(unsafe) {
  return String(unsafe)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 });
  }

  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const subject = typeof body?.subject === 'string' ? body.subject.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';
  const company = typeof body?.company === 'string' ? body.company.trim() : '';

  // Honeypot field: if filled, pretend success but do not send.
  if (company.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!isNonEmptyString(name) || name.length > 100) {
    return NextResponse.json(
      { ok: false, error: 'Please provide your name (max 100 chars).' },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Please provide a valid email.' }, { status: 400 });
  }

  if (!Object.hasOwn(SUBJECTS, subject)) {
    return NextResponse.json(
      { ok: false, error: 'Please select a valid subject.' },
      { status: 400 }
    );
  }

  if (!isNonEmptyString(message) || message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: 'Please enter a message (max 5000 chars).' },
      { status: 400 }
    );
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'Server is missing email configuration. Set SENDGRID_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.',
      },
      { status: 500 }
    );
  }

  sgMail.setApiKey(apiKey);

  const subjectLine = `[Portfolio] ${SUBJECTS[subject]} — ${name}`;

  const text = [
    'New portfolio contact message',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${SUBJECTS[subject]} (${subject})`,
    '',
    message,
  ].join('\n');

  const html = [
    '<h2>New portfolio contact message</h2>',
    `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    `<p><strong>Subject:</strong> ${escapeHtml(SUBJECTS[subject])} (${escapeHtml(subject)})</p>`,
    '<hr />',
    `<pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>`,
  ].join('\n');

  try {
await sgMail.send({
  to: toEmail,
  from: {
    email: fromEmail,
    name: `Portfolio Form — ${name}`,
  },

  // ✅ When you hit Reply, it goes to the submitter
  replyTo: {
    email,
    name,
  },

  subject: subjectLine,
  text,
  html,
});

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('SendGrid error sending contact email:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
