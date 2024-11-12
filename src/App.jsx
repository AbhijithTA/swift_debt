import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar"; 

import "./App.css";
import "./index.css";
import NavBarComponent from "../components/Navbar";
import HomePage from "../pages/Home";
import ServicesPage from "../pages/Services";
import Footer from "../components/footer";
import AboutUsPage from "../pages/About";
import ContactUs from "../components/ContactForm";

function App() {
  return (
    <Router>
      <NavBarComponent /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

