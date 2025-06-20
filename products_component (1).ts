'use client'

import { useState, useRef } from 'react'

interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
  rating: number
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Headphones",
    price: "$299",
    image: "/api/placeholder/300/300",
    category: "Audio",
    rating: 4.8
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: "$399",
    image: "/api/placeholder/300/300",
    category: "Wearables",
    rating: 4.9
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: "$199",
    image: "/api/placeholder/300/300",
    category: "Audio",
    rating: 4.7
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: "$89",
    image: "/api/placeholder/300/300",
    category: "Accessories",
    rating: 4.6
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: "$79",
    image: "/api/placeholder/300/300",
    category: "Gaming",
    rating: 4.8
  }
]

export default function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return itemsPerView.mobile
      if (window.innerWidth < 1024) return itemsPerView.tablet
      return itemsPerView.desktop
    }
    return itemsPerView.desktop
  }

  const nextSlide = () => {
    const itemsVisible = getItemsPerView()
    const maxIndex = Math.max(0, products.length - itemsVisible)
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    const itemsVisible = getItemsPerView()
    const maxIndex = Math.max(0, products.length - itemsVisible)
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1))
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section id="products" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Best Selling Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items that customers love and trust
          </p>
        </div>

        {/* Products Container */}
        <div className="relative">
          {/* Navigation Buttons - Mobile & Tablet */}
          <div className="flex justify-between items-center mb-6 lg:hidden">
            <button
              onClick={prevSlide}
              className="carousel-btn p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 touch-target"
              aria-label="Previous products"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(products.length / getItemsPerView()) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === Math.floor(currentIndex / getItemsPerView()) ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="carousel-btn p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 touch-target"
              aria-label="Next products"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Products Grid */}
          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className="flex transition-transform duration-500 ease-in-out lg:grid lg:grid-cols-3 lg:gap-8 lg:transform-none"
              style={{
                transform: `translateX(-${currentIndex * (100 / getItemsPerView())}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-auto px-2 lg:px-0"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-6xl text-gray-400">📱</div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex mr-2">
                          {renderStars(product.rating)}
                        </div>
                        <span className="text-sm text-gray-600">({product.rating})</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary-600">
                          {product.price}
                        </span>
                        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors btn-hover">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center mt-8">
            <button
              onClick={prevSlide}
              className="carousel-btn p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 mr-4"
              aria-label="Previous products"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="carousel-btn p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200"
              aria-label="Next products"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 btn-hover">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}