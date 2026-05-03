/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck, Truck, Lock } from 'lucide-react';
import { useCart } from '../App';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';

export default function Cart() {
  const { cart, removeFromCart, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-32 px-4 text-center max-w-xl mx-auto"
      >
        <div className="mb-12 bg-zinc-50 aspect-square rounded-full flex items-center justify-center w-32 h-32 mx-auto">
            <Trash2 className="w-12 h-12 text-black/10" />
        </div>
        <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-6">Your bag is empty</h1>
        <p className="text-black/50 text-sm mb-12 italic">The digital archive awaits your selection. Build your silhouette now.</p>
        <Link to="/shop">
          <Button variant="accent" size="lg" className="w-full">Start Shopping</Button>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 pb-24 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left: Items */}
        <div className="lg:col-span-2">
            <div className="flex items-center justify-between border-b border-black pb-8 mb-8">
                <SectionHeading title="Shopping Bag" subtitle={`ITEMS IN CART // ${cartCount}`} className="mb-0" />
                <Link to="/shop" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors">
                    <ArrowLeft className="w-3 h-3" /> Continue Browsing
                </Link>
            </div>

          <div className="space-y-8">
            {cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-6 border-b border-black/5 pb-8">
                <Link to={`/product/${item.id}`} className="w-24 h-32 md:w-32 md:h-40 bg-brand-beige overflow-hidden flex-shrink-0">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </Link>
                
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest mb-1 italic">{item.name}</h3>
                      <p className="text-[10px] text-black/40 uppercase tracking-widest mb-4">{item.category}</p>
                      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-tighter">
                        <span className="flex items-center gap-2">SIZE: <span className="text-brand-accent">{item.selectedSize}</span></span>
                        <span className="flex items-center gap-2">COLOR: <span className="text-brand-accent">{item.selectedColor}</span></span>
                      </div>
                    </div>
                    <span className="text-xs font-bold">${item.price * item.quantity}</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center border border-black/10">
                        <button className="px-3 py-1 hover:bg-zinc-50 transition-colors"><Minus className="w-3 h-3"/></button>
                        <span className="px-4 text-[10px] font-bold">{item.quantity}</span>
                        <button className="px-3 py-1 hover:bg-zinc-50 transition-colors"><Plus className="w-3 h-3"/></button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                      className="text-[10px] uppercase font-bold tracking-widest text-black hover:text-red-600 transition-colors flex items-center gap-2"
                    >
                      <Trash2 className="w-3 h-3" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-1">
          <div className="bg-zinc-100 p-8 sticky top-24">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 italic">Order Summary</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex justify-between items-center text-xs text-black/60 font-medium">
                <span>Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-black/60 font-medium">
                <span>Shipping</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent">Calculated at checkout</span>
              </div>
              <div className="flex justify-between items-center text-xs text-black/60 font-medium">
                <span>Estimated Tax</span>
                <span>$0.00</span>
              </div>
              <div className="h-px bg-black/10" />
              <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                <span>Total</span>
                <span className="text-xl">${cartTotal}</span>
              </div>
            </div>

            <Button variant="accent" size="full" className="mb-8 h-16 text-xs tracking-[0.3em]">
                Initialize Checkout
            </Button>

            <div className="space-y-4 pt-8 border-t border-black/5">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-black/50">
                    <Truck className="w-4 h-4 text-brand-accent" />
                    <span>Express Global Dispatch</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-black/50">
                    <ShieldCheck className="w-4 h-4 text-brand-accent" />
                    <span>2-Year Wear Guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-black/50">
                    <Lock className="w-4 h-4 text-brand-accent" />
                    <span>PCI Compliant Encryption</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
