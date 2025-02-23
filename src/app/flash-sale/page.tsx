'use client'

import { useState, useEffect } from 'react'
import ProductCard from '@/components/shared/ProductCard'

const flashSaleProducts = [
  {
    id: '1',
    name: 'Premium Beef',
    image: '/images/beef.jpg',
    price: 650,
    originalPrice: 850,
    weight: '1 kg',
    discount: 24,
  },
  {
    id: '2',
    name: 'Fresh Prawns',
    image: '/images/prawns.jpg',
    price: 450,
    originalPrice: 600,
    weight: '500g',
    discount: 25,
  },
  // Add more products...
]

export default function FlashSalePage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="py-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Flash Sale</h1>
          <div className="flex items-center justify-center gap-4 text-2xl font-bold">
            <span>Ends in:</span>
            <div className="flex items-center gap-2">
              <div className="bg-primary text-white px-4 py-2 rounded-lg">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-primary text-white px-4 py-2 rounded-lg">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-primary text-white px-4 py-2 rounded-lg">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
} 