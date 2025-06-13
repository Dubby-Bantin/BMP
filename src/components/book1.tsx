import Image from "next/image";
import React from "react";

interface StorySectionProps {
  paragraphs: string[];
  imageUrl: string;
  imagePosition?: "left" | "right";
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const StorySection: React.FC<StorySectionProps> = ({
  paragraphs,
  imageUrl,
  imagePosition = "left",
  title = "YOUNG MAN IN A HURRY: Son of Mary",
  subtitle,
  ctaText,
  ctaLink,
}) => {
  return (
    <section
      id="book1"
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title.split(":")[0]}
            <span className="italic">: {title.split(":")[1]}</span>
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className={`flex flex-col ${
            imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
          } gap-8 md:gap-12 lg:gap-16 items-center`}
        >
          {/* Image */}
          <div className="md:w-1/2 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              fill
              src={imageUrl}
              alt="Book cover image"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 w-full space-y-6 md:space-y-8">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose text-gray-700"
              >
                {paragraph}
              </p>
            ))}

            {ctaText && ctaLink && (
              <div className="pt-4">
                <a
                  href={ctaLink}
                  className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  {ctaText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
