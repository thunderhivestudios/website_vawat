import React, { useEffect, useState } from "react";
import headerLogo from "./../assets/img/logo/header-logo.svg";
import blackLogo from "./../assets/img/logo/black-logo.svg";

import { useViewport } from "../contexts/viewportContext";
import { useLanguage } from "../contexts/languageContext";
import { navLinks } from "../data/contactInfo";


interface HeaderProps {
  onSidebarToggle: () => void;
  onNavigateHome: () => void;
  pageView: "home" | "servicesDetail";
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle, onNavigateHome, pageView }) => {
  const [isSticky, setIsSticky] = useState(false);
  const { isMobile } = useViewport();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header-sticky" className={`header-1 ${isSticky || pageView !== "home" ? "sticky" : ""}`}>
      <div className="container-fluid">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="logo">
              <a href="/" className="header-logo">
                <img src={headerLogo} alt="logo" />
              </a>
              <a href="/" className="header-logo-2">
                <img src={blackLogo} alt="logo" />
              </a>
            </div>

            <div className="header-right d-flex justify-content-end align-items-center">
              {!isMobile && (
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        {navLinks.map((link) => (
                          <li key={link.href} className={link.className || ""}>
                            <a href={link.href} onClick={onNavigateHome}>{link.label}</a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}

              <div
                className="language-toggle ml-3"
                style={{ display: "flex", alignItems: "center", fontSize: "0.9rem" }}
              >
                <button
                  onClick={() => setLang("nl")}
                  className={`${lang === "nl" ? "active" : ""}`}
                  style={{
                    padding: "0.3rem 0.6rem",
                    marginRight: "0.3rem",
                    color: lang === "nl" ? (isSticky || pageView !== "home" ? "var(--header)" : "var(--white)") : "inherit",
                  }}
                >
                  NL
                </button>
                <span style={{ marginRight: "0.3rem" }}>|</span>
                <button
                  onClick={() => setLang("en")}
                  className={`${lang === "en" ? "active" : ""}`}
                  style={{
                    padding: "0.3rem 0.6rem",
                    color: lang === "en" ? (isSticky || pageView !== "home" ? "var(--header)" : "var(--white)") : "inherit",
                  }}
                >
                  EN
                </button>
              </div>


              {/* === Sidebar Toggle Button === */}
              <div className="header__hamburger d-xl-block my-auto ml-3">
                <div className="sidebar__toggle" onClick={onSidebarToggle}>
                  <div className="header-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
