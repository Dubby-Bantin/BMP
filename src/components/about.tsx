"use client";
import { motion } from "framer-motion";
import { BiBookOpen, BiHeart } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
import { FaHeart } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-book-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-bg-gray-dark text-white text-xs font-medium rounded-full mb-4">
            The Story
          </span>
          <h2 className=" text-3xl md:text-4xl font-bold mb-4">
            About the Book
          </h2>
          <div className="w-16 h-1 bg-bg-gray-dark mx-auto mb-6" />
          <p className="text-foreground/70">
            Discover the journey, themes and inspiration behind this captivating
            story
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700`}
        >
          {/* Left side: Description */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              "The Art of Timeless Stories" takes readers on a journey through
              the life of protagonist Alex Rivera, a struggling writer who
              discovers an ancient manuscript with the power to bring stories to
              life.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Set against the backdrop of modern New York and ancient
              Alexandria, the novel explores themes of creativity, legacy, and
              the enduring power of storytelling. As Alex delves deeper into the
              manuscript's origins, he uncovers secrets that have been hidden
              for centuries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {[
                {
                  icon: <BiBookOpen size={20} className="text-bg-gray-dark" />,
                  title: "Genre",
                  desc: "Literary Fiction",
                },
                {
                  icon: <CgLock size={20} className="text-bg-gray-dark" />,
                  title: "Published",
                  desc: "June 2023",
                },
                {
                  icon: <BiHeart size={20} className="text-bg-gray-dark" />,
                  title: "Rating",
                  desc: "4.8/5 (942 reviews)",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    {item.icon}
                    <h3 className="font-medium">{item.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Book excerpt */}
          <div className="bg-white rounded-lg p-6 shadow-lg relative">
            <div className="absolute -top-3 -left-3 w-16 h-8 bg-bg-gray-dark rounded-full flex items-center justify-center text-white text-xs font-medium">
              Excerpt
            </div>
            <blockquote className=" text-lg italic text-foreground/80 mb-6">
              "The stories we tell define not just who we are, but who we might
              become. Each word written is a possibility, each sentence a new
              world waiting to be born."
            </blockquote>
            <p className="text-sm text-foreground/60 leading-relaxed mb-6">
              Alex stared at the ancient parchment, its edges crumbling with
              age. The text seemed to shimmer as he read, the ink catching the
              light in impossible ways. He could feel the weight of centuries in
              every carefully inscribed letter, as if the very history of
              storytelling itself was being channeled through his fingertips.
            </p>
            <p className="text-right text-sm">Page 42</p>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-medium mb-3">What readers are saying:</h4>
              <p className="text-sm text-foreground/70 italic">
                "A masterpiece that redefines the boundaries between reality and
                fiction. Doe's prose is elegant, her characters unforgettable."
              </p>
              <p className="text-right text-xs text-book-accent mt-2">
                — The Literary Review
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
