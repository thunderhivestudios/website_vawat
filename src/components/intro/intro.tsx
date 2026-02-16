import React from "react";

// Import images
import arrowIcon from "../../assets/img/hero/arrow.png";
import heroImage from "../../assets/img/hero/01.jpg";

// Import data
import { companyInfo } from "../../data/contactInfo";
import { useLanguage } from "../../contexts/languageContext";
import { translations } from "./translations";
import AnimatedCounter from "../animatedCounter";
import Bubbles from "../bubbles/bubbles";

const Hero: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="hero-section hero-1 fix">

      {/* === Hero Content === */}
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="hero-content">
              <Bubbles></Bubbles>
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                {companyInfo.slogan}
              </h1>

              <div className="arrow-icon">
                <img src={arrowIcon} alt="arrow" />
              </div>

              <div className="hero-counter-items">
                {/* === Amount Counter === */}
                <div className="counter-box">
                  <div className="content">
                    <h2>
                      <AnimatedCounter startValue={0} startTime={new Date("2013-05-01T00:00:00").getTime()} duration={900} ratePerHour={25} className="counter-number"/> m<sup>3</sup>
                    </h2>
                    <p>{t.waterCleaned}</p>
                  </div>
                </div>

                {/* === Customers Counter === */}
                <div className="counter-box">
                  <h2>
                    <AnimatedCounter target={100} duration={600} className="counter-number" />+
                  </h2>
                  <div className="content">
                    <p>{t.happyCustomers.line1}</p>
                    <p>{t.happyCustomers.line2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === Hero Image === */}
          <div className="col-lg-6">
            <div className="hero-image z-100">
              <img src={heroImage} alt="hero"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
