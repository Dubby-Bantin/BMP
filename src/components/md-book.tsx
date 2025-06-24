"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Book2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span>Books</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72">
          <DropdownMenuItem className="grid gap-2">
            <Link href={"/books"}>Young Man In A Hurry: Son of Mary</Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="grid gap-2">
            <Link href={"/money-disorder"}>Money Disorder</Link>
          </DropdownMenuItem>

          <DialogTrigger asChild>
            <DropdownMenuItem className="grid gap-2">
              <Button variant={"link"}>Money Disorder</Button>
            </DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Money is not the answer.</DialogTitle>
          <DialogDescription className="overflow-y-auto max-h-[70vh]">
            <div className="relative w-full h-[50rem] overflow-y-auto">
              <Image
                src="/images/new_book.jpg"
                alt="Money Disorder Book Cover"
                fill
                className="md:object-cover object-contain"
              />
            </div>
            <div className="mb-5">
              {isExpanded ? (
                <>
                  <p className="mb-2">
                    A common misconception is to look for and use money as a
                    universal solution to life&apos;s problems. Fundamentally,
                    it is only a tool of exchange. At best, money enables
                    solutions, only after you have done research, analysis, and
                    concluded courses of action. At worst, money masks
                    underlying issues or problems that eventually grow to become
                    too large to ignore. Without knowledge, wisdom, maturity,
                    the right mindset, and the right actions, money does not
                    solve problems—it exposes them. An example crystallizes the
                    preceding explanation.
                  </p>

                  <p className="mb-2">
                    A struggling mechanic, Emeka, won ₩5 million in the state
                    lottery. His life seemed to change overnight. He helped
                    friends, bought luxury cars, and invested in businesses he
                    did not fully understand. Yet within three years, the money
                    was gone. The stress of sudden wealth without preparation,
                    damaged his relationships and left him worse off than
                    before. Emeka&apos;s real problem was never a lack of money;
                    it was a lack of readiness. The money did not heal him—it
                    revealed the hidden unresolved issues in his character,
                    judgment, and vision.
                  </p>

                  <p className="mb-2">
                    Emeka&apos;s predicament defines what I call money disorder:
                    the mishandling of money due to an underlying lack of
                    readiness. When money arrives out of order—before a person
                    is prepared for it—the consequences can be devastating,
                    whether that person is struggling to survive or sitting on
                    mountains of wealth.
                  </p>

                  <p className="mb-2">
                    The concept of readiness is at the heart of this book. It is
                    a unique, personal quality—difficult to define precisely
                    because it varies from one person to another. I use the term
                    JNSQ (Je ne sais quoi, or &quot;I don&apos;t know
                    what&quot;) to describe it. JNSQ is that essential
                    &quot;something&quot; that makes an individual capable of
                    handling resources wisely. It is that foundation that must
                    be in place to support true success, impact, and
                    fulfillment.
                  </p>

                  <p className="mb-2">
                    Money Disorder affects both economic groups of society: the
                    have-nots, presented in Part 1 of the book, and the haves,
                    discussed in Part 2.
                  </p>

                  <p className="mb-2">
                    The scope of Part 1 of the book includes those who lack
                    sufficient money to do what they want and the two types of
                    money disorder that affect them:
                  </p>

                  <ul className="mb-2 list-disc pl-5">
                    <li className="mb-1">
                      Type I Money Disorder occurs when individuals seek to use
                      other people&apos;s money to satisfy their needs but
                      remain open to alternatives if persuaded. They recognize,
                      even if reluctantly, that money may not be the only
                      solution.
                    </li>
                    <li className="mb-1">
                      Type II Money Disorder also involves dependence on other
                      people&apos;s money, but with a rigid mindset. Those
                      afflicted by Type II refuse to consider any other
                      solutions. Money becomes their non-negotiable solution to
                      every problem, closing the door to creativity, growth, or
                      true empowerment.
                    </li>
                  </ul>

                  <p className="mb-2">
                    Throughout Part 1, the stories, reflections, and analyses
                    illustrate how these disorders play out in everyday life,
                    often trapping individuals in cycles of disappointment and
                    dependence. The underlying message stays constant: without
                    readiness, no amount of money will bring lasting change.
                  </p>

                  <p className="mb-2">
                    Part 2 turns the spotlight onto the haves—those with more
                    than enough money, often much more. Here, the problem shifts
                    from scarcity to excess. While it may seem that the
                    have-nots and the haves live in different worlds, the root
                    issue is the same: a misplaced faith in money as the
                    ultimate answer, rather than the development of JNSQ—the
                    readiness to steward resources wisely and responsibly.
                  </p>

                  <p className="mb-2">
                    The purpose of Money Disorder is not simply to critique our
                    culture&apos;s obsession with wealth. It is to offer a
                    pathway out—to challenge readers to focus first on building
                    readiness. Whether you find yourself hoping for your first
                    breakthrough or managing an abundance of resources, the call
                    is the same: develop your character, sharpen your wisdom,
                    cultivate your vision. When JNSQ is in place, money serves
                    its rightful role as a tool, not a master. Without it, even
                    great fortunes can become instruments of personal and
                    societal harm. This message is especially urgent for young
                    people, who may erroneously believe that success equals
                    wealth. True success comes from the internal strength to
                    wield resources—not the mere possession of them. If you are
                    a young person, hear this clearly: money is not the measure
                    of your success. Readiness is. When you focus on developing
                    JNSQ, the money you need will come—and when it does, it will
                    not master you. You will master it.
                  </p>

                  <p className="mb-2">
                    This book is a call to shift your focus. Not toward chasing
                    more money. Not toward idolizing wealth or envying those who
                    have it. But toward building yourself—your character, your
                    wisdom, your ability to think clearly and act decisively.
                    Toward cultivating your own JNSQ.
                  </p>

                  <p className="mb-2">
                    As you read this book, remember, it is not about having more
                    money. It is about becoming ready. And when you are ready,
                    the money you do have will work for you, not against you.
                  </p>
                </>
              ) : (
                <p className="mb-2">
                  A common misconception is to look for and use money as a
                  universal solution to life&apos;s problems. Fundamentally, it
                  is only a tool of exchange. At best, money enables solutions,
                  only after you have done research, analysis, and concluded
                  courses of action. At worst, money masks underlying issues or
                  problems that eventually grow to become too large to ignore.
                  Without knowledge, wisdom, maturity, the right mindset, and
                  the right actions, money does not solve problems—it exposes
                  them. An example crystallizes the preceding explanation.
                </p>
              )}

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-2"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button asChild type="submit">
              <Link href="/contact">Join the waitlist</Link>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Book2;
