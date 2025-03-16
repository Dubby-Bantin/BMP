"use client";
import { authorData } from "@/lib/utils/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";

const AuthorSection = () => {
  const {
    tagline,
    name,
    description,
    bio,
    achievements,
    contactButtonText,
    contactLink,
  } = authorData;

  return (
    <section id="author" className="py-20">
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
                <FaUser size={100} className="text-book-muted/30" />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-80 h-80 bg-book-secondary rounded-lg"></div>
            <div className="absolute -bottom-3 -left-3 px-6 py-3 bg-white shadow-lg rounded-lg">
              <p className="text-sm">Author of 5 International Bestsellers</p>
            </div>
          </div>

          {/* Author Info Column */}
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-book-accent/10 text-book-accent text-xs font-medium rounded-full">
              {tagline}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">{name}</h2>

            <div className="w-16 h-1 bg-book-accent"></div>

            <p className="text-lg leading-relaxed">{description}</p>

            <p className="text-foreground/80 leading-relaxed">{bio[0]}</p>

            <p className="text-foreground/80 leading-relaxed">{bio[1]}</p>

            <div className="flex flex-wrap gap-4 pt-4">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 bg-book-secondary/50 px-4 py-2 rounded-full"
                >
                  <item.Icon className="text-bg-gray-dark " size={18} />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>

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
