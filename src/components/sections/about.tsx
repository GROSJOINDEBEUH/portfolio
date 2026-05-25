import { Server, Zap, Wrench, Network, Headphones, Globe, User, Briefcase, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

/* ─── Data ───────────────────────────────────────────────────────────── */

const SKILLS = [
  {
    id: 'frontend',
    icon: Server,
    label: 'Compétences Full-Stack',
    items: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Supabase / PostgreSQL', 'Framer Motion', 'shadcn/ui', 'Resend'],
  },
  {
    id: 'perf',
    icon: Zap,
    label: 'Performance & SEO',
    items: ['Core Web Vitals (100/100)', 'AVIF', 'JSON-LD', 'Middleware/Proxy 301'],
  },
  {
    id: 'systeme',
    icon: Wrench,
    label: 'Outils de Développement',
    items: ['Git / GitHub', 'Vercel', 'Railway', 'Windsurf', 'Terminal / Bash', 'Figma'],
  },
] as const;

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

function SectionHeader() {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        <User className="h-3.5 w-3.5" />
        À propos
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Mon Parcours &amp; Expertise
      </h2>
    </div>
  );
}

function CareerTimeline() {
  return (
    <div className="mt-8 rounded-xl border border-border bg-zinc-900/30 p-5">
      <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
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
          Apr&egrave;s avoir d&eacute;couvert le dev en start-up chez{' '}
          <strong className="font-semibold text-foreground/90">
            Hilt Technology Engineering
          </strong>
          , j&apos;ai structur&eacute; mes comp&eacute;tences en suivant{' '}
          <strong className="font-semibold text-foreground/90">
            9 mois de formation intensive
          </strong>{' '}
          de D&eacute;veloppeur Web &agrave; l&apos;
          <strong className="font-semibold text-foreground/90">
            IDEM (École du Numérique au Soler)
          </strong>
          . Compl&egrave;tement autodidacte par la suite, j&apos;ai
          continu&eacute; &agrave; me former de mon c&ocirc;t&eacute; pour
          ma&icirc;triser les architectures modernes les plus
          performantes&nbsp;:{' '}
          <span style={{ color: '#22d3ee' }}>Next.js</span>,{' '}
          <span style={{ color: '#22d3ee' }}>Tailwind&nbsp;v4</span>.
        </p>
        <p>
          Ma curiosit&eacute; pour les infrastructures me conduit ensuite vers
          les r&eacute;seaux t&eacute;l&eacute;coms. En tant que{' '}
          <strong className="font-semibold text-foreground/90">
            Charg&eacute; d&apos;&eacute;tudes en r&eacute;seau FTTH
          </strong>
          , j&apos;acquiers la rigueur des infrastructures et l&apos;importance
          d&apos;une base solide &mdash; des qualit&eacute;s qui irriguent
          encore mon code aujourd&apos;hui.
        </p>
        <p>
          Aujourd&apos;hui{' '}
          <strong className="font-semibold text-foreground/90">
            Technicien HelpDesk pour des grands comptes
          </strong>{' '}
          (GRDF via Computacenter), je g&egrave;re le support de bout en bout,
          ce qui m&apos;a forg&eacute; un relationnel client &agrave; toute
          &eacute;preuve et une forte capacit&eacute; de problem-solving.
        </p>
        <p>
          En parall&egrave;le, ma passion pour l&apos;assemblage de hardware et
          le d&eacute;veloppement m&apos;a pouss&eacute; &agrave;
          ma&icirc;triser la cr&eacute;ation d&apos;applications web modernes.
          R&eacute;sultat&nbsp;: je con&ccedil;ois des sites vitrines et des
          dashboards avec la m&ecirc;me exigence technique que pour le
          d&eacute;ploiement d&apos;une{' '}
          <strong className="font-semibold" style={{ color: '#22d3ee' }}>
            fibre optique.
          </strong>
        </p>
      </div>

      <CareerTimeline />
    </div>
  );
}

function SkillBox({
  icon: Icon,
  label,
  items,
}: {
  icon: (typeof SKILLS)[number]['icon'];
  label: string;
  items: readonly string[];
}) {
  return (
    <div className="group rounded-xl border border-border bg-zinc-900/30 p-5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-primary/25 hover:bg-zinc-900/60 hover:shadow-lg hover:shadow-black/20">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
          <Icon className="h-4 w-4" strokeWidth={1.5} />
        </div>
        <h3 className="text-sm font-semibold text-foreground">{label}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item} variant="mono">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function SkillsColumn() {
  return (
    <div className="flex flex-col gap-4">
      {SKILLS.map((skill) => (
        <SkillBox key={skill.id} {...skill} />
      ))}
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
        <SectionHeader />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <NarrativeColumn />
          <SkillsColumn />
        </div>
      </div>
    </section>
  );
}
