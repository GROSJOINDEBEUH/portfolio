'use client';

import { motion } from 'framer-motion';
import { ExpertiseItem } from '@/data/expertise';
import { SkillBadge } from './SkillBadge';

interface ExpertiseCardProps {
  expertise: ExpertiseItem;
}

export function ExpertiseCard({ expertise }: ExpertiseCardProps) {
  const { title, description, icon: Icon, skills } = expertise;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-black/20 backdrop-blur-md border border-white/5 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/30"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon + Title */}
      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-primary/20 group-hover:bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
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
