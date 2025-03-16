"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiAward, BiBookOpen } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
const AuthorSection = () => {
  return (
    <section id="author" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700`}
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
              <p className=" text-sm">
                Author of 5 International Bestsellers
              </p>
            </div>
          </div>

          {/* Author Info Column */}
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-book-accent/10 text-book-accent text-xs font-medium rounded-full">
              Meet the Author
            </span>

            <h2 className=" text-3xl md:text-4xl font-bold">
              Jane Doe
            </h2>

            <div className="w-16 h-1 bg-book-accent"></div>

            <p className="text-lg leading-relaxed">
              Jane Doe is an award-winning author known for her lyrical prose
              and complex, emotionally resonant characters.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Born in Chicago and educated at Columbia University, Jane spent
              her early career as a journalist before publishing her first
              novel, "Whispers in Winter," which won the National Book Award.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Her work explores the intersection of history, mythology, and
              modern life, focusing on how ancient narratives continue to shape
              our understanding of ourselves and our place in the world.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {[
                {
                  icon: <BiAward size={18} className="text-bg-gray-dark" />,
                  text: "Pulitzer Prize Winner",
                },
                {
                  icon: <BiBookOpen size={18} className="text-bg-gray-dark" />,
                  text: "Published in 24 Languages",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 bg-book-secondary/50 px-4 py-2 rounded-full"
                >
                  {item.icon}
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-bg-gray-dark text-white rounded hover:bg-book-primary/90 transition-all duration-200"
              >
                Contact for Events
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
