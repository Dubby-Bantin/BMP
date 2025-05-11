"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/utils/constants";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="bg-[#1da0f1] shadow-md h-fit top-0 text-white sticky z-[9999]">
      <div className="container mx-auto px-4 h-fit">
        <div className="flex justify-between items-center h-fit">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl">
              <Image
                height={110}
                width={110}
                src={"/images/logo.png"}
                alt="logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.name !== "Books" ? link.href : ""}
                className=" hover:text-blue-600"
              >
                {link.name === "Books" ? (
                  <Dialog>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <span>Books</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-72">
                        <DropdownMenuItem className="grid gap-2">
                          <Link href={"#book1"}>
                            Young Man In A Hurry: Son of Mary
                          </Link>
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
                            Too often, we mistake money for a solution when it
                            is merely a tool—powerful, yes, but dangerous when
                            placed in unprepared hands. As you’ll discover in
                            this book, the true determinant of success is not
                            how much money you have, but how ready you are to
                            wield it. Readiness is not a number in a bank
                            account—it’s a mindset, a maturity, a quiet strength
                            I call JNSQ. Without it, even great wealth can
                            collapse under poor judgment. With it, even modest
                            means can build a life of purpose, impact, and
                            freedom. This book is not about chasing more money.
                            It is about becoming the kind of person money cannot
                            corrupt, and life cannot break.
                          </p>
                          <div className="relative h-[15rem] w-full">
                            <Image
                              src="/images/book.avif"
                              alt="alt"
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="submit">Close</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ) : (
                  link.name
                )}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className=" focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-2 pb-4 absolute top-20 left-0 bg-white z-[999] w-full shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link,i) => (
                <Link
                  key={i}
                  href={link.name !== "Books" ? link.href : ""}
                  className=" hover:text-blue-600 block text-black py-4 px-2"
                >
                  {link.name === "Books" ? (
                    <Dialog>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <span>Books</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-72">
                          <DropdownMenuItem className="grid gap-2">
                            <Link href={"#book1"}>
                              Young Man In A Hurry: Son of Mary
                            </Link>
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
                              Too often, we mistake money for a solution when it
                              is merely a tool—powerful, yes, but dangerous when
                              placed in unprepared hands. As you’ll discover in
                              this book, the true determinant of success is not
                              how much money you have, but how ready you are to
                              wield it. Readiness is not a number in a bank
                              account—it’s a mindset, a maturity, a quiet
                              strength I call JNSQ. Without it, even great
                              wealth can collapse under poor judgment. With it,
                              even modest means can build a life of purpose,
                              impact, and freedom. This book is not about
                              chasing more money. It is about becoming the kind
                              of person money cannot corrupt, and life cannot
                              break.
                            </p>
                            <div className="relative h-[15rem] w-full">
                              <Image
                                src="/images/new_book.jpg"
                                alt="alt"
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button type="submit">Close</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    link.name
                  )}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
