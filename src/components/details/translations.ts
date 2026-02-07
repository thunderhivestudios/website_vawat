// src/data/serviceTranslations.ts
import { type ServiceDetail } from "../../interfaces/types";

import mainImage1 from "../../assets/img/service/1.jpg";
import mainImage2 from "../../assets/img/service/2.jpg";
import mainImage3 from "../../assets/img/service/3.jpg";
import mainImage4 from "../../assets/img/service/4.jpg";

export const translations: { nl: ServiceDetail[]; en: ServiceDetail[] } = {
  nl: [
    {
      mainImage: mainImage1,
      data_id: "5",
      title: "Wateroplossingen voor Voedings-, Dranken- en Farmaceutische Industrie",
      tags: ["Voeding & Dranken", "Farmaceutisch", "Waterkwaliteit"],
      overview:
        "VaWat biedt gespecialiseerde oplossingen en advies voor waterbehandeling in voedings-, dranken- en farmaceutische industrie.",
      secondaryColumns: [
        {
          heading: "Voeding & Dranken",
          content: `
        Advies en oplossingen voor waterbehandeling, optimalisatie van bestaande installaties,
        waterbalansen, audits en besparingen in water en energie.
      `,
        },
        {
          heading: "Farmaceutische Industrie",
          content: `
        Ondersteuning bij afvalwaterreductie, optimalisatie van waterbehandelingsskids en
        naleving van Europese Pharmacopee-normen.
      `,
        },
      ],
      benefits: [
        "Advies en oplossingen voor beide sectoren",
        "Optimalisatie van water- en energiegebruik",
        "Assistentie bij audits en haalbaarheidsstudies",
        "Trainingen en workshops",
      ],
      paragraph:
        "VaWat biedt bedrijven complete oplossingen voor waterprojecten, met expertise in advies, projectmanagement en kennis van productieprocessen.",
    }
    ,
    {
      mainImage: mainImage2,
      data_id: "6",
      title: "Complete Waterbehandelingsoplossingen",
      tags: ["Ultrafiltratie", "Membraantechnologie", "Wateroptimalisatie"],
      overview:
        "VaWat biedt complete waterbehandelingsoplossingen voor elke stap in het proces, afgestemd op uw specifieke toepassing.",
      secondaryColumns: [
        {
          heading: "Expertise",
          content:
            "VaWat combineert diepgaande kennis van klassieke technieken met innovatieve membraantechnologieën om altijd de meest geschikte oplossing te kiezen.",
        },
        {
          heading: "Geoptimaliseerde Behandeling",
          content:
            "Samen met de klant ontwerpen we de optimale waterbehandeling die voldoet aan alle kwaliteitseisen, met oog voor rendement, minimale afvalwaterproductie en energieverbruik.",
        },
      ],
      benefits: [
        "Ultrafiltratie",
        "Multimediafiltratie / Drukfilters",
        "Ontijzering en Mangaanverwijdering",
        "Waterverzachters en Onthardingsinstallaties",
        "Decarbonatatie met ionenuitwisselaarsharsen",
        "Demineralisatie met ionenuitwisselaars",
        "Omgekeerde osmose",
        "Continue Deïonisatie (CDI / Ionpure)",
        "UV-installaties",
        "Ozongeneratoren",
        "Steriele filtratie",
        "Ultrapuur water voor laboratoria",
      ],
      paragraph:
        "VaWat levert hoogwaardige waterbehandelingsoplossingen, afgestemd op uw specifieke behoeften. Onze focus ligt op maximale efficiëntie, minimale afvalproductie en energieverbruik, en het behalen van de gestelde kwaliteitsnormen.",
    },
    {
      mainImage: mainImage3,
      data_id: "7",
      title: "Levering van Onderdelen en Verbruiksgoederen",
      tags: ["Onderdelen", "Verbruiksgoederen", "Leveranciersnetwerk"],
      overview:
        "VaWat heeft contacten met Belgische, Europese en wereldwijde leveranciers van onderdelen en verbruiksgoederen voor waterbehandeling.",
      secondaryColumns: [
        {
          heading: "Wat We Bieden",
          content:
            "Van wisselstukken tot volledige pompen, doseerpompen, kleppen en meet- en regelapparatuur – VaWat helpt u met het zoeken, leveren en plaatsen van alle onderdelen.",
        },
        {
          heading: "Verbruiksgoederen",
          content:
            "Filterpatronen, vullingen voor filters, ionenuitwisselaarsharsen, membranen (Micro-, Ultra-, Nano-, Omgekeerde osmose), CDI-stacks, UV-lampen en meer.",
        },
      ],
      benefits: [
        "Filterpatronen (alle groottes en fijnheden)",
        "Vullingen voor zandfilters, ontijzeraars, actieve koolfilters",
        "Ionenuitwisselaarsharsen",
        "Membranen voor micro-, ultra-, nano- en omgekeerde osmose",
        "CDI-stacks en powerboards",
        "UV-lampen en quartzbuizen",
        "Vervangpatronen voor UPW-systemen",
      ],
      paragraph:
        "Vindt u bepaalde stukken van uw installatie niet terug? Vraag het aan VaWat en u ontvangt snel een passende oplossing. Contacteer ons nu voor een vrijblijvende offerte!",
    },
    {
      mainImage: mainImage4,
      data_id: "8",
      title: "Projectbegeleiding en Engineering",
      tags: ["Projectbegeleiding", "Engineering", "Waterbehandeling"],
      overview:
        "VaWat kan u bijstaan in elke fase van de realisatie van uw waterbehandelingsproject, van ontwerp tot opstart.",
      secondaryColumns: [
        {
          heading: "Onze Aanpak",
          content:
            "Van het ontwerp en haalbaarheidsstudie tot de detailengineering, het opmaken van het lastenboek en het evalueren van de offertes.",
        },
        {
          heading: "Begeleiding tot het Einde",
          content:
            "We volgen uw project op tijdens de opbouw, het opstarten en inregelen van de installaties, met een gestructureerde aanpak die uw timing en kwaliteit garandeert.",
        },
      ],
      benefits: [
        "Ontwerp en haalbaarheidsstudie",
        "Detailengineering",
        "Opmaak van lastenboek",
        "Evaluatie van offertes",
        "Projectopvolging tijdens uitvoering",
        "Opstart en inregeling van installaties",
        "Gestructureerde aanpak met focus op kwaliteit en timing",
      ],
      paragraph:
        "Met VaWat bent u zeker van een professionele projectbegeleiding in elke fase van uw waterbehandelingsinstallatie. Uw deadlines en kwaliteitsverwachtingen staan altijd centraal.",
    },
  ],

  en: [
    {
      mainImage: mainImage1,
      title: "Water Solutions for Food, Beverage & Pharmaceutical Industry",
      tags: ["Food & Beverage", "Pharmaceutical", "Water Quality"],
      overview:
        "VaWat provides specialized solutions and consultancy for water treatment in the food, beverage, and pharmaceutical industries.",
      secondaryColumns: [
        {
          heading: "Food & Beverage",
          content: `
        Solutions for water treatment, optimization of existing systems, water balances,
        audits, and savings in water and energy.
      `,
        },
        {
          heading: "Pharmaceutical",
          content: `
        Support with wastewater reduction, optimization of treatment skids, and compliance
        with European Pharmacopeia standards.
      `,
        },
      ],
      benefits: [
        "Consultancy and solutions for both industries",
        "Optimization of water and energy usage",
        "Assistance with audits and feasibility studies",
        "Training and workshops",
      ],
      paragraph:
        "VaWat provides companies with complete water project solutions, leveraging expertise in consultancy, project management, and production processes.",
    },
    {
      mainImage: mainImage2,
      title: "Complete Water Treatment Solutions",
      tags: ["Ultrafiltration", "Membrane Tech", "Water Optimization"],
      overview:
        "VaWat provides complete water treatment solutions for every step in the process, tailored to your specific application.",
      secondaryColumns: [
        {
          heading: "Expertise",
          content:
            "VaWat combines in-depth knowledge of classical techniques with innovative membrane technologies to always choose the most suitable solution.",
        },
        {
          heading: "Optimized Treatment",
          content:
            "Together with the client, we design the optimal water treatment that meets all quality requirements, focusing on efficiency, minimal wastewater, and energy consumption.",
        },
      ],
      benefits: [
        "Ultrafiltration",
        "Multimedia Filtration / Pressure Filters",
        "Iron and Manganese Removal",
        "Water Softeners and Softening Installations",
        "Decarbonation with Ion Exchange Resins",
        "Demineralization with Ion Exchangers",
        "Reverse Osmosis",
        "Continuous Deionization (CDI / Ionpure)",
        "UV Installations",
        "Ozone Generators",
        "Sterile Filtration",
        "Ultrapure Water for Laboratories",
      ],
      paragraph:
        "VaWat delivers high-quality water treatment solutions tailored to your specific needs. Our focus is on maximum efficiency, minimal waste production and energy use, while achieving the set quality standards.",
    },
    {
      mainImage: mainImage3,
      title: "Supply of Parts and Consumables",
      tags: ["Parts", "Consumables", "Supplier Network"],
      overview:
        "VaWat maintains connections with Belgian, European, and global suppliers for all water treatment-related parts and consumables.",
      secondaryColumns: [
        {
          heading: "What We Offer",
          content:
            "From spare parts to complete pumps, dosing pumps, valves, and measuring and control equipment — VaWat helps you find, deliver, and install every required component.",
        },
        {
          heading: "Consumables",
          content:
            "Filter cartridges, filter media, ion exchange resins, membranes (Micro-, Ultra-, Nano-, Reverse Osmosis), CDI stacks, UV lamps, and more.",
        },
      ],
      benefits: [
        "Filter cartridges (all sizes and fineness levels)",
        "Filter media for sand filters, iron removers, and activated carbon filters",
        "Ion exchange resins",
        "Membranes for micro-, ultra-, nano-, and reverse osmosis",
        "CDI stacks and powerboards",
        "UV lamps and quartz tubes",
        "Replacement cartridges for UPW systems",
      ],
      paragraph:
        "Can’t find certain parts for your existing system? Ask VaWat — you’ll receive an effective solution quickly. Contact us now for a free quote!",
    },
    {
      mainImage: mainImage4,
      title: "Project Support and Engineering",
      tags: ["Project Support", "Engineering", "Water Treatment"],
      overview:
        "VaWat can assist you at every stage of your water treatment project — from design to commissioning.",
      secondaryColumns: [
        {
          heading: "Our Approach",
          content:
            "From design and feasibility study to detailed engineering, preparation of specifications, and evaluation of quotations.",
        },
        {
          heading: "End-to-End Guidance",
          content:
            "We follow your project during construction, commissioning, and system fine-tuning, using a structured approach that ensures your deadlines and quality requirements are met.",
        },
      ],
      benefits: [
        "Design and feasibility study",
        "Detailed engineering",
        "Preparation of specifications",
        "Quotation evaluation",
        "Project supervision during execution",
        "Commissioning and system tuning",
        "Structured approach focused on timing and quality",
      ],
      paragraph:
        "With VaWat, you’re guaranteed professional support throughout your water treatment project. We ensure your schedule and quality standards are always achieved.",
    },
  ],
};
