'use client'

import { useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What makes your products different from competitors?",
    answer: "Our products are crafted with premium materials and innovative design principles. We focus on user experience, durability, and cutting-edge technology to deliver exceptional value that stands out in the market."
  },
  {
    id: 2,
    question: "Do you offer international shipping?",
    answer: "Yes, we offer worldwide shipping to over 50 countries. Shipping costs and delivery times vary by location. Free shipping is available for orders over $100 within the continental US."
  },
  {
    id: 3,
    question: "What is your return and refund policy?",
    answer: "We offer a 30-day money-back guarantee on all products. Items must be returned in original condition with all packaging. Refunds are processed within 5-7 business days after we receive your return."
  },
  {
    id: 4,
    question: "How long does delivery typically take?",
    answer: "Standard delivery takes 3-5 business days within the US, 7-14 days internationally. Express shipping options are available for faster delivery. You'll receive tracking information once your order ships."
  },
  {
    id: 5,
    question: "Do you provide technical support for your products?",
    answer: "Absolutely! We provide 24/7 technical support through multiple channels including live chat, email, and phone. Our expert team is always ready to help you get the most out of your purchase."
  },
  {
    id: 6,
    question: "Are your products covered by warranty?",
    answer: "Yes, all our products come with a comprehensive warranty. Electronics have a 2-year warranty, accessories have a 1-year warranty. Extended warranty options are available at checkout."
  }
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                aria-expanded={openItems.includes(item.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className={`flex-shrink-0 transform transition-transform duration-300 ${
                  openItems.includes(item.id) ? 'rotate-45' : 'rotate-0'
                }`}>
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </button>

              {/* Answer Content */}
              <div className={`faq-content ${openItems.includes(item.id) ? 'expanded' : ''}`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors btn-hover">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}