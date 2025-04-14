const ReviewsSection = () => {
  return (
    <section className="grid gap-10 text-center">
      <h1 className="text-4xl font-extrabold">Reviews</h1>
      <div
        id="reviews"
        className="py-20 bg-[#1da0f1] flex items-center justify-between text-white  p-4 text-center gap-20 md:w-[70rem]"
      >
        <div className="flex flex-col items-center gap-5">
          <p>
            A personable look at a fascinating life. The author lets us in to
            his unique journey from childhood to parenthood, from student to
            professional, from his native land to several places outside his
            country. It is motivational with many examples of overcoming
            challenges. If you&apos;re looking for an easy read with rich
            cultural references to African history, specifically Nigeria, then
            this book is for you. , Amazon verified purchase.
          </p>
          <small>-Uukwu</small>
        </div>

        <div className="flex flex-col items-center gap-5">
          {" "}
          <p>
            Thank you for the book &quot;Young Man In A Hurry&quot; I highly
            recommend it. Patience, perseverance, determination, persistence and
            preparation makes an unbeatable combination for Success. The
            remarkable thing we have is a choice every day regarding the
            attitude we will embrace for the day or how we choose to show up for
            our self. I salute you. , Amazon verified purchase
          </p>
          <small>-EkeleG</small>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
