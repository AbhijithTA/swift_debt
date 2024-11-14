import { useState } from "react";
import logo from "/assets/images/Logo-01.png"

const NavBarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md z-50 relative">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        <div className="flex items-center">
          <div className="rounded-full p-2 bg-gray-800">
            <a href="/">
              <img src={logo} alt="Logo" className="h-10 w-10" />
            </a>
          </div>
          <a href="/">
            <span className="ml-3 font-bold text-xl text-gray-800">
              Swift Debt Collection
            </span>
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="/"
            className="text-gray-700 font-semibold hover:text-white hover:bg-green-600 px-3 py-2 rounded-md transition duration-200"
          >
            Home
          </a>
          <a
            href="/aboutus"
            className="text-gray-700 font-medium hover:text-white hover:bg-green-600 px-3 py-2 rounded-md transition duration-200"
          >
            About Us
          </a>
          <a
            href="/services"
            className="text-gray-700 font-medium hover:text-white hover:bg-green-600 px-3 py-2 rounded-md transition duration-200"
          >
            Services
          </a>

          <a
            href="/contactus"
            className="border border-green-700 text-green-700 px-4 py-2 rounded-md font-medium hover:bg-green-700 hover:text-white transition duration-200"
          >
            Contact Us
          </a>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden px-6 pt-4 pb-2 space-y-2">
          <a
            href="/"
            className="block text-gray-700 font-semibold hover:text-white hover:bg-green-600 px-3 py-2 rounded-md transition duration-200"
          >
            Home
          </a>
          <a
            href="/aboutus"
            className="block text-gray-700 font-medium hover:text-white hover:bg-green-600 px-3 py-2 rounded-md transition duration-200"
          >
            About Us
          </a>
          <div className="block">
            <button
              className="flex items-center w-full text-left text-gray-700 font-medium hover:text-white hover:bg-green-600 px-3 py-2 rounded-md transition duration-200 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Services
              <svg className="ml-1 h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.23 7.21l4.27 4.27c.3.3.77.3 1.06 0l4.27-4.27a.75.75 0 10-1.06-1.06L10 9.15 6.29 6.15a.75.75 0 00-1.06 1.06z" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="pl-6">
                <a
                  href="/services"
                  className="block text-gray-700 font-medium hover:text-white hover:bg-green-600 px-3 py-2 rounded-md transition duration-200"
                >
                  Debt Collection
                </a>
                <a
                  href="/services"
                  className="block text-gray-700 font-medium hover:text-white hover:bg-green-600 px-3 py-2 rounded-md transition duration-200"
                >
                  Dues Collection for Companies
                </a>
                <a
                  href="/services"
                  className="block text-gray-700 font-medium hover:text-white hover:bg-green-600 px-3 py-2 rounded-md transition duration-200"
                >
                  Pre-Legal Debt Recovery
                </a>
                <a
                  href="/services"
                  className="block text-gray-700 font-medium hover:text-white hover:bg-green-600 px-3 py-2 rounded-md transition duration-200"
                >
                  Legal Collections
                </a>
                <a
                  href="/services"
                  className="block text-gray-700 font-medium hover:text-white hover:bg-green-600 px-3 py-2 rounded-md transition duration-200"
                >
                  Cheque Bounce Case Handling
                </a>
                <a
                  href="/services"
                  className="block text-gray-700 font-medium hover:text-white hover:bg-green-600 px-3 py-2 rounded-md transition duration-200"
                >
                  Debt Management Solutions
                </a>
              </div>
            )}
          </div>
          <a
            href="/contactus"
            className="block border border-green-700 text-green-700 px-4 py-2 rounded-md font-medium hover:bg-green-700 hover:text-white transition duration-200"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBarComponent;
