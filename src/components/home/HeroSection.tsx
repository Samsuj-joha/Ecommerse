import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Fresh food delivery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative container mx-auto h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Fresh Food Delivered To Your Doorstep
          </h1>
          <p className="text-xl mb-8">
            Get fresh, high-quality food delivered directly to your home. Order now and enjoy our special offers!
          </p>
          <Link 
            href="/products" 
            className="bg-primary hover:bg-primary-dark px-8 py-3 rounded-full text-lg font-semibold transition inline-block"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
} 