import { FaMailBulk } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const NewsletterSection = () => {
  return (
    <section id="bookclub" className="pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700`}
        >
          <span className="inline-block px-3 py-1 bg-bg-gray-dark/10 text-book-accent text-xs font-medium rounded-full mb-4">
            Stay Updated
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Join Our Newsletter
          </h2>
          <div className="w-16 h-1 bg-book-accent mx-auto mb-6" />

          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Subscribe to receive updates about book signings, new releases,
            exclusive content, and more from the author.
          </p>

          {/* {isSuccess ? (
            <div className="flex items-center justify-center space-x-2 text-book-accent bg-book-accent/10 p-4 rounded-lg">
              <CheckCircle size={20} />
              <span>Thank you for subscribing! Check your inbox soon.</span>
            </div>
          ) : ( */}
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow border rounded-sm p-1 border-bg-gray-dark">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/40">
                  <FaMailBulk size={18} />
                </div>
                <input
                  type="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="pl-10 w-full outline-none"
                  aria-label="Email address for newsletter"
                />
              </div>
              <button
                type="submit"
                //   disabled={isSubmitting}
                className="bg-bg-gray-dark text-center hover:bg-bg-gray-dark/90 text-white flex items-center justify-center p-[6px] rounded-sm"
              >
                {/* {isSubmitting ? (
                    "Subscribing..."
                  ) : (
                    <> */}
                Yes I&apos;m in
                <FaArrowRight size={16} className="ml-2" />
                {/* </>
                  )} */}
              </button>
            </div>
            {/* {error && (
                <p className="mt-2 text-destructive text-sm">{error}</p>
              )} */}
          </form>
          {/* )} */}

          <p className="text-sm text-foreground/50 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
