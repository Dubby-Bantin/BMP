// import AboutSection from "@/components/about";
// import AuthorSection from "@/components/author";
import AuthorBanner from "@/components/banner";
// import StorySection from "@/components/book1";
// import BookShowcase from "@/components/book-showcase";
// import ContactSection from "@/components/contact-us";
import Footer from "@/components/footer";
// import NewsletterSection from "@/components/newsletter";
// import PurchaseSection from "@/components/purchase-section";
// import ReviewsSection from "@/components/reviews";

// import { paragraphs } from "@/lib/utils/constants";

export default function Home() {
  return (
    <div>
      <AuthorBanner name="Charlie O Ukwu" imageUrl="/images/author.jpg" />
      <div className="md:px-20 py-20">
        {/* <AboutSection /> */}
        {/* <AuthorSection /> */}
        {/* <StorySection
          paragraphs={paragraphs}
          imageUrl="/images/book_cover.png"
          imagePosition="right"
        /> */}
        {/* <div className="flex items-center justify-center w-full">
          <ReviewsSection />
        </div> */}
        {/* <PurchaseSection /> */}
        {/* <NewsletterSection /> */}
        {/* <BookShowcase /> */}
        {/* <ContactSection /> */}
      </div>
      <Footer />
    </div>
  );
}
