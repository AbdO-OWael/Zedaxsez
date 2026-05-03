/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function FeatureItem({ icon, title, description, index }: FeatureItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 border border-black/5 hover:border-brand-accent transition-colors group bg-zinc-50"
    >
      <div className="mb-6 text-brand-black group-hover:text-brand-accent transition-colors">
        {icon}
      </div>
      <h3 className="text-xs font-bold uppercase tracking-widest mb-4">{title}</h3>
      <p className="text-sm text-black/50 leading-relaxed font-medium">{description}</p>
    </motion.div>
  );
}
