/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Instagram, Twitch, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-12 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="font-display text-2xl font-bold tracking-tighter uppercase italic">
              Zed<span className="text-brand-accent">ax</span>sez
            </Link>
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              Premium streetwear for the modern nihilist. Design-led, quality-driven, culture-focused.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Internal</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/shop" className="hover:text-white transition-colors">Latest Drops</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Ethos</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Service</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Terms & Privacy</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Collective</h4>
            <p className="text-sm text-white/50 mb-6 leading-relaxed">
              Join the collective. Receive exclusive access to limited drops.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-xs w-full focus:outline-none focus:border-brand-accent"
              />
              <button className="bg-white text-black px-6 py-2 text-xs font-bold uppercase hover:bg-brand-accent hover:text-white transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-widest gap-4">
          <p>© 2026 ZEDAXSEZ ENTERPRISE. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
