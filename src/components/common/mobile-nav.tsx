"use client";

import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import Video from "../video";

export function MobileNav() {
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);

  // Helper to close sheet and dialog
  const handleCloseSheet = () => setOpen(false);

  // Wrap Link to close sheet on click
  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="px-6 py-3 border-b hover:text-blue-600"
      onClick={handleCloseSheet}
    >
      {children}
    </Link>
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open Menu"
          className="md:hidden p-2 rounded-md hover:bg-blue-500 transition-colors"
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
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-72 bg-white text-black">
        <nav className="flex flex-col py-6">
          <NavLink href="/">Home</NavLink>
          <div className="px-6 py-3 border-b">
            <div className="font-medium mb-2">Author</div>
            <div className="flex flex-col pl-2">
              <Link
                href="/author"
                className="py-2 hover:text-blue-600"
                onClick={handleCloseSheet}
              >
                About the author
              </Link>
              <Link
                href="/projects"
                className="py-2 hover:text-blue-600"
                onClick={handleCloseSheet}
              >
                Projects
              </Link>
              {/* <button
                onClick={() => {
                  setOpenDialog(true);
                  handleCloseSheet();
                }}
                className="py-2 text-left hover:text-blue-600"
              >
                Projects
              </button> */}
            </div>
          </div>
          <div className="px-6 py-3 border-b">
            <div className="font-medium mb-2">Books</div>
            <div className="flex flex-col pl-2">
              <Link
                href="/books"
                className="py-2 hover:text-blue-600"
                onClick={handleCloseSheet}
              >
                Young man in a hurry: Son of Mary
              </Link>
              <Link
                href="/money-disorder"
                className="py-2 hover:text-blue-600"
                onClick={handleCloseSheet}
              >
                Money Disorder
              </Link>
            </div>
          </div>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
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
      </SheetContent>
    </Sheet>
  );
}
