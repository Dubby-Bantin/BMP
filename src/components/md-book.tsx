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
const Book2 = () => {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span>Books</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72">
          <DropdownMenuItem className="grid gap-2">
            <Link href={"#book1"}>Young Man In A Hurry: Son of Mary</Link>
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
          <DialogDescription>
            <p className=" mb-5">
              {" "}
              Too often, we mistake money for a solution when it is merely a
              tool—powerful, yes, but dangerous when placed in unprepared hands.
              As you’ll discover in this book, the true determinant of success
              is not how much money you have, but how ready you are to wield it.
              Readiness is not a number in a bank account—it’s a mindset, a
              maturity, a quiet strength I call JNSQ. Without it, even great
              wealth can collapse under poor judgment. With it, even modest
              means can build a life of purpose, impact, and freedom. This book
              is not about chasing more money. It is about becoming the kind of
              person money cannot corrupt, and life cannot break.
            </p>
            <div className="relative h-[15rem] overflow-y-scroll">
              <div className="absolute top-0 left-0 w-full md:h-[38rem] h-[30rem]">
                <Image
                  src="/images/new_book.jpg"
                  alt="alt"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button asChild type="submit">
              <Link href="/#contact">Join the waitlist</Link>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Book2;
