
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Vehicles() {
  const vehicles = [
    { name: "Innova Crysta", seats: "6+1", img: "/innova.webp" },
    { name: "Ertiga", seats: "6+1", img: "/ertiga.webp" },
    { name: "Swift Dzire", seats: "4+1", img: "/dzire.png" },
    { name: "Alto", seats: "4+1", img: "/alto.png" },
    { name: "Tempo Traveller", seats: "12+1", img: "/traveller.png" },
    { name: "Toyota Etios", seats: "4+1", img: "/etios.png" },
  ];

  // New Rujain Travels contact number
  const whatsappNumber = "919027046585";
  const callNumber = "+919027046585";

  // WhatsApp booking message
  const handleWhatsApp = (vehicle) => {
    const message = `Hello, I want to book a ${vehicle}. Please share its availability and fare details. Thank you!`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Direct phone call
  const handleCall = () => {
    window.location.href = `tel:${callNumber}`;
  };

  return (
    <section
      id="vehicles"
      className="py-16 md:py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 inline-block pb-3 mb-12 border-b-4 border-yellow-400">
            Our Vehicles
          </h2>
        </motion.div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {vehicles.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: (i % 3) * 0.07,
                ease: "easeOut",
              }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md
                         overflow-hidden hover:shadow-xl transition-shadow duration-300
                         relative flex flex-col group"
            >
              {/* Yellow Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-yellow-400 z-10"></div>

              {/* Vehicle Image */}
              <div className="w-full h-56 sm:h-60 md:h-64 overflow-hidden flex items-center justify-center bg-white p-3">
                <img
                  src={v.img}
                  alt={`${v.name} taxi available for booking`}
                  loading="lazy"
                  className={`w-full h-full object-contain transition-transform duration-500
                    lg:group-hover:scale-105
                    ${
                      v.name === "Innova Crysta" || v.name === "Ertiga"
                        ? "scale-90"
                        : ""
                    }`}
                />
              </div>

              {/* Vehicle Details */}
              <div className="p-5 sm:p-6 text-center flex flex-col flex-grow">

                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 relative inline-block mx-auto">
                  {v.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </h3>

                <p className="text-gray-600 mt-3 text-sm sm:text-base">
                  Seating Capacity:{" "}
                  <span className="font-semibold text-gray-800">
                    {v.seats}
                  </span>
                </p>

                {/* Contact Buttons */}
                <div className="mt-6 flex items-center gap-2 sm:gap-3">

                  {/* WhatsApp */}
                  <button
                    type="button"
                    onClick={() => handleWhatsApp(v.name)}
                    aria-label={`Enquire about ${v.name} on WhatsApp`}
                    className="flex-1 min-w-0 flex items-center justify-center gap-1.5
                               bg-green-600 hover:bg-green-700 text-white font-semibold
                               py-2.5 px-2 sm:px-3 rounded-lg text-sm
                               transition-all duration-300 shadow-sm
                               active:scale-95"
                  >
                    <FaWhatsapp className="text-lg shrink-0" />
                    <span>WhatsApp</span>
                  </button>

                  {/* Call */}
                  <button
                    type="button"
                    onClick={handleCall}
                    aria-label={`Call to book ${v.name}`}
                    className="flex-1 min-w-0 flex items-center justify-center gap-1.5
                               bg-yellow-400 hover:bg-yellow-500 text-gray-900
                               font-semibold py-2.5 px-2 sm:px-3 rounded-lg
                               text-sm transition-all duration-300 shadow-sm
                               active:scale-95"
                  >
                    <FaPhoneAlt className="text-sm shrink-0" />
                    <span>Call Now</span>
                  </button>

                </div>
              </div>
            </motion.div>
          ))}

          {/* Custom Vehicle Option */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.45,
              delay: 0.12,
              ease: "easeOut",
            }}
            className="bg-white border-2 border-yellow-400 rounded-2xl
                       shadow-md p-6 flex flex-col justify-center items-center
                       text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-5">
              <FaPhoneAlt className="text-2xl text-yellow-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Need a Different Ride?
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
              Looking for another type of vehicle? We can help arrange
              a suitable cab according to your travel needs.
              Contact us for availability and fare details.
            </p>

            {/* Contact Buttons */}
            <div className="mt-7 w-full flex items-center gap-2 sm:gap-3">

              <button
                type="button"
                onClick={() => handleWhatsApp("a different vehicle")}
                className="flex-1 min-w-0 flex items-center justify-center gap-1.5
                           bg-green-600 hover:bg-green-700 text-white
                           font-semibold py-2.5 px-2 rounded-lg text-sm
                           transition-all duration-300"
              >
                <FaWhatsapp className="text-lg shrink-0" />
                <span>WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleCall}
                className="flex-1 min-w-0 flex items-center justify-center gap-1.5
                           bg-yellow-400 hover:bg-yellow-500 text-gray-900
                           font-semibold py-2.5 px-2 rounded-lg text-sm
                           transition-all duration-300"
              >
                <FaPhoneAlt className="text-sm shrink-0" />
                <span>Call Now</span>
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
