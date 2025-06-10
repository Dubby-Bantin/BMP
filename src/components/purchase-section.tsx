"use client";
import { motion } from "framer-motion";
import { BiCheck } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const retailers = [
  {
    price: "$14.61",
    link: "https://shop.ingramspark.com/b/084?ZhbfzH5mBWozMVINjEA4D8SAgiblVL5RSNYQsiqITH0",
    features: ["Paperback"],
  },
  {
    price: "$18.98",
    link: "https://shop.ingramspark.com/b/084?WGaEm9HS5eNvKwPFaPgUOQqafnP13XMbm9kdCYJ7Fna",
    features: ["Hardcover"],
  },
  {
    price: "$24.99",
    link: "#",
    features: ["Audible"],
  },
];

const PurchaseSection = () => {
  return (
    <section id="purchase" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-bg-gray-dark/10 text-book-accent text-xs font-medium rounded-full mb-4">
            Available Now
          </span>
          <h2 className=" text-3xl md:text-4xl font-bold mb-4">Get a Copy</h2>
          <div className="w-16 h-1 bg-bg-gray-dark mx-auto mb-6" />
          <p className="text-foreground/70">
            Purchase a copy of the Author’s Published books here
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700`}
        >
          {retailers.map((retailer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="p-6">
                {/* <h3 className=" text-xl font-bold mb-2">{retailer.name}</h3> */}
                {/* <p className="text-3xl font-bold text-book-accent mb-4">
                  {retailer.price}
                </p> */}

                <ul className="space-y-3 mb-6">
                  {retailer.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <BiCheck size={16} className="text-book-accent" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  target="_blank"
                  href={retailer.link}
                  className="block w-full py-3 px-4  border-2 border-black text-center rounded group"
                >
                  <span className="inline-flex items-center">
                    Buy Now
                    <BsArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Special editions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className={`mt-16 bg-book-secondary rounded-lg p-8 transition-all duration-700 delay-300`}
        ></motion.div>
      </div>
    </section>
  );
};

export default PurchaseSection;
