import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';

const variantMap = {
  default: 'bg-secondary text-secondary-foreground',
  outline: 'border border-border text-muted-foreground',
  primary: 'bg-primary/15 text-primary border border-primary/25',
  mono: 'bg-zinc-800 text-zinc-300 font-mono',
} as const;

type BadgeVariant = keyof typeof variantMap;

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({
  variant = 'default',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-all duration-200 hover:scale-105 hover:shadow-md',
        variantMap[variant],
        'hover:bg-primary/20 hover:text-primary hover:border-primary/40',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
