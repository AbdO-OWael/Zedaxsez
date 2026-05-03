/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, ShieldCheck, Zap, Instagram } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import FeatureItem from '../components/FeatureItem';
import Button from '../components/Button';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Streetwear" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.5em] mb-6 block drop-shadow-2xl">
              Drop 0.1 // Null Collection
            </span>
            <h1 className="text-6xl md:text-[10rem] font-display font-bold text-white uppercase tracking-tighter leading-[0.8] mb-8">
              Wear the <br/>Statement.
            </h1>
            <p className="text-white/60 text-sm md:text-lg mb-12 max-w-xl mx-auto font-medium lowercase tracking-wide italic">
              — redefining urban architecture through minimalist silhouette and premium raw materials.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link to="/shop">
                <Button variant="accent" size="lg">
                  Shop Drop
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary" size="lg">
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-10 hidden md:block">
            <div className="flex flex-col text-[10px] text-white/40 uppercase tracking-[0.3em] gap-2">
                <span>EST: 2026</span>
                <span>LON / NYC / TYO</span>
            </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-brand-accent py-4 overflow-hidden border-y border-black/10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white font-display text-2xl font-bold uppercase tracking-tighter mx-12 flex items-center gap-4 italic">
              Limited Edition Drops <Zap className="w-6 h-6 fill-white" /> Global Express Shipping <Zap className="w-6 h-6 fill-white" /> Sustainable Fabrics
            </span>
          ))}
        </div>
      </div>

      {/* Featured Collection */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeading 
            title="Latest Essentials" 
            subtitle="Curated picks // Season 01"
            className="mb-0"
          />
          <Link to="/shop" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-colors">
            View All Series <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureItem 
              index={0}
              icon={<Zap className="w-8 h-8" />}
              title="Hyper-Fast Delivery"
              description="Same-day dispatch for all London orders. Optimized global logistics network for urban speed."
            />
            <FeatureItem 
              index={1}
              icon={<ShieldCheck className="w-8 h-8" />}
              title="Tear-Proof Ethics"
              description="Sourced from ethical mills in Portugal. Premium heavyweight fabrics designed to last a lifetime."
            />
            <FeatureItem 
              index={2}
              icon={<Box className="w-8 h-8" />}
              title="Exclusive Drops"
              description="No restocks. Once it's gone, it becomes cultural history. Join the collective to stay ahead."
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <SectionHeading 
                title="Seen on Street" 
                subtitle="Community Spotlight"
                align="center"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1544441893-675973e346e5?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800"
                ].map((img, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="aspect-square bg-zinc-100 overflow-hidden relative group"
                    >
                        <img 
                            src={img} 
                            alt={`Social ${i}`} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Instagram className="text-white w-8 h-8" />
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-16 bg-brand-black p-12 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent blur-[120px] opacity-20 -mr-32 -mt-32" />
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-6">Want a Discount?</h3>
                <p className="text-sm text-white/50 mb-10 max-w-md mx-auto italic">Tag @ZEDAXSEZ in your fit pic for a chance to get 15% off your next order.</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <input 
                        type="text" 
                        placeholder="ENTER YOUR IG HANDLE" 
                        className="bg-white/10 border border-white/20 px-6 py-4 text-xs w-full max-w-xs focus:outline-none focus:border-brand-accent transition-colors"
                    />
                    <Button variant="accent">Sign Me Up</Button>
                </div>
            </div>
        </div>
      </section>
    </motion.div>
  );
}
