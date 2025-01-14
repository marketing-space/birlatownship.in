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

const route = routes.LodhaMirabelle;

export const lodhaMirabelleSiteConfig = {
  name: "Lodha Mirabelle",
  about:
    "One of India's leading real estate firms, the Lodha Group is renowned for building urban dream homes that offer refined living. The developer caters to all segments, from luxury to budget residences and has built iconic landmarks all across Mumbai, Thane, and Navi Mumbai. Lodha properties are known to feature quality interiors, state-of-the-art amenities, vast open spaces, and manicured green landscapes. A few of their standout properties are Lodha World Towers in Lower Parel, Lodha Palava in Dombivli, Lodha Crown in Thane, and Lodha Bellagio in Powai.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Kolshet Rd, Kolshet Industrial Area, Thane West, Thane, Maharashtra 400607",
  },
  gtmId: "GTM-52HN2BZN",
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
      description: "Download the brochure to learn more about Lodha Mirabelle.",
    },
  },

  branding: {
    logo: "/lodha-mirabelle/images/logo.png",
    favicon: "/lodha-mirabelle/images/icon.png",
    ogImage: "/lodha-mirabelle/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/lodha-mirabelle/images/banner-1.webp",
        alt: "Lodha mirabelle Exterior",
      },
      {
        src: "/lodha-mirabelle/images/banner-2.webp",
        alt: "Lodha mirabelle Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description: "Download the brochure to learn more about Lodha Mirabelle.",
      },
      title: "Welcome To Lodha Mirabelle Thane",
      description: `Introducing Lodha Mirabelle, a 19-acre urban sanctuary where luxury and nature coexist harmoniously. Immerse yourself in the peaceful ambiance of the lush central park, and enjoy the opulence of a 45,000 sq. ft. clubhouse designed for both relaxation and entertainment. At Lodha Mirabelle, every aspect of our thoughtfully crafted residences reflects a seamless blend of elegance and nature. Start each day with the tranquil beauty of serene landscapes, embracing a lifestyle where luxury meets the natural world in perfect harmony.`,
    },
    offer: {
      title: "Booking Open",
      location: "At Manyata Teck Park by Lodha Group",
      points: [
        { text: "Spot Booking Offers" },
        { text: "Lavish Clubhouse" },
        { text: "Premium Amenities" },
        { text: "Flexi Payment Plan" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "10 Acres",
        },
        {
          title: "Floors",
          value: "40 Storeys",
        },
        {
          title: "Possession",
          value: "Dec 2025",
        },
      ],
      price: {
        title: "Luxurious 2.5, 3.5 & 4 BHK Starts from",
        value: "2.30 Cr*",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2.5, 3.5 & 4 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "2.5 BHK",
        carpetArea: "1485 Sq.ft.",
        price: "2.3 Lacs",
        suffix: "Onwards",
      },
      {
        type: "3.5 BHK",
        carpetArea: "2070 Sq.ft.",
        price: "1.05 Cr",
        suffix: "Onwards",
      },
      {
        type: "4 BHK",
        carpetArea: "2650 Sq.ft.",
        price: "1.17 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/lodha-mirabelle/images/costing.webp",
        alt: "Lodha Mirabelle Costing",
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
        src: "/lodha-mirabelle/images/master-plan.png",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Lodha Mirabelle",
      },
    },
    floorPlans: {
      categories: ["All", "2.5 BHK", "3.5 BHK", "4 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2.5 BHK-1485 Sq.ft.",
          image: "/lodha-mirabelle/images/floor-1.jpg",
          category: "2.5 BHK",
        },
        {
          type: "3.5 BHK-2070 Sq.ft.",
          image: "/lodha-mirabelle/images/floor-2.jpg",
          category: "3.5 BHK",
        },
        {
          type: "4 BHK-2650 Sq.ft.",
          image: "/lodha-mirabelle/images/floor-3.jpg",
          category: "4 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Lodha Mirabelle",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Lodha Mirabelle",
    },
    amenities: [
      {
        title: "Badminton Court",
        image: "/lodha-mirabelle/images/amenities/1.png",
        description: "",
      },
      {
        title: "Cricket Pitch",
        image: "/lodha-mirabelle/images/amenities/2.png",
        description: "",
      },
      {
        title: "Ganesha Temple",
        image: "/lodha-mirabelle/images/amenities/3.png",
        description: "",
      },
      {
        title: "Grand Clubhouse",
        image: "/lodha-mirabelle/images/amenities/4.png",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/lodha-mirabelle/images/amenities/5.png",
        description: "",
      },
      {
        title: "Gym",
        image: "/lodha-mirabelle/images/amenities/6.png",
        description: "",
      },
      {
        title: "Indoor Pool",
        image: "/lodha-mirabelle/images/amenities/7.png",
        description: "",
      },
      {
        title: "Multiple Party Hall",
        image: "/lodha-mirabelle/images/amenities/8.png",
        description: "",
      },
      {
        title: "Pool Side Cafe",
        image: "/lodha-mirabelle/images/amenities/9.png",
        description: "",
      },
      {
        title: "Pool Side Deck",
        image: "/lodha-mirabelle/images/amenities/10.png",
        description: "",
      },
      {
        title: "Carrom & Chess Room",
        image: "/lodha-mirabelle/images/amenities/Carrom & Chess Room.png",
        description: "",
      },
      {
        title: "Lawn Party",
        image: "/lodha-mirabelle/images/amenities/party.webp",
        description: "",
      },
    ],
    stats: {
      title: "32+ World-Class Amenities",
      description: "Everything you need for a luxurious lifestyle",
    },
  },

  gallery: {
    title: "Gallery",
    description:
      "Experience luxury living through our carefully curated spaces",
    cta: {
      title: "Download Gallery",
      description: "Download the gallery of Lodha Mirabelle",
    },
    images: [
      {
        title: "",
        image: "/lodha-mirabelle/images/gallery/g1.png",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/lodha-mirabelle/images/gallery/g2.png",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/lodha-mirabelle/images/gallery/g3.png",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/lodha-mirabelle/images/gallery/g4.png",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62188.577099529546!2d77.62485900000001!3d13.049285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a01194648d%3A0xed823b0974c3a189!2sLodha%20Manyata%20Tech-%20Park!5e0!3m2!1sen!2sin!4v1736412908132!5m2!1sen!2sin",
    image: {
      src: "/lodha-mirabelle/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Airport",
        description: "30 Mins",
      },
      {
        title: "Proposed Nagavara metro station",
        description: "2 Mins",
      },
      {
        title: "Orchid Internation School",
        description: "5 Mins",
      },
      {
        title: "Elements Mall",
        description: "5 Mins",
      },
      {
        title: "Manipal Hospital",
        description: "20 Mins",
      },
      {
        title: "Thane Railway Station",
        description: "20 Mins",
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
    description: "Experience Lodha Mirabelle from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/lodha-mirabelle/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription: "Experience Lodha Mirabelle from the comfort of your home",
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

  enquire: {
    title: "Get The Best Quote",
    bookFreeVisit: {
      image: {
        src: "/lodha-mirabelle/images/ride.png",
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
      description: "",
      details: [
        {
          title: "",
          reraNumber: "Rera No. PRM/KA/RERA/1251/309/PR/131023/006321",
          qrCode: "/lodha-mirabelle/images/barcode-1.webp",
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
          "RERA Project Registration No.:  PRM/KA/RERA/1251/309/PR/131023/006321",
      },
      {
        title: "Site Address",
        description:
          "Lodha Mirabelle: 2, Thanisandra Main Rd, Bharath Nagar, Manayata Tech Park, Thanisandra, Bengaluru, Karnataka 560045",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Lodha Mirabelle by Lodha Group | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Lodha Mirabelle, 2.5 , 3.5 & 4 BHK apartments with world-class amenities.",
    keywords: ["luxury apartments", "lodha group", "2 bhk", "3 bhk"],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  termsAndConditions: {
    seo: {
      title: "Terms & Conditions | Lodha Mirabelle",
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
      title: "Privacy Policy | Lodha Mirabelle",
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
      title: "Cookies Policy | Lodha Mirabelle",
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
      title: "Lodha Mirabelle | Thank You",
      description: "Thank you for your interest in Lodha Mirabelle",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_89",
      publicId: "df7776d385adb5cfe84b8edf769f8eeb",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Lodha Mirabelle",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Lodha Mirabelle",
      },
    },
  },
};

export type LodhaMirabelleSiteConfig = typeof lodhaMirabelleSiteConfig;
