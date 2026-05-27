'use client';

import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { buttonVariants } from '@/lib/utils';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const INPUT_BASE =
  'w-full rounded-lg border border-border bg-zinc-900/50 px-4 py-3 text-sm text-foreground ' +
  'placeholder:text-muted-foreground/40 transition-colors duration-200 ' +
  'focus:border-primary focus:outline-none';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      projectType: (form.elements.namedItem('projectType') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        const json = await res.json() as { error?: string };
        setErrorMsg(json.error ?? 'Une erreur est survenue.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Impossible de contacter le serveur. Réessayez plus tard.');
      setStatus('error');
    }
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
          type="button"
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

      {/* Type de projet */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="projectType" className="text-sm font-medium text-foreground/80">
          Type de projet
        </label>
        <select
          id="projectType"
          name="projectType"
          className={`${INPUT_BASE} cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled>S&eacute;lectionnez un type&hellip;</option>
          <option value="site-vitrine">Site vitrine</option>
          <option value="dashboard">Dashboard / outil m&eacute;tier</option>
          <option value="seo-perf">SEO &amp; performance</option>
          <option value="application">Application web sur-mesure</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground/80">
          Votre projet
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={8}
          placeholder="D&eacute;crivez votre projet&hellip;&#10;&#10;Budget approximatif : ex. 500€ — 1500€&#10;D&eacute;lai souhait&eacute; : ex. livraison dans 4 semaines"
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

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            {errorMsg}{' '}
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="underline underline-offset-2 hover:text-red-300"
            >
              Réessayer
            </button>
          </span>
        </div>
      )}

      <p className="text-center text-xs text-muted-foreground/50">
        R&eacute;ponse garantie sous 24&nbsp;h.
      </p>
    </form>
  );
}
