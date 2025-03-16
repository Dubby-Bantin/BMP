import React from "react";
import Link from "next/link";
import Image from "next/image";
import { books } from "@/lib/utils/constants";
import { cn } from "@/lib/utils/cn";
import { playwriteIT } from "@/lib/utils/fonts";

const BookShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-center ">
            Discover Your Next Books
          </h2>
          <Link href="/books" className={cn("text-sm", playwriteIT.className)}>
            VIEW ALL
          </Link>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Book Image */}
              <div className="relative h-64">
                <Image
                  src={book.image}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Book Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-2">{book.author}</p>
                {book.subtitle && (
                  <p className="text-gray-500 text-sm">{book.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookShowcase;
