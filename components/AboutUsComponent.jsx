import solution from "../public/assets/images/solutions.jpg";
import values from "../public/assets/images/ourValues.jpg";

const AboutUsComponent = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-green-700 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Welcome to{" "}
          <span className="font-semibold text-green-700">
          Swift Debt Collection
          </span>
          , your trusted partner in debt recovery and management. Our team is
          dedicated to providing a full suite of professional debt solutions to
          help businesses regain financial stability, reduce overdue payments,
          and sustain healthy cash flows.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
          <div className="h-48 w-full overflow-hidden">
            <img src="public\assets\images\ourMission.svg" alt="Mission" className="w-full h-full object-contain" />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-3xl font-semibold text-green-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to support businesses with effective, ethical debt
              recovery solutions that foster financial security and client
              trust. We are committed to achieving successful outcomes while
              maintaining our clients' reputation.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
          <div className="h-48 w-full overflow-hidden">
            <img src="public\assets\images\ourVision.svg" alt="Vision" className="w-full h-full object-contain" />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-3xl font-semibold text-green-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where businesses thrive free from debt
              concerns, supported by efficient and trustworthy recovery
              services. Our goal is to become the most trusted partner in the
              debt collection industry.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-green-700 mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-100 shadow-lg rounded-lg p-6">
            <div className="h-32 w-full overflow-hidden mb-4">
              <img src="public\assets\images\serviceExcellence.svg" alt="Service Excellence" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Service Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our team is driven by excellence, using proven methods to help
              clients recover dues while maintaining professional and ethical
              standards.
            </p>
          </div>

          <div className=" shadow-lg rounded-lg p-6">
            <div className="h-32 w-full overflow-hidden mb-4">
              <img src="public\assets\images\ethicalPractises.svg" alt="Ethical Practices" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Ethical Practices
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our ethical approach ensures fair, transparent, and legally
              compliant debt recovery, prioritizing respect and trust.
            </p>
          </div>

          <div className="bg-green-100 shadow-lg rounded-lg p-6">
            <div className="h-32 w-full overflow-hidden mb-4">
              <img src={solution} alt="Customized Solutions" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Customized Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We provide tailored solutions for every client, crafting debt
              recovery strategies that meet unique needs and goals.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-green-700 mb-6">Our Values</h2>
        <div className="h-64 w-full overflow-hidden mb-8">
          <img src={values} alt="Values" className="w-full h-full object-contain" />
        </div>
        <p className="text-gray-700 leading-relaxed">
          At{" "}
          <span className="font-semibold text-green-700">
          Swift Debt Collection
          </span>
          , our values of Integrity, Trust, and Client Success shape every
          action we take. We are committed to upholding these values in every
          interaction, ensuring our clients receive not only exceptional results
          but also a partnership built on respect and transparency.
        </p>
      </div>

      {/* Contact Button */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-10 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-800 transition duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default AboutUsComponent;
