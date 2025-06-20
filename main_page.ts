'use client'

import { useEffect } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProductsSection from '@/components/ProductsSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // GSAP page reveal animation
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-slide-up')
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('opacity-100', 'translate-y-0')
        }, index * 100)
      })
    }, 2100) // After loading screen

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Header />
      <HeroSection />
      <ProductsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}