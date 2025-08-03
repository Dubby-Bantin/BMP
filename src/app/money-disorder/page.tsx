import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function MoneyDisorderPage() {
  return (
    <div>
      <div className="md:px-20 py-20 max-w-4xl mx-auto px-2">
        <h1 className="text-3xl font-bold mb-6">Money is not the answer.</h1>
        <div className="relative aspect-[2/3] mb-4 overflow-y-auto inline-block float-left w-48 mr-4">
          <Image
            src="/images/new_book.jpg"
            alt="Money Disorder Book Cover"
            fill
            className="md:object-cover object-contain rounded-none"
            priority
          />
        </div>
        <div className="mb-5 leading-relaxed">
          <>
            <p className="mb-2">
              A common misconception is to look for and use money as a universal
              solution to life&apos;s problems. Fundamentally, it is only a tool
              of exchange. At best, money enables solutions, only after you have
              done research, analysis, and concluded courses of action. At
              worst, money masks underlying issues or problems that eventually
              grow to become too large to ignore. Without knowledge, wisdom,
              maturity, the right mindset, and the right actions, money does not
              solve problems—it exposes them. An example crystallizes the
              preceding explanation.
            </p>
            <p className="mb-2">
              A struggling mechanic, Emeka, won M5 million in the state lottery.
              His life seemed to change overnight. He helped friends, bought
              luxury cars, and invested in businesses he did not fully
              understand. Yet within three years, the money was gone. The stress
              of sudden wealth without preparation, damaged his relationships
              and left him worse off than before. Emeka&apos;s real problem was
              never a lack of money; it was a lack of readiness. The money did
              not heal him—it revealed the hidden unresolved issues in his
              character, judgment, and vision. Emeka&apos;s predicament defines
              what I call money disorder: the mishandling of money due to an
              underlying lack of readiness. When money arrives out of
              order—before a person is prepared for it—the consequences can be
              devastating, whether that person is struggling to survive or
              sitting on mountains of wealth.
            </p>

            <p className="mb-2">
              The concept of readiness is at the heart of this book. It is a
              unique, personal quality—difficult to define precisely because it
              varies from one person to another. I also use the term JNSQ (Je ne
              sais quoi, or “I don&apos;t know what”) to describe it. JNSQ is
              that essential “something” that makes an individual capable of
              handling resources wisely. It is that foundation that must be in
              place to support true success, impact, and fulfillment. It is that
              set of preparation or state of readiness that makes sure that
              whatever goals you set for yourself is accomplished. Money
              Disorder affects both economic groups of society: the have-nots,
              presented in Part 1 of the book, and the haves, discussed in Part
              2. The scope of Part 1 of the book includes those who lack
              sufficient money to do what they want, and the two types of money
              disorder that afflicts them:
            </p>

            <ul className="mb-2 list-disc pl-5">
              <li className="mb-1">
                Type I Money Disorder occurs when individuals seek to use other
                people&apos;s money to satisfy their needs but remain open to
                alternatives if persuaded. They recognize, even if reluctantly,
                that money may not be the only solution.
              </li>
              <li className="mb-1">
                Type II Money Disorder also involves dependence on other
                people&apos;s money, but with a rigid mindset. Those afflicted
                by Type II refuse to consider any other solutions. Money becomes
                their non-negotiable solution to every problem, closing the door
                to creativity, growth, or true empowerment.
              </li>
            </ul>
            <p className="mb-2">
              Throughout Part 1, the stories, reflections, and analyses
              illustrate how these disorders play out in everyday life, often
              trapping individuals in cycles of disappointment and dependence.
              The underlying message stays constant: without readiness, no
              amount of money will bring lasting change. Part 2 moves the
              spotlight onto the haves—those with more than enough money, often
              much more. Here, the problem shifts from scarcity to excess. While
              it may seem that the have-nots and the haves live in different
              worlds, the root issue is the same: a misplaced faith in money as
              the ultimate answer, rather than the development of JNSQ—the
              readiness to steward resources wisely and responsibly.
            </p>
            <p className="mb-2">
              The purpose of Money Disorder is not simply to critique our
              culture&apos;s obsession with wealth. It is to offer a pathway
              out—to challenge readers to focus first on building readiness.
              Whether you find yourself hoping for your first breakthrough or
              managing an abundance of resources, the call is the same: develop
              your character, sharpen your wisdom, cultivate your vision. When
              JNSQ is in place, money serves its rightful role as a tool, not a
              master. Without readiness, even great fortunes can become
              instruments of personal and societal harm. This message is
              especially urgent for young people, who may erroneously believe
              that success equals wealth. True success comes from the internal
              strength to wield resources—not the mere possession of them. If
              you are a young person, hear this clearly: money is not the
              measure of your success. Readiness is. When you focus on
              developing JNSQ and readiness, the money you need will come—and
              when it does, it will not master you. You will master it.
            </p>
            <p className="mb-2">
              This book is a call to shift your focus. Not toward chasing more
              money. Not toward idolizing wealth or envying those who have it.
              But toward building yourself—your character, your wisdom, your
              ability to think clearly and act decisively. Toward cultivating
              your own JNSQ. As you read this book, remember, it is not about
              having more money. It is about becoming ready. And when you are
              ready, the money you do have will work for you, not against you.
            </p>
          </>
        </div>
        <div className="mt-8">
          <Button asChild type="button">
            <Link href="/contact">Join the waitlist</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
