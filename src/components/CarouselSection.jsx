
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const HeroCarousel = () => {
  const whatsappNumber = "919027046585";

  const message =
    "Hello Rujain Travels Nainital! I would like to book a taxi. Please share the available vehicles and pricing. Thank you!";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const slides = [
    {
      image: "/images/ranikhet1.jpg",
      alt: "Scenic Ranikhet hills in Uttarakhand",
      title: "Travel the Hills with Comfort & Care",
      description:
        "Book your ride and enjoy comfortable, stress-free journeys across Uttarakhand.",
    },
    {
      image: "/images/nainital4.webp",
      alt: "Beautiful scenery of Nainital",
      title: "Explore Nainital with Reliable Rides",
      description:
        "From local sightseeing to long-distance journeys, travel comfortably with Rujain Travels.",
    },
    {
      image: "/images/jageshwardham.jpeg",
      alt: "Jageshwar Dham temple in Uttarakhand",
      title: "Discover the Spiritual Beauty of Uttarakhand",
      description:
        "Enjoy comfortable journeys to Uttarakhand's beautiful temples and spiritual destinations.",
    },
  ];

  return (
    <section
      className="relative w-full h-[75vh] min-h-[520px] sm:h-[85vh] md:h-screen overflow-hidden"
      aria-label="Rujain Travels Nainital travel destinations carousel"
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.image}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.alt}
                title={slide.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

              {/* Slide Content */}
              <motion.div
                key={slide.title}
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 text-white pb-12"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight">
                  {slide.title}
                </h2>

                <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                  {slide.description}
                </p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Persistent WhatsApp Booking Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-6 left-5 sm:bottom-10 sm:left-10 z-20 flex items-center gap-2 bg-yellow-400 text-black font-semibold px-5 sm:px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
        aria-label="Book a taxi with Rujain Travels Nainital on WhatsApp"
      >
        <FaWhatsapp className="text-xl" />
        Book Now
      </motion.a>

      {/* Swiper Navigation Styling */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 221, 0, 0.25);
          color: #FFD700;
          transition: all 0.3s ease-in-out;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 221, 0, 0.8);
          color: black;
          transform: scale(1.1);
        }

        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 34px;
            height: 34px;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
