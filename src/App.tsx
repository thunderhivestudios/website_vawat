import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, useNavigate, useParams, useNavigationType } from "react-router-dom";
import "./App.css";

import Header from "./header/header";
import Intro from "./components/intro/intro";
import Offcanvas from "./components/offCanvas/offCanvas";
import About from "./components/about/about";
import Services from "./components/services/services";
import Footer from "./components/footer/footer";

import { useLanguage } from "./contexts/languageContext";
import ServiceDetails from "./components/details/details";
import { type ServiceDetail } from "./interfaces/types";
import { translations } from "./components/details/translations";
import ContactSection from "./components/contact/contact";
import ScrollToHash from "./components/scrollToHash";

// ScrollToTop handles scroll behavior on navigation
const ScrollToTop: React.FC = () => {
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [navigationType]);

  return null;
};

// Wrapper component to handle service details via URL param
const ServiceDetailPage: React.FC = () => {
  const { lang } = useLanguage();
  const { serviceIndex } = useParams<{ serviceIndex: string }>();
  const index = serviceIndex ? parseInt(serviceIndex) : null;
  const selectedService: ServiceDetail | null =
    index !== null ? translations[lang][index] : null;

  if (!selectedService) return <div>Service not found</div>;

  return <ServiceDetails {...selectedService} />;
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <ScrollToHash />

      <section className="intro-section fix" id="home">
        <Intro />
      </section>

      <section className="about-section fix section-padding" id="about">
        <About />
      </section>

      <section id="service">
        <Services
          hiddenIndices={[4]}
          onSelectService={(index) => navigate(`/services/${index}`)}
        />
      </section>

      <section>
        <ContactSection />
      </section>
    </>
  );
};

const App: React.FC = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />

      <div className="vh-100 flex flex-column">
        <button id="back-top" className="back-to-top">
          <i className="fa-solid fa-chevron-up"></i>
        </button>

        <Offcanvas
          isOpen={isOffcanvasOpen}
          onClose={() => setIsOffcanvasOpen(false)}
        />
        <div className="offcanvas__overlay"></div>

        <Header onSidebarToggle={() => setIsOffcanvasOpen(true)} />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:serviceIndex" element={<ServiceDetailPage />} />
          </Routes>
        </main>

        <footer className="footer-section">
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
