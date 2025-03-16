"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight, BiStar } from "react-icons/bi";
import { cn } from "@/lib/utils/cn";
import { reviewsData } from "@/lib/utils/constants";

const ReviewsSection = () => {
  const { tagline, title, description, reviews, statistics } = reviewsData;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-20 bg-bg-gray-light text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-book-accent/20 text-book-accent text-xs font-medium rounded-full mb-4">
            {tagline}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-16 h-1 bg-book-accent mx-auto mb-6" />
          <p className="text-white/70">{description}</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="transition-all duration-700"
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Reviews Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <BiStar
                            key={i}
                            size={20}
                            className={
                              i < review.rating
                                ? "text-book-accent fill-book-accent"
                                : "text-white/20"
                            }
                          />
                        ))}
                      </div>
                      <blockquote className="text-xl md:text-2xl italic mb-6">
                        &quot;{review.quote}&quot;
                      </blockquote>
                      <cite className="text-book-accent font-medium not-italic">
                        — {review.author}
                      </cite>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous review"
            >
              <BiChevronLeft size={20} />
            </button>
            <button
              onClick={nextReview}
              className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next review"
            >
              <BiChevronRight size={20} />
            </button>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    i === activeIndex ? "bg-bg-gray-dark w-6" : "bg-white/30"
                  )}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {statistics.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl text-book-accent font-bold mb-2">
                  {stat.number}
                </p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
