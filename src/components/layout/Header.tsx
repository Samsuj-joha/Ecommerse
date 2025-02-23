import Link from 'next/link'
import Image from 'next/image'
import CartWidget from '../shared/CartWidget'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <Navbar />
    </header>
  )
} 