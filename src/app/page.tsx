import AboutSection from "@/components/about";
import AuthorSection from "@/components/author";
import Banner from "@/components/banner";
import BookShowcase from "@/components/book-showcase";
import ContactSection from "@/components/contact-us";
import Footer from "@/components/footer";
import PurchaseSection from "@/components/purchase-section";
import ReviewsSection from "@/components/reviews";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="md:px-20 py-20">
        <AboutSection />
        <AuthorSection />
        <ReviewsSection />
        <PurchaseSection />
        <BookShowcase />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
