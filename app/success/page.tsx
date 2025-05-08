import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Thank You for Your Purchase!</h1>
      <p className="text-lg mb-8 text-center max-w-md">
        Your order has been successfully processed. You will receive an email confirmation shortly.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Return Home
        </Link>
        <Link href="/merch" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
          Shop More
        </Link>
      </div>
    </div>
  )
} 