export interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
  skills: readonly string[];
}

export const expertiseData: readonly ExpertiseItem[] = [
  {
    title: 'Stack Principale',
    description: 'Outils quotidiens pour concevoir des applications scalables.',
    icon: 'Code2',
    skills: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Shopify', 'APIs'],
  },
  {
    title: 'Domaines d\'Expertise',
    description: 'Solutions complètes pour des besoins métiers spécifiques.',
    icon: 'Layers',
    skills: ['Full-Stack App', 'Performance Web', 'Accessibilité', 'UX/UI Moderne', 'Animations'],
  },
  {
    title: 'Performance & Qualité',
    description: 'Optimisation rigoureuse pour une expérience utilisateur sans faille.',
    icon: 'Zap',
    skills: ['Core Web Vitals', 'Lighthouse 100/100', 'SEO Technique', 'JSON-LD', 'Images', 'Middleware', 'Redirections 301'],
  },
  {
    title: 'Outils & Workflow',
    description: 'Un environnement de travail optimisé pour la productivité.',
    icon: 'Wrench',
    skills: ['Git/GitHub', 'Vercel', 'Railway', 'Figma', 'Windsurf', 'Cascade', 'Terminal', 'Bash'],
  },
] as const;
