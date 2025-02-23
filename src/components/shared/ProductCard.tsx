import Image from 'next/image'
import { formatPrice } from '@/lib/utils'

interface ProductCardProps {
  id: string
  name: string
  image: string
  price: number
  originalPrice?: number
  weight: string
  discount?: number
}

export default function ProductCard({
  id,
  name,
  image,
  price,
  originalPrice,
  weight,
  discount
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full h-48 object-cover"
        />
        {discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            -{discount}%
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{weight}</p>
        
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold">৳{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through">
              ৳{formatPrice(originalPrice)}
            </span>
          )}
        </div>

        <button className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
} 