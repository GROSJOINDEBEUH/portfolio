import type { ReactNode } from 'react';

interface SectionHeaderProps {
  badge: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
}

export function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        {badge}
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-center text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
