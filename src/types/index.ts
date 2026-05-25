export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  githubHref?: string;
  imageSrc?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tooling" | "performance";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}
