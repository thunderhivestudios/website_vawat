import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "./../assets/img/logo/header-logo.svg";
import blackLogo from "./../assets/img/logo/black-logo.svg";

import { useViewport } from "../contexts/viewportContext";
import { useLanguage } from "../contexts/languageContext";
import { navLinks } from "../data/contactInfo";

interface HeaderProps {
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  const [isSticky, setIsSticky] = useState(false);
  const { isMobile } = useViewport();
  const { lang, setLang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header id="header-sticky" className={`header-1 ${isSticky || !isHome ? "sticky" : ""}`}>
      <div className="container-fluid">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="logo vawat-logo-override-horizontal">
              <Link to="/" className="header-logo">
                <img src={headerLogo} alt="logo" />
              </Link>
              <Link to="/" className="header-logo-2">
                <img src={blackLogo} alt="logo" />
              </Link>
            </div>

            <div className="header-right d-flex justify-content-end align-items-center">
              {!isMobile && (
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        {navLinks.map((link) => {
                          const isActive = isHome && window.location.hash === link.href;
                          return (
                            <li key={link.href} className={isActive ? "active" : ""}>
                              {isHome ? (
                                <a
                                  href={link.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.querySelector(link.href);
                                    if (el) {
                                      el.scrollIntoView({ behavior: "smooth" });
                                    }
                                  }}
                                >
                                  {link.label}
                                </a>
                              ) : (
                                <Link to={`/#${link.href.replace("#", "")}`}>{link.label}</Link>
                              )}
                            </li>
                          );
                        })}
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
                    color: lang === "nl" ? (isSticky || !isHome ? "var(--header)" : "var(--white)") : "inherit",
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
                    color: lang === "en" ? (isSticky || !isHome ? "var(--header)" : "var(--white)") : "inherit",
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
