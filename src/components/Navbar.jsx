
import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  const phoneNumber = "+919027046585";
  const whatsappNumber = "919027046585";
  const email = "maliksadab841@gmail.com";

  const bookingMessage =
    "Hello Rujain Travels Nainital! I am interested in booking a cab. Please share your available vehicles, pricing, and booking details. Thank you!";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    bookingMessage
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setShowHamburger(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50 shadow-md">

      {/* Top Bar */}
      <div
        className="hidden lg:flex bg-yellow-400 text-black justify-between items-center px-6 text-sm transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          height: showTopBar ? "40px" : "0px",
          opacity: showTopBar ? 1 : 0,
        }}
      >
        <div className="flex items-center gap-6">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 hover:text-amber-800 transition"
          >
            <FaPhoneAlt />
            +91 9027046585
          </a>

          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              "Cab Booking Inquiry - Rujain Travels Nainital"
            )}&body=${encodeURIComponent(
              "Hello Rujain Travels Nainital,\n\nI am interested in booking a cab. Please share your available vehicles, pricing, and booking details.\n\nThank you!"
            )}`}
            className="flex items-center gap-2 hover:text-amber-800 transition"
          >
            <FaEnvelope />
            {email}
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-black text-white flex justify-between items-center px-4 sm:px-6 py-3 relative">

        {/* Logo and Business Name */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2 min-w-0"
        >
          <img
            src="/logo.png"
            alt="Rujain Travels Nainital Logo"
            className="h-9 sm:h-10 w-auto object-contain"
          />

          <h1 className="font-bold text-sm sm:text-base">
            <span className="text-yellow-400">
              Rujain Travels
            </span>{" "}
            Nainital
          </h1>
        </a>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden text-2xl p-2"
          onClick={() => setShowHamburger(!showHamburger)}
          aria-label={showHamburger ? "Close menu" : "Open menu"}
          aria-expanded={showHamburger}
        >
          {showHamburger ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-6 font-medium">
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
              <a href="#vehicles" className="hover:text-yellow-400 transition">
                Vehicles
              </a>
            </li>
            <li>
              <a href="#locations" className="hover:text-yellow-400 transition">
                Locations
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* WhatsApp Booking */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-6 py-2 font-semibold rounded-full border-2 border-yellow-400 bg-yellow-400 text-black shadow-md hover:bg-black hover:text-yellow-400 transition-all duration-300"
          >
            Book a Taxi
          </a>
        </div>

        {/* Mobile Dropdown */}
        <ul
          className={`lg:hidden absolute top-full right-0 z-30 bg-yellow-600 w-full sm:w-1/2 text-white flex flex-col items-center gap-7 py-8 font-medium shadow-xl transition-all duration-300 ease-in-out ${
            showHamburger
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-3 invisible pointer-events-none"
          }`}
        >
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About Us</a>
          </li>
          <li>
            <a href="#vehicles" onClick={closeMenu}>Vehicles</a>
          </li>
          <li>
            <a href="#locations" onClick={closeMenu}>Locations</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>

          <li>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-2 bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold"
            >
              <FaWhatsapp />
              Book a Taxi
            </a>
          </li>

          <li>
            <a
              href={`tel:${phoneNumber}`}
              onClick={closeMenu}
              className="flex items-center gap-2"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
