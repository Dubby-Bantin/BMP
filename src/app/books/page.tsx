import Footer from "@/components/footer";
import { paragraphs } from "@/lib/utils/constants";
import ReviewsSection from "@/components/reviews";
import StorySection from "@/components/book1";
import PurchaseSection from "@/components/purchase-section";

export default function BooksPage() {
  return (
    <div>
      <div className="md:px-20 py-20">
        {/* <AboutSection /> */}
        {/* <AuthorSection /> */}
        <StorySection
          paragraphs={paragraphs}
          imageUrl="/images/book_cover.png"
          imagePosition="right"
        />
        <PurchaseSection />
        <div className="flex items-center justify-center w-full">
          <ReviewsSection />
        </div>
        {/* <NewsletterSection /> */}
        {/* <BookShowcase /> */}
        {/* <ContactSection /> */}
      </div>
      <Footer />
    </div>
  );
}
