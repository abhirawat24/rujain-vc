
import { FaMapMarkerAlt, FaDirections, FaExternalLinkAlt } from "react-icons/fa";

const Location = () => {
  const latitude = 29.2612929;
  const longitude = 79.5428763;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`;

  return (
    <section
      id="location"
      
      className="relative bg-[#F8F7F2] py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-yellow-500 font-semibold uppercase tracking-[3px] text-sm">
            Find Us Here
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            Our <span className="text-yellow-500">Location</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Planning your next journey? Visit Rujain Travels Nainital
            and let us help you find the right cab for a comfortable
            and memorable travel experience.
          </p>
        </div>

        {/* Location Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Location Details */}
          <div className="flex flex-col justify-center bg-gray-50 rounded-2xl p-7 sm:p-10 border border-gray-100">

            <div className="w-14 h-14 rounded-xl bg-yellow-400 flex items-center justify-center mb-6">
              <FaMapMarkerAlt className="text-2xl text-black" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Visit Rujain Travels Nainital
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              We are located in Nainital, Uttarakhand. Visit our
              location or contact us to discuss your travel plans,
              vehicle availability and booking requirements.
            </p>

            <div className="flex items-start gap-4 mb-8">
              <FaMapMarkerAlt className="text-yellow-500 text-xl mt-1 shrink-0" />

              <div>
                <h4 className="font-semibold text-gray-900">
                  Our Location
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Rujain Travels, Nainital, Uttarakhand, India
                </p>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-fit bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-7 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <FaDirections className="text-xl" />
              Get Directions
              <FaExternalLinkAlt className="text-xs" />
            </a>

          </div>

          {/* Google Map */}
          <div className="relative min-h-[350px] sm:min-h-[420px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">

            <iframe
              title="Rujain Travels Nainital Location Map"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                position: "absolute",
                inset: 0,
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
