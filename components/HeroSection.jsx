/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import man1 from "../public/assets/images/heroSection1.jpg";
import man2 from "../public/assets/images/heroSection2.jpg";
import man3 from "../public/assets/images/heroSection3.jpg";
import man4 from "../public/assets/images/heroSection4.jpg";


const sentences = [
  "Comprehensive Debt Collection Services Tailored to Your Needs",
  "Expertise in Collecting Dues on Behalf of Businesses",
  "Efficient Debt Recovery at Pre-Legal and Legal Stages",
  "Managing Cheque Bounce Cases with Precision and Compliance",
  "Professional Debt Management Services for Financial Stability",
];

const HeroSection = () => {
  const [imageIndex, setImageIndex] = useState(0);

  
const images = [man1, man2, man3, man4];

useEffect(() => {
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
}, []);


  const handleStringTyped = () => {
  
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <motion.section
      className="bg-gray-100 flex flex-col md:flex-row items-center justify-between px-8 py-12 md:py-24"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3, duration: 1 },
        },
      }}
    >
      {/* Left Section with Typing Animation */}
      <motion.div
        className="w-full md:w-1/2 mb-8 md:mb-0"
        variants={{
          hidden: { opacity: 0, x: -100, transition: { duration: 0.3 } },
          visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
        }}
      >
        <h2 className="text-green-700 font-semibold uppercase mb-2 tracking-wide">
          Easy Application Process
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          <ReactTyped
            strings={sentences}
            typeSpeed={50}
            backSpeed={30}
            backDelay={2000}
            loop
            onStringTyped={handleStringTyped} 
          />
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Simply fill out the application form and get a decision in minutes.
        </p>
        <a href="/contactus" className="bg-green-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-800 transition duration-300">
          Request Now
        </a>
      </motion.div>

      {/* Right Section with Dynamic Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <motion.div
          key={imageIndex} 
          className="relative w-4/5 h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={images[imageIndex]} alt="Service Image" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
