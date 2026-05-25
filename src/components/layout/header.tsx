import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/lib/utils';
import { LinkedInIcon } from '@/components/ui/social-icons';

const NAV_LINKS = [
  { href: '#projets', label: 'Projets' },
  { href: '#apropos', label: '\u00c0 propos' },
  { href: '#contact', label: 'Contact' },
] as const;

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          Mosiah<span className="text-primary">.</span>
        </Link>

        {/* ── Nav links ── */}
        <nav aria-label="Navigation principale">
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

        {/* ── LinkedIn CTA ── */}
        <Link
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            variant: 'outline',
            size: 'sm',
            className: 'gap-2',
          })}
        >
          <LinkedInIcon className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">LinkedIn</span>
        </Link>

      </div>
    </header>
  );
}
