"use client";

import { useEffect } from "react";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

// Sample data for upcoming events
const events = [
  { date: "2024-", venue: "Book Us!", location: "Houston" },
  { date: "2024-", venue: "Book Us!", location: "Houston" },
  { date: "2024-", venue: "Book Us!", location: "Houston" },
];

// YouTube playlists data
const playlists = [
  {
    title: "Katy Kickoff",
    description: "July 27th, 2025",
    url: "https://youtube.com/playlist?list=PL_zLdGYPOX0XPGUFWnm2KWmq6bwPSmJ4A&si=19o0z-dCs_EcKYVV",
  },
  {
    title: "Iron Horse Rock Bar",
    description: "January 11th, 2025",
    url: "https://youtube.com/playlist?list=PL_zLdGYPOX0VWISJjFHNd8ADs396wA-dl&si=O8mIyg2thouzp_0k",
  },
];

export default function Home() {
  useEffect(() => {
    // Load LightWidget script
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.head.appendChild(script);

    const checkFadeInElements = () => {
      document.querySelectorAll(".fade-in").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const buffer = el.id === "video" ? 300 : 150; // Slightly increased buffer

        // Trigger animation when element is in viewport or about to enter
        if (rect.top < windowHeight + buffer && rect.bottom > -buffer) {
          el.classList.add("fade-in-visible");
        }
      });
    };

    // Initial check immediately
    checkFadeInElements();

    window.addEventListener("scroll", checkFadeInElements);
    window.addEventListener("resize", checkFadeInElements);

    // Additional check after a short delay to catch any missed elements
    setTimeout(checkFadeInElements, 100);

    return () => {
      window.removeEventListener("scroll", checkFadeInElements);
      window.removeEventListener("resize", checkFadeInElements);
      // Clean up script if needed
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <section id="about">
        <h2>About Starfreut</h2>

        <div className="flex justify-center w-full mb-8">
          <div className="relative w-full max-w-4xl">
            <Image
              src="/images/bandpic.jpg"
              alt="Starfreut band"
              width={800}
              height={450}
              className="w-full h-auto band-image mx-auto"
            />
          </div>
        </div>
        <p>
          Welcome to Starfreut Band! We are a group of college students who met
          in an orchestra and decided to start our own rock band. We have been
          playing together for over two years and we are looking for crowds! We
          play a wide variety of genres - rock, R&B, jazz - and have played
          numerous covers. We released an album in September... check it out
          below! We are excited to share our music with you!
        </p>
      </section>

      <section id="album" className="fade-in">
        <h2>
          <a href="https://distrokid.com/hyperfollow/starfret/til-we-meet-again">
            Stream Our Latest Album!
          </a>
        </h2>
        <div className="flex justify-center w-full mb-8">
          <div className="relative w-96 h-96 max-w-lg mx-auto">
            <Image
              src="/images/albumcover.jpg"
              alt="Album cover"
              id="twmacover"
              fill
              className="object-cover album-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <h2 style={{ fontSize: "1.8rem", marginTop: "2rem" }}>
          Til We Meet Again Tracklist:
        </h2>
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
        <h2>Latest Music Video</h2>
        <div className="flex justify-center w-full mb-8">
          <div className="video-container max-w-4xl w-full">
            <iframe
              src="https://www.youtube.com/embed/aa_U9KS71Lk?si=vJl331PqjPNbPmOR"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="playlists" className="fade-in">
        <h2>YouTube Playlists</h2>
        <p>Dive deeper into our music with these curated playlists</p>
        <div className="playlist-grid">
          {playlists.map((playlist, index) => (
            <div key={index} className="playlist-card">
              <h3>{playlist.title}</h3>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  marginBottom: "1.5rem",
                }}
              >
                {playlist.description}
              </p>
              <a
                href={playlist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="playlist-btn"
              >
                Watch Playlist
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="events" className="fade-in">
        <h2>Upcoming Events</h2>
        <p>Don&apos;t miss our upcoming shows - book us for your next event!</p>
        <ul id="event-list">
          {events.map((event, index) => (
            <li key={index}>
              {event.date} - {event.venue}, {event.location}
            </li>
          ))}
        </ul>
      </section>

      <section id="instagram" className="fade-in">
        <h2>Follow Our Journey</h2>
        <p>
          Stay connected with Starfreut on Instagram for exclusive content,
          behind-the-scenes moments, and live updates!
        </p>

        {/* Instagram Feed Widget */}
        <div className="instagram-feed-container">
          <h3>Recent Posts</h3>
          <div className="instagram-widget-wrapper">
            <iframe
              src="//lightwidget.com/widgets/2ef20ba8c7bc546dbfe33f8c0570aebc.html"
              scrolling="no"
              allowTransparency={true}
              className="lightwidget-widget"
              style={{ width: "100%", border: 0, overflow: "hidden" }}
            />
          </div>
        </div>

        <div className="instagram-preview">
          <h3>What You&apos;ll Find</h3>
          <div className="preview-grid">
            <div className="preview-item">
              <div className="preview-icon">🎸</div>
              <h4>Live Performances</h4>
              <p>Watch clips from our latest shows and concerts</p>
            </div>
            <div className="preview-item">
              <div className="preview-icon">🎵</div>
              <h4>Studio Sessions</h4>
              <p>Behind-the-scenes footage from recording sessions</p>
            </div>
            <div className="preview-item">
              <div className="preview-icon">🎤</div>
              <h4>Announcements</h4>
              <p>First to know about new shows and releases</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="fade-in">
        <h2>Get In Touch</h2>
        <p>
          Ready to book us for your venue or event? Let&apos;s make some music
          together!
        </p>
        <div className="flex justify-center items-center w-full min-h-[200px]">
          <div className="w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
