export interface Product {
  id: string
  name: string
  image: string
  price: number
  originalPrice?: number
  weight: string
  discount?: number
  description?: string
  category?: string
}

export interface Category {
  id: number
  name: string
  image: string
  slug: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  text: string
} 