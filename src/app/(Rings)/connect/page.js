'use client';

import { useState } from 'react';
import styles from './Connect.module.css'

export default function Connect() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
        body: JSON.stringify({ name, email, message, company }),
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
        <h1 className={`pageTitle ${styles.pageHeader}`}>CONNECT</h1>
        <p className={'whiteText'}>{`Reach out below:`}</p>

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

      </div>
    </div>
  )
}
