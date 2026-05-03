/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { cn } from '../lib/utils';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '../App';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Default to first size/color for quick add
    addToCart(product, product.sizes[0], product.colors[0].name);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("group cursor-pointer", className)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-brand-beige">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {product.isNewArrival && (
          <div className="absolute top-4 left-4 bg-brand-accent text-white py-1 px-3 text-[10px] uppercase font-bold tracking-widest">
            New
          </div>
        )}
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-4">
            <Link 
              to={`/product/${product.id}`}
              className="w-full bg-white text-black py-3 px-4 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-accent hover:text-white"
            >
                <Eye className="w-3 h-3" /> View Details
            </Link>
            <button 
              onClick={handleQuickAdd}
              className="w-full bg-brand-accent text-white py-3 px-4 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-75 hover:bg-white hover:text-brand-accent"
            >
                <ShoppingBag className="w-3 h-3" /> Quick Add
            </button>
        </div>
      </Link>
      
      <div className="mt-6 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xs uppercase tracking-widest font-bold text-black/80 group-hover:text-brand-accent transition-colors">
            {product.name}
          </h3>
          <span className="text-xs font-medium text-black/50">${product.price}</span>
        </div>
        <p className="text-[11px] text-black/40 uppercase tracking-wider">{product.category}</p>
      </div>
    </motion.div>
  );
}
