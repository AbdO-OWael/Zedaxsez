/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ChevronRight, ChevronLeft, MapPin, Info, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../App';
import { cn } from '../lib/utils';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name || '');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) return <div className="py-32 text-center">Product not found.</div>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    setIsAdding(true);
    setTimeout(() => {
      addToCart(product, selectedSize, selectedColor);
      setIsAdding(false);
      setAdded(true);
      setTimeout(() => setAdded(false), 3000);
    }, 800);
  };

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 py-8 text-[10px] uppercase font-bold tracking-widest text-black/40">
          <Link to="/" className="hover:text-brand-accent">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-brand-accent">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-brand-beige group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={product.images[activeImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              <div className="absolute inset-x-0 bottom-8 flex justify-center space-x-2">
                {product.images.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      activeImageIndex === i ? "bg-brand-accent w-6" : "bg-black/20"
                    )}
                  />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={cn(
                    "aspect-square overflow-hidden bg-brand-beige border-2",
                    activeImageIndex === i ? "border-brand-accent" : "border-transparent"
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Data */}
          <div className="flex flex-col">
            <div className="border-b border-black/5 pb-8 mb-8">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-accent">
                    New Series // {product.category}
                </span>
                {product.stockCount < 10 && (
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF4500] animate-pulse">
                        Only {product.stockCount} Left in Stock
                    </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4 italic">
                {product.name}
              </h1>
              <p className="text-2xl font-medium mb-6">${product.price}</p>
              <p className="text-black/60 text-sm leading-relaxed max-w-md italic">
                {product.description}
              </p>
            </div>

            {/* Selectors */}
            <div className="space-y-8 mb-12">
              {/* Color */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-widest block mb-4">Color: {selectedColor}</label>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={cn(
                        "w-10 h-10 border transition-all p-1",
                        selectedColor === color.name ? "border-brand-accent" : "border-black/10"
                      )}
                    >
                      <div className="w-full h-full" style={{ backgroundColor: color.hex }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <div className="flex justify-between items-center mb-4">
                    <label className="text-[10px] uppercase font-bold tracking-widest">Select Size</label>
                    <button className="text-[10px] uppercase font-bold tracking-widest text-black/40 hover:text-black underline underline-offset-4">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "py-4 text-xs font-bold uppercase tracking-widest transition-all",
                        selectedSize === size 
                          ? "bg-brand-black text-white" 
                          : "bg-white border border-black/10 text-black hover:border-black"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ATC */}
            <div className="mb-12">
              <Button 
                variant={added ? "secondary" : "accent"} 
                size="full" 
                className="group relative h-16 overflow-hidden"
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                <AnimatePresence mode="wait">
                  {isAdding ? (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </motion.div>
                  ) : added ? (
                    <motion.div key="added" initial={{ y: 20 }} animate={{ y: 0 }} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" /> Added to bag
                    </motion.div>
                  ) : (
                    <motion.span key="normal">Add to bag</motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </div>

            {/* Collapsibles Implemented as simple lists for now */}
            <div className="space-y-6 border-t border-black/5 pt-8">
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase font-bold tracking-[0.2em]">Product Details</h4>
                <ul className="space-y-2">
                  {product.details.map((detail, i) => (
                    <li key={i} className="text-xs text-black/50 flex items-start gap-2 italic">
                      <span className="text-brand-accent mt-0.5">•</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-8 text-[10px] uppercase font-bold tracking-widest pt-4">
                <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-brand-accent" />
                    <span>Free Local EU Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                    <Info className="w-4 h-4 text-brand-accent" />
                    <span>Secure Packaging</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-32">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-3xl font-display font-bold uppercase italic">Missing Pieces?</h2>
                <Link to="/shop" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1">Shop All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
      </div>
    </motion.div>
  );
}
