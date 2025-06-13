"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";

interface AuthorBannerProps {
  name: string;
  imageUrl: string;
}

const AuthorBanner: React.FC<AuthorBannerProps> = ({ name, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = [
    "Charlie O Ukwu, (Diploma, Mass Communication, University of Lagos Nigeria), BA (Journalism/ Economics, Indiana University, Bloomington, Indiana, USA), MA (Economics, Indiana University, Bloomington, Indiana, USA), MA (Business Computing Science, Texas A&M University, College Station, Texas USA) was born the son of a coal miner at Iva Valley, near Enugu, Nigeria.",
    "Despite a 6-year exciting job at Nigerian Broadcasting Corporation, Charlie Ieft, cast his faith to the wind, to pursue learning and education to acquire the credentials detailed above. This strategy worked so well that he recommends this method for all young people rather than chasing after money as their goal in life. Everyone's life mission ought to be bigger than money. Readers will learn more about this matter in an upcoming book, Money Disorder.",
  ];

  const truncatedText = fullText.slice(0, 1);

  return (
    <div className="relative rounded-xl overflow-hidden w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 px-4 sm:px-6 lg:px-8 py-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left md:pl-10 lg:pl-20 order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            {name}
          </h1>

          <div className="text-gray-700 mb-6 text-base sm:text-lg md:text-xl">
            {(isExpanded ? fullText : truncatedText).map((paragraph, index) => (
              <p key={index} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            {isExpanded ? "Read Less" : "Read More..."}
          </button>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-1/2 order-1 md:order-2 relative aspect-square h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            fill
            src={imageUrl}
            alt={`${name}`}
            className="object-cover shadow-lg rounded-lg"
            priority
          />
        </div>

        {/* Floating Waitlist Card - Desktop Only */}
        <div className="hidden md:flex shadow-lg absolute rounded-xl h-auto w-[280px] lg:w-[320px] bg-white right-[5%] lg:right-[10%] top-1/2 transform -translate-y-1/2 flex-col items-center justify-between p-4 lg:p-6 gap-3 border border-gray-100">
          <h1 className="text-[#1da0f1] font-bold text-xl lg:text-2xl text-center">
            Be the first to know!{" "}
          </h1>
          <p className="text-sm lg:text-base text-center text-gray-600">
            Get notified when{" "}
            <span className="italic font-semibold">MONEY DISORDER</span> and
            other book updates are live. Join the waitlist{" "}
          </p>
          <Button
            className="bg-black text-white hover:bg-gray-800 w-full transition-colors"
            asChild
            variant={"outline"}
          >
            <Link href={"#contact"}>Join the waitlist!</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Waitlist Card - Shows at bottom on mobile */}
      <div className="md:hidden shadow-lg rounded-xl bg-white mx-4 mb-4 p-4 flex flex-col items-center justify-between gap-3 border border-gray-100">
        <h1 className="text-[#1da0f1] font-bold text-xl text-center">
          Be the first to know!{" "}
        </h1>
        <p className="text-sm text-center text-gray-600">
          Get notified when{" "}
          <span className="italic font-semibold">MONEY DISORDER</span> and other
          book updates are live.
        </p>
        <Button
          className="bg-black text-white hover:bg-gray-800 w-full transition-colors"
          asChild
          variant={"outline"}
        >
          <Link href={"#contact"}>Join the waitlist!</Link>
        </Button>
      </div>
    </div>
  );
};

export default AuthorBanner;
