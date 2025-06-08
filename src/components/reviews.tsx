const ReviewsSection = () => {
  return (
    <section className="grid gap-10 text-center px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold">Reviews</h1>
      <div
        id="reviews"
        className="py-10 md:py-20 bg-[#1da0f1] flex flex-col md:flex-row items-center justify-center text-white p-4 gap-10 md:gap-20 w-full max-w-[70rem] mx-auto rounded-lg"
      >
        <div className="flex flex-col items-center gap-5 max-w-md">
          <p className="text-sm md:text-base">
            A personable look at a fascinating life. The author lets us in to
            his unique journey from childhood to parenthood, from student to
            professional, from his native land to several places outside his
            country. It is motivational with many examples of overcoming
            challenges. If you&apos;re looking for an easy read with rich
            cultural references to African history, specifically Nigeria, then
            this book is for you. , Amazon verified purchase.
          </p>
          <small className="font-medium">-Uukwu</small>
        </div>

        <div className="hidden md:block h-40 w-px bg-white bg-opacity-50"></div>

        <div className="flex flex-col items-center gap-5 max-w-md">
          <p className="text-sm md:text-base">
            Thank you for the book &quot;Young Man In A Hurry&quot; I highly
            recommend it. Patience, perseverance, determination, persistence and
            preparation makes an unbeatable combination for Success. The
            remarkable thing we have is a choice every day regarding the
            attitude we will embrace for the day or how we choose to show up for
            our self. I salute you. , Amazon verified purchase
          </p>
          <small className="font-medium">-EkeleG</small>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
