# Starfreut Band Website

This is the official website for Starfreut Band, built with Next.js and hosted on Vercel.

## Features

- Responsive design for all devices
- Home page with band information and upcoming events
- Music page showcasing the band's tracks and albums
- Merchandise shop with Stripe payment integration
- Contact form using Formspree

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Copy the `.env.local.example` file to `.env.local` and fill in your environment variables:

   ```
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   NEXT_PUBLIC_FORMSPREE_FORM_ID=your_formspree_form_id
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js).

1. Push your code to a GitHub repository
2. Import your project into Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy

## Project Structure

- `app/` - Next.js App Router pages and API routes
- `components/` - Reusable React components
- `public/` - Static assets like images and fonts

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Stripe](https://stripe.com/) - Payment processing
- [Formspree](https://formspree.io/) - Form handling
