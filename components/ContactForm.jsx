import contactus from "../public/assets/images/contactUs.jpg"; // replace with an actual image path

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 px-8">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-green-700 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At{" "}
          <span className="font-semibold text-green-700">
            Swift Debt Collection
          </span>
          , we are here to help you at every step of your debt recovery journey.
          Connect with our team for expert guidance and support, or visit us to
          learn more about how we can help secure your business’s financial
          stability.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Image and Text Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex flex-col items-center p-8">
          <div className="w-full mb-6">
            <img
              src={contactus}
              alt="Swift Debt Collection Office"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <h2 className="text-3xl font-semibold text-green-800 mb-4 text-center">
            Visit Our Office
          </h2>
          <p className="text-gray-600 leading-relaxed text-center">
            Our doors are always open for a conversation. Visit our office to
            meet our team, discuss your needs, and explore how our debt recovery
            services can help secure your financial future.
          </p>
        </div>

        {/* Contact Information and Map */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-green-800 mb-4 text-center">
              Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              Swift Debt Collection <br />
              123 Recovery Lane, Suite 400 <br />
              Debt City, DC 12345 <br />
              Phone: (123) 456-7890 <br />
              Email: support@swiftdebtcollection.com
            </p>
          </div>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094317!2d144.9537353153186!3d-37.81720997975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4cfac73%3A0x1f2f2b7ed95d1e84!2sDebt%20Collection%20Office!5e0!3m2!1sen!2sus!4v1619164000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
