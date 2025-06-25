"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/utils/constants";
import Book2 from "../md-book";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Video from "../video";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="bg-[#1da0f1] text-white sticky top-0 z-50 shadow-md">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
            {navLinks.map((link, i) =>
              link.name === "Books" ? (
                <div key={i} className="py-1 px-2 lg:py-2 lg:px-4">
                  <Book2 />
                </div>
              ) : link.name === "Author" ? (
                <div key={i} className="relative py-1 px-2 lg:py-2 lg:px-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="block py-2 px-3 lg:py-3 lg:px-4 hover:text-blue-200 transition-colors duration-200">
                        {link.name}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-2 lg:p-4 w-40 lg:w-48 bg-white shadow-lg rounded-lg">
                      <DropdownMenuItem asChild>
                        <Link
                          href="/author"
                          className="block w-full p-2 hover:text-blue-600"
                        >
                          About the Author
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <button
                          onClick={() => setIsDialogOpen(true)}
                          className="block w-full text-left p-2 hover:text-blue-600"
                        >
                          Projects
                        </button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                  </Dialog>
                </div>
              ) : (
                <Link
                  key={i}
                  href={link.href}
                  className="block py-2 px-3 lg:py-3 lg:px-4 hover:text-blue-200 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
              className="p-2 rounded-md hover:bg-blue-500 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden fixed bg-white w-full z-[999] top-[72px] left-0 shadow-lg text-black max-h-[calc(100vh-72px)] overflow-y-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col">
                {navLinks.map((link, i) =>
                  link.name === "Books" ? (
                    <div key={i} className="py-2 px-4 border-b border-gray-100">
                      <Book2 />
                    </div>
                  ) : link.name === "Author" ? (
                    <div key={i} className="border-b border-gray-100">
                      <div className="py-3 px-4 font-medium">{link.name}</div>
                      <div className="flex flex-col pl-6 pb-2">
                        <Link
                          href="/author"
                          className="py-2 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          About the Author
                        </Link>
                        <button
                          onClick={() => {
                            setIsDialogOpen(true);
                            setIsMenuOpen(false);
                          }}
                          className="py-2 text-left hover:text-blue-600 transition-colors"
                        >
                          Projects
                        </button>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={i}
                      href={link.href}
                      className="block py-3 px-4 border-b border-gray-100 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
