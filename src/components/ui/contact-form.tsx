'use client';

import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { buttonVariants } from '@/lib/utils';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const INPUT_BASE =
  'w-full rounded-lg border border-border bg-zinc-900/50 px-4 py-3 text-sm text-foreground ' +
  'placeholder:text-muted-foreground/40 transition-colors duration-200 ' +
  'focus:border-primary focus:outline-none';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-primary/25 bg-primary/5 px-8 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/15">
          <CheckCircle2 className="h-7 w-7 text-primary" />
        </div>
        <div>
          <p className="text-lg font-semibold">Message envoy&eacute;&nbsp;!</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Je vous r&eacute;pondrai dans les plus brefs d&eacute;lais.
          </p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm text-primary underline-offset-4 hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Nom */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-foreground/80">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Votre nom complet"
          className={INPUT_BASE}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground/80">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="votre@email.com"
          className={INPUT_BASE}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="D&eacute;crivez votre projet, vos objectifs, votre timeline&hellip;"
          className={`${INPUT_BASE} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className={buttonVariants({
          size: 'lg',
          className: 'mt-1 w-full',
        })}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Envoi en cours&hellip;
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Envoyer le message
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground/50">
        R&eacute;ponse garantie sous 24&nbsp;h.
      </p>
    </form>
  );
}
