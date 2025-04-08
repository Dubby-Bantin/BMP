import Image from "next/image";
import React from "react";

interface StorySectionProps {
  title?: string;
  paragraphs: string[];
  imageUrl: string;
  imagePosition?: "left" | "right"; // Choose image alignment
}

const StorySection: React.FC<StorySectionProps> = ({
  title,
  paragraphs,
  imageUrl,
  imagePosition = "left",
}) => {
  return (
    <section id="book1" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            <span className="italic">{title.slice(0, 20)}</span>
            {title.slice(20)}
          </h2>
        )}
        <div
          className={`flex flex-col ${
            imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
          } gap-8 md:gap-12 items-center`}
        >
          {/* Image */}
          <div className="md:w-1/2 h-[45rem] w-full relative">
            <Image
              layout="fill"
              src={imageUrl}
              alt="Story Illustration"
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 w-full space-y-6 text-gray-700">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
