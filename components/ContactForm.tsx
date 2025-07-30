"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID as string
  );
  const [message] = useState("");
  const [messageColor] = useState("");

  if (state.succeeded) {
    return (
      <div className="contact-success max-w-lg mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3>Message Sent!</h3>
          <p>
            Thank you for reaching out! We'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="contact-grid">
          <div>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your@email.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-400 text-sm mt-1 font-medium"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Event booking, collaboration, or just say hi!"
          />
        </div>

        <div>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your venue, event details, or what kind of collaboration you have in mind..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-400 text-sm mt-1 font-medium"
          />
        </div>

        <div className="pt-4">
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <svg
                  className="w-5 h-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>

        {message && <p className={messageColor}>{message}</p>}
        <ValidationError
          errors={state.errors}
          className="text-red-400 text-sm font-medium"
        />
      </form>

      <div className="contact-info">
        <p>Or reach out to us directly:</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            fontSize: "0.875rem",
          }}
        >
          <a href="mailto:contact@starfreut.com">📧 Email Us</a>
          <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>•</span>
          <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            📍 Houston, TX
          </span>
        </div>
      </div>
    </div>
  );
}
