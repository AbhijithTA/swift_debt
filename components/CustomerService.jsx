/* eslint-disable react/no-unescaped-entities */

import customerService from "/assets/images/CustomerService_grp.jpg";

const CustomerService = () => {
  return (
    <section className="flex flex-col md:flex-row items-start gap-8 px-8 py-12 md:px-16 lg:px-24 bg-white">
      {/* Left Section with Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-green-700 uppercase font-semibold text-sm">
          Professional Debt Recovery Services
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Reliable, Secure, and Effective <br />
          Debt Recovery Solutions
        </h1>
        <p className="text-gray-600 leading-relaxed">
          We specialize in managing debt collection on behalf of companies,
          offering services in pre-legal collections, debt management, and
          bounced check recovery. Our team works with precision to handle each
          case efficiently and professionally.
        </p>
        <button className="bg-green-700 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-800 transition duration-300">
          Contact Us
        </button>
      </div>

      <div className="w-full md:w-1/2 relative">
        <img
          src={customerService}
          alt="Debt Recovery Team"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default CustomerService;
