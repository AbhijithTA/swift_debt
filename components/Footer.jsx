import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import logo from "/assets/images/Logo-01.png"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              Swift Debt Collection is committed to providing transparent,
              efficient, and reliable debt recovery solutions to help businesses
              secure their financial stability.
            </p>
            <a
              href="/aboutus"
              className="text-yellow-400 font-semibold flex items-center hover:text-yellow-500"
            >
              Read More <span className="ml-2">&rarr;</span>
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="/services" className="hover:text-yellow-400">
                  Debt Collection
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-yellow-400">
                  Pre-Legal Debt Recovery
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-yellow-400">
                  Legal Collections
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-yellow-400">
                  Cheque Bounce Case Handling
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-yellow-400">
                  Debt Management Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="/aboutus" className="hover:text-yellow-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-yellow-400">
                  Services
                </a>
              </li>

              <li>
                <a href="/contactus" className="hover:text-yellow-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:support@swiftdebtcollection.com"
                  className="hover:text-yellow-400 break-all"
                >
                  support@swiftdebtcollection.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+12345678900" className="hover:text-yellow-400">
                00971 55 1357953
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+12345678900" className="hover:text-yellow-400">
                00971-45163600 Ext : 8771
                </a>
              </li>
              <li className="flex items-center">
                <FaInstagram className="mr-2" />
                <a href="#" className="hover:text-yellow-400">
                  Instagram
                </a>
              </li>
              <li className="flex items-center">
                <FaYoutube className="mr-2" />
                <a href="#" className="hover:text-yellow-400">
                  YouTube
                </a>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="mr-2" />
                <a href="#" className="hover:text-yellow-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="bg-grey-800 text-white p-2 rounded-full">
              <img src={logo} alt="Logo" className="h-6 w-6" />
            </span>
            <span className="text-white font-semibold">
              Swift Debt Collection
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            ©2024 – Swift Debt Collection
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
