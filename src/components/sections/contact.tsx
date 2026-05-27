import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/ui/social-icons';
import { siteConfig } from '@/config/site';
import { ContactForm } from '@/components/ui/contact-form';

/* ─── Data ───────────────────────────────────────────────────────────── */

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.socials.email,
    href: `mailto:${siteConfig.socials.email}`,
    external: false,
    hint: '',
  },
  {
    icon: Phone,
    label: 'T\u00e9l\u00e9phone',
    value: siteConfig.socials.phone,
    href: `tel:${siteConfig.socials.phone.replace(/\s/g, '')}`,
    external: false,
    hint: 'Disponible sur WhatsApp',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'Mosiah GRANDOL TAMBA',
    href: siteConfig.socials.linkedin,
    external: true,
    hint: '',
  },
] as const;

/* ─── Sub-components ─────────────────────────────────────────────────── */

function SectionHeader() {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        <MessageCircle className="h-3.5 w-3.5" />
        Contact
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Vous avez un projet&nbsp;?
      </h2>
      <p className="mt-4 max-w-xl text-center text-lg text-muted-foreground">
        Envoyez-moi votre id&eacute;e, je vous r&eacute;ponds avec une
        premi&egrave;re estimation gratuite sous 24&nbsp;h.
      </p>
    </div>
  );
}

function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
  external,
  hint,
}: (typeof CONTACT_ITEMS)[number]) {
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center gap-4 rounded-xl border border-border bg-zinc-900/30 p-5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-primary/30 hover:bg-zinc-900/60 hover:shadow-md hover:shadow-black/20"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/50 text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
          {value}
        </p>
        {hint && (
          <p className="mt-1 flex items-center gap-1 text-xs text-primary/70">
            <MessageCircle className="h-3 w-3 shrink-0" />
            {hint}
          </p>
        )}
      </div>
    </Link>
  );
}

function ContactInfoColumn() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-xl font-bold tracking-tight">
          Prenons contact
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Freelance disponible pour des missions web &mdash; du site vitrine
          &agrave; l&apos;application sur-mesure. R&eacute;ponse garantie sous
          24&nbsp;h.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {CONTACT_ITEMS.map((item) => (
          <ContactInfoCard key={item.label} {...item} />
        ))}
      </div>

      {/* Availability indicator */}
      <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4">
        <span
          className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-primary"
          style={{ animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }}
        />
        <div>
          <p className="text-sm font-semibold text-primary">
            Disponible imm&eacute;diatement
          </p>
          <p className="text-xs text-muted-foreground">
            100&nbsp;% Remote &mdash; missions enti&egrave;rement &agrave; distance
          </p>
        </div>
      </div>
    </div>
  );
}

function PageFooter() {
  return (
    <footer className="mt-20 border-t border-border pt-8 pb-4">
      {/* Logo discret */}
      <div className="mb-6 flex h-8 w-32 shrink-0 items-center justify-center">
        <Image
          src="/logo.png"
          alt="Logo Mosiah Dev — Développeur Web Freelance Perpignan"
          height={32}
          width={128}
          className="h-8 w-32 object-contain opacity-50"
        />
      </div>

      <div className="flex flex-col items-center gap-4 text-center md:grid md:grid-cols-3 md:items-center md:text-left">
        {/* Col 1 — copyright */}
        <p className="text-sm text-muted-foreground md:text-left">
          &copy;&nbsp;2026&nbsp;
          <span className="font-medium text-foreground">Mosiah</span>. Tous
          droits r&eacute;serv&eacute;s.
        </p>

        {/* Col 2 — social icons */}
        <div className="flex justify-center gap-4">
          <Link
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-muted-foreground transition-[border-color,color] hover:border-border hover:text-foreground"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-muted-foreground transition-[border-color,color] hover:border-border hover:text-foreground"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Col 3 — stack */}
        <p className="text-xs text-muted-foreground/50 md:text-right">
          Propuls&eacute; par Next.js&nbsp;16 &amp; Tailwind&nbsp;v4
        </p>
      </div>
    </footer>
  );
}

/* ─── Main Export ────────────────────────────────────────────────────── */

export function Contact() {
  return (
    <>
      <section id="contact" className="px-6 py-24">
        {/* Subtle top divider */}
        <div className="mx-auto mb-16 max-w-5xl md:mb-24">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="mx-auto max-w-5xl">
          <SectionHeader />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <ContactInfoColumn />
            <ContactForm />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        <PageFooter />
      </div>
    </>
  );
}
