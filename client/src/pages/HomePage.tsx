import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import SearchSection from "@/components/home/SearchSection";
import ServicesSection from "@/components/home/ServicesSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SearchSection />
        <ServicesSection />
        <DestinationsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
