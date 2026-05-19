import Link from 'next/link'

export default function DialogueToolkitPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white px-6 pb-20 pt-24 font-sans text-zinc-900 md:px-10">
      <main className="mt-0">
        {/* Hero Section */}
        <header className="mb-12 border-b border-zinc-200 pb-10">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
            Capstone Project &middot; Research & Toolkit
          </p>
          <h1 className="mb-4 text-3xl font-medium tracking-tight text-zinc-900 md:text-4xl">
            Interview Analysis & Toolkit
          </h1>
            <p className="mb-7 max-w-2xl text-[15px] leading-relaxed text-zinc-600">
            Fellows in the BBF conducted a series of interviews with UC Berkeley students to learn more about the conversations they have related to Israel-Palestine. Below is a series of quotes and analyses based on common themes that arose throughout the course of these interviews, and a{' '}
            <a href="#toolkit" className="font-medium text-zinc-900 underline underline-offset-4 transition-colors hover:text-zinc-500">
              Dialogue Mini-Toolkit
            </a>{' '}
            designed to help you have more meaningful and productive conversations.
          </p>          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
            <span className="font-medium text-zinc-600">Amara Fernandes</span>
            <span>&middot;</span>
            <span>BBF Fellow, Spring 2026</span>
          </div>
        </header>

        {/* SECTION 1 */}
        <h2 className="mb-4 mt-12 text-lg font-medium tracking-tight text-zinc-900">
          What kinds of conversations are students having, and with whom?
        </h2>
        <div className="space-y-4 text-[14px] leading-relaxed text-zinc-700">
          <p>
            Students engage in dialogue with a variety of different people, most commonly with friends and family. The hardest conversations seem to be the ones with those who have personal connections to the conflict. This topic often comes up spontaneously and in public, at campus events, community gatherings, and even outside bars and restaurants. Discussions span ideological, political, personal or familial, theoretical, and academic themes.
          </p>
        </div>
        <div className="my-8 space-y-4 rounded-md bg-zinc-50 p-6 text-[13.5px] leading-relaxed text-zinc-700">
          <p>"On social media, with friend groups, campus events."</p>
          <p>"I have a lot of Middle Eastern friends whose backgrounds include Palestinian, Lebanese, Persian, et cetera. I often talk to them about their hometowns or their families, and a lot of them have been impacted intensely by the conflict."</p>
          <p>"I've talked to my parents about this."</p>
          <p>"I have different kinds of conversations, whether it's political or personal, friendly."</p>
        </div>

        {/* SECTION 2 */}
        <h2 className="mb-4 mt-12 text-lg font-medium tracking-tight text-zinc-900">
          What reservations/barriers are there around Israel-Palestine dialogue?
        </h2>
        <div className="space-y-4 text-[14px] leading-relaxed text-zinc-700">
          <p>
            Students express a strong avoidance of conversations surrounding this topic primarily due to the atmosphere surrounding it. Because it is such a charged topic that is highly personal to some, meaningful and productive dialogue seems insurmountably difficult and ultimately fruitless. They feel discouraged from having these conversations due to its volatile nature, many indicating that they do not have the courage or confidence to engage. 
            </p>
            <p>
            This is exacerbated by the fact that students often encounter people who seem deliberately unwilling to listen to the other side, or who do not have any intention to engage in good-faith conversation. Even those who attempt to genuinely listen are unable to do so at times, approaching the discussion from an exclusively emotional perspective rather than a rational one. It becomes nearly impossible for many students to differentiate between those who are overtly hostile and antagonistic, and those who wish to have productive exchange but find it difficult to do so.
          </p>
          <p>
            Students also indicate that a barrier to dialogue is the sheer complexity of the issue. The Israel-Palestine conflict has a long and convoluted history, and contemporary considerations are no different. There is a worry that a lack of comprehensive knowledge-on all sides-inhibits meaningful conversation and promotes a dangerous oversimplification of events and ideas related to Israel-Palestine.
          </p>
        </div>
        <div className="my-8 space-y-4 rounded-md bg-zinc-50 p-6 text-[13.5px] leading-relaxed text-zinc-700">
          <p>"I feel like I haven't really engaged very much with other students, although I feel like I want to. It just seems like, in many cases, it is a sensitive topic for a lot of people."</p>
          <p>"I'm fairly political, but I don't think I have the courage to talk to school about it... Whether, you you can be a part of it, whether you're just listening or actually engaging in it, but I do listen to it, like a good amount. I don't really talk about it."</p>
          <p>"I think people on both the left and the right are very dissatisfied with the status quo of how things are going. And they've been dissatisfied for a very long time, and it leads them to seek more extreme options."</p>
          <p>"Some people genuinely are looking for problems when they want to discuss this topic. That makes me even more hesitant to speak on my opinions... there's no productivity."</p>
          <p>"I find that people who are debating topics, especially Israel-Palestine, often hold views that are unchanged or aren't accessible to change. And I don't really like to challenge people, especially when I know it's not meaningful for them."</p>
          <p>"When the thing you're arguing about is coming from an emotional perspective, instead of from a rational perspective, it becomes very hard to compromise and to understand your opponent's perspective. That's why I think a lot of the culture war issues are very like black and white almost... the culture war is a more emotional thing than something like economic policy behaves. So it's much harder for people to compromise."</p>
          <p>"Generally, I think that Israel-Palestine is hard to discuss because it's very complicated. There's very deep roots. So I think it takes a lot of context to go into the discussion... I know on social media, people like to oversimplify it."</p>
          <p>"I think that Israel-Palestine is a very challenging issue because it's not a clear black and white issue. Well, nothing is really, but this definitely isn't. And it's so intertwined with so many different things that I feel like... there's a lack of nuance."</p>
        </div>

        {/* SECTION 3 */}
        <h2 className="mb-4 mt-12 text-lg font-medium tracking-tight text-zinc-900">
          What does campus culture look like around this topic, and how has the Berkeley administration responded?
        </h2>
        <div className="space-y-4 text-[14px] leading-relaxed text-zinc-700">
          <p>
            Students describe UC Berkeley's campus culture surrounding Israel-Palestine as deeply polarized, with many feeling that conversations are often dominated by staunch binary ideology rather than genuine engagement. This creates an environment in which nuanced discussion feels increasingly difficult to sustain. While many peers care deeply about the issue, students describe conversations as emotionally charged and exhausting, making productive dialogue rare and seemingly pointless.
          </p>
          <p>
            At the same time, students perceive Berkeley as somewhat distinct from other universities because of its longstanding culture of free speech and political activism. Some feel that the university administration handled demonstrations and protests more effectively than other campuses. Still, there remains a sense of disappointment with general university response. This is related to student dissatisfaction surrounding administrative transparency and the institution's early financial involvement in the conflict; there is also some concern about faculty representation on campus and the way in which minority groups on campus are perceived, particularly in the context of Israel-Palestine.
          </p>
          <p>
            Students also note that peer opinions specific to Israel-Palestine have grown less apparent in terms of disruptive protests and organized activism. Once heavily present on campus, there is a noted decline in engagement. Students attribute this decline to a variety of factors, including fatigue, more prominent issues, and the absence of a clear resolution to the conflict. Although activism and opinions on the conflict undoubtedly still exist, the intensity of campus discussion has diminished significantly over time.
          </p>
        </div>
        <div className="my-8 space-y-4 rounded-md bg-zinc-50 p-6 text-[13.5px] leading-relaxed text-zinc-700">
          <p>"Looking at Berkeley, you see a lot of people who are so pro Israel, despite anything that you can say, and they'll kind of ignore everything that doesn't follow into that. And there's equally just as many people I've run into who are kind of the same, but anti Israel. And it's very hard to talk to people in a more moderated way."</p>
          <p>"Unlike a lot of other campuses that have large student mobilization and protest, I think Berkeley's more used to that. That's why we didn't see violence here, the way that there was in other universities. So I think that that was a good response by the university, that essentially they understand how student protests work, and they understand that adding to the violence is not going to be a solution... But since then, I don't think there hasn't really been much stuff that I've seen in place. It seems like that was the end. That was it."</p>
          <p>"There's a reason why the school sends out surveys and they're like, if you are Palestinian or if you're Israeli or if you're Muslim or if you're Jewish, do you have an experience with being discriminated against? I think that it's cultural racism, and the origins of which would be different for each."</p>
          <p>"I know I have an Israeli professor, but I don't have any Palestinian professors. That's a unique perspective. Why don't I have this perspective?"</p>
          <p>"It has diminished lately, but I think last semester, for example, [conversation on campus] was really strong. A lot of people were talking about that. They had the protests and stuff. And still, I can see that there's some activism going on every now and then. Even if it's not as strong anymore."</p>
          <p>"I feel like it's becoming like less of a pressing issue for a lot of students. I think just because of fatigue of the issue, they're not seeming to be any kind of clear resolution. So I think people just start getting tired of it."</p>
        </div>

{/* SECTION 4 */}
        <h2 className="mb-4 mt-12 text-lg font-medium tracking-tight text-zinc-900">
          What is most important when engaging in dialogue?
        </h2>
        <div className="space-y-4 text-[14px] leading-relaxed text-zinc-700">
          <p>
            The main traits students consistently identify as essential for meaningful conversation are empathy, understanding, listening, and a willingness to be open-minded. They highlight the importance of approaching dialogue through an empathetic approach which attempts to put oneself in another's shoes, and which holistically centers the lives and experiences of its participants. Understanding is also a key theme, recognizing that emotional maturity and awareness of what others mean in a conversation is imperative for fruitful discussion. Students indicated listening to be an important component of worthwhile conversation. Asking questions related to others' statements enhance not only one's understanding of a different perspective, but also allows the perspective holder to evaluate their own thought process. Open-mindedness is central to this, as the willingness to consider alternate perspectives, even ones in contradiction to one's own, allows for empathy, understanding, and listening to be present in the first place. Thus all of these traits are intimately related.
          </p>
          <p>
            Interestingly, responses to this question from interviewees organically reflect four of the dialogue tools that fellows developed throughout the course of the BBF: Following Meaning, Demonstrating Understanding, Avoiding the Ladder of Inference, and Recognizing Comfort, Stretch, and Panic Zones. This suggests that students are aware of the factors needed for productive conversation, but that they may not know how to effectively use or implement them. Students also recognize that meaningful dialogue requires buy-in from all parties, which can hinder the process if there is opposition to these values. Still, from these interviews, there is a clear desire among many to work towards bridging.
          </p>
        </div>
        <div className="my-8 space-y-4 rounded-md bg-zinc-50 p-6 text-[13.5px] leading-relaxed text-zinc-700">
          <p>"The best way that I feel would get people to understand other perspectives is to show them what is the emotional core of the other side's argument. [...] I don't think that, fundamentally, the pro-Israel and pro-Palestine people are too far off."</p>
          
          <p>
            <strong><a href="#following-meaning" className="underline underline-offset-4 transition-colors hover:text-zinc-500">Tool: Following Meaning</a></strong><br />
            "It depends on your mentality. If you can recognize what someone's trying to do and what their motives are... emotional maturity is definitely the most important. Another is a sense of understanding, because different people are impacted by different things. I think that goes hand in hand with emotional maturity."
          </p>
          
          <p>
            <strong><a href="#demonstrating-understanding" className="underline underline-offset-4 transition-colors hover:text-zinc-500">Tool: Demonstrating Understanding</a></strong><br />
            "The way I look at it, if you come into something to prove why someone's wrong, you're never gonna understand why they think they're right, and thereby, you're never gonna actually get to the root of the issue."
          </p>
          
          <p>
            <strong><a href="#ladder-of-inference" className="underline underline-offset-4 transition-colors hover:text-zinc-500">Tool: Avoiding the Ladder of Inference</a></strong><br />
            "I think it doesn't take too much to understand what's going on and how much it has affected the lives of a lot of people... we just need to be human."
          </p>
          
          <p>
            <strong><a href="#comfort-stretch-panic" className="underline underline-offset-4 transition-colors hover:text-zinc-500">Tool: Recognizing Comfort, Stretch, & Panic Zones</a></strong><br />
            "I think the solution to that is, funnily enough, listening more. If you understand what they're saying, don't tell them they're wrong. Ask them a question, and if they can't answer it, then they have to think about it. And the same thing goes for you: if your view really is as good as you believe, be open to questions. If you can't answer something and you can't figure it out, maybe you're wrong."
          </p>
          
          <p>"At least having a shared, agreed upon list of facts, or common ground, whatever you want to call it... People come to it with completely different worldviews, and when that's the case, if you can't really find agreement, and not having any kind of shared facts, it makes it very challenging to move beyond just arguing."</p>
          
          <p>"I think it's more important for people to pick up books and read together than it is to try to out-duel mentally everybody to see who got the upper hand, because it doesn't serve anyone to dunk on them or to debate them. It serves to say, "Hey, let's read a book together." And then we can go and talk and play with these ideas and these thoughts and then go about it. I think that's probably the best way."</p>
        </div>        
        
        <hr className="my-12 border-t border-zinc-200" />

        {/* TOOLKIT SECTION */}
        <h2 id="toolkit" className="mb-8 scroll-mt-12 text-2xl font-medium tracking-tight text-zinc-900">
          Dialogue Mini-Toolkit
        </h2>

        {/* Tool 1 */}
        <div id="following-meaning" className="scroll-mt-12 border-t border-zinc-200 py-7">
          <h3 className="mb-3 text-base font-bold tracking-tight text-zinc-900">Following Meaning</h3>
          <p className="mb-5 text-[14px] leading-relaxed text-zinc-700">
            An important part of dialogue is connection and being on the same page. Following Meaning is a technique focused on the underlying meaning or emotional logic framework behind what someone is saying, and attempting to understand that meaning. Instead of waiting to speak and ignoring or dismissing others' insights, Following Meaning leads listeners to think critically, internalize messages, and draw connections. This includes concentrating on what's important to the speaker, rather than on what the listener may be curious about. The goal is to follow the heart of the conversation and to get to the root of the speaker's intention.
          </p>
          <div className="rounded border border-zinc-200 bg-zinc-50 p-4">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">Example prompts for Following Meaning:</h4>
            <ul className="space-y-1 text-[13.5px] text-zinc-700">
              <li>"Can you talk more about..."</li>
              <li>"I'm curious whether..."</li>
              <li>"How do you feel about..."</li>
            </ul>
          </div>
        </div>

        {/* Tool 2 */}
        <div id="demonstrating-understanding" className="scroll-mt-12 border-t border-zinc-200 py-7">
          <h3 className="mb-3 text-base font-bold tracking-tight text-zinc-900">Demonstrating Understanding</h3>
          <p className="mb-5 text-[14px] leading-relaxed text-zinc-700">
            As a listener, Demonstrating Understanding shows the speaker that you're invested in the conversation and are doing your best to connect with their perspective. Since the goal of dialogue is to understand and share, this technique assures the speaker that the listener is paying attention and cares about what they have to say. Demonstrating Understanding is not the same as agreeing with the speaker-instead, it communicates that the speaker's position is taken seriously enough to be recognized on its own terms. This helps lower defensiveness and tension in a conversation by creating an atmosphere of authenticity and genuine attentiveness.
          </p>
          <div className="rounded border border-zinc-200 bg-zinc-50 p-4">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">Example prompts for Demonstrating Understanding:</h4>
            <ul className="space-y-1 text-[13.5px] text-zinc-700">
              <li>"So what I'm hearing is..."</li>
              <li>"It seems like..."</li>
              <li>"My main takeaway is..."</li>
            </ul>
          </div>
        </div>

        {/* Tool 3 */}
        <div id="ladder-of-inference" className="scroll-mt-12 border-t border-zinc-200 py-7">
          <h3 className="mb-3 text-base font-bold tracking-tight text-zinc-900">Avoiding the Ladder of Inference</h3>
          <p className="mb-5 text-[14px] leading-relaxed text-zinc-700">
            Imagine a ladder, where the bottom rung is where a conversation begins, and the top rung is the conclusion you reach at its end. At its base, the ladder of inference contains information from the start of dialogue combined with your own past experiences, backgrounds, and knowledge. As we proceed up the ladder, we filter, process, and analyze select pieces of information in relation to the conversation-but based on what was at the start of the ladder, this interpretation of dialogue may be misguided, incomplete, or reliant on inaccurate assumptions. It's important to recognize when one is scaling the ladder of inference without truly understanding the speaker's intention or automatically interpreting information in bad faith. As stated by the Harvard Business Review, "The risk is that climbing the ladder too quickly or relying on incomplete or biased information can lead to misguided actions. That's why it's so important to pause at the top."
          </p>
          <div className="rounded border border-zinc-200 bg-zinc-50 p-4">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">Example reflections for Avoiding the Ladder of Inference:</h4>
            <ul className="space-y-1 text-[13.5px] text-zinc-700">
              <li>What assumptions might I be making?</li>
              <li>How have I reached this conclusion?</li>
              <li>What could I be missing in my interpretation?</li>
            </ul>
          </div>
        </div>

        {/* Tool 4 */}
        <div id="comfort-stretch-panic" className="scroll-mt-12 border-y border-zinc-200 py-7">
          <h3 className="mb-3 text-base font-bold tracking-tight text-zinc-900">Recognizing Comfort, Stretch, & Panic Zones</h3>
          <p className="mb-4 text-[14px] leading-relaxed text-zinc-700">
            It's important to recognize the different emotional and cognitive states you may enter during challenging conversations. Comfort, Stretch, and Panic Zones help to explain and recognize these states and better equip participants with the tools to regulate themselves. The goal of dialogue is not to remain completely comfortable, but also not to become emotionally overwhelmed by understanding which of these zones you fall into, it becomes easier to engage in productive dialogue.
          </p>
          <p className="mb-4 text-[14px] leading-relaxed text-zinc-700">
            When people feel safe, familiar, and unchallenged, they are often in the Comfort Zone. This zone usually entails agreement and reinforcement of one's own beliefs with little to no contention. Remaining in this zone, while comfortable, can limit opportunities for change and growth.
          </p>
          <p className="mb-4 text-[14px] leading-relaxed text-zinc-700">
            Productive dialogue tends to occur in the Stretch Zone, which is a space of manageable discomfort where participants are challenged enough to reflect critically, but still emotionally regulated enough to listen constructively. Although these experiences may feel uncomfortable, in this zone one is still able to listen carefully, ask questions, and think critically rather than react impulsively.
          </p>
          <p className="mb-5 text-[14px] leading-relaxed text-zinc-700">
            The Panic Zone is where discomfort becomes so intense that a person begins to lose the ability to engage constructively. Rather than listening carefully or reflecting on what is being said, one reacts defensively, shuts down, or attempts to escape the conversation. In this zone, meaningful dialogue becomes much more difficult.
          </p>
          <div className="rounded border border-zinc-200 bg-zinc-50 p-4">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">Example reflections for Recognizing Comfort, Stretch, & Panic Zones:</h4>
            <ul className="space-y-1 text-[13.5px] text-zinc-700">
              <li>Am I being meaningfully challenged right now?</li>
              <li>Am I only bearing perspectives I already agree with?</li>
              <li>Am I avoiding tension or disagreement?</li>
            </ul>
          </div>
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