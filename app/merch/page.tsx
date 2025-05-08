'use client'

import { useState } from 'react'
import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js'

// Load Stripe outside of component render to avoid recreating it on each render
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

// Merch items data
const merchItems = [
  {
    id: 1,
    name: 'freut-a-licious unisex tee',
    price: 20.00,
    image: '/images/merchpreview.png',
    priceId: 'price_1QHuG0GDaHReC4uNzLskmJIg'
  }
]

export default function MerchPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async (priceId: string) => {
    setIsLoading(true)

    try {
      const stripe = await stripePromise
      if (!stripe) throw new Error('Stripe failed to initialize')

      // Call the API route to create a checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Server error: ${response.status}`)
      }

      const session = await response.json()
      
      // Redirect to Stripe checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      })

      if (result.error) {
        throw new Error(result.error.message || 'Something went wrong with Stripe checkout')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert(`Error: ${error instanceof Error ? error.message : 'Something went wrong. Please try again.'}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="merch" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Merch</h2>
      
      <div className="merch-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {merchItems.map(item => (
          <div key={item.id} className="merch-item flex flex-col items-center">
            <div className="relative w-full aspect-square mb-4">
              <Image 
                src={item.image} 
                alt={item.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="mb-4">${item.price.toFixed(2)}</p>
            <button 
              onClick={() => handleCheckout(item.priceId)}
              disabled={isLoading}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {isLoading ? 'Processing...' : 'Buy Now'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
} 