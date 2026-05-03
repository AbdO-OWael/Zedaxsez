/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'z-001',
    name: 'Oversized "Nihil" Hoodie',
    price: 120,
    category: 'Hoodies',
    description: 'A masterpiece of minimalism. Crafted from 450GSM ultra-soft cotton for the ultimate structure and comfort.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556821840-4d4361099238?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Matte Black', hex: '#141414' },
      { name: 'Raw Bone', hex: '#F5F5DC' }
    ],
    isNewArrival: true,
    isBestSeller: true,
    stockCount: 12,
    details: [
      '100% Organic Heavyweight Cotton',
      'Dropped shoulder silhouette',
      'Signature Z&Z embroidery on cuff',
      'Reinforced seams for longevity'
    ]
  },
  {
    id: 'z-002',
    name: 'Cyber-Blue Cargo Pants',
    price: 185,
    category: 'Bottoms',
    description: 'Technical elements meet street aesthetic. Featuring high-tensile nylon panels and adjustable cinching.',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['28', '30', '32', '34'],
    colors: [
      { name: 'Midnight', hex: '#000000' },
      { name: 'Electric', hex: '#0047FF' }
    ],
    isNewArrival: true,
    stockCount: 8,
    details: [
      'Water-resistant ripstop nylon',
      '8-pocket utility system',
      'Articulated knee construction',
      'Magnetic buckle closures'
    ]
  },
  {
    id: 'z-003',
    name: 'Monolith Tee',
    price: 65,
    category: 'T-Shirts',
    description: 'The foundation of the modern wardrobe. Boxy fit, heavyweight ribbing, and a clean finish.',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Stone Grey', hex: '#8E9299' }
    ],
    isBestSeller: true,
    stockCount: 25,
    details: [
      '280GSM Combed Cotton',
      'Tight neckline for structure',
      'Double-needle stitching',
      'Preshrunk for perfect fit'
    ]
  },
  {
    id: 'z-004',
    name: 'Shadow Bomber Jacket',
    price: 245,
    category: 'Outerwear',
    description: 'A versatile layer designed for the urban explorer. Wind-resistant and thermal-lined.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Obsidian', hex: '#050505' }
    ],
    isNewArrival: true,
    stockCount: 5,
    details: [
      'High-density satin shell',
      'Quilted thermal lining',
      'Internal stash pocket',
      'YKK heavy-duty zippers'
    ]
  }
];
