import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

import "./App.css";
import "./index.css";
import NavBarComponent from "../components/Navbar";
import HomePage from "../pages/Home";
import ServicesPage from "../pages/Services";
import Footer from "../components/Footer";
import AboutUsPage from "../pages/About";
import ContactUs from "../components/ContactForm";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleRouteChange = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <Router>
      <NavBarComponent />
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} onEnter={handleRouteChange} />
          <Route
            path="/services"
            element={<ServicesPage />}
            onEnter={handleRouteChange}
          />
          <Route
            path="/aboutus"
            element={<AboutUsPage />}
            onEnter={handleRouteChange}
          />
          <Route
            path="/contactus"
            element={<ContactUs />}
            onEnter={handleRouteChange}
          />
        </Routes>
      )}
      <Footer />
    </Router>
  );
}

export default App;
