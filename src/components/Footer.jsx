
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const phoneNumber = "+919027046585";
  const whatsappNumber = "919027046585";
  const email = "maliksadab841@gmail.com";

  const bookingMessage =
    "Hello Rujain Travels Nainital! I would like to book a cab. Please share the available vehicles and pricing. Thank you!";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    bookingMessage
  )}`;

  return (
    <footer className="relative bg-black text-white py-16 px-6 md:px-20 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_#facc15,_transparent_40%),radial-gradient(circle_at_bottom_right,_#facc15,_transparent_40%)]"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 border-b border-gray-700 pb-12">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/logo.png"
              alt="Rujain Travels Nainital Logo"
              className="h-12 w-auto object-contain"
            />

            <h2 className="text-2xl font-bold">
              <span className="text-yellow-400">
                Rujain Travels
              </span>{" "}
              Nainital
            </h2>
          </div>

          <p className="text-gray-400 text-base leading-relaxed">
            Your trusted travel partner for comfortable and
            reliable taxi services in Nainital and across
            Uttarakhand. We are here to make every journey
            safe, convenient, and memorable.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            Book Your Ride
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-6 border-b border-yellow-400 pb-2 w-fit">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#locations" className="hover:text-yellow-400 transition">
                Locations
              </a>
            </li>
            <li>
              <a href="#vehicles" className="hover:text-yellow-400 transition">
                Our Vehicles
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-6 border-b border-yellow-400 pb-2 w-fit">
            Contact Us
          </h3>

          <ul className="space-y-5 text-gray-300">

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400 shrink-0" />
              <a
                href={`tel:${phoneNumber}`}
                className="hover:text-yellow-400 transition"
              >
                +91 9027046585
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-yellow-400 shrink-0" />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                WhatsApp Us
              </a>
            </li>

            <li className="flex items-start gap-3">
              <FaEnvelope className="text-yellow-400 mt-1 shrink-0" />
              <a
                href={`mailto:${email}`}
                className="hover:text-yellow-400 transition break-all"
              >
                {email}
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative text-center text-gray-400 text-sm mt-10">
        <div className="border-t border-gray-700 pt-6 leading-relaxed">

          <p>
            © 2025 Rujain Travels Nainital. All Rights Reserved.
          </p>

          <p className="mt-2">
            Designed &amp; Developed by{" "}
            <a
              href="https://www.linkedin.com/in/abhishekrawat24/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-yellow-400 hover:text-yellow-300 transition underline underline-offset-4"
            >
              Abhishek Rawat
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
