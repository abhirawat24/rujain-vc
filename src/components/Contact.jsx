
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const PHONE_NUMBER = "+919027046585";
const WHATSAPP_NUMBER = "919027046585";
const EMAIL = "maliksadab841@gmail.com";

export default function Contact() {
  const whatsappMessage =
    "Hello Rujain Travels Nainital! I would like to enquire about cab booking. Please share your available vehicles and fare details. Thank you!";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="contact" className="relative py-24 bg-gray-50">
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Contact Us
        </h2>

        <p className="text-gray-600 mb-12 text-lg">
          Get in touch with Rujain Travels Nainital for bookings and
          inquiries. We're here to help you{" "}
          <span className="font-semibold text-yellow-500">24/7</span>.
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            {/* Phone Call */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-3 border-2 border-yellow-400 bg-yellow-50 text-black px-6 py-4 rounded-xl hover:bg-yellow-400 hover:shadow-lg transition text-base sm:text-lg font-medium w-full sm:w-auto justify-center"
            >
              <FaPhoneAlt className="text-2xl text-yellow-500" />
              +91 9027046585
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-2 border-green-500 bg-green-50 text-green-600 px-6 py-4 rounded-xl hover:bg-green-500 hover:text-white hover:shadow-lg transition text-base sm:text-lg font-medium w-full sm:w-auto justify-center"
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 border-2 border-red-500 bg-red-50 text-red-600 px-6 py-4 rounded-xl hover:bg-red-500 hover:text-white hover:shadow-lg transition text-base sm:text-lg font-medium w-full sm:w-auto justify-center"
            >
              <FaEnvelope className="text-2xl" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
