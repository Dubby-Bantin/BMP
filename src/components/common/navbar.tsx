"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/utils/constants";
import Book2 from "../md-book";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="bg-[#1da0f1] text-white sticky top-0 z-[9999] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex-shrink-0">
            <Image height={110} width={110} src="/images/logo.png" alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link, i) =>
              link.name === "Books" ? (
                <Book2 key={i} />
              ) : (
                <Link key={i} href={link.href} className="hover:text-blue-300">
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute bg-white w-full z-[999] top-[100%] left-0 shadow-lg text-black"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, i) =>
                link.name === "Books" ? (
                  <div key={i} className="py-2 px-4">
                    <Book2 />
                  </div>
                ) : (
                  <Link
                    key={i}
                    href={link.href}
                    className="block py-3 px-4 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
