import CustomerService from "../components/CustomerService";
import HeroSection from "../components/HeroSection";
import CompetitiveRates from "../components/RateComponent";
import RepaymentTerms from "../components/RepaymentTerms";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RepaymentTerms />
      <CompetitiveRates />
      <CustomerService />
    </>
  );
};

export default HomePage;
