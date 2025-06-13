const ReviewsSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-10 md:mb-16 text-gray-800">
          What Readers Are Saying
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Review Card 1 */}
          <div className="bg-[#1da0f1] text-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md lg:max-w-lg transition-all hover:shadow-xl hover:translate-y-[-4px]">
            <div className="flex flex-col items-center gap-4">
              <div className="text-lg md:text-xl italic leading-relaxed">
                <p>
                  &quot;A personable look at a fascinating life. The author lets us
                  in to his unique journey from childhood to parenthood, from
                  student to professional, from his native land to several
                  places outside his country. It is motivational with many
                  examples of overcoming challenges. If you&apos;re looking for an
                  easy read with rich cultural references to African history,
                  specifically Nigeria, then this book is for you.&quot;
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                <small className="font-semibold text-white text-opacity-90">
                  - Uukwu, Amazon verified purchase
                </small>
              </div>
            </div>
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden md:block h-40 w-0.5 bg-white bg-opacity-30 rounded-full"></div>

          {/* Review Card 2 */}
          <div className="bg-[#1da0f1] text-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md lg:max-w-lg transition-all hover:shadow-xl hover:translate-y-[-4px]">
            <div className="flex flex-col items-center gap-4">
              <div className="text-lg md:text-xl italic leading-relaxed">
                <p>
                  &quot;Thank you for the book &apos;Young Man In A Hurry&apos;. I highly
                  recommend it. Patience, perseverance, determination,
                  persistence and preparation makes an unbeatable combination
                  for Success. The remarkable thing we have is a choice every
                  day regarding the attitude we will embrace for the day or how
                  we choose to show up for ourselves.&quot;
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                <small className="font-semibold text-white text-opacity-90">
                  - EkeleG, Amazon verified purchase
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
