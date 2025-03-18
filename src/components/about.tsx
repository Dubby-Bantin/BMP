"use client";
import { aboutData } from "@/lib/utils/constants";
import { motion } from "framer-motion";

const AboutSection = () => {
  const {
    tagline,
    title,
    description,
    bookExcerpt,
    bookDetails,
    readerReviews,
  } = aboutData;

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-bg-gray-dark text-white text-xs font-medium rounded-full mb-4">
            {tagline}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-16 h-1 bg-bg-gray-dark mx-auto mb-6" />
          <p className="text-foreground/70">{description}</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className=" gap-12 items-center transition-all duration-700"
        >
          {/* Left side: Description */}
          <div className="space-y-6 grid items-center justify-center w-full gap-5">
            {/* Right side: Book excerpt */}
            <div className="bg-white rounded-lg p-6 shadow-lg relative ">
              <blockquote className="text-lg italic text-foreground/80 mb-6">
                {bookExcerpt.quote}
              </blockquote>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                {bookExcerpt.text}
              </p>
              {/* <p className="text-right text-sm">{bookExcerpt.page}</p> */}

              <div className="mt-8 pt-6 border-t border-gray-100">
                {/* <h4 className="font-medium mb-3">What readers are saying:</h4> */}
                <p className="text-sm text-foreground/70 italic">
                  {readerReviews.review}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-10 ">
              {bookDetails.map(({ title, desc, Icon }, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon className="text-bg-gray-dark " size={20} />
                    <h3 className="font-medium">{title}</h3>
                  </div>
                  <p className="text-sm text-foreground/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
