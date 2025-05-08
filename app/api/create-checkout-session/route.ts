import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Initialize Stripe without specifying API version to use default
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { priceId } = body

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      )
    }

    const origin = request.headers.get('origin') || 'https://starfreut.com'
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success`,
      cancel_url: `${origin}/merch`,
    })

    return NextResponse.json({ id: session.id })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'An unknown error occurred',
        type: error instanceof Stripe.errors.StripeError ? error.type : 'unknown',
        code: error instanceof Stripe.errors.StripeError ? error.code : 'unknown'
      },
      { status: 500 }
    )
  }
} 