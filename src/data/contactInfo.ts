export const contactInfo = {
  address: "Zaubeekstraat 73, 9870 Zulte, Belgium",
  email: "eddy@vawat.be",
  phone: "+32 485 83 38 48",
  title: "Zaakvoerder",
  name: "Eddy Van Assche",
};

export const creatorInfo = {
  name: "Torben Van Assche",
  website: "https://www.torbenvanassche.dev",
}

export const companyInfo = {
  slogan: "We Care for Your Water!",
  yearsExperience: 30,
}

export const socialLinks = [
  { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/eddy-van-assche-9364749/", name: "LinkedIn" },
];

export const navStructure = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  {
    key: "services",
    href: "#service",
    children: [
      { key: 0, to: "/services/0" },
      { key: 1, to: "/services/1" },
      { key: 2, to: "/services/2" },
      { key: 3, to: "/services/3" },
    ],
  },
  { key: "contact", href: "#contact" },
];

