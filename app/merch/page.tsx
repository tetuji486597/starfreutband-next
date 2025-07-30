"use client";

import { useState } from "react";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";

// Load Stripe outside of component render to avoid recreating it on each render
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

// Merch items data
const merchItems = [
  {
    id: 1,
    name: "100% cotton StarFreüt t-shirt",
    price: 15.0,
    image: "/images/merchpreview.png",
    priceId: "price_1QHuG0GDaHReC4uNzLskmJIg",
  },
];

export default function MerchPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async (priceId: string) => {
    setIsLoading(true);

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe failed to initialize");

      // Call the API route to create a checkout session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const session = await response.json();

      // Redirect to Stripe checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(
          result.error.message || "Something went wrong with Stripe checkout"
        );
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert(
        `Error: ${
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again."
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <section id="merch" className="py-20 px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
            Our Merch
          </h2>
        </div>

        {/* Merch Items Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {merchItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-400/10 hover:-translate-y-2 w-full max-w-sm"
              >
                {/* Product Image */}
                <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden bg-gray-800/30">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-orange-400">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Buy Button */}
                  <button
                    onClick={() => handleCheckout(item.priceId)}
                    disabled={isLoading}
                    className="w-full mt-12 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-400/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      {isLoading ? (
                        <>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Buy Now</span>
                          <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
