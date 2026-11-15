
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt, FaArrowRight, FaTimes } from "react-icons/fa";

const WHATSAPP_NUMBER = "919027046585";

const locations = [
  {
    name: "Nainital",
    distance: "35 km",
    img: "/images/nainital_l.webp",
    note: "The beautiful Lake City of Uttarakhand.",
    desc: "Explore Naini Lake, Mall Road, Naina Devi Temple and the beautiful viewpoints surrounding this popular hill station.",
  },
  {
    name: "Almora",
    distance: "90 km",
    img: "/images/almora_l.jpg",
    note: "A peaceful town with rich Kumaoni culture.",
    desc: "Discover traditional Kumaoni culture, ancient temples, local markets, Bal Mithai and breathtaking Himalayan views.",
  },
  {
    name: "Jageshwar Dham",
    distance: "125 km",
    img: "/images/jageshwar_l.webp",
    note: "Ancient temples surrounded by deodar forests.",
    desc: "Visit the historic Jageshwar temple complex, known for its ancient stone temples and peaceful surroundings.",
  },
  {
    name: "Kainchi Dham",
    distance: "38 km",
    img: "/images/kaichi_dham.jpg",
    note: "A peaceful spiritual destination in the hills.",
    desc: "Visit the famous Neem Karoli Baba Ashram, situated beside the Kosi River and surrounded by beautiful hills.",
  },
  {
    name: "Ranikhet",
    distance: "75 km",
    img: "/images/ranikhet_l.jpg",
    note: "Beautiful mountain views and peaceful surroundings.",
    desc: "Enjoy pine forests, Chaubatia Gardens, scenic viewpoints and the calm atmosphere of this charming hill town.",
  },
  {
    name: "Kausani",
    distance: "134 km",
    img: "/images/kausani.jpg",
    note: "Famous for breathtaking Himalayan panoramas.",
    desc: "Experience stunning views of the Himalayan peaks, peaceful tea gardens and beautiful mountain landscapes.",
  },
  {
    name: "Munsiyari",
    distance: "282 km",
    img: "/images/munsiyari.jpg",
    note: "A mountain paradise with spectacular snowy peaks.",
    desc: "Explore the beautiful Panchachuli mountain views, scenic valleys and the gateway to the Johar Valley.",
  },
  {
    name: "Badrinath",
    distance: "337 km",
    img: "/images/badrinath_l.jpg",
    note: "One of the most sacred Char Dham destinations.",
    desc: "Visit the revered Badrinath Temple dedicated to Lord Vishnu, surrounded by the magnificent Himalayan mountains.",
  },
  {
    name: "Kedarnath",
    distance: "313 km to Gaurikund + trek",
    img: "/images/kedarnath_l.jpg",
    note: "A sacred Himalayan pilgrimage destination.",
    desc: "Travel to Gaurikund by road and continue to Kedarnath Temple via the approximately 16 km trekking route.",
  },
  {
    name: "Gangotri",
    distance: "514 km",
    img: "/images/gangotri_l.jpg",
    note: "A sacred destination in the beautiful Garhwal Himalayas.",
    desc: "Visit Gangotri Temple, associated with the origin of the holy River Ganga, and enjoy the spectacular mountain scenery.",
  },
  {
    name: "Yamunotri",
    distance: "Approx. 461 km to Janki Chatti + trek",
    img: "/images/yamunotri_l.webp",
    note: "A sacred Char Dham destination in the Himalayas.",
    desc: "Travel by road to Janki Chatti and continue with an approximately 5–6 km trek to reach Yamunotri Temple.",
  },
];

export default function Locations() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const getWhatsAppLink = (place) => {
    const message = `Hello Rujain Travels Nainital! I am interested in travelling to ${place}. Please share the cab availability and fare details. Thank you!`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <section id="locations" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 inline-block pb-3 border-b-4 border-yellow-400">
            Explore Destinations
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-base sm:text-lg">
            Discover beautiful destinations across Uttarakhand. Choose your
            destination and let Rujain Travels make your journey comfortable.
          </p>

          <div className="flex items-center justify-center gap-2 mt-5 text-sm text-gray-500">
            <FaMapMarkerAlt className="text-yellow-500" />
            <span>Approximate distances from Kathgodam</span>
          </div>
        </motion.div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {locations.map((place, i) => (
            <motion.article
              key={place.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: (i % 3) * 0.07,
                ease: "easeOut",
              }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:border-yellow-400 transition-all duration-300 group text-left flex flex-col"
            >
              {/* Destination Image */}
              <div className="relative h-56 sm:h-60 overflow-hidden">
                <img
                  src={place.img}
                  alt={`${place.name} destination in Uttarakhand`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {place.name}
                  </h3>
                </div>
              </div>

              {/* Destination Information */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">

                {/* Approximate Distance */}
                <div className="inline-flex items-center gap-2 self-start bg-yellow-50 text-gray-800 border border-yellow-200 px-3 py-2 rounded-lg text-sm font-semibold">
                  <FaMapMarkerAlt className="text-yellow-500" />
                  Approx. {place.distance}
                </div>

                {/* Short Note */}
                <p className="text-gray-700 font-semibold mt-4 text-base">
                  {place.note}
                </p>

                <p className="text-gray-500 text-sm leading-relaxed mt-2 flex-1">
                  {place.desc}
                </p>

                {/* Explore Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPlace(place)}
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-black text-white font-semibold py-3 px-5 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  Explore Destination
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </motion.article>
          ))}

          {/* Custom Routes Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.45,
              delay: (locations.length % 3) * 0.07,
              ease: "easeOut",
            }}
            className="bg-gray-50 border-2 border-dashed border-yellow-400 rounded-2xl p-7 sm:p-8 flex flex-col justify-center items-center text-center min-h-[400px]"
          >
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-5">
              <FaMapMarkerAlt className="text-3xl text-yellow-500" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Your Destination, Your Journey
            </h3>

            <p className="text-gray-600 leading-relaxed mt-4">
              Didn't find your destination in the list? No problem! We can
              arrange a cab for your preferred location across Uttarakhand.
            </p>

            <a
              href={getWhatsAppLink("another destination")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              Ask for a Custom Route
            </a>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-gray-700 text-base sm:text-lg font-medium">
          Planning a trip somewhere else? Contact us for your preferred route
          and travel requirements.
        </p>
      </div>

      {/* Destination Details Modal */}
      <AnimatePresence>
        {selectedPlace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedPlace(null)}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            role="presentation"
          >
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="destination-modal-title"
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative text-left"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPlace(null)}
                aria-label="Close destination details"
                className="absolute top-3 right-3 z-10 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition"
              >
                <FaTimes />
              </button>

              {/* Modal Image */}
              <img
                src={selectedPlace.img}
                alt={selectedPlace.name}
                className="w-full h-56 sm:h-64 object-cover"
              />

              <div className="p-6 sm:p-7">
                <h3
                  id="destination-modal-title"
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                >
                  {selectedPlace.name}
                </h3>

                <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 px-3 py-2 rounded-lg text-sm font-semibold mt-4">
                  <FaMapMarkerAlt className="text-yellow-500" />
                  Approx. {selectedPlace.distance} from Kathgodam
                </div>

                <p className="text-gray-600 leading-relaxed mt-5">
                  {selectedPlace.desc}
                </p>

                <a
                  href={getWhatsAppLink(selectedPlace.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 w-full flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3 rounded-xl hover:bg-green-600 transition"
                >
                  <FaWhatsapp className="text-xl" />
                  Enquire About This Destination
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
