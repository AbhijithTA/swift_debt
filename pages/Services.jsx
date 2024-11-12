// ServicesPage.jsx
import ServiceCard from "../components/services/ServiceCard";
import { services } from "../components/services/ServiceData";

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
        Our Services
      </h1>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            details={service.details}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
