// CompetitiveRates.js

import { motion } from "framer-motion";
import { FaFileAlt, FaDollarSign } from "react-icons/fa";

// Import images (replace with actual paths)
import files from "../public/assets/images/RateComponent_Files.jpg";
import atm from "../public/assets/images/RateComponent_atm.jpeg";

const CompetitiveRates = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start gap-8 px-8 py-12 md:px-16 lg:px-24 bg-gray-50">
      {/* Left Section with Text */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-green-700 uppercase font-semibold text-sm">
          Affordable Debt Recovery
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Transparent and Competitive Rates for Recovery Services
        </h1>
        <p className="text-gray-600 leading-relaxed">
          At{" "}
          <span className="font-semibold text-green-700">
            Swift Debt Collection
          </span>
          , we prioritize affordability and transparency in our debt recovery
          services. Our rates are competitive, ensuring you receive exceptional
          value without hidden costs or unexpected fees.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We work to provide a cost-effective solution tailored to your
          financial needs, helping you regain stability with rates that align
          with industry standards.
        </p>
        <div className="mt-5">
          <a
            href="/services"
            className="bg-green-700 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-800 transition duration-300"
          >
            Learn More About Our Services
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={files}
            alt="Transparent Documentation"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          className="bg-[#FFD249] text-black p-6 rounded-lg shadow-md flex flex-col justify-center items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaFileAlt className="text-2xl mb-2" />
          <h3 className="text-lg font-semibold">
            Clear and Transparent Documentation
          </h3>
          <p className="text-sm mt-1">
            Our terms are straightforward, with no hidden fees or unclear
            language. Know exactly what you’re paying for.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#FFD249] text-black p-6 rounded-lg shadow-md flex flex-col justify-center items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FaDollarSign className="text-2xl mb-2" />
          <h3 className="text-lg font-semibold">Competitive Industry Rates</h3>
          <p className="text-sm mt-1">
            Our rates are designed to offer industry-leading value without
            sacrificing quality of service.
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={atm}
            alt="Accessible Payment Options"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CompetitiveRates;
