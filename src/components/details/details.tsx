import React from "react";
import type { ServiceDetail } from "../../interfaces/types";

const ServiceDetails: React.FC<ServiceDetail> = ({
    title,
    tags = [],
    secondaryColumns = [],
    benefits = [],
    additionalImages = [],
    paragraph,
    data_id = "",
    mainImage: mainImg,
}) => {
    return (
        <section className="service-details-section fix section-padding">
            <div className="container custom-container-4">
                <div className="service-details-wrapper">

                    {mainImg && (
                        <div className="service-details-image wow fadeInUp" data-label={data_id} data-wow-delay=".3s" style={{maxHeight: "646px", maxWidth: "100%", overflow: "hidden"}}>
                            <img src={mainImg} alt="Service" />
                        </div>
                    )}

                    <div className="details-content">
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">{title}</h2>

                        {tags.length > 0 && (
                            <ul className="post-card wow fadeInUp" data-wow-delay=".5s">
                                {tags.map((tag, idx) => (
                                    <li key={idx}>{tag}</li>
                                ))}
                            </ul>
                        )}

                        {/* Paragraph */}
                        {paragraph && <p className="pt-2">{paragraph}</p>}

                        {/* Secondary Columns */}
                        {secondaryColumns.length > 0 && (
                            <div className="row align-items-center mt-5">
                                {secondaryColumns.map((col, idx) => (
                                    <div key={idx} className={`col-lg-${idx === 0 ? 7 : 5}`}>
                                        <div className="content wow fadeInUp" data-wow-delay=".3s">
                                            <h3>{col.heading}</h3>
                                            <p>{col.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {benefits && benefits.length > 0 && (
                            <div className="row g-4 mt-2">
                                <div className="col-lg-12">
                                    <h3>Benefits With Our Service</h3>
                                    <div className="list-items">
                                        {Array.from({ length: 3 }).map((_, colIdx) => (
                                            <div key={colIdx} className="col-lg-4">
                                                <ul className="wow fadeInUp" data-wow-delay={`.${colIdx + 3}s`}>
                                                    {benefits
                                                        .filter((_, i) => i % 3 === colIdx)
                                                        .map((item, idx) => (
                                                            <li key={idx}>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Additional Images */}
                        {additionalImages.length > 0 && (
                            <div className="row g-4 mt-4 mb-4">
                                {additionalImages.map((img, idx) => (
                                    <div key={idx} className="col-lg-6">
                                        <div className="service-details-image wow fadeInUp" data-wow-delay={`.${idx + 3}s`}>
                                            <img src={img} alt={`Additional ${idx + 1}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
