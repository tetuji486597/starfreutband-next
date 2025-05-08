'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'

// Sample data for upcoming events
const events = [
  { date: '2024-', venue: 'Book Us!', location: 'Houston' },
  { date: '2024-', venue: 'Book Us!', location: 'Houston' },
  { date: '2024-', venue: 'Book Us!', location: 'Houston' }
]

export default function Home() {
  useEffect(() => {
    const checkFadeInElements = () => {
      document.querySelectorAll('.fade-in').forEach((el) => {
        const rect = el.getBoundingClientRect()
        const buffer = el.id === 'video' ? 1000 : 200 // Larger buffer for video section
        
        if (
          rect.top >= -buffer &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + buffer &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
          el.classList.add('fade-in-visible')
        }
      })
    }

    window.addEventListener('scroll', checkFadeInElements)
    window.addEventListener('resize', checkFadeInElements)
    
    // Initial check
    setTimeout(checkFadeInElements, 100)
    
    return () => {
      window.removeEventListener('scroll', checkFadeInElements)
      window.removeEventListener('resize', checkFadeInElements)
    }
  }, [])

  return (
    <>
      <section id="about">
        <h2>About Us</h2>
        <div className="relative w-full aspect-video max-w-3xl mx-auto">
          <Image 
            src="/images/bandpic.jpg" 
            alt="Starfreut band" 
            id="bandpic" 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <p>
          Welcome to Starfreut Band! We are a group of college students who wanted to met in an orchestra
          and decided to start our own rock band. We have been playing together for over two years and we
          are looking for crowds! We play a wide variety of genres- rock, r&b, jazz- and
          have played numerous covers. We released an album in September... check it out below!
          We are excited to share our music with you!
        </p>
      </section>

      <section id="album">
        <h2>
          <a href="https://distrokid.com/hyperfollow/starfret/til-we-meet-again">
            Stream our latest album!
          </a>
        </h2>
        <div className="relative w-full aspect-square max-w-md mx-auto">
          <Image 
            src="/images/albumcover.jpg" 
            alt="Album cover" 
            id="twmacover"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h2>Til We Meet Again tracklist:</h2>
        <ul>
          <li>No Favors</li>
          <li>Talk About It</li>
          <li>Maybes</li>
          <li>Livin&apos; In The Blues (Interlude)</li>
          <li>Fwd: my heart</li>
          <li>Flowers on the Far Side</li>
          <li>The Boy</li>
          <li>Along The Way</li>
        </ul>
      </section>

      <section id="video" className="fade-in">
        <h2>Check Out Our Latest Music Video!</h2>
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/aa_U9KS71Lk?si=vJl331PqjPNbPmOR" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="w-full aspect-video max-w-3xl mx-auto"
          />
        </div>
      </section>

      <section id="events" className="fade-in">
        <h2>Upcoming Events</h2>
        <ul id="event-list">
          {events.map((event, index) => (
            <li key={index}>
              {event.date} - {event.venue}, {event.location}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="fade-in">
        <h2>Contact Us</h2>
        <ContactForm />
      </section>
    </>
  )
} 