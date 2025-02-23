'use client'

import { useState } from 'react'
import ProductCard from '@/components/shared/ProductCard'
import { FunnelIcon } from '@heroicons/react/24/outline'

const categories = [
  'All Products',
  'Vegetables',
  'Fruits',
  'Meat',
  'Fish',
  'Dairy',
  'Beverages'
]

const products = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    image: '/images/tomatoes.jpg',
    price: 80,
    weight: '1 kg',
  },
  {
    id: '2',
    name: 'Organic Carrots',
    image: '/images/carrots.jpg',
    price: 60,
    weight: '1 kg',
  },
  // Add more products...
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="py-8">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Our Products</h1>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden p-2 text-gray-500 hover:text-primary"
          >
            <FunnelIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className={`lg:w-64 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-50 text-primary'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 