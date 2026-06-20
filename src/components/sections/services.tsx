import { Monitor, LayoutDashboard, Gauge, Wrench, ShoppingCart } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const SERVICES = [
  {
    id: 'vitrine',
    icon: Monitor,
    title: 'Site vitrine premium',
    description:
      'Création de sites modernes, rapides et responsive pour restaurants, commerces, indépendants et petites entreprises. Un site qui convertit les visiteurs en clients.',
    highlights: ['Design sur-mesure', 'Responsive mobile', 'SEO local', 'Chargement rapide'],
  },
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    title: 'Dashboard / outil métier',
    description:
      'Développement d\'interfaces sur-mesure pour gérer données, statistiques, clients, ventes ou processus internes. Votre activité pilotée depuis une seule interface.',
    highlights: ['Données en temps réel', 'Interface intuitive', 'Déployé en production', 'Full-stack'],
  },
  {
    id: 'seo',
    icon: Gauge,
    title: 'SEO technique & performance',
    description:
      'Optimisation du temps de chargement, structure SEO, Core Web Vitals, métadonnées, images et accessibilité. Votre site visible sur Google, rapide sur tous les appareils.',
    highlights: ['Core Web Vitals 100/100', 'Audit complet', 'Données structurées', 'Images optimisées'],
  },
  {
    id: 'shopify',
    icon: ShoppingCart,
    title: 'Refonte E-commerce Shopify',
    description:
      'Modernisation de boutiques Shopify. Développement de sections sur-mesure (Liquid), optimisation de l\'expérience utilisateur (UX/UI) et des performances pour maximiser les conversions.',
    highlights: ['Shopify', 'Liquid', 'UX/UI', 'Conversion'],
  },
] as const;

function ServiceCard({
  icon: Icon,
  title,
  description,
  highlights,
}: (typeof SERVICES)[number]) {
  return (
    <div className="group flex flex-col rounded-2xl border border-border bg-zinc-900/30 p-7 transition-[border-color,background-color,box-shadow] duration-300 hover:border-primary/30 hover:bg-zinc-900/60 hover:shadow-lg hover:shadow-black/20">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/50 text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>

      <h3 className="mb-3 text-lg font-bold tracking-tight">{title}</h3>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <ul className="flex flex-wrap gap-2">
        {highlights.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border bg-secondary/40 px-3 py-0.5 text-xs font-medium text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Divider */}
        <div className="mb-16 h-px bg-gradient-to-r from-transparent via-border to-transparent md:mb-24" />

        {/* Section header */}
        <SectionHeader
          badge={<><Wrench className="h-3.5 w-3.5" strokeWidth={1.5} />Services</>}
          title="Ce que je peux faire pour vous"
          subtitle="Des solutions web concrètes, pensées pour votre activité — pas seulement pour votre stack technique."
        />

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
