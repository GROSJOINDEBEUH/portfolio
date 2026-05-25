import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { buttonVariants } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 py-24">

      {/* ── Background layers ────────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">

        {/* Dot / grid pattern */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Cyan radial glow — top-center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(34,211,238,0.18) 0%, transparent 65%)',
          }}
        />

        {/* Secondary warm glow — bottom-right accent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 90% 80%, rgba(99,102,241,0.10) 0%, transparent 60%)',
          }}
        />

        {/* Bottom fade to background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        {/* Surtitre / Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <span
            className="inline-block h-2 w-2 rounded-full bg-primary"
            style={{ animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }}
          />
          Disponibilit&eacute; imm&eacute;diate &middot; 100% Remote
        </div>

        {/* H1 */}
        <h1 className="mb-8 break-words text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-[5.5rem]">
          <span className="block text-foreground drop-shadow-sm">
            Mosiah<span className="animate-pulse text-primary">_</span>
          </span>
          <span className="mt-1 block">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #22d3ee 0%, #818cf8 55%, #c084fc 100%)',
              }}
            >
              Développeur Web
            </span>
            <span className="text-foreground"> Freelance.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Je conçois des applications web sur-mesure, ultra-performantes et
          optimisées pour le&nbsp;SEO. Des architectures robustes pour des
          expériences digitales irréprochables.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#projets"
            className={buttonVariants({ size: 'lg' })}
          >
            Découvrir mes projets
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#contact"
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
          >
            <Mail className="h-4 w-4" />
            Discuter d&apos;un projet
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground/50">
            <div
              className="h-8 w-px bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent"
              style={{ animation: 'pulse 2s ease-in-out infinite' }}
            />
            <span className="uppercase tracking-widest">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
