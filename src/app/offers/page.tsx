'use client'

import { useState } from 'react'
import ProductCard from '@/components/shared/ProductCard'

const offers = [
  {
    id: '1',
    name: 'Fresh Chicken',
    image: '/images/chicken.jpg',
    price: 180,
    originalPrice: 220,
    weight: '1 kg',
    discount: 18,
  },
  {
    id: '2',
    name: 'Farm Fresh Eggs',
    image: '/images/eggs.jpg',
    price: 100,
    originalPrice: 120,
    weight: '12 pcs',
    discount: 17,
  },
  // Add more offers...
]

export default function OffersPage() {
  return (
    <div className="py-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Today's Special Offers</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't miss out on these amazing deals! Get fresh, high-quality products at discounted prices.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {offers.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
} 