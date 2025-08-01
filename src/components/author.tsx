"use client";
import { authorData } from "@/lib/utils/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AuthorSection = () => {
  const { tagline, name, contactButtonText, contactLink } = authorData;

  return (
    <section id="author" className="py-20 px-3 md:px-0">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700"
        >
          {/* Author Image Column */}
          <div className="relative">
            <div className="aspect-[4/5] bg-bg-gray-dark rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-book-primary/20 to-book-accent/20 flex items-center justify-center">
                <Image
                  layout="fill"
                  src={"/images/book_cover.png"}
                  alt="book_image"
                />
              </div>
            </div>
          </div>

          {/* Author Info Column */}
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-book-accent/10 text-book-accent text-xs font-medium rounded-full">
              {tagline}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">{name}</h2>

            <div className="w-16 h-1 bg-book-accent"></div>

            <p className="text-lg leading-relaxed">
              Charlie O Ukwu was born at Iva Valley, near Enugu, Nigeria, the
              first of five children, to Mr. & Mrs. Basil Maduka Ukwu. Under the
              age of twelve, he lived with his grandparents, then with his
              mother and father, and his stepmother and father, in alternate
              years. At twelve, he moved to live with a teacher for two years
              before going to high school. tical moves and uncertainties during
              his childhood appeared an inner balance — emotional,
              psychological, and structural — that is rare for someone his age.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              With the inner balance secured, it is no wonder Government
              College, Umuahia in Abia State, Ngeria, became the launching pad
              for an academic pursuit that lasted 20 years, only interrupted by
              three years of the Nigerian civil war.{" "}
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Charlie&apos;s strategy was to prioritize education and readiness
              over the pursuit of immediate financial goals. He discovered early
              that the preparation of self, through the growth of human capital,
              is the most rewarding and lasting investment one can make. He
              believes that life&apos;s mission should be bigger than chasing
              after money. Readers can explore this philosophy further in his
              upcoming book, “Money Disorder”.
            </p>

            <div className="pt-6">
              <Link
                href={contactLink}
                className="inline-flex items-center px-6 py-3 bg-bg-gray-dark text-white rounded hover:bg-book-primary/90 transition-all duration-200"
              >
                {contactButtonText}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
