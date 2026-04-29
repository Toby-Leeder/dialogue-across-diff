import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 py-16">
      <header className="border-b border-zinc-200 pb-8">
        <h1 className="font-serif text-4xl font-bold text-zinc-900">About Us</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Mapping the landscape of disagreement and finding understanding.
        </p>
      </header>

      <div className="space-y-20">
      {/* Section 1: What is Bridging */}
        <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 space-y-6 lg:order-1">
            <h2 className="font-serif text-3xl font-bold text-zinc-900">What is "Bridging"?</h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-600">
              <p>
                At its core, "bridging" is the deliberate practice of building social connections and rapport across the ideological, cultural, or social cleavages that typically divide society. Drawing upon the foundational frameworks developed by UC Berkeley’s Othering & Belonging Institute, we understand bridging not merely as bringing disparate groups into contact, but as a concerted effort to cultivate mutual respect across boundaries of difference.
              </p>
              <p>
                The heart of bridging lies in active, empathetic listening. It requires hearing another person's story not with the intent to confirm facts, debate, or persuade, but rather to affirm their shared humanity. Bridging centers narratives over zero-sum competition, acknowledging that individuals can validate each other's identities and fundamental worth even in the midst of profound and sustained disagreement. It does not demand the erasure of difference; instead, it provides a structured capacity to hold space for compassion and common ground.
              </p>
            </div>
            
            {/* Call to Action Button */}
            <div className="pt-2">
              <a 
                href="https://belonging.berkeley.edu/practice-bridging" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition-all hover:border-zinc-900 hover:shadow-sm"
              >
                Learn more at the Othering & Belonging Institute
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            {/* Updated Image Component */}
            <div className="relative flex aspect-[4/3] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
              <Image 
                src="/assets/images/grouptalking.png" 
                alt="Two individuals engaged in active listening" 
                fill
                className="object-cover"
              />
            </div>
          </div>        
          </section>
        
        {/* Section 2: The Fellowship */}
        <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-1 md:order-2">
            {/* Updated Image Component */}
            <div className="relative flex aspect-video w-full overflow-hidden bg-zinc-100 border border-zinc-200">
              <Image 
                src="/assets/images/UCBerkeleyCampus.jpg" 
                alt="UC Berkeley" 
                fill
                className="object-cover"
              />
            </div>
          </div>          <div className="order-2 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-zinc-900">The Berkeley Bridging Fellowship</h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-600">
              <p>
                The Berkeley Bridging Fellowship is a rigorous, year-long academic and experiential program designed to equip students with the theoretical frameworks and practical skills necessary to navigate complex societal divides.
              </p>
              <p>
                Throughout the academic year, fellows engage with a variety of leading experts—ranging from sociologists and conflict resolution practitioners to community leaders. By prioritizing listening over persuading, the fellowship challenges students to critically examine the mechanisms of polarization. The culmination of the fellowship requires participants to synthesize their academic learning and practical training into comprehensive capstone projects that contribute meaningfully to public discourse.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: About This Website */}
        <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 space-y-6 lg:order-1">
            <h2 className="font-serif text-3xl font-bold text-zinc-900">About This Website</h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-600">
              <p>
                <strong className="font-semibold text-zinc-900">Dialogue Across Differences</strong> is itself a capstone project born out of the Berkeley Bridging Fellowship. Designed to act as a digital commons for civic engagement, this website was created to host a diverse array of capstone projects produced by the fellowship cohort.
              </p>
              <p>
                Ranging from data-driven research to narrative journalism, the multi-disciplinary projects featured on this platform are unified by a singular academic and social imperative: to bridge divides, reduce polarization, and foster a culture of enduring belonging.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            {/* Updated Image Component */}
            <div className="relative flex aspect-video w-full overflow-hidden bg-zinc-100 border border-zinc-200">
              <Image 
                src="/images/discussion-circle.jpg" 
                alt="Students engaging in a discussion circle" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}