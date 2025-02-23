"use client"
import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { 
  Bars3Icon, 
  XMarkIcon, 
  ShoppingCartIcon, 
  UserIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  { name: 'Vegetables', href: '/products/vegetables', image: '/images/categories/vegetables.jpg' },
  { name: 'Fruits', href: '/products/fruits', image: '/images/categories/fruits.jpg' },
  { name: 'Meat', href: '/products/meat', image: '/images/categories/meat.jpg' },
  { name: 'Fish', href: '/products/fish', image: '/images/categories/fish.jpg' },
  { name: 'Dairy', href: '/products/dairy', image: '/images/categories/dairy.jpg' },
  { name: 'Bakery', href: '/products/bakery', image: '/images/categories/bakery.jpg' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-4 text-gray-500">
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-1" />
                <span>+880 1234-567890</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-500">
              <Link href="/help" className="hover:text-primary transition-colors">Help</Link>
              <Link href="/track" className="hover:text-primary transition-colors">Track Order</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={clsx(
        "sticky top-0 z-50 bg-white transition-all duration-300",
        isScrolled && "shadow-md"
      )}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Paragon Food"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/" 
                className={clsx(
                  "text-sm font-medium transition-colors",
                  pathname === "/" ? "text-primary" : "text-gray-700 hover:text-primary"
                )}
              >
                Home
              </Link>
              <Menu as="div" className="relative">
                <Menu.Button className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                  Categories
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="absolute top-full left-0 w-[480px] bg-white rounded-lg shadow-xl border border-gray-100 p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {categories.map((category) => (
                        <Menu.Item key={category.name}>
                          <Link 
                            href={category.href}
                            className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <Image
                              src={category.image}
                              alt={category.name}
                              width={60}
                              height={60}
                              className="rounded-lg"
                            />
                            <span className="ml-3 text-sm font-medium text-gray-700">
                              {category.name}
                            </span>
                          </Link>
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Link 
                href="/offers" 
                className={clsx(
                  "text-sm font-medium transition-colors",
                  pathname === "/offers" ? "text-primary" : "text-gray-700 hover:text-primary"
                )}
              >
                Today's Offers
              </Link>
              <Link 
                href="/flash-sale" 
                className={clsx(
                  "text-sm font-medium transition-colors",
                  pathname === "/flash-sale" ? "text-primary" : "text-gray-700 hover:text-primary"
                )}
              >
                Flash Sale
              </Link>
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-6">
              <div className="relative hidden lg:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-[300px] pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary text-sm"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              <Link href="/wishlist" className="relative text-gray-700 hover:text-primary transition-colors">
                <HeartIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </Link>

              <Link href="/cart" className="relative text-gray-700 hover:text-primary transition-colors">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>

              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                  <UserIcon className="h-6 w-6" />
                  <span className="text-sm font-medium">Account</span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/profile"
                          className={clsx(
                            "block px-4 py-2 text-sm",
                            active ? "bg-gray-50 text-primary" : "text-gray-700"
                          )}
                        >
                          Your Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/orders"
                          className={clsx(
                            "block px-4 py-2 text-sm",
                            active ? "bg-gray-50 text-primary" : "text-gray-700"
                          )}
                        >
                          Orders
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={clsx(
                            "block w-full text-left px-4 py-2 text-sm",
                            active ? "bg-gray-50 text-primary" : "text-gray-700"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </>
  )
} 