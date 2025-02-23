import ProductCard from '../shared/ProductCard'

const popularProducts = [
  {
    id: '1',
    name: 'Fresh Chicken',
    image: '/images/chicken.jpg',
    price: 220,
    weight: '1 kg',
  },
  {
    id: '2',
    name: 'Farm Fresh Eggs',
    image: '/images/eggs.jpg',
    price: 120,
    weight: '12 pcs',
  },
  // Add more products as needed
]

export default function PopularProducts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
} 