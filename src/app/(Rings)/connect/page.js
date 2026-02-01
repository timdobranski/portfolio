'use client';

import { useMemo, useState } from 'react';
import styles from './Connect.module.css'

export default function Connect() {
  const subjectOptions = useMemo(
    () => [
      { value: 'general', label: 'General' },
      { value: 'music', label: 'Music' },
      { value: 'software-dev', label: 'Software Dev' },
      { value: '3d-print-and-design', label: '3D Print and Design' },
    ],
    []
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('general');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [statusMessage, setStatusMessage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, company }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setStatusMessage(data?.error || 'Something went wrong.');
        return;
      }

      setStatus('success');
      setStatusMessage('Thanks — your message was sent.');
      setName('');
      setEmail('');
      setSubject('general');
      setMessage('');
      setCompany('');
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please try again.');
    }
  }

  return (
    <div>
      <div className='pageContentContainer'>
        <h1 className={'pageTitle'}>CONNECT</h1>
        <p className={'whiteText'}>{`Let’s connect! Send me a note or reach out below.`}</p>

        <div className={styles.formOuter}>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.formRow}>
              <label className={styles.label}>
                Name
                <input
                  className={styles.input}
                  type='text'
                  name='name'
                  autoComplete='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                />
              </label>

              <label className={styles.label}>
                Email
                <input
                  className={styles.input}
                  type='email'
                  name='email'
                  autoComplete='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  maxLength={254}
                />
              </label>
            </div>

            <label className={styles.label}>
              Subject
              <select
                className={styles.select}
                name='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              >
                {subjectOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.honeypot} aria-hidden='true'>
              Company
              <input
                className={styles.input}
                type='text'
                tabIndex={-1}
                autoComplete='off'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </label>

            <label className={styles.label}>
              Message
              <textarea
                className={styles.textarea}
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                maxLength={5000}
                rows={8}
              />
            </label>

            <div className={styles.actions}>
              <button className={styles.button} type='submit' disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>

              {status !== 'idle' && (
                <p
                  className={
                    status === 'success'
                      ? styles.statusSuccess
                      : status === 'error'
                      ? styles.statusError
                      : styles.statusSending
                  }
                  role={status === 'error' ? 'alert' : 'status'}
                >
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </div>

        <div className={styles.contactInfoContainer}>
          <div className={styles.contactHeaders}>
            <p className={styles.linkedLabel}>LinkedIn</p>
            <p className={styles.githubLabel}>Github</p>
          </div>
          <div className={styles.contactInfo}>
            <a href='http://www.linkedin.com/in/timdobranski' target='_blank' rel='noreferrer'>
              <p className={styles.linkedIn}>linkedin.com/in/timdobranski</p>
            </a>
            <a href='http://www.github.com/timdobranski' target='_blank' rel='noreferrer'>
              <p className={styles.github}>github.com/timdobranski</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

