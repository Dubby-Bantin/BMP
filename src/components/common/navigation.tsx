import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
// import {
//   Dialog,
//   DialogContent,
//   DialogTrigger,
//   DialogTitle,
//   DialogClose,
//   DialogHeader,
//   DialogDescription,
// } from "../ui/dialog";
// import Video from "../video";
import { MobileNav } from "./mobile-nav";

export function Navigation() {
  return (
    <header className="bg-[#1da0f1] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              height={90}
              width={90}
              src="/images/logo.png"
              alt="Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </Link>

          <div className="hidden md:flex space-x-4 lg:space-x-12 items-center">
            <Link href={"/"}>Home</Link>
            <DropdownMenu>
              <DropdownMenuTrigger>Author</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href={"/author"}>About the author</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={"/projects"}>Projects</Link>
                  {/* <Dialog>
                    <DialogTrigger>Projects</DialogTrigger>
                    <DialogContent className="p-4 sm:p-6 max-w-[90vw] sm:max-w-md md:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>About the authors</DialogTitle>
                        <DialogDescription className="mt-2">
                          <Video />
                        </DialogDescription>
                      </DialogHeader>
                      <DialogClose asChild>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                          Close
                        </button>
                      </DialogClose>
                    </DialogContent>
                  </Dialog> */}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>Books</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href={"/books"}>Young man in a hurry: Son of Mary</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={"/money-disorder"}>Money Disorder</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <Link href={"/"}>Book Club</Link> */}
            <Link href={"/contact"}>Contact</Link>
          </div>
          {/* Mobile sheet */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
