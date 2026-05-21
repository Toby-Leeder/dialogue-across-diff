import Image from "next/image";

export const metadata = {
  title: "The Berkeley Bridging Fellowship",
};

export default function BerkeleyBridgingFellowshipPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 py-16">
      <div className="space-y-8">
        <h1 className="border-b border-zinc-200 pb-6 font-serif text-3xl font-bold text-zinc-900">
          The Berkeley Bridging Fellowship
        </h1>
        <section className="flex flex-col gap-12 xl:grid xl:grid-cols-2 xl:items-stretch xl:gap-x-14 xl:gap-y-10">
          <div className="order-2 flex min-w-0 flex-col gap-6 xl:order-1">
            <div className="relative flex aspect-video w-full overflow-hidden rounded-sm border border-zinc-200 bg-zinc-100">
              <Image
                src="/assets/images/UCBerkeleyCampus.jpg"
                alt="UC Berkeley"
                fill
                className="object-cover"
                sizes="(max-width: 1279px) 100vw, 50vw"
              />
            </div>
            <div className="max-w-prose space-y-6 leading-relaxed">
              <p className="text-base text-zinc-600">
                The program brings together a diverse cohort of students with varied cultural, political, and personal connections to the region. Through sessions with faculty, guest experts, and experienced facilitators, fellows deepen their understanding of the history, politics, cultures, and contemporary realities of Israel and Palestine while developing practical skills for listening, reflection, and conversation across differences.
              </p>
              <p className="text-base text-zinc-600">
                Rather than requiring a shared ideology or predetermined perspective, the fellowship emphasizes humility, empathy, and the capacity to engage difficult conversations with care. Fellows participate in mandatory meetings and retreats, complete readings and reflections, and ultimately apply their learning through direct engagement with campus leaders and a capstone initiative designed to foster better conversations within or across communities.
              </p>
            </div>
          </div>

          <div className="order-1 flex min-w-0 flex-col gap-6 xl:order-2 xl:h-full xl:min-h-0">
            <div className="max-w-prose shrink-0 leading-relaxed">
              <p className="text-lg text-zinc-700">
                The Berkeley Bridging Fellowship is a year-long academic and experiential program designed to bring the practice of bridging to UC Berkeley students, specifically surrounding Israel and Palestine. Fellows engage across both fall and spring semesters through facilitated dialogue, academic learning, reflection, arts and culture, and community-building practices.               </p>
            </div>
            <div className="flex min-h-0 flex-col justify-center xl:min-h-0 xl:flex-1">
              <div className="relative flex aspect-video w-full overflow-hidden rounded-sm border border-zinc-200 bg-zinc-100">
                <Image
                  src="/assets/images/bridging_thumbnail.jpg"
                  alt="Berkeley Bridging Fellowship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1279px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="flex w-full justify-center pt-6">
          <a
            href="https://curricularconnections.berkeley.edu/berkeley-bridging-fellowship-program/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition-all hover:border-zinc-900 hover:shadow-sm"
          >
            Learn more about the Berkeley Bridging Fellowship
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
