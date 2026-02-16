import React from "react";
import { useLanguage } from "../../contexts/languageContext";
import { translations, type ContactTranslations } from "./translations";

const ContactSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang] as ContactTranslations;

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
                      {t.subtitle}
                    </span>
                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                      {t.title}
                    </h2>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="title-content wow fadeInUp" data-wow-delay=".5s">
                    <p className="text-white">
                      {t.description}
                    </p>
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
                  <h2>{t.form.heading}</h2>
                  <form className="row" action="/contact.php" method="POST">
                    <div className="col-md-6">
                      <input type="text" name="fullName" placeholder={t.form.fullName} required/>
                    </div>

                    <div className="col-md-6">
                      <input type="email" name="email" placeholder={t.form.email} required/>
                    </div>

                    <div className="col-md-6">
                      <input type="text" name="phone" placeholder={t.form.phone}/>
                    </div>

                    <div className="col-md-6">
                      <select name="subject" className="single-select">
                        <option value="general">{t.form.subject}</option>
                        <option value="greetings">{t.form.greetings}</option>
                        <option value="order">{t.form.order}</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <textarea name="message" placeholder={t.form.message} rows={5} required/>
                    </div>

                    <input type="text" name="company" style={{ display: "none" }} tabIndex={-1} autoComplete="off"/>
                    <input type="hidden" name="form_time" value={Date.now()} />

                    <div className="col-12 form-group mb-0">
                      <button type="submit" className="theme-btn w-100">
                        {t.form.submit}
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
