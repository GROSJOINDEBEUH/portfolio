'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/lib/utils';
import { LinkedInIcon } from '@/components/ui/social-icons';

const NAV_LINKS = [
  { href: '#projets', label: 'Projets' },
  { href: '#apropos', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">

        {/* ── Logo ── */}
        <Link
          href="/"
          aria-label="Retour à l'accueil"
          className="flex h-10 w-auto shrink-0 items-center justify-center hover:opacity-75"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Mosiah"
            height={40}
            width={40}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* ── Desktop nav (hidden on mobile) ── */}
        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-0.5">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Desktop LinkedIn CTA (hidden on mobile) ── */}
        <Link
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            variant: 'outline',
            size: 'sm',
            className: 'hidden gap-2 md:inline-flex',
          })}
        >
          <LinkedInIcon className="h-3.5 w-3.5" />
          LinkedIn
        </Link>

        {/* ── Hamburger button (mobile only) ── */}
        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

      </div>

      {/* ── Mobile dropdown ── */}
      {open && (
        <nav
          aria-label="Navigation mobile"
          className="border-t border-border/40 bg-background/95 backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-3 border-t border-border pt-3">
              <Link
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={buttonVariants({
                  variant: 'outline',
                  size: 'sm',
                  className: 'w-full gap-2',
                })}
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
                LinkedIn
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
