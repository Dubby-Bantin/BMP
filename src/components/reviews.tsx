const ReviewsSection = () => {
  return (
    <section className="grid gap-10 text-center">
      <h1 className="text-4xl font-extrabold">Reviews</h1>
      <div
        id="reviews"
        className="py-20 bg-[#1da0f1] flex items-center justify-between text-white  p-4 text-center gap-20 md:w-[70rem]"
      >
        <p>
          A life-changing debut novel that is an excellent guide for young
          people in our generation - Felix, PhD
        </p>
        <p>
          A great story of zeal and total commitment to hard work - Chidiogo, a
          happy reader
        </p>
      </div>
    </section>
  );
};

export default ReviewsSection;
