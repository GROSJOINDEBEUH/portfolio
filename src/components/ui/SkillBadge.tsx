export function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-950/50 border border-white/[0.03] px-3 py-1.5 text-xs font-medium text-neutral-400 transition-colors hover:bg-neutral-950/70 hover:text-neutral-300">
      {skill}
    </span>
  );
}
