import { Network, Headphones, Globe, User, Briefcase, GraduationCap } from 'lucide-react';
import { ExpertiseCard } from '@/components/ui/ExpertiseCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { expertiseData } from '@/data/expertise';

/* ─── Data ───────────────────────────────────────────────────────────── */

const TIMELINE = [
  {
    icon: Briefcase,
    role: 'Découverte du dev fullstack',
    company: 'Hilt Technology Engineering',
    current: false,
  },
  {
    icon: GraduationCap,
    role: 'Formation intensive · 9 mois',
    company: 'IDEM · École du Numérique au Soler',
    current: false,
  },
  {
    icon: Network,
    role: "Chargé d'études",
    company: 'Réseau FTTH',
    current: false,
  },
  {
    icon: Headphones,
    role: 'Technicien HelpDesk',
    company: 'Computacenter · GRDF',
    current: false,
  },
  {
    icon: Globe,
    role: 'Développeur Web Freelance',
    company: '100% Remote',
    current: true,
  },
] as const;

/* ─── Sub-components ─────────────────────────────────────────────────── */


function CareerTimeline() {
  return (
    <div className="mt-8 rounded-xl border border-border bg-zinc-900/30 p-5">
      <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground/80">
        Parcours
      </p>
      <div className="flex flex-col gap-0">
        {TIMELINE.map((step, i) => {
          const Icon = step.icon;
          const isLast = i === TIMELINE.length - 1;
          return (
            <div key={step.company} className="flex items-stretch gap-4">
              {/* Connector column */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                    step.current
                      ? 'border-primary/40 bg-primary/15 text-primary'
                      : 'border-border bg-secondary/50 text-muted-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                {!isLast && (
                  <div className="mt-1 w-px flex-1 bg-border/50" style={{ minHeight: '20px' }} />
                )}
              </div>

              {/* Content */}
              <div className={`pb-4 ${isLast ? 'pb-0' : ''}`}>
                <p
                  className={`text-sm font-semibold leading-tight ${
                    step.current ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {step.role}
                  {step.current && (
                    <span className="ml-2 inline-flex h-1.5 w-1.5 rounded-full bg-primary align-middle" />
                  )}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{step.company}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function NarrativeColumn() {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
        De l&apos;infrastructure réseau au code{' '}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)',
          }}
        >
          pixel-perfect.
        </span>
      </h3>

      <div className="mt-6 flex flex-col gap-5 text-[0.95rem] leading-relaxed text-muted-foreground">
        <p>
          Après avoir découvert le dev en start-up chez{' '}
          <strong className="font-semibold text-foreground/90">
            Hilt Technology Engineering
          </strong>
          , j'ai structuré mes compétences en suivant{' '}
          <strong className="font-semibold text-foreground/90">
            9 mois de formation intensive
          </strong>{' '}
          de Développeur Web à l'
          <strong className="font-semibold text-foreground/90">
            IDEM (École du Numérique au Soler)
          </strong>
          . Complètement autodidacte par la suite, j'ai continué à me former
          pour maîtriser les architectures modernes les plus performantes :{' '}
          <span className="text-primary">Next.js</span>,{' '}
          <span className="text-primary">Tailwind v4</span>.
        </p>
        <p>
          Ma curiosité pour les infrastructures m'a conduit vers les réseaux
          télécoms. En tant que{' '}
          <strong className="font-semibold text-foreground/90">
            Chargé d'études réseau FTTH
          </strong>
          , j'ai acquis une rigueur de conception d'infrastructure — chaque
          décision impactant des dizaines de kilomètres de fibre. Cette exigence
          du{' '}
          <strong className="font-semibold text-foreground/90">
            zéro défaut
          </strong>{' '}
          irrigue directement la qualité de mon code aujourd'hui.
        </p>
        <p>
          Mon expérience en{' '}
          <strong className="font-semibold text-foreground/90">
            support grands comptes
          </strong>{' '}
          (GRDF via Computacenter) m'a forgé un sens aigu du
          problem-solving sous pression et une relation client premium — je
          comprends les besoins métiers avant de coder la solution.
        </p>
        <p>
          Résultat : je conçois des sites vitrines, des dashboards complexes et
          des plateformes e-commerce sur mesure avec la même exigence technique
          que pour le déploiement d'une{' '}
          <strong className="font-semibold text-primary">
            fibre optique.
          </strong>
        </p>
      </div>
    </div>
  );
}

function ExpertiseColumn() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {expertiseData.map((expertise) => (
          <ExpertiseCard key={expertise.title} expertise={expertise} />
        ))}
      </div>
      <CareerTimeline />
    </div>
  );
}

/* ─── Main Export ────────────────────────────────────────────────────── */

export function About() {
  return (
    <section id="apropos" className="px-6 py-24">
      {/* Subtle top divider */}
      <div className="mx-auto mb-0 max-w-5xl">
        <div className="mb-16 h-px bg-gradient-to-r from-transparent via-border to-transparent md:mb-24" />
      </div>

      <div className="mx-auto max-w-5xl">
        <SectionHeader
          badge={<><User className="h-3.5 w-3.5" />À propos</>}
          title="Mon Parcours & Expertise"
        />

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/3">
            <NarrativeColumn />
          </div>
          <div className="w-full lg:w-2/3">
            <ExpertiseColumn />
          </div>
        </div>
      </div>
    </section>
  );
}
