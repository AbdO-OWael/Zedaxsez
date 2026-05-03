/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  onClick, 
  disabled 
}: ButtonProps) {
  const variants = {
    primary: 'bg-brand-black text-white hover:bg-zinc-800',
    secondary: 'bg-brand-white text-brand-black hover:bg-zinc-100',
    outline: 'bg-transparent border border-brand-black text-brand-black hover:bg-brand-black hover:text-white',
    accent: 'bg-brand-accent text-white hover:bg-blue-700'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-12 py-5 text-base',
    full: 'w-full py-4 text-sm'
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "uppercase font-bold tracking-[0.2em] transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
