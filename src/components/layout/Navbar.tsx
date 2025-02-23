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
  InformationCircleIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Shop', 
    href: '/products',
    submenu: [
      { name: 'All Products', href: '/products' },
      { name: 'Vegetables', href: '/products/vegetables' },
      { name: 'Fruits', href: '/products/fruits' },
      { name: 'Meat', href: '/products/meat' },
      { name: 'Fish', href: '/products/fish' },
    ]
  },
  { name: "Today's Offer", href: '/offers' },
  { name: 'Flash Sale', href: '/flash-sale' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

// Add these animation keyframes at the top of the file
const slideDown = {
  enter: "animate-[slide-down_0.3s_ease-out]",
  leave: "animate-[slide-up_0.2s_ease-in]"
}

const fadeScale = {
  enter: "animate-[fade-in_0.2s_ease-out]",
  leave: "animate-[fade-out_0.15s_ease-in]"
}

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Animated Top Banner */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-primary text-white py-2 text-center text-sm"
      >
        <p>Free delivery on orders over ৳1000 | Get 10% off on your first order</p>
      </motion.div>

      <Disclosure as="nav" className={clsx(
        "sticky top-0 z-50 bg-white transition-all duration-500",
        isScrolled ? "shadow-md" : ""
      )}>
        {({ open }) => (
          <>
            {/* Top Bar */}
            <div className="hidden lg:block bg-gray-50 py-2">
              <div className="container mx-auto flex justify-between items-center text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-600">
                    <PhoneIcon className="h-4 w-4 mr-1" />
                    <span>+880 1234-567890</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ChatBubbleLeftIcon className="h-4 w-4 mr-1" />
                    <span>info@paragonfood.com</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <Link href="/track-order" className="hover:text-primary">Track Order</Link>
                  <Link href="/faq" className="hover:text-primary">FAQ</Link>
                  <Link href="/help" className="hover:text-primary">Help</Link>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 items-center justify-between">
                {/* Logo */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex-shrink-0"
                >
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/images/logo.png"
                      alt="Paragon Food"
                      width={140}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:space-x-8">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative group">
                      <Link
                        href={item.href}
                        className={clsx(
                          "relative px-3 py-2 text-sm font-medium transition-colors group",
                          isActive(item.href)
                            ? "text-primary"
                            : "text-gray-700 hover:text-primary"
                        )}
                        onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                        onMouseLeave={() => setActiveSubmenu(null)}
                      >
                        {item.name}
                        <motion.span 
                          className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isActive(item.href) ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      </Link>
                      {item.submenu && activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 mt-1"
                          onMouseEnter={() => setActiveSubmenu(item.name)}
                          onMouseLeave={() => setActiveSubmenu(null)}
                        >
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className={clsx(
                                "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary",
                                isActive(subitem.href) && "text-primary bg-primary-50"
                              )}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Side Icons */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-6"
                >
                  {/* Search */}
                  <div className="relative">
                    <button
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                      className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-primary transition-colors"
                    >
                      <MagnifyingGlassIcon className="h-6 w-6" />
                    </button>
                    
                    {isSearchOpen && (
                      <div className="absolute right-0 mt-2 w-96 rounded-xl bg-white p-4 shadow-xl border border-gray-100 animate-[fade-in_0.2s_ease-out]">
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                          <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full px-4 py-3 bg-transparent outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          />
                          <button className="px-4 py-3 text-gray-500 hover:text-primary transition-all duration-300 hover:scale-110">
                            <MagnifyingGlassIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Wishlist */}
                  <Link
                    href="/wishlist"
                    className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    <HeartIcon className="h-6 w-6" />
                  </Link>

                  {/* Cart */}
                  <Link
                    href="/cart"
                    className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    <ShoppingCartIcon className="h-6 w-6" />
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center animate-[bounce_1s_ease-in-out_infinite]">
                      2
                    </span>
                  </Link>

                  {/* User Menu */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-primary transition-colors">
                      <UserIcon className="h-6 w-6" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200 transform"
                      enterFrom="opacity-0 scale-95 -translate-y-2"
                      enterTo="opacity-100 scale-100 translate-y-0"
                      leave="transition ease-in duration-150 transform"
                      leaveFrom="opacity-100 scale-100 translate-y-0"
                      leaveTo="opacity-0 scale-95 -translate-y-2"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl bg-white py-2 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm">Signed in as</p>
                          <p className="text-sm font-medium text-gray-900 truncate">user@example.com</p>
                        </div>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/profile"
                              className={clsx(
                                active ? 'bg-gray-50 text-primary' : 'text-gray-700',
                                'block px-4 py-2 text-sm transition-colors'
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
                                active ? 'bg-gray-50 text-primary' : 'text-gray-700',
                                'block px-4 py-2 text-sm transition-colors'
                              )}
                            >
                              Orders
                            </Link>
                          )}
                        </Menu.Item>
                        <div className="border-t border-gray-100 mt-2">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={clsx(
                                  active ? 'bg-gray-50 text-red-600' : 'text-gray-700',
                                  'block w-full px-4 py-2 text-left text-sm transition-colors'
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  {/* Mobile menu button */}
                  <div className="flex items-center lg:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-primary transition-colors">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Mobile menu */}
            <Transition
              as={Fragment}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="lg:hidden">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-1 px-4 pb-3 pt-2"
                >
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Disclosure.Button
                        as={Link}
                        href={item.href}
                        className={clsx(
                          "block rounded-lg px-3 py-2 text-base font-medium transition-all duration-300",
                          isActive(item.href)
                            ? 'bg-primary-50 text-primary'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-primary hover:translate-x-2'
                        )}
                      >
                        {item.name}
                      </Disclosure.Button>
                    </motion.div>
                  ))}
                </motion.div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  )
} 