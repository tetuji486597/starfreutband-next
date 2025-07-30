import Image from "next/image";

export default function MusicPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 space-y-16">
      {/* Music Section */}
      <section className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-12">
          Songs we have played in the past:
        </h2>
        <div className="w-full max-w-2xl">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/1ZjZ91wrcM2gR5kDJ8KwJS?utm_source=generator&theme=0"
            width="100%"
            height="500"
            frameBorder={0}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      {/* Album Section */}
      <section className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-8">
          <a
            href="https://distrokid.com/hyperfollow/starfret/til-we-meet-again"
            className="text-blue-600 hover:underline transition-colors"
          >
            Stream our latest album!
          </a>
        </h2>

        <div className="flex flex-col items-center space-y-8">
          <div className="relative w-80 h-80">
            <Image
              src="/images/albumcover.jpg"
              alt="Album cover"
              id="twmacover"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="320px"
            />
          </div>

          <div className="w-full max-w-md">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Til We Meet Again tracklist:
            </h3>
            <ul className="space-y-3">
              <li className="bg-white/5 py-3 px-6 rounded-lg border border-white/10 text-center font-medium">
                No Favors
              </li>
              <li className="bg-white/5 py-3 px-6 rounded-lg border border-white/10 text-center font-medium">
                Talk About It
              </li>
              <li className="bg-white/5 py-3 px-6 rounded-lg border border-white/10 text-center font-medium">
                Maybes
              </li>
              <li className="bg-white/5 py-3 px-6 rounded-lg border border-white/10 text-center font-medium">
                Livin&apos; In The Blues (Interlude)
              </li>
              <li className="bg-white/5 py-3 px-6 rounded-lg border border-white/10 text-center font-medium">
                Fwd: my heart
              </li>
              <li className="bg-white/5 py-3 px-6 rounded-lg border border-white/10 text-center font-medium">
                Flowers on the Far Side
              </li>
              <li className="bg-white/5 py-3 px-6 rounded-lg border border-white/10 text-center font-medium">
                The Boy
              </li>
              <li className="bg-white/5 py-3 px-6 rounded-lg border border-white/10 text-center font-medium">
                Along The Way
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
