"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { cn } from "../lib/utils/cn";
// import { playwriteIT } from "../lib/utils/fonts";
// import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative flex flex-col justify-center items-center text-white bg-[url(/images/book_cover.png)] bg-cover bg-no-repeat bg-center w-full md:min-h-[100vh] h-[45rem]">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      />
      {/* <motion.div
        initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
        animate={{ opacity: 1, x: 0 }} // Animate to visible position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        className="absolute md:block hidden h-[35rem] w-full md:w-[40rem] -left-15 top-0"
      >
        <Image
          src={"/images/bg-image1_enhanced.png"}
          alt="Background Image 1"
          layout="fill"
          objectFit="cover"
          className="object-left"
        />
      </motion.div> */}

      {/* <motion.div
        initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
        animate={{ opacity: 1, x: 0 }} // Animate to visible position
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="absolute h-[35rem] w-full md:w-[40rem] right-0 top-0"
      >
        <Image
          src={"/images/bg-image2.png"}
          alt="Background Image 2"
          layout="fill"
          objectFit="cover"
          className="object-right"
        />
      </motion.div> */}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        className="relative text-center max-w-2xl px-4"
      >
        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className={cn(
            "text-4xl md:text-5xl font-bold mb-4",
            playwriteIT.className
          )}
        >
          Publishing House
        </motion.h1> */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          className="text-lg mb-6"
        >
          A story of how one hungry young man in a hurry triumphed over poverty
          and child labor in Nigeria to walk the halls of corporate giants in
          the United States and the United Kingdom.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 2 }}
        >
          <Link
            href="testimonials"
            className="px-8 py-4 rounded-full bg-button font-semibold hover:bg-gray-100 hover:text-button transition duration-300"
          >
            READ MORE
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Banner;
