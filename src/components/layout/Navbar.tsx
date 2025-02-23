"use client"
import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/contexts/ThemeContext'
import { 
  Bars3Icon, 
  XMarkIcon, 
  ShoppingCartIcon, 
  UserIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  PhoneIcon,
  MapPinIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon
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

const locations = [
  { 
    name: 'Dhaka', 
    value: 'dhaka',
    areas: ['Gulshan', 'Banani', 'Dhanmondi', 'Uttara', 'Mirpur', 'Mohammadpur', 'Bashundhara']
  },
  { 
    name: 'Chittagong', 
    value: 'chittagong',
    areas: ['Agrabad', 'Nasirabad', 'GEC Circle', 'Halishahar', 'Khulshi', 'Panchlaish']
  },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-light-bg dark:bg-dark-bg transition-colors duration-200">
      {/* Top Bar */}
      <div className="bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-600 dark:text-dark-text">
                <PhoneIcon className="h-4 w-4 mr-1" />
                <span>+880 1234-567890</span>
              </div>

              {/* Location Selector */}
              <Menu as="div" className="relative">
                <Menu.Button 
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-primary/5 dark:bg-primary/10 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors group"
                >
                  <MapPinIcon className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Deliver to</p>
                    <p className="font-medium text-gray-900 dark:text-white flex items-center">
                      {selectedLocation.name}
                      <ChevronDownIcon 
                        className={clsx(
                          "h-4 w-4 ml-1 text-gray-400 transition-transform duration-200",
                          isLocationOpen ? "rotate-180" : ""
                        )}
                      />
                    </p>
                  </div>
                </Menu.Button>

                <Transition
                  show={isLocationOpen}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Menu.Items 
                    static
                    className="fixed left-0 right-0 mt-2 mx-4 sm:mx-auto sm:max-w-lg bg-white dark:bg-dark-card shadow-xl border border-light-border dark:border-dark-border rounded-xl focus:outline-none z-50"
                  >
                    <div className="p-2">
                      <div className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                        Select your delivery location
                      </div>
                      {locations.map((location) => (
                        <Menu.Item key={location.value}>
                          {({ active }) => (
                            <div className="overflow-hidden rounded-lg mb-1">
                              <button
                                onClick={() => {
                                  setSelectedLocation(location)
                                  setIsLocationOpen(false)
                                }}
                                className={clsx(
                                  'w-full text-left px-4 py-3 text-sm',
                                  active ? 'bg-light-hover dark:bg-dark-hover' : '',
                                  selectedLocation.value === location.value 
                                    ? 'bg-primary/5 dark:bg-primary/10' 
                                    : ''
                                )}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <div className={clsx(
                                      "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                                      selectedLocation.value === location.value 
                                        ? 'bg-primary/10 text-primary' 
                                        : 'bg-gray-100 dark:bg-dark-hover text-gray-500'
                                    )}>
                                      <MapPinIcon className="h-5 w-5" />
                                    </div>
                                    <div>
                                      <p className={clsx(
                                        "font-medium",
                                        selectedLocation.value === location.value 
                                          ? 'text-primary' 
                                          : 'text-gray-900 dark:text-white'
                                      )}>
                                        {location.name}
                                      </p>
                                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                        {location.areas.length} areas available
                                      </p>
                                    </div>
                                  </div>
                                  {selectedLocation.value === location.value && (
                                    <span className="text-primary">✓</span>
                                  )}
                                </div>
                              </button>
                              {location.areas && selectedLocation.value === location.value && (
                                <div className="px-4 py-3 bg-light-hover dark:bg-dark-hover">
                                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                                    Available delivery areas:
                                  </div>
                                  <div className="grid grid-cols-2 gap-2">
                                    {location.areas.map((area) => (
                                      <div 
                                        key={area} 
                                        className="text-xs text-gray-600 dark:text-gray-300 flex items-center"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                        {area}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            {/* Theme Toggle and Links */}
            <div className="flex items-center space-x-6">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-primary dark:hover:border-primary transition-colors"
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5 text-primary" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-primary" />
                )}
              </button>
              <Link href="/help" className="text-gray-600 dark:text-dark-text hover:text-primary dark:hover:text-primary">
                Help
              </Link>
              <Link href="/track" className="text-gray-600 dark:text-dark-text hover:text-primary dark:hover:text-primary">
                Track Order
              </Link>
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
    </div>
  )
} 