/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeading({ title, subtitle, align = 'left', className }: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={cn("flex flex-col mb-12", alignClasses[align], className)}>
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.4, x: 0 }}
        viewport={{ once: true }}
        className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-black mb-4"
      >
        {subtitle || "Current collection"}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight leading-none"
      >
        {title}
      </motion.h2>
    </div>
  );
}
