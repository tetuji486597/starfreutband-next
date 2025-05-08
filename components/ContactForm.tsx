'use client'

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID as string)
  const [message, setMessage] = useState('')
  const [messageColor, setMessageColor] = useState('')

  if (state.succeeded) {
    return <p className="text-green-600">Thank you for your message!</p>
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          className="w-full p-2 border rounded"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="w-full p-2 border rounded"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">Message:</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          className="w-full p-2 border rounded h-32"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      
      <button 
        type="submit" 
        disabled={state.submitting}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {state.submitting ? 'Sending...' : 'Send'}
      </button>
      
      {message && <p className={messageColor}>{message}</p>}
      <ValidationError errors={state.errors} />
    </form>
  )
} 