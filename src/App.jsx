
import { FaWhatsapp } from "react-icons/fa";
import "./App.css";

import CarouselSection from "./components/CarouselSection";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Vehicles from "./components/Vehicles";
import Locations from "./components/Locations";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const whatsappNumber = "919027046585";

  const whatsappMessage =
    "Hello Rujain Travels Nainital! I am interested in booking a cab. Could you please share your available vehicles and pricing? Thank you!";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Preloader />

      <div>
        <Navbar />
        <CarouselSection />
        <HeroSection />
        <Vehicles />
        <Locations />
        <About />
        <Location />
        <Contact />
        <Footer />
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rujain Travels Nainital on WhatsApp"
        className="
          fixed
          right-4
          bottom-[calc(20px+env(safe-area-inset-bottom))]
          sm:right-6
          sm:bottom-6
          z-[9998]
          flex
          items-center
          gap-2
          rounded-full
          bg-green-500
          px-4
          py-3
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:bg-green-600
          hover:scale-105
        "
      >
        <FaWhatsapp className="text-2xl shrink-0" />

        <span className="hidden lg:block text-sm font-medium whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </>
  );
}

export default App;
