import { motion } from "framer-motion";
import { FaWallet } from "react-icons/fa"; // Wallet icon for feature points

// Import images
import repayment from "/assets/images/RepaymentTerms.jpg";
import childAvatar from "/assets/icons/child.jpeg";
import manAvatar from "/assets/icons/man.png";

const RepaymentTerms = () => {
  return (
    <section className="flex flex-col md:flex-row items-start gap-8 p-8 md:p-12 lg:p-16 bg-gray-50">
      {/* Left Section with Image */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <img
          src={repayment}
          alt="Flexible Repayment"
          className="rounded-lg shadow-lg object-cover w-full"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        {/* Heading */}
        <h2 className="text-green-700 uppercase font-semibold text-sm">
          Flexible Repayment Solutions
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Tailored Repayment Options to Meet Your Needs
        </h1>
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold text-green-700">Swift Debt Collection</span>, 
          we work with individuals and businesses to create manageable repayment plans that 
          help you stay on track. Our team is committed to offering flexible and transparent 
          repayment terms tailored to your financial situation.
        </p>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md space-y-2"
        >
          {[
            "Flexible repayment schedules",
            "No hidden fees or penalties",
            "Personalized payment plans",
            "Multiple payment options available",
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FaWallet className="text-green-700" />
              <span>{feature}</span>
            </div>
          ))}
        </motion.div>

        <div className="flex items-center space-x-4">
          <a href="/aboutus" className="bg-green-700 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-800 transition duration-300">
            Learn More
          </a>
          <div className="flex items-center space-x-2">
            {[childAvatar, manAvatar].map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`Customer ${index + 1}`}
                className="w-8 h-8 rounded-full"
              />
            ))}
            <span className="text-sm text-gray-600">+1k Satisfied Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepaymentTerms;
