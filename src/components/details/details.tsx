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
    useTallImageLayout = false,
}) => {
    return (
        <section className="service-details-section fix section-padding bg-gray-50 min-height-100vh">
            <div className="container custom-container-4">
                <div className="service-details-wrapper">

                    {useTallImageLayout ? (
                        <div className="row align-items-start g-5">
                            {/* LEFT IMAGE */}
                            {mainImg && (
                                <div className="col-lg-5">
                                    <div
                                        className="service-details-image wow fadeInUp rounded-2xl overflow-hidden shadow-lg"
                                        data-label={data_id}
                                        data-wow-delay=".3s"
                                    >
                                        <img
                                            src={mainImg}
                                            alt="Service"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* RIGHT PANEL */}
                            <div className="col-lg-7">
                                <div className="details-content bg-white rounded-2xl shadow-sm p-4 p-lg-5">

                                    {/* Header */}
                                    <div className="mb-4">
                                        <h2 className="wow fadeInUp fw-semibold mb-3" data-wow-delay=".3s">
                                            {title}
                                        </h2>

                                        {tags.length > 0 && (
                                            <div className="d-flex flex-wrap gap-2 wow fadeInUp" data-wow-delay=".4s">
                                                {tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 rounded-pill bg-light border small"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Intro paragraph */}
                                    {paragraph && (
                                        <p className="text-muted fs-6 mb-4 border-start ps-3">
                                            {paragraph}
                                        </p>
                                    )}

                                    {/* Secondary Columns */}
                                    {secondaryColumns.length > 0 && (
                                        <div className="row mt-4 g-4">
                                            {secondaryColumns.map((col, idx) => (
                                                <div key={idx} className="col-lg-6">
                                                    <div className="content h-100 p-3 rounded-xl bg-light wow fadeInUp">
                                                        <h3 className="h5 mb-2 fw-semibold">
                                                            {col.heading}
                                                        </h3>
                                                        <p className="mb-0 text-muted">
                                                            {col.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Benefits */}
                                    {benefits && benefits.length > 0 && (
                                        <div className="mt-5">
                                            <h3 className="h5 fw-semibold mb-3">
                                                Benefits With Our Service
                                            </h3>

                                            <div className="row g-3">
                                                {benefits.map((item, idx) => (
                                                    <div key={idx} className="col-md-6">
                                                        <div className="d-flex align-items-start gap-2 p-3 rounded-xl bg-light">
                                                            <span className="mt-1">✓</span>
                                                            <span>{item}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Additional Images */}
                                    {additionalImages.length > 0 && (
                                        <div className="row g-4 mt-4">
                                            {additionalImages.map((img, idx) => (
                                                <div key={idx} className="col-lg-6">
                                                    <div className="service-details-image rounded-xl overflow-hidden wow fadeInUp">
                                                        <img
                                                            src={img}
                                                            alt={`Additional ${idx + 1}`}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* ===== NON-TALL IMAGE LAYOUT (UPDATED STYLING) ===== */
                        <>
                            {mainImg && (
                                <div className="row g-4 mt-4">

                                    {/* MAIN IMAGE */}
                                    <div
                                        className={
                                            additionalImages.length > 0
                                                ? "col-lg-6"
                                                : "col-12"
                                        }
                                    >
                                        <div
                                            className="service-details-image wow fadeInUp rounded-2xl overflow-hidden shadow-lg h-100"
                                            data-label={data_id}
                                            data-wow-delay=".3s"
                                            style={{
                                                maxHeight: "646px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <img
                                                src={mainImg}
                                                alt="Service"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* FIRST ADDITIONAL IMAGE ONLY */}
                                    {additionalImages[0] && (
                                        <div className="col-lg-6">
                                            <div className="service-details-image rounded-2xl overflow-hidden wow fadeInUp h-100">
                                                <img
                                                    src={additionalImages[0]}
                                                    alt="Additional"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="details-content bg-white rounded-2xl shadow-sm p-4 p-lg-5">

                                {/* Header */}
                                <div className="mb-4">
                                    <h2 className="wow fadeInUp fw-semibold mb-3" data-wow-delay=".3s">
                                        {title}
                                    </h2>

                                    {tags.length > 0 && (
                                        <div className="d-flex flex-wrap gap-2 wow fadeInUp" data-wow-delay=".4s">
                                            {tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 rounded-pill bg-light border small"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Intro paragraph */}
                                {paragraph && (
                                    <p className="text-muted fs-6 mb-4 border-start ps-3">
                                        {paragraph}
                                    </p>
                                )}

                                {/* Secondary Columns */}
                                {secondaryColumns.length > 0 && (
                                    <div className="row mt-4 g-4">
                                        {secondaryColumns.map((col, idx) => (
                                            <div key={idx} className="col-lg-6">
                                                <div className="content h-100 p-3 rounded-xl bg-light wow fadeInUp">
                                                    <h3 className="h5 mb-2 fw-semibold">
                                                        {col.heading}
                                                    </h3>
                                                    <p className="mb-0 text-muted">
                                                        {col.content}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Benefits */}
                                {benefits && benefits.length > 0 && (
                                    <div className="mt-5">
                                        <h3 className="h5 fw-semibold mb-3">
                                            Benefits With Our Service
                                        </h3>

                                        <div className="row g-3">
                                            {benefits.map((item, idx) => (
                                                <div key={idx} className="col-md-6">
                                                    <div className="d-flex align-items-start gap-2 p-3 rounded-xl bg-light">
                                                        <span className="mt-1">✓</span>
                                                        <span>{item}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Additional Images (skip first) */}
                                {additionalImages.length > 1 && (
                                    <div className="row g-4 mt-4">
                                        {additionalImages.slice(1).map((img, idx) => (
                                            <div key={idx} className="col-lg-6">
                                                <div className="service-details-image rounded-xl overflow-hidden wow fadeInUp">
                                                    <img
                                                        src={img}
                                                        alt={`Additional ${idx + 2}`}
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;