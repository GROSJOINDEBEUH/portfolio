import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  Globe,
  BarChart2,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ProjectCard } from '@/components/ui/ProjectCard';

/* ─── Data ───────────────────────────────────────────────────────────── */

const FEATURED = {
  title: 'Tropical Atlantic Food',
  url: 'https://www.tropical-atlantic-food.fr',
  urlShort: 'tropical-atlantic-food.fr',
  problem:
    'Un restaurant avait besoin d\'une présence web claire, rapide et professionnelle pour présenter son menu et améliorer sa visibilité locale.',
  solution:
    'Création d\'un site vitrine moderne avec Next.js, responsive, optimisé SEO local, menu en ligne, images optimisées et données structurées.',
  result:
    'Site en production, navigation mobile fluide, chargement rapide, meilleure crédibilité en ligne et base solide pour le référencement local.',
  tags: ['Projet réel', 'En production', 'SEO local', 'Performance mobile', 'Responsive', 'Next.js'],
  metrics: [
    'Score de performance 100/100 sur mobile',
    'Images AVIF optimisées — chargement instantané',
    'Données structurées JSON-LD pour le référencement local',
  ],
};

const SECONDARY = [
  {
    id: 'wildopening-tcg',
    title: 'WildOpeningTCG',
    description:
      'Refonte UX/UI et optimisation Shopify. Refonte complète d\'une boutique Shopify spécialisée dans les produits scellés TCG (One Piece, imports japonais). Création d\'une identité visuelle premium, développement de sections Liquid sur mesure, animations JavaScript (ticker dynamique) et optimisation des parcours utilisateurs.',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'UX/UI Design', 'E-commerce'],
    icon: Globe,
    accentColor: 'from-emerald-600/20 to-teal-600/10',
    accentBorder: 'border-emerald-500/20',
    status: 'En production',
    liveUrl: 'https://wildopeningproject.netlify.app/',
    beforeImage: '/capture boutique wild opening/old.png',
    afterImage: '/capture boutique wild opening/new.png',
  },
  {
    id: 'fc-tartanerie',
    title: 'Dashboard Statistiques Sportives',
    description:
      'Application dashboard full-stack avec synchronisation de données et interface d\'analyse. Version démonstration — pensée pour montrer la création d\'interfaces complexes et de dashboards dynamiques.',
    image: '/Dashboard/Capture.png',
    features: [
      'Synchronisation temps réel des données',
      'Visualisation de données complexes (Graphiques)',
      'Interface responsive et performante',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Railway'],
    icon: BarChart2,
    accentColor: 'from-violet-600/20 to-indigo-600/10',
    accentBorder: 'border-violet-500/20',
    status: 'Démo / Projet perso',
    liveUrl: 'https://fc-tartanerie-dashboard-production.up.railway.app/',
  },
];

/* ─── Sub-components ─────────────────────────────────────────────────── */

function SectionHeader() {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        <Sparkles className="h-3.5 w-3.5" />
        Projets
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Mes Réalisations
      </h2>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Des projets concrets, orientés performance, SEO et expérience
        utilisateur.
      </p>
    </div>
  );
}

function PhoneMockup({ url }: { url: string }) {
  return (
    <div className="flex h-full items-center justify-center bg-zinc-950/60 py-8">
      {/* Phone shell */}
      <div className="relative w-52 overflow-hidden rounded-[2.5rem] border-2 border-zinc-700/50 bg-zinc-900 shadow-2xl shadow-black/60 ring-1 ring-white/5 lg:w-60">

        {/* Status bar */}
        <div className="flex items-center justify-between bg-zinc-900 px-5 py-2">
          <span className="text-[10px] font-semibold text-white/60">9:41</span>
          <div className="flex items-center gap-[3px]">
            <span className="h-2 w-[3px] rounded-sm bg-white/50" />
            <span className="h-2.5 w-[3px] rounded-sm bg-white/50" />
            <span className="h-3 w-[3px] rounded-sm bg-white/50" />
            <span className="ml-1 h-2.5 w-4 rounded-sm border border-white/40 p-px">
              <span className="block h-full w-3/4 rounded-sm bg-white/60" />
            </span>
          </div>
        </div>

        {/* URL chip */}
        <div className="mx-3 mb-1.5 flex items-center gap-1.5 rounded-full bg-zinc-800/80 px-3 py-1">
          <Globe className="h-2.5 w-2.5 shrink-0 text-muted-foreground" />
          <span className="truncate font-mono text-[9px] text-muted-foreground">{url}</span>
        </div>

        {/* Screenshot */}
        <div className="relative overflow-hidden">
          <Image
            src="/capture%20d%27%C3%A9cran%20tropical%20atlantic%20food/pagedacceuilmobile.jpg"
            alt="Version mobile Tropical Atlantic Food"
            width={390}
            height={844}
            priority
            sizes="(max-width: 1024px) 50vw, 240px"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          {/* Bottom fade — natural scroll effect */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-900 to-transparent"
          />
        </div>

      </div>
    </div>
  );
}

function FeaturedProject() {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card/50 shadow-xl shadow-black/30">
      <div className="grid grid-cols-1 lg:grid-cols-5">

        {/* ── Image side (left 3/5) ── */}
        <div className="lg:col-span-3">
          <PhoneMockup url={FEATURED.urlShort} />
        </div>

        {/* ── Content side (right 2/5) ── */}
        <div className="flex flex-col justify-center gap-6 border-t border-border p-8 lg:col-span-2 lg:border-l lg:border-t-0 lg:p-10">

          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <Badge variant="primary">Étude de cas · Featured</Badge>
          </div>

          {/* Title + link */}
          <div>
            <h3 className="text-2xl font-bold leading-tight tracking-tight">
              {FEATURED.title}
            </h3>
            <Link
              href={FEATURED.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex items-center gap-1 text-sm text-primary transition-opacity hover:opacity-80"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {FEATURED.urlShort}
            </Link>
          </div>

          {/* Case study — Problème / Solution / Résultat */}
          <div className="flex flex-col gap-3 text-sm">
            <div>
              <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">Problème</p>
              <p className="leading-relaxed text-muted-foreground">{FEATURED.problem}</p>
            </div>
            <div>
              <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">Solution</p>
              <p className="leading-relaxed text-muted-foreground">{FEATURED.solution}</p>
            </div>
            <div>
              <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-primary/70">Résultat</p>
              <p className="leading-relaxed text-foreground/80">{FEATURED.result}</p>
            </div>
          </div>

          {/* Social proof badges */}
          <div className="flex flex-wrap gap-2">
            {FEATURED.tags.map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Metrics */}
          <ul className="flex flex-col gap-2.5">
            {FEATURED.metrics.map((metric) => (
              <li key={metric} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground/80">{metric}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}


function ComingSoonCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border/50 bg-card/20 p-8 text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-secondary/50">
        <ArrowRight className="h-5 w-5 text-muted-foreground/50" />
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground/70">
          D'autres projets arrivent
        </p>
        <p className="mt-1 text-xs text-muted-foreground/40">
          En cours de développement…
        </p>
      </div>
    </div>
  );
}

/* ─── Main Export ────────────────────────────────────────────────────── */

export function Projects() {
  return (
    <section id="projets" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader />

        {/* Featured project */}
        <FeaturedProject />

        {/* Secondary projects grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch">
          {SECONDARY.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              features={project.features}
              tags={project.tags}
              link={project.liveUrl}
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
            />
          ))}
          <ComingSoonCard />
        </div>
      </div>
    </section>
  );
}
