import ProductCard from '../shared/ProductCard'

const flashSaleProducts = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    image: '/images/tomatoes.jpg',
    price: 80,
    originalPrice: 100,
    weight: '1 kg',
    discount: 20
  },
  {
    id: '2',
    name: 'Organic Carrots',
    image: '/images/carrots.jpg',
    price: 60,
    originalPrice: 75,
    weight: '1 kg',
    discount: 20
  },
  // Add more products as needed
]

export default function FlashSaleSection() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Flash Sale</h2>
          <div className="flex gap-4 text-xl font-semibold">
            <span>Ends in:</span>
            <span className="text-primary">23:59:59</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
} 