import Link from 'next/link'

export default function CapstoneProjectPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white px-6 pb-20 pt-24 font-sans text-zinc-900 md:px-10">
      
      <main className="mt-0">
        {/* Hero Section */}
        <header className="mb-12 border-b border-zinc-200 pb-10">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
            Capstone Project &middot; Research
          </p>
          <h1 className="mb-4 text-3xl font-medium tracking-tight text-zinc-900 md:text-4xl">
            When Dialogue Feels Impossible
          </h1>
          <p className="mb-7 max-w-2xl text-[15px] leading-relaxed text-zinc-600">
            A qualitative study of why UC Berkeley students avoid cross-ideological conversations about the Israel-Palestine conflict, and what it would take to change that.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
            <span className="font-medium text-zinc-600">Jack Haleem</span>
            <span>&middot;</span>
            <span>BBF Fellow, Spring 2026</span>
            <span>&middot;</span>
            <span>5 interviews</span>
            <span>&middot;</span>
            <span>May 2026</span>
          </div>
        </header>

        {/* Introduction */}
        <div className="space-y-5 text-[14px] leading-relaxed text-zinc-700">
          <p>
            UC Berkeley is an optimal place to study cross-ideological dialogue due to its culture of student activism, politically engaged population, and emphasis on promoting identity and individualism. Since October 7th, 2023, the Israel-Palestine conflict has become one of the most emotionally and morally charged issues on campus, and has developed into a social psychology issue worth studying. Protests have spread across higher learning institutions nationwide, including at UC Berkeley, and the university administration's response, along with debates over free speech, safety, and whose pain is most valid, have become additional categories of conflict.
          </p>
          <p>
            Even with all the visible political activity, many students I spoke with described feeling that genuine conversations on the topic have become scarcer and more difficult. People talk about the Israel-Palestine conflict more, but not in a way that builds and unites the community at UC Berkeley. This project tries to understand why that is.
          </p>
        </div>

        {/* Pullquotes */}
        <div className="my-8 border-l-2 border-zinc-900 py-1 pl-5">
          <p className="mb-2 text-base leading-relaxed text-zinc-900">
            "If you come into something expecting to prove why someone's wrong, you're never gonna understand why they think they're right, and thereby you're never gonna actually get to the root of the issue."
          </p>
          <span className="block text-[11px] text-zinc-500">Student B, member of Jewish organization</span>
        </div>

        <div className="my-8 border-l-2 border-zinc-900 py-1 pl-5">
          <p className="mb-2 text-base leading-relaxed text-zinc-900">
            "I don't think we need to be even connected to it. We just need to be human."
          </p>
          <span className="block text-[11px] text-zinc-500">Student C, international student</span>
        </div>

        {/* Stats Row */}
        <div className="my-8 grid grid-cols-1 gap-[1px] overflow-hidden rounded-md border border-zinc-200 bg-zinc-200 sm:grid-cols-3">
          <div className="bg-white p-5">
            <div className="mb-1 text-3xl font-light tracking-tight text-zinc-900">5</div>
            <div className="text-xs leading-snug text-zinc-500">undergraduates interviewed at UC Berkeley</div>
          </div>
          <div className="bg-white p-5">
            <div className="mb-1 text-3xl font-light tracking-tight text-zinc-900">3</div>
            <div className="text-xs leading-snug text-zinc-500">themes identified through inductive coding</div>
          </div>
          <div className="bg-white p-5">
            <div className="mb-1 text-3xl font-light tracking-tight text-zinc-900">0</div>
            <div className="text-xs leading-snug text-zinc-500">participants recalled a recent productive cross-ideological conversation</div>
          </div>
        </div>

        <h2 className="mb-3 mt-12 text-lg font-medium tracking-tight text-zinc-900">
          What the interviews revealed
        </h2>
        <div className="mb-6 space-y-5 text-[14px] leading-relaxed text-zinc-700">
          <p>
            Three themes emerged consistently across all five interviews. Together, they highlight the most consistent patterns that were most useful for understanding why cross-ideological dialogue surrounding the Israel-Palestine conflict can feel and be so difficult.
          </p>
        </div>

        {/* Theme 1 */}
        <div className="border-t border-zinc-200 py-7">
          <p className="mb-2 text-[10px] uppercase tracking-[0.1em] text-zinc-400">Theme 01</p>
          <h3 className="mb-3 text-base font-medium tracking-tight text-zinc-900">An expectation that dialogue will fail</h3>
          <p className="mb-4 text-[13.5px] leading-relaxed text-zinc-600">
            The most consistent pattern across interviews was that students had decided cross-ideological dialogue would fail before a conversation could even take place. Most participants described having the assumption that the other side was not going to change, and that engaging was pointless. This is less a reaction to a single negative experience, but rather a broad conclusion that shapes whether they decide to engage at all. The problem was not necessarily that these conversations go badly when they occur, but that students' expectations of inauthentic dialogue take precedent before they go in-depth on actual disagreements.
          </p>
          <div className="rounded bg-zinc-50 p-4 text-[13px] leading-relaxed text-zinc-700">
            "I don't really like to have intense debates with people because a lot of times, I find that people who are debating topics, especially Israel-Palestine, often hold views that are unchangeable."
            <span className="mt-1.5 block text-[11px] text-zinc-500">Student A</span>
          </div>
          <div className="mt-3 rounded bg-zinc-50 p-4 text-[13px] leading-relaxed text-zinc-700">
            "People don't come to it solution-seeking. It's ingrained partisanship. You have to pick a side and defend that side forever."
            <span className="mt-1.5 block text-[11px] text-zinc-500">Student E</span>
          </div>
        </div>

        {/* Theme 2 */}
        <div className="border-t border-zinc-200 py-7">
          <p className="mb-2 text-[10px] uppercase tracking-[0.1em] text-zinc-400">Theme 02</p>
          <h3 className="mb-3 text-base font-medium tracking-tight text-zinc-900">The costs of cross-ideological dialogue</h3>
          <p className="mb-4 text-[13.5px] leading-relaxed text-zinc-600">
            Even though most participants generally expect cross-ideological dialogue to fail, that alone does not explain why students avoid engaging. Another significant pattern emerged in that participants were selective about when and how they engaged, and careful about how much of themselves they revealed, depending on who they were talking to. That selectivity was driven by two different but related costs, emotional and social, that can make authentic engagement feel too risky. Students are not just deciding what to say, but have to account for how they will be interpreted by their audience, which takes a lot of effort and risk. In cross-ideological spaces where expressing yourself can have social and emotional consequences, most participants defaulted to a more guarded version of themselves.
          </p>
          <div className="rounded bg-zinc-50 p-4 text-[13px] leading-relaxed text-zinc-700">
            "If I want to express that pain, I would do it with a close friend or someone who's respectful towards me. I wouldn't really express that pain for someone to belittle me or to poke at the wound."
            <span className="mt-1.5 block text-[11px] text-zinc-500">Student A</span>
          </div>
          <div className="mt-3 rounded bg-zinc-50 p-4 text-[13px] leading-relaxed text-zinc-700">
            "I think when people approach this, they approach it very emotionally, and it becomes very hard to compromise or understand the other perspective."
            <span className="mt-1.5 block text-[11px] text-zinc-500">Student D</span>
          </div>
        </div>

        {/* Theme 3 */}
        <div className="border-y border-zinc-200 py-7">
          <p className="mb-2 text-[10px] uppercase tracking-[0.1em] text-zinc-400">Theme 03</p>
          <h3 className="mb-3 text-base font-medium tracking-tight text-zinc-900">Uneven exposure to information and perspectives</h3>
          <p className="mb-4 text-[13.5px] leading-relaxed text-zinc-600">
            The third theme relates to a societal phenomenon that, once again, influences dialogue before it starts. Even when students are willing to engage in cross-ideological dialogue, they rarely are working from the same pool of information. Participants described coming to conversations with very different experiences and exposures to the conflict, whether they learned about it through academic study, personal relationships, or social media. What connects these experiences is that none of them reflect bad intentions or an unwillingness to learn. They demonstrate the reality that students come to these conversations from genuinely different places, shaped by different sources of information and different senses of what is at stake.
          </p>
          <div className="rounded bg-zinc-50 p-4 text-[13px] leading-relaxed text-zinc-700">
            "The stuff I will see and read and whatever is gonna be completely different than what you're fed, basically. And it's gonna be different than what someone who disagrees with me is gonna be fed."
            <span className="mt-1.5 block text-[11px] text-zinc-500">Student B</span>
          </div>
        </div>

        <h2 className="mb-3 mt-12 text-lg font-medium tracking-tight text-zinc-900">
          What this means
        </h2>
        <div className="space-y-5 text-[14px] leading-relaxed text-zinc-700">
          <p>
            These three themes reinforce each other. Students who already expect failure are unlikely to absorb the emotional and social cost of trying. And without shared informational ground, even the students who do try often leave more frustrated than when they started. The result is a campus where a lot of conversation about this conflict is happening, but mostly within groups, not across them. As prior research on out-group contact makes clear, it is sustained engagement across differences that actually reverses polarization. Staying within communities that feel safe keeps emotions manageable, but it does not help the two sides understand each other.
          </p>
          <p>
            What seems most needed, based on what participants described, is not asking students to try harder but creating structural conditions that make cross-ideological dialogue feel more possible. Campus events and resources explicitly oriented toward bridging rather than solely advocacy would help by giving students models for what constructive cross-ideological engagement actually looks like. The goal does not have to be agreement or changing opinions. Based on the findings, something simpler, like reducing the perceived cost of engaging and interrupting the cycle of avoidance, would already be a meaningful step in the right direction. That is part of what this website is trying to offer.
          </p>
        </div>

        <div className="my-8 border-l-2 border-zinc-900 py-1 pl-5">
          <p className="mb-2 text-base leading-relaxed text-zinc-900">
            "The best way to get people to understand other perspectives is to show them what is the emotional core of the other side's argument."
          </p>
          <span className="block text-[11px] text-zinc-500">Student D</span>
        </div>

        <hr className="my-10 border-t border-zinc-200" />

        <h2 className="mb-2 text-lg font-medium tracking-tight text-zinc-900">
          Who I spoke with
        </h2>
        <p className="mb-4 text-[13px] text-zinc-500">
          All participants are identified by letter to protect their privacy. They were recruited through personal outreach and a College of Letters and Science email newsletter, and leaned politically left to moderate.
        </p>

        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Participant Cards */}
          <div className="rounded-md border border-zinc-200 p-3.5">
            <p className="mb-1 text-[13px] font-medium text-zinc-900">Student A</p>
            <p className="text-xs leading-snug text-zinc-500">Political science &middot; Middle Eastern background</p>
          </div>
          <div className="rounded-md border border-zinc-200 p-3.5">
            <p className="mb-1 text-[13px] font-medium text-zinc-900">Student B</p>
            <p className="text-xs leading-snug text-zinc-500">Political science &middot; Member of Jewish organization</p>
          </div>
          <div className="rounded-md border border-zinc-200 p-3.5">
            <p className="mb-1 text-[13px] font-medium text-zinc-900">Student C</p>
            <p className="text-xs leading-snug text-zinc-500">Neuroscience &middot; International student</p>
          </div>
          <div className="rounded-md border border-zinc-200 p-3.5">
            <p className="mb-1 text-[13px] font-medium text-zinc-900">Student D</p>
            <p className="text-xs leading-snug text-zinc-500">History &middot; Asian-American</p>
          </div>
          <div className="rounded-md border border-zinc-200 p-3.5">
            <p className="mb-1 text-[13px] font-medium text-zinc-900">Student E</p>
            <p className="text-xs leading-snug text-zinc-500">Legal studies &middot; Jewish background</p>
          </div>
        </div>

        <div className="my-8 rounded-md bg-zinc-50 p-5">
          <h4 className="mb-2 text-xs font-medium text-zinc-900">A note on method and positionality</h4>
          <p className="text-[12.5px] leading-relaxed text-zinc-600">
            Interviews were semi-structured, lasted 20 to 30 minutes, and were conducted in person or via Zoom in April 2026. Transcripts were coded inductively, meaning themes emerged from the data rather than being determined in advance. As a Palestinian-American student at UC Berkeley, I brought my own perspective to this work. I practiced reflexivity by keeping questions focused on participants' descriptions of their experiences rather than their views on the conflict itself.
          </p>
        </div>
      </main>

      <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 text-[11px] text-zinc-400 sm:flex-row">
        <span>Berkeley Bridging Fellows &middot; Dialogue Across Differences &middot; Spring 2026</span>
        <Link href="/projects" className="hover:text-zinc-600 transition-colors">
          Back to capstone projects
        </Link>
      </footer>
    </div>
  )
}