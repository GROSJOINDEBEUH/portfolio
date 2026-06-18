'use client';

import { motion } from 'framer-motion';
import { Code2, Layers, Zap, Wrench } from 'lucide-react';
import { ExpertiseItem } from '@/data/expertise';
import { SkillBadge } from './SkillBadge';

interface ExpertiseCardProps {
  expertise: ExpertiseItem;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Layers,
  Zap,
  Wrench,
};

export function ExpertiseCard({ expertise }: ExpertiseCardProps) {
  const { title, description, icon: iconName, skills } = expertise;
  const Icon = iconMap[iconName] || Code2;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-neutral-900/30 backdrop-blur-sm border border-white/[0.05] p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 min-w-0"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon + Title */}
      <div className="mb-6 flex items-start gap-4 min-w-0">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-colors group-hover:border-primary/15 group-hover:bg-primary/[0.05]">
          <Icon className="h-6 w-6 text-primary/80" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold tracking-tight text-foreground/90">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">
            {description}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
