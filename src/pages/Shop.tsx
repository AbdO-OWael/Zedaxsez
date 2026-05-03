/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { cn } from '../lib/utils';

type SortOption = 'newest' | 'price-low' | 'price-high';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;
    
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    switch (sortBy) {
      case 'price-low':
        return [...result].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...result].sort((a, b) => b.price - a.price);
      default:
        return result;
    }
  }, [activeCategory, sortBy]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-12 pb-24 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <header className="mb-16">
        <SectionHeading 
          title="Digital Archives" 
          subtitle="Explore the catalog"
          className="mb-8"
        />
        
        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-black/5 pb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 text-[10px] uppercase font-bold tracking-widest transition-all",
                  activeCategory === cat 
                    ? "bg-brand-black text-white" 
                    : "bg-zinc-100 text-black/50 hover:bg-zinc-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative group w-full md:w-48">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full bg-transparent border-none text-[10px] uppercase font-bold tracking-widest appearance-none cursor-pointer focus:outline-none"
              >
                <option value="newest">Sort: Newest</option>
                <option value="price-low">Sort: Price Low</option>
                <option value="price-high">Sort: Price High</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none group-hover:text-brand-accent transition-colors" />
            </div>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-32 text-center">
            <p className="text-sm uppercase tracking-widest text-black/40 font-bold mb-8 italic">Archive currently empty in this sector.</p>
            <Button variant="outline" onClick={() => setActiveCategory('All')}>Clear Filters</Button>
        </div>
      )}
    </motion.div>
  );
}
