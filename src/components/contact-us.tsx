"use client";
import React from "react";
import { BiMailSend, BiMap, BiPhone, BiBuilding } from "react-icons/bi";

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-bg-gray-dark/30">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-700 `}
        >
          {/* Content Column */}
          <div>
            <span className="inline-block px-3 py-1 bg-bg-gray-dark/10 text-book-accent text-xs font-medium rounded-full mb-4">
              Get in Touch
            </span>
            <h2 className=" text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <div className="w-16 h-1 bg-book-accent mb-6" />

            <p className="text-lg text-foreground/80 mb-8 max-w-lg">
              For event bookings and more enquiries, please contact us using the information below.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-bg-gray-dark/10 p-3 rounded-full text-book-accent">
                  <BiBuilding size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Organization</h3>
                  <p className="text-foreground/70">bmpUnited</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-bg-gray-dark/10 p-3 rounded-full text-book-accent">
                  <BiMap size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-foreground/70">1501 Timber Wolf Dr. Durham, NC 27713</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-bg-gray-dark/10 p-3 rounded-full text-book-accent">
                  <BiPhone size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:8883370785" className="text-foreground/70">888.337.0785</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-bg-gray-dark/10 p-3 rounded-full text-book-accent">
                  <BiMailSend size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:Charlie.Ukwu@bmpu.org"
                    className="text-foreground/70"
                  >
                    Charlie.Ukwu@bmpu.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="bg-white rounded-lg shadow-lg p-8 h-full">
            <h3 className="text-xl font-bold mb-6">Our Location</h3>
            <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.5662310975384!2d-78.9140344!3d35.8726247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace40f8e2b174d%3A0xf5e108d0485844!2s1501%20Timber%20Wolf%20Dr%2C%20Durham%2C%20NC%2027713!5e0!3m2!1sen!2sus!4v1652367892548!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="bmpUnited Location"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-foreground/70">Visit us at our office in Durham, NC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
