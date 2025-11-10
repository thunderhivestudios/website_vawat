import React, { useEffect, useState } from "react";
import "./App.css";

import Preloader from "./components/preloader";
import Header from "./components/header";
import Intro from "./components/intro/intro";
import Offcanvas from "./components/offCanvas";
import About from "./components/about/about";
import Services from "./components/services/services";
import Footer from "./components/footer/footer";

import { useLanguage } from "./contexts/languageContext";
import ServiceDetails from "./components/details/details";

import { type ServiceDetail } from "./interfaces/types";
import { translations } from "./components/details/translations";
import ContactSection from "./components/contact/contact";

const App: React.FC = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const [pageView, setPageView] = useState<"home" | "servicesDetail">("home");

  const { lang } = useLanguage();
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);
  const selectedService: ServiceDetail | null =
    selectedServiceIndex !== null ? translations[lang][selectedServiceIndex] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pageView]);

  return (
    <div className="vh-100 flex flex-column">
      <button id="back-top" className="back-to-top">
        <i className="fa-solid fa-chevron-up"></i>
      </button>

      <Offcanvas
        isOpen={isOffcanvasOpen}
        onClose={() => setIsOffcanvasOpen(false)}
      />
      <div className="offcanvas__overlay"></div>

      <Header
        onSidebarToggle={() => setIsOffcanvasOpen(true)}
        onNavigateHome={() => setPageView("home")}
        pageView={pageView}
      />

      <main className="flex-grow-1">
        {pageView === "home" && (
          <>
            {/* Intro Section */}
            <section className="intro-section fix" id="home">
              <Intro />
            </section>

            {/* About Section */}
            <section className="about-section fix section-padding" id="about">
              <About />
            </section>

            {/* Services Section */}
            <section id="service" >
              <Services hiddenIndices={[4]} onSelectService={(index) => {
                setSelectedServiceIndex(index);
                setPageView("servicesDetail");
              }} />
            </section>
            <section>
              <ContactSection></ContactSection>
            </section>
          </>
        )}

        {pageView === "servicesDetail" && selectedService && (

          <ServiceDetails {...selectedService} />
        )}
      </main>

      <footer className="footer-section">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
