import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo-white.png" 
                alt="Paragon Food" 
                width={150} 
                height={40}
              />
            </Link>
            <p className="mt-4 text-gray-400">
              Fresh food delivery service in Bangladesh. Quality you can trust.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/vegetables" className="text-gray-400 hover:text-white">Vegetables</Link></li>
              <li><Link href="/category/fruits" className="text-gray-400 hover:text-white">Fruits</Link></li>
              <li><Link href="/category/meat" className="text-gray-400 hover:text-white">Meat</Link></li>
              <li><Link href="/category/fish" className="text-gray-400 hover:text-white">Fish</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Food Street, Dhaka</li>
              <li>Phone: +880 1234-567890</li>
              <li>Email: info@paragonfood.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Paragon Food. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 