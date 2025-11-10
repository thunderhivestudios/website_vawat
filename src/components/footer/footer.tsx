import React from "react";
import { contactInfo, socialLinks, companyInfo, creatorInfo } from "../../data/contactInfo"; // adjust the path if needed

const Footer: React.FC = () => {
    return (
        <footer className="footer-section">
            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                            © Copyright 2025 <span className="divider">|</span>{" "}
                            <a href={creatorInfo.website} target="_blank" rel="noopener noreferrer">
                                {creatorInfo.name}
                            </a>
                        </p>
                        <div className="social-icon d-flex align-items-center">
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
