import { Zap, Target, Network, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/lib/utils';

const ARGUMENTS = [
  {
    id: 'speed',
    icon: Zap,
    title: 'Sites rapides et modernes',
    description:
      'Score Lighthouse 100/100, images optimisées AVIF, chargement instantané. Votre site impressionne dès la première seconde.',
  },
  {
    id: 'business',
    icon: Target,
    title: 'Approche orientée résultats',
    description:
      'Je ne code pas pour coder. Chaque décision technique est pensée pour attirer des clients, améliorer votre visibilité et convertir les visiteurs.',
  },
  {
    id: 'infra',
    icon: Network,
    title: 'Profil technique complet',
    description:
      'Dev web, infrastructure réseau, support utilisateur. Je construis des sites solides, pensés pour de vrais besoins — pas juste esthétiques.',
  },
  {
    id: 'accompagnement',
    icon: ArrowRight,
    title: 'De l\'idée au déploiement',
    description:
      'Accompagnement clair à chaque étape : brief, design, développement, mise en ligne. Vous savez toujours où en est votre projet.',
  },
] as const;

export function WhyMe() {
  return (
    <section id="pourquoi" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Divider */}
        <div className="mb-16 h-px bg-gradient-to-r from-transparent via-border to-transparent md:mb-24" />

        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Pourquoi moi&nbsp;?
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Un développeur qui pense business.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground lg:pb-1">
            Mon profil combine développement web, infrastructure réseau et
            support utilisateur. Résultat&nbsp;: je construis des sites solides,
            rapides et pensés pour de vrais besoins clients.
          </p>
        </div>

        {/* Arguments grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ARGUMENTS.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="flex gap-4 rounded-2xl border border-border bg-zinc-900/30 p-6 transition-[border-color,background-color] duration-300 hover:border-primary/25 hover:bg-zinc-900/60"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/50 text-primary">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-1.5 font-semibold leading-tight">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link href="#contact" className={buttonVariants({ size: 'lg' })}>
            Démarrer mon projet
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
