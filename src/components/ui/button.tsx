'use client';

import { type ButtonHTMLAttributes } from 'react';
import {
  buttonVariants,
  type ButtonVariant,
  type ButtonSize,
} from '@/lib/utils';

export { buttonVariants, type ButtonVariant, type ButtonSize };

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = 'default',
  size = 'default',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
