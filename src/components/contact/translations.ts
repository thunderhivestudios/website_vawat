export interface ContactFormTranslations {
  heading: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  greetings: string;
  order: string;
  message: string;
  submit: string;
}

export interface ContactTranslations {
  subtitle: string;
  title: string;
  description?: string;
  form: ContactFormTranslations;
}

export interface ContactTranslationMap {
  nl: ContactTranslations;
  en: ContactTranslations;
}


export const translations = {
  nl: {
    subtitle: "Contact",
    title: "Neem contact met ons op",
    form: {
      heading: "Neem contact op",
      fullName: "Volledige naam",
      email: "E-mailadres",
      phone: "Telefoonnummer",
      subject: "Onderwerp",
      greetings: "Groeten",
      order: "Over bestelling",
      message: "Schrijf hier uw bericht...",
      submit: "Verzenden",
    },
  },
  en: {
    subtitle: "Contact",
    title: "Contact Us",
    form: {
      heading: "Get in Touch",
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      greetings: "Greetings",
      order: "About Order",
      message: "Write your message here...",
      submit: "Submit Now",
    },
  },
};
