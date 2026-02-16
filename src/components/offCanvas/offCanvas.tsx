import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo/black-logo.svg";
import { contactInfo, socialLinks, navStructure } from "../../data/contactInfo";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/languageContext";

import { translations } from "./translations";

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

const Offcanvas: React.FC<OffcanvasProps> = ({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const { lang, setLang } = useLanguage();
  const text = translations[lang];

  const navLinks = navStructure.map((link) => ({
    ...link,
    label: (text.nav as any)[link.key],
    children: link.children?.map((child) => ({
      ...child,
      label: (text.nav as any).serviceItems[child.key],
    })),
  }));

  // Detect viewport width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (to: string) => {
    onClose();
    navigate(to);
  };

  return (
    <div className="fix-area">
      <div className={`offcanvas__info ${isOpen ? "info-open" : ""}`}>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            {/* === Header === */}
            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
              <div
                className="offcanvas__logo cursor-pointer"
                onClick={() => handleNavigate("/")}
              >
                <img src={logo} alt="logo" className="logo-offcanvas" />
              </div>
              <div className="offcanvas__close" onClick={onClose}>
                <button>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>

            <p className="text d-none d-xl-block">
              {text.offcanvas.description}
            </p>

            {/* === Navigation (Mobile Only) === */}
            {isMobile && (
              <nav className="offcanvas__nav mb-4">
                <ul className="list-unstyled">
                  {navLinks.map((link) => (
                    <li key={link.label} className="mb-2">

                      {/* ITEM WITH CHILDREN */}
                      {link.children ? (
                        <>
                          <span className="d-block py-2">{link.label}</span>

                          <ul className="list-unstyled ps-3">
                            {link.children.map((child) => (
                              <li key={child.to}>
                                <button
                                  className="d-block py-2 text-start bg-transparent border-0 w-100"
                                  onClick={() => handleNavigate(child.to)}
                                >
                                  {child.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <button
                          className="d-block py-2 text-start bg-transparent border-0 w-100"
                          onClick={() =>
                            handleNavigate(
                              `/#${link.href?.replace("#", "")}`
                            )
                          }
                        >
                          {link.label}
                        </button>
                      )}

                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="offcanvas__contact">
              <h4>{text.offcanvas.contactTitle}</h4>
              <ul>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a target="_blank" rel="noreferrer" href="#">
                      {contactInfo.address}
                    </a>
                  </div>
                </li>

                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </div>
                </li>

                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </div>
                </li>
              </ul>

              <div className="main-button mt-4">
                <Link
                  to="/#contact"
                  className="theme-btn w-100 text-center d-block"
                  onClick={onClose}
                >
                  {text.offcanvas.getStarted}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </Link>
              </div>

              <div className="social-icon d-flex align-items-center mt-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Overlay === */}
      <div
        className={`offcanvas__overlay ${isOpen ? "overlay-open" : ""}`}
        onClick={onClose}
      ></div>
    </div>
  );
};

export default Offcanvas;
