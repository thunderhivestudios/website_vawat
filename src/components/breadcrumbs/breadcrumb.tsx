import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  title: string;
  items: BreadcrumbItem[];
  backgroundImage?: string; 
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title,
  items,
  backgroundImage = "src/assets/img/breadcrumb.jpg",
}) => {
  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="page-heading">
          {/* Page Title */}
          <div className="breadcrumb-sub-title">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              {title}
            </h1>
          </div>

          {/* Breadcrumb Items */}
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            {items.map((item, index) => (
              <li key={index} className="breadcrumb-item">
                {item.href ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <span>{item.label}</span>
                )}

                {/* Add separator if not the last item */}
                {index < items.length - 1 && (
                  <i className="fa-regular fa-slash-forward mx-2"></i>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
