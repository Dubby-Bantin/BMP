import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { navLinks } from "@/lib/utils/constants";

const Footer = () => {
  return (
    <footer className="bg-bg-gray-light text-white py-12 mt-16 px-5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex  justify-between gap-8">
          <div className="">
            <h4 className=" text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 grid grid-cols-2">
              {navLinks.map(({ href, name }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/70 hover:text-book-accent transition-colors duration-200"
                  >
                    {name}
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
                href="mailto:Charlie.Ukwu@bmpu.org"
                className="hover:text-book-accent"
              >
                Charlie.Ukwu@bmpu.org
              </a>
            </p>
          </div>
        </div>

        <div className="mt-5 pt-2 border-t border-white/10 text-sm text-white/50 flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} Charlie O Ukwu. All rights reserved.
          </p>
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
