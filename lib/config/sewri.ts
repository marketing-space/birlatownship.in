import {
  Car,
  Home,
  ImageIcon,
  IndianRupee,
  LayoutPanelTop,
  MapPin,
  Phone,
  Trees,
  Video,
} from "lucide-react";
import { routes } from "./routes";

const route = routes.Sewri;

export const sewriConfig = {
  name: "L&T The Gateway",
  about:
    "The real estate arm of Larsen and Toubro, L&T Realty, was established in 2011. The firm is famous for developing residential, retail, and commercial real estate buildings that stand out for their unique and sleek designs. Besides building the Grand Central Mall in Seawoods, it is famous for its beautiful residential complexes across popular locales such as Powai, South Bombay, and Navi Mumbai.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    email: "sales@narangprivado.com",
    address: "Sewri, Mumbai",
  },
  gtmId: "GTM-WF4XZ8V9",
  navbar: {
    navItems: [
      {
        href: `/${route}/#home`,
        label: "Home",
        icon: Home,
      },
      {
        href: `/${route}/#pricing`,
        label: "Price",
        icon: IndianRupee,
      },
      {
        href: `/${route}/#sitefloorplan`,
        label: "Site & Floor Plan",
        icon: LayoutPanelTop,
      },
      {
        href: `/${route}/#amenities`,
        label: "Amenities",
        icon: Trees,
      },
      {
        href: `/${route}/#gallery`,
        label: "Gallery",
        icon: ImageIcon,
      },
      {
        href: `/${route}/#location`,
        label: "Location",
        icon: MapPin,
      },
      {
        href: `/${route}/#sitevisit`,
        label: "Virtual Site Visit",
        icon: Video,
      },
    ],
    cta: {
      title: "Download Brochure",
      description:
        "Download the brochure to learn more about L&T The Gateway.",
    },
  },

  branding: {
    logo: "/sewri/images/logo.svg",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/sewri/images/banner1.webp",
        alt: "L&T The Gateway.", 
      },
      {
        src: "/sewri/images/banner2.webp",
        alt: "L&T The Gateway Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about L&T The Gateway.",
      },
      title: "Welcome to L&T The Gateway",
      description: `L&T The Gateway stands as a remarkable architectural marvel in the upscale neighborhood of Sewri, South Mumbai. These twin towers offer an exquisite selection of spacious 3, 4, and 4.5 BHK residences, designed for luxury living. Each apartment features grand decks that open to breathtaking views of the Arabian Sea and the Atal Setu. This gated community is thoughtfully designed with an array of amenities, including an indoor games zone, swimming pool, gymnasium, jogging track, multipurpose hall, yoga zone, garden, and kids' play area, ensuring a comfortable and indulgent lifestyle.  

      Strategically located, L&T The Gateway provides easy access to prominent social landmarks. Educational institutions like Trinity International School, JBCN International School, and ICE College of Hotel Management, along with healthcare facilities such as Wockhardt Hospital and Tata Memorial Hospital, are all within a 15-minute radius. Shopping and entertainment hubs like Phoenix Palladium and Nakshatra Mall add to the convenience. Connectivity is seamless with the Eastern Express Highway and Eastern Freeway linking central suburbs, Thane, and western suburbs, while the Ambedkar Nagar monorail enhances local accessibility. Additionally, the Atal Setu bridge offers swift connectivity to Navi Mumbai, making L&T The Gateway an ideal destination for an elite lifestyle.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Sewri by L&T Realty",
      points: [
        { text: "Every Booking:50% Stamp Duty Refund" },
        { text: "Book Now & Save Up To ₹24 Lacs*" },
        { text: "20:80 Payment Plan : 1st 18 Units" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "2.5 acres",
        },
        {
          title: "Floors",
          value: "G+62 Storeys",
        },
        {
          title: "Possession",
          value: "December 2027",
        },
      ],
      price: {
        title: "Luxurious 3, 4 & 4.5 BHK Starts at",
        value: "6 Cr",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2, 3, 4 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "3 BHK",
        carpetArea: "1258 Sq.ft.",
        price: "6 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK Large",
        carpetArea: "1445 Sq.ft.",
        price: "7.5 Cr",
        suffix: "Onwards",
      },
      {
        type: "4 BHK",
        carpetArea: "1980 Sq.ft.",
        price: " 9.99 Cr",
        suffix: "Onwards",
      },
      {
        type: "4.5 BHK",
        carpetArea: "2251 Sq.ft.",
        price: "11.89 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/sewri/images/costing.jpg",
        alt: "L&T The Gateway.",
      },
      title: "Need Complete Costing Details?",
      description:
        "Download our detailed cost breakdown including all charges and payment plans",
      cta: {
        title: "Get Price Details",
        description: "Request complete pricing information",
      },
    },
  },

  siteAndFloorPlan: {
    title: "Site & Floor Plan",
    description:
      "Explore our thoughtfully designed layouts that maximize space and comfort",
    masterPlan: {
      title: "Master Plan",
      image: {
        src: "/sewri/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of L&T The Gateway.",
      },
    },
    floorPlans: {
      categories: ["All", "3 BHK", "4 BHK" , "4.5 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "3 BHK-1258 Sq.ft.",
          image: "/sewri/images/plan-1.jpg",
          category: "3 BHK",
        },
        {
          type: "3 BHK-1445 Sq.ft.",
          image: "/sewri/images/plan-2.jpg",
          category: "3 BHK",
        },
        {
          type: "4 BHK-1980 Sq.ft.",
          image: "/sewri/images/plan-3.jpg",
          category: "4 BHK",
        },
        {
          type: "4.5 BHK-2251 Sq.ft.",
          image: "/sewri/images/plan-4.jpg",
          category: "4.5 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of L&T The Gateway.",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of L&T The Gateway.",
    },
    amenities: [
      {
        title: "Gym",
        image: "/sewri/images/amenities/GYM.webp",
        description: "",
      },
      {
        title: "Multipurpose Sports Court",
        image: "/sewri/images/amenities/multipurposesportscourt.webp",
        description: "",
      },
      {
        title: "Indoor Game Zone",  
        image: "/sewri/images/amenities/indoorgame-320w.webp",
        description: "",
      },
      {
        title: "ClubHouse",
        image: "/sewri/images/amenities/clubhouse.webp",
        description: "",
      },
      {
        title: "Physiotherapy Room",
        image: "/sewri/images/amenities/physiotherapy-room.jpg",
        description: "",
      },
      {
        title: "Aerobics Room",
        image: "/sewri/images/amenities/aerobics-room.jpg",
        description: "",
      },
      {
        title: "24 X 7 Security",
        image: "/sewri/images/amenities/security.jpg",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/sewri/images/amenities/banquethall_1.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/sewri/images/amenities/swimming_01.webp",
        description: "",
      },
      {
        title: "Jogging Track",
        image: "/sewri/images/amenities/Joggingtrack.webp",
        description: "",
      },
      {
        title: "Private Theatre",
        image: "/sewri/images/amenities/PRIVATETHEATRE.webp",
        description: "",
      },
      {
        title: "Walking Path",
        image: "/sewri/images/amenities/walkingpath9.webp",
        description: "",
      },
    ],
    stats: {
      title: "40+ World-Class Amenities",
      description: "Everything you need for a luxurious lifestyle",
    },
  },

  gallery: {
    title: "Gallery",
    description:
      "Experience luxury living through our carefully curated spaces",
    cta: {
      title: "Download Gallery",
      description: "Download the gallery of L&T The Gateway.",
    },
    images: [
      {
        title: "",
        image: "/sewri/images/gallery/G1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/sewri/images/gallery/G2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/sewri/images/gallery/G3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/sewri/images/gallery/G4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d873974.6926092161!2d72.855778!3d18.995355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfc2fa220e3d%3A0x261d0adfc3e0f9c3!2sLnT%20MTHL%20-%20Pk1%20-%20New%20Project%20Office!5e1!3m2!1sen!2sin!4v1741519017681!5m2!1sen!2sin",
    image: {
      src: "/sewri/images/LocationMap.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Sewri Railway Station",
        description: "4-5 Mins",
      },
      {
        title: "Bandra Worli Sea Link",
        description: "20-24 Mins",
      },
      {
        title: "Eastern Express Highway",
        description: "25-27 Mins",
      },
      {
        title: "Proposed Metro Line 4",
        description: "15-17 Mins",
      },
      {
        title: "Sion Railway Station",
        description: "12-14 Mins",
      },
      {
        title: "CSM International Airport:",
        description: "26-30 Mins",
      },
    ],
    location: {
      title: "Location Details",
      cta: {
        title: "Get Location",
        description: "Get detailed information about this location",
      },
    },
  },

  virtualTour: {
    title: "Virtual Tour Request",
    description: "Experience L&T The Gateway from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/sewri/images/banner1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience L&T The Gateway from the comfort of your home",
    features: [
      {
        title: "360° Views",
        description: "Explore every corner of our property in detail",
      },
      {
        title: "Live Interaction",
        description: "Real-time guidance from our property experts",
      },
      {
        title: "Flexible Timing",
        description: "Schedule your tour at your convenience",
      },
    ],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  enquire: {
    title: "Get The Best Quote",
    bookFreeVisit: {
      image: {
        src: "/sewri/images/ride.png",
        alt: "Book a Site Visit",
      },
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
    },

    callUs: {
      title: "Call Us",
      description: "Get in touch with our experts",
      phone: "+91 96190 95795",
    },
    enquiryFeatures: [
      {
        icon: Phone,
        title: "Instant Call Back",
        description: "Get a call from our experts",
      },
      {
        icon: Car,
        title: "Free Site Visit",
        description: "Schedule at your convenience",
      },
      {
        icon: IndianRupee,
        title: "Unmatched Price",
        description: "Best offers guaranteed",
      },
    ],
  },

  legal: {
    rera: {
      title: "RERA Information",
      description:
        "L and T Realty Evara Heights is available on the website <a href='https://maharera.mahaonline.gov.in/'>https://maharera.mahaonline.gov.in/</a> under registered projects.",
      details: [
        {
          title: "L&T Sewri MahaRERA",
          reraNumber: "P51900054969",
          qrCode: "/sewri/images/qr.webp",
        },
      ],
    },
    legalInfo: [
      {
        title: "Project Registration",
        description:
          "Project Registered under Government of India RERA Act 2016",
      },
      {
        title: "Authorised Advertiser",
        description:
          "Government RERA Authorised Advertiser's: Marketing Space Pvt Ltd, Registration No A51700000595, CIN U74999MH2016PTC288144",
      },
      {
        title: "RERA Numbers",
        description:
          "MAHA RERA Project Registration No.: P51700077650 | P51700077678 | P51700077681.",
      },
      {
        title: "Site Address",
        description:
          "Site Address: MPT, Sewri, Mumbai, Maharashtra 400015.",
      },
      {
        title: "Corporate Office",
        description:
          "Corporate Office: L&T Realty: L&T House, Ballard Estate, Mumbai, India.",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title: "L&T The Gateway | Luxury Apartments in Thane",
    description:
      "Experience luxury living at L&T The Gateway, Thane. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Sewri",
      "L&T The Gateway",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "L&T The Gateway | Terms & Conditions",
      description:
        "Please read these terms and conditions carefully before using our website.",
    },
    title: "Terms & Conditions",
    description:
      "Please read these terms and conditions carefully before using our website.",
    paragraphs: [
      {
        title: "",
        description:
          "By using our website, you agree to abide by the rules laid out by us and consent to collection and use of all such information that you may furnish to, or through, our website. In some cases, while you visit our website, you may not need to provide any personal information. But in certain instances, we must have your personal information in order for us to grant you access to some of the links or sites. Such links/ pages may ask for your name, e-mail address, phone number etc. The information furnished by you is used to provide relevant products and services and to acknowledge receipt of your communication or to send out information and updates to you. You have option of requesting removal from our mailing list. We do not give away your personal information to any third party",
      },
      {
        title: "Security",
        description:
          "To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are encrypted using advanced and standard protocols. We also practice restricted access by employees and hold them to high levels of confidentiality.",
      },
      {
        title: "Disclosing Information",
        description:
          "We do not disclose any personal information obtained about you from this website to third parties unless you permit us to do so by ticking the relevant boxes in registration or competition forms. We may also use the information to keep in contact with you and inform you of developments associated with us. You will be given the opportunity to remove yourself from any mailing list or similar device. If at any time in the future we should wish to disclose information collected on this website to any third party, it would only be with your knowledge and consent. We may from time to time provide information of a general nature to third parties - for example, the number of individuals visiting our website or completing a registration form, but we will not use any information that could identify those individuals. In addition, Marketing-Space may work with third parties for the purpose of delivering targeted behavioural advertising to the Marketing Space website. Through the use of cookies, anonymous information about your use of our websites and other websites will be used to provide more relevant adverts about goods and services of interest to you. For more information on online behavioural advertising and about how to turn this feature off, please visit https://marketing-space.in.",
      },
    ],
  },

  privacyPolicy: {
    seo: {
      title: "L&T The Gateway | Privacy Policy",
      description: "This policy explains how we use your personal information.",
    },
    title: "Privacy Policy",
    description: "This policy explains how we use your personal information.",
    paragraphs: [
      {
        title: "",
        description:
          "In our endeavour and commitment of protecting your personal information, we have designed this comprehensive privacy policy. This is to keep your interests and information safe on our website.",
      },
      {
        title: "Updation of Privacy Policy",
        description:
          "This privacy policy is subject to undergo change and review without any prior notice or approval. So to keep yourself updated on the changes introduced, please keep visiting and reviewing the terms and conditions of this privacy policy.",
      },
    ],
  },

  cookiesPolicy: {
    seo: {
      title: "L&T The Gateway | Cookies Policy",
      description:
        "This policy explains how we use cookies and similar technologies on our website.",
    },
    title: "Cookies Policy",
    description:
      "This policy explains how we use cookies and similar technologies on our website.",
    paragraphs: [
      {
        title: "",
        description:
          "Your Internet browser has the in-built facility for storing small files - 'cookies' - that hold information which allows a website to recognise your account. Our website takes advantage of this facility to enhance your experience. You have the ability to prevent your computer from accepting cookies but, if you do, certain functionality on the website may be impaired.",
      },
      {
        title: "",
        description:
          "We may use cookies for security, session continuity, and customization purposes. In case of a user opting to reject a cookie, he/ she may not be able to gain access to some of the limited services or use some features of the site. In case of any queries or suggestions regarding privacy statement or your dealings with this web site, please contact us.updates to you. Also, you hold an option of requesting removal from our mailing list. We do not share your personal information with any third party.",
      },
    ],
  },

  thankYou: {
    seo: {
      title: "L&T The Gateway | Thank You",
      description: "Thank you for your interest in L&T The Gateway.",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_118",
      publicId: "f45b25fe9a8439d97de5a371d02d9fbe",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "LT The Gateway",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from L&T The Gateway.",
      },
    },
  },
};

export type SewriConfig = typeof sewriConfig;
