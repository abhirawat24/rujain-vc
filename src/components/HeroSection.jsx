
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  const phoneNumber = "+919027046585";
  const whatsappNumber = "919027046585";

  const message =
    "Hello Rujain Travels Nainital! I am interested in booking a cab. Please share your available vehicles, pricing, and booking details. Thank you!";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="home"
      className="bg-black text-white w-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-5 sm:px-8 md:px-16 pt-28 pb-12 md:py-20 overflow-hidden"
    >
      {/* Left Content */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex-1 flex flex-col gap-6 text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Reliable{" "}
          <span className="text-yellow-400">Taxi Service</span>
          <br />
          in Nainital
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
          Travel comfortably with Rujain Travels Nainital. Book a cab for
          local sightseeing, airport transfers, and outstation trips.
          We're here to make your journey easy and comfortable.
        </p>

        {/* Booking Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[220px]"
          >
            <span className="w-full h-12 flex items-center justify-center gap-2 font-semibold rounded-full border-2 border-yellow-400 bg-yellow-400 text-black shadow-md hover:bg-black hover:text-yellow-400 transition-all duration-300">
              <FaWhatsapp className="text-xl" />
              Book on WhatsApp
            </span>
          </a>

          {/* Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="w-full sm:w-[220px]"
          >
            <span className="w-full h-12 flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
              <FaPhoneAlt className="text-lg" />
              Call Now
            </span>
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex-1 flex justify-center items-center w-full"
      >
        <img
          src="/heroSection1.png"
          alt="Comfortable cab service by Rujain Travels Nainital"
          className="max-w-[260px] sm:max-w-[340px] md:max-w-[420px] w-full h-auto object-contain drop-shadow-2xl"
          loading="eager"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
