import Image from 'next/image'

export default function MusicPage() {
  return (
    <>
      <section id="music" className="py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Songs we have played in the past:</h2>
        <ul className="max-w-2xl mx-auto space-y-2 px-4 list-disc pl-6">
          <li>Japanese Denim by Daniel Caesar</li>
          <li>Don&apos;t Think It Over by Her&apos;s</li>
          <li>In The Meantime by Spacehog</li>
          <li>Sweater Weather by The Neighbourhood</li>
          <li>Superstition by Stevie Wonder</li>
          <li>Rosanna by TOTO</li>
          <li>Just the Two of Us by Grover Washington Jr</li>
          <li>What a Fool Believes by The Doobie Brothers</li>
          <li>Where Is My Mind by The Pixies</li>
          <li>Mind Over Matter by Young The Giant</li>
          <li>Always by Daniel Caesar</li>
          <li>This Side of Paradise by Coyote Theory</li>
          <li>...and much more!</li>
        </ul>
      </section>
      
      <section id="album" className="py-10">
        <h2 className="text-3xl font-bold text-center mb-4">
          <a 
            href="https://distrokid.com/hyperfollow/starfret/til-we-meet-again" 
            className="text-blue-600 hover:underline"
          >
            Stream our latest album!
          </a>
        </h2>
        <div className="relative w-full aspect-square max-w-md mx-auto mb-8">
          <Image 
            src="/images/albumcover.jpg" 
            alt="Album cover" 
            id="twmacover"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">Til We Meet Again tracklist:</h2>
        <ul className="max-w-md mx-auto space-y-2 px-4 list-disc pl-6">
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
    </>
  )
} 