import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SearchSection } from "./components/SearchSection";
import { PopularDestinations } from "./components/PopularDestinations";
import { TravelCategories } from "./components/TravelCategories";
import { SpecialOffers } from "./components/SpecialOffers";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3e7e0] font-poppins">
      <Header />
      <Hero />
      <SearchSection />
      <PopularDestinations />
      <TravelCategories />
      <SpecialOffers />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}