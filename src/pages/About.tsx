/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brand-black">
        <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=2000" 
            alt="About Hero" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
            referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-9xl font-display font-bold text-white uppercase tracking-tighter italic">
                Our Ethos
            </h1>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="space-y-16">
            <div>
                <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">The Mission // 01</span>
                <p className="text-3xl md:text-5xl font-display font-medium tracking-tight leading-tight uppercase italic">
                    Zedaxsez exists at the intersection of urban nihilism and architectural precision. We build garments that act as armor for the modern world.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                <div className="space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest italic">Radical Minimalism</h3>
                    <p className="text-sm text-black/60 leading-relaxed font-medium">
                        Every seam, every pocket, and every fabric choice is deliberate. We strip away the noise of fast fashion to focus on the silhouette. Our pieces are designed to be staples that transcend seasons and trends.
                    </p>
                </div>
                <div className="space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest italic">The Zed Collective</h3>
                    <p className="text-sm text-black/60 leading-relaxed font-medium">
                        We are more than a brand; we are a community of urban explorers, creators, and individuals who refuse to be defined by the mainstream. We believe in high-concept design accessible to the streets.
                    </p>
                </div>
            </div>

            <div className="pt-24">
                <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
                    alt="Factory" 
                    className="w-full aspect-video object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                />
                <p className="mt-4 text-[10px] uppercase font-bold tracking-[0.3em] text-black/30 text-right italic">Inside the Portugal atelier // 2026</p>
            </div>

            <div className="text-center pt-24">
                <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-12 italic opacity-10">
                    No Restocks. <br/>Ever.
                </h2>
                <div className="h-20 w-px bg-brand-accent mx-auto mb-12" />
                <p className="text-xs uppercase font-bold tracking-[0.5em] text-black/40">ZEDAXSEZ // EST 2026</p>
            </div>
        </div>
      </section>
    </motion.div>
  );
}
