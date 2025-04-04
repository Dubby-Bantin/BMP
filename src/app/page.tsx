// import AboutSection from "@/components/about";
import AuthorSection from "@/components/author";
import AuthorBanner from "@/components/banner";
import StorySection from "@/components/book1";
// import BookShowcase from "@/components/book-showcase";
import ContactSection from "@/components/contact-us";
import Footer from "@/components/footer";
import NewsletterSection from "@/components/newsletter";
import PurchaseSection from "@/components/purchase-section";
import ReviewsSection from "@/components/reviews";
import { paragraphs } from "@/lib/utils/constants";

export default function Home() {
  return (
    <div>
      <AuthorBanner
        name="Charlie O Ukwu"
        bio="Charlie O Ukwu, (Diploma (Mass Communication, University of Lagos Nigeria), BA (Journalism/Economics, Indiana University, Bloomington, Indie USA), MA (Economics, Indiana University, Bloomington, Indiana, USA), M (Business Computing Science, Texas A&M University, College Station, Te
USA)) was born the son of a coal miner at Iva Valley, near Enugu, Nigeria.
Despite a 6-year exciting job at Nigerian Broadcasting Corporation, Charlie I cast his faith to the wind, to pursue learning and education to acquire t credentials detailed above. This strategy worked so well that he recommends th method for all young people rather than chasing after money as their goal in lit Everyone's life mission ought to be bigger than money. Readers will learn mot about this matter in an upcoming book, Money Disorder.
"
        imageUrl="/images/Uncle C pic.jpeg"
      />
      <div className="md:px-20 py-20">
        {/* <AboutSection /> */}
        <AuthorSection />
        <div className="flex items-center justify-center w-full">
          <ReviewsSection />
        </div>
        <StorySection
          title={`"Young Man In A Hurry" : Son of Mary by Charlie O. Ukwu`}
          paragraphs={paragraphs}
          imageUrl="/images/book_cover.png" // Replace with actual image path
          imagePosition="right" // or "left"
        />
        <PurchaseSection />
        <NewsletterSection />
        {/* <BookShowcase /> */}
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
