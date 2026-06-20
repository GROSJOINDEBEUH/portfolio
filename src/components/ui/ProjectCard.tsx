'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  features?: readonly string[];
  tags: readonly string[];
  link?: string;
  beforeImage?: string;
  afterImage?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  features,
  tags,
  link,
  beforeImage,
  afterImage,
}: ProjectCardProps) {
  const hasImage = image !== undefined;
  const hasBeforeAfter = beforeImage && afterImage;
  const hasFeatures = features && features.length > 0;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:shadow-xl hover:shadow-black/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="flex h-full flex-col">
        {/* Image section */}
        {hasImage && (
          <div className="relative overflow-hidden">
            <div className="relative aspect-video w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
          </div>
        )}

        {/* Before/After slider section */}
        {hasBeforeAfter && (
          <div className="relative">
            <BeforeAfterSlider
              beforeImage={beforeImage}
              afterImage={afterImage}
              alt={`${title} - Avant/Après`}
            />
          </div>
        )}

        {/* Content section */}
        <div className="flex flex-1 flex-col gap-5 p-6">
          {/* Title + description */}
          <div>
            <h3 className="text-xl font-bold tracking-tight">{title}</h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>

          {/* Features section */}
          {hasFeatures && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
                Fonctionnalités clés
              </p>
              <ul className="flex flex-col gap-1.5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-0.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom section - always at bottom */}
          <div className="mt-auto flex flex-col gap-3">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Live link */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Voir le projet en direct
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
