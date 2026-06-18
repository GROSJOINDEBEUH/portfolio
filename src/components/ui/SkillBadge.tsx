export function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center rounded-lg bg-neutral-900/50 border border-white/5 px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:bg-neutral-900/70">
      {skill}
    </span>
  );
}
