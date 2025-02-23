import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { id: 1, name: 'Vegetables', image: '/images/vegetables.jpg', slug: 'vegetables' },
  { id: 2, name: 'Fruits', image: '/images/fruits.jpg', slug: 'fruits' },
  { id: 3, name: 'Meat', image: '/images/meat.jpg', slug: 'meat' },
  { id: 4, name: 'Fish', image: '/images/fish.jpg', slug: 'fish' },
]

export default function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={`/category/${category.slug}`}
              className="group relative rounded-lg overflow-hidden"
            >
              <div className="aspect-square relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 