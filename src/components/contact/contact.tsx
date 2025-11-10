import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="contact-form-section section-padding fix" id="contact">
      <div className="contact-form-container-wrapper style1">
        <div className="container-fluid">
          <div className="contact-title-wrapper pb-425 section-bg2 section-padding border-radius">
            <div className="container">
              <div className="row">
                <div className="col-xl-7">
                  <div className="section-title text-left">
                    <span className="subtitle text-white wow fadeInUp">
                      <img
                        src="src/assets/img/icon/subTitleIconWhite.svg"
                        alt="icon"
                      />
                      Contact Us
                    </span>
                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                      Feel Free To Contact Us
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="contact-form-wrapper style1 mt-n368">
            <div className="row gx-60 gy-5">
              <div className="col-xl-12">
                <div className="contact-form style1 wow fadeInUp" data-wow-delay=".3s">
                  <h2>Get in Touch</h2>
                  <form className="row" action="#">
                    <div className="col-md-6">
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-md-6">
                      <input type="number" placeholder="Phone Number" />
                    </div>
                    <div className="col-md-6">
                      <select name="orderby" className="single-select" aria-label="Shop order">
                        <option value="subject" selected>Subject</option>
                        <option value="greetings">Greetings</option>
                        <option value="order">About Order</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        id="message"
                        className="form-control"
                        placeholder="Write your message here..."
                        rows={5}
                      />
                    </div>
                    <div className="col-12 form-group mb-0">
                      <button className="theme-btn w-100">
                        Submit Now <i className="fa-sharp fa-regular fa-arrow-right-long bg-transparent text-white"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
