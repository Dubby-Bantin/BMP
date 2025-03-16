"use client";
import React, { useState } from "react";
import { BiMailSend, BiMessageSquare, BiSend, BiUser } from "react-icons/bi";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your message. We will be in touch soon!");
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };

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
            <h2 className=" text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h2>
            <div className="w-16 h-1 bg-book-accent mb-6" />

            <p className="text-lg text-foreground/80 mb-8 max-w-lg">
              Have questions about the book, author appearances, or media
              inquiries? We'd love to hear from you.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-bg-gray-dark/10 p-3 rounded-full text-book-accent">
                  <BiMailSend size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-foreground/70">contact@thenovel.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-bg-gray-dark/10 p-3 rounded-full text-book-accent">
                  <BiMessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Literary Agent</h3>
                  <p className="text-foreground/70">agent@literaryagency.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-bg-gray-dark/5 rounded-lg border border-bg-gray-dark/10">
              <h3 className=" text-lg font-medium mb-3">
                Book Club Resources
              </h3>
              <p className="text-foreground/70 mb-4">
                Interested in featuring "The Art of Timeless Stories" in your
                book club? Contact us for discussion guides, virtual author
                visits, and special book club discounts.
              </p>
              <a
                href="#"
                className="text-book-accent font-medium hover:underline"
              >
                Download Book Club Guide
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className=" text-xl font-bold mb-6">
              Send a Message
            </h3>

            {submitMessage ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
                {submitMessage}
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/40">
                      <BiUser size={18} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-book-accent/50 focus:border-book-accent/50 outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/40">
                      <BiMailSend size={18} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-book-accent/50 focus:border-book-accent/50 outline-none transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-foreground/40">
                      <BiMessageSquare size={18} />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-book-accent/50 focus:border-book-accent/50 outline-none transition-all"
                      placeholder="Your message here..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-bg-gray-dark text-white py-3 px-6 rounded-lg hover:bg-bg-gray-dark/90 transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <BiSend size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
