
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const bookingMessage =
    "Hello Rujain Travels Nainital! I am interested in booking a cab. Could you please share your available vehicles, pricing, and booking details? I would appreciate your assistance. Thank you!";

  const whatsappLink = `https://wa.me/919027046585?text=${encodeURIComponent(
    bookingMessage
  )}`;

  return (
    <section
      className="bg-gradient-to-r from-yellow-50 via-white to-gray-50 py-16 px-5 sm:px-8 md:px-12 lg:px-20"
      id="about"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Company Logo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <img
            src="/logo.png"
            alt="Rujain Travels Nainital Logo"
            className="rounded-xl w-52 sm:w-60 md:w-64 lg:w-72 object-contain"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-yellow-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Get to Know Us
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            About{" "}
            <span className="text-yellow-500">
              Rujain Travels Nainital
            </span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
            Established in{" "}
            <span className="font-semibold text-gray-900">2015</span>,
            Rujain Travels Nainital has been committed to providing
            safe, comfortable, and reliable transportation across
            Uttarakhand and beyond. Over the years, we have built
            our reputation by making every journey convenient and
            memorable for tourists and local travellers alike.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
            Whether you are planning a local sightseeing trip,
            an outstation journey, or a long-distance tour, we aim
            to make your travel experience smooth and hassle-free.
            Our focus is on dependable service, comfortable rides,
            and a convenient booking experience.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
            Our fleet features well-maintained vehicles suited
            to different travel needs, accompanied by professional
            drivers. With availability around the clock, we strive
            to make your travel plans easier, whenever you need us.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            At{" "}
            <span className="font-semibold text-yellow-600">
              Rujain Travels Nainital
            </span>
            , your comfort, convenience, and satisfaction remain
            at the heart of everything we do. Let us make your
            next journey through the beautiful landscapes of
            Uttarakhand a memorable one.
          </p>

          {/* WhatsApp Booking CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a ride with Rujain Travels Nainital on WhatsApp"
            className="inline-flex items-center justify-center gap-2 mt-7 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            Book Your Ride
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
