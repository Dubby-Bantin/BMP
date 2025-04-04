import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-bg-gray-light text-white py-12 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className=" text-xl mb-4">The Novel</h3>
            <p className="text-sm text-white/70 max-w-xs">
              A compelling story of adventure, discovery, and human connection
              in a world of endless possibilities.
            </p>
          </div>

          <div>
            <h4 className=" text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Author",
                "Reviews",
                "Blog",
                "Book club",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className="text-sm text-white/70 hover:text-book-accent transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className=" text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
            <p className="text-sm text-white/70">
              Email:{" "}
              <a
                href="mailto:contact@thenovel.com"
                className="hover:text-book-accent"
              >
                contact@thenovel.com
              </a>
            </p>
            <p className="text-sm text-white/70 mt-2">
              Publisher: Acme Publishing House
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-white/50 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} The Novel. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
