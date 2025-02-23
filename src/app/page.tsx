'use client'

import type { NextPage } from 'next'
import HeroSection from '../components/home/HeroSection'
import CategorySection from '../components/home/CategorySection'
import FlashSaleSection from '../components/home/FlashSaleSection'
import PopularProducts from '../components/home/PopularProducts'
import Testimonials from '../components/home/Testimonials'

const Home: NextPage = () => {
  return (
    <div className="space-y-12">
      <HeroSection />
      <CategorySection />
      <FlashSaleSection />
      <PopularProducts />
      <Testimonials />
    </div>
  )
}

export default Home 