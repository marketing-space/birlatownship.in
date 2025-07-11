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

const route = routes.Mahim;

export const mahimConfig = {
  name: "L&T Island Cove Mahim",
  about:
    "The real estate arm of Larsen and Toubro, L&T Realty, was established in 2011. The firm is famous for developing residential, retail, and commercial real estate buildings that stand out for their unique and sleek designs. Besides building the Grand Central Mall in Seawoods, it is famous for its beautiful residential complexes across popular locales such as Powai, South Bombay, and Navi Mumbai.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    email: "sales@narangprivado.com",
    address: "Mahim West, Mumbai",
  },
  gtmId: "GTM-MF3LMKVW",
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
        "Download the brochure to learn more about L&T Island Cove Mahim.",
    },
  },

  branding: {
    logo: "/mahim/images/logo.svg",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/mahim/images/banner1.webp",
        alt: "L&T Island Cove Mahim.", 
      },
      {
        src: "/mahim/images/banner2.webp",
        alt: "L&T Island Cove Mahim Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about L&T Island Cove Mahim.",
      },
      title: "Welcome to L&T Island Cove Mahim",
      description: `Marvela at L&T Island Cove is an exquisite new residential tower in Mahim West, offering breathtaking views of the Arabian Sea and the sea link. As the first gated community in Mahim, it presents elegantly designed 3 BHK apartments with private balconies, blending aesthetic appeal with contemporary features. The thoughtfully crafted homes boast spacious layouts that provide ample room and uninterrupted scenic views. Residents can enjoy a range of premium recreational facilities, including a spa, gymnasium, reflexology track, swimming pool, multipurpose hall, yoga zone, cricket pitch, kids' play area, walking path, library, and more, ensuring a lifestyle of comfort and luxury.  

      Situated in a prime location, L&T Marvela offers seamless connectivity to essential conveniences. It is just minutes away from reputed institutions like Canossa High School, Fairmount Academy, and Bombay Scottish School, as well as healthcare facilities such as SL Raheja and Hinduja Hospital. Shopping and entertainment hubs like Jio World Drive, Westside, BKC, and Reliance Smart Bazaar are also within easy reach. The community is well connected to the city through the Western Express Highway, Eastern Express Highway, Lady Jamshedji Road, SB Road, and Mahim Railway Station. Additionally, Bandra Junction and CSM International Airport are just a 15-minute drive away, making Marvela at L&T Island Cove an exceptional choice for an elevated lifestyle.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Mahim by L&T Realty",
      points: [
        { text: "Pay 20% Now & 80% On Possession" },
        { text: "Free Clubhouse Membership" },
        { text: "Additional Discounts Up To 10 L*" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "5.5 Acres",
        },
        {
          title: "Floors",
          value: "G + 39 Storeys",
        },
        {
          title: "Possession",
          value: "December 2028",
        },
      ],
      price: {
        title: "Newly Launched 2 & 3 BHK Starts from",
        value: "2.75 Cr",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of Newly Launched 2 & 3 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "2 BHK",
        carpetArea: "687 - 810 Sq.ft.",
        price: "2.75 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1041-1400 Sq.ft.",
        price: "4.40 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/mahim/images/costing.jpg",
        alt: "L&T Island Cove Mahim.",
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
        src: "/mahim/images/masterplan1.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of L&T Island Cove Mahim.",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-733-880 Sq.ft.",
          image: "/mahim/images/plan-1.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-1041-1400 Sq.ft.",
          image: "/mahim/images/plan-2.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of L&T Island Cove Mahim.",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of L&T Island Cove Mahim.",
    },
    amenities: [
      {
        title: "Convenience Store",
        image: "/mahim/images/amenities/conveniencestore1.webp",
        description: "",
      },
      {
        title: "Cricket Pitch",
        image: "/mahim/images/amenities/CRICKETPITCH.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/mahim/images/amenities/KIDSPLAYAREA.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/mahim/images/amenities/Gymnasium.png",
        description: "",
      },
      {
        title: "Multipurpose Hall",
        image: "/mahim/images/amenities/MULTIPLEPARTYHALL.webp",
        description: "",
      },
      {
        title: "Reflexology Track",
        image: "/mahim/images/amenities/reflexologytrack6.webp",
        description: "",
      },
      {
        title: "Spa",
        image: "/mahim/images/amenities/seniorcitizencorner.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/mahim/images/amenities/pool.png",
        description: "",
      },
      {
        title: "Walking Path",
        image: "/mahim/images/amenities/yoga-1.webp",
        description: "",
      },
      
      {
        title: "Yoga Zone",
        image: "/mahim/images/amenities/POOLSIDECAFE.webp",
        description: "",
      },
      {
        title: "Mini Theatre",
        image: "/mahim/images/amenities/PRIVATETHEATRE.webp",
        description: "",
      },
      {
        title: "Library ",
        image: "/mahim/images/amenities/library_01.webp",
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
      description: "Download the gallery of L&T Island Cove Mahim.",
    },
    images: [
      {
        title: "",
        image: "/mahim/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/mahim/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/mahim/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/mahim/images/gallery/g4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13651.835938800456!2d72.843697!3d19.044275000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9001619fd41%3A0xcfa84a6f55d5c706!2sl%26t%20mahim!5e1!3m2!1sen!2sin!4v1741508064122!5m2!1sen!2sin" ,
    image: {
      src: "/mahim/images/LocationMap.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Mahim Railway Station ",
        description: "3-5 Mins",
      },
      {
        title: "BKC",
        description: "10-14 min",
      },
      {
        title: "Bandra Railway Station",
        description: "9-11 Mins",
      },
      {
        title: "CSM International Airport ",
        description: "15-20 Mins",
      },
      {
        title: "Little Angels' International School",
        description: "10-14 min",
      },
      {
        title: "SL Raheja Hospital",
        description: "3-5 min",
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
    description: "Experience L&T Island Cove Mahim from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/mahim/images/banner1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience L&T Island Cove Mahim from the comfort of your home",
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
        src: "/mahim/images/ride.png",
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
        "L and T Realty Evara Heights has been registered via MahaRERA registration number: P51900046369 and is available on the website https://maharera.mahaonline.gov.in/ under registered projects.",
      details: [
        {
          title: "L&T Island Cove MahaRERA ",
          reraNumber: "P51900046369",
          qrCode: "/mahim/images/qr.webp",
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
          "MAHA RERA Project Registration No.: P51900046369.",
      },
      {
        title: "Site Address",
        description:
          "Site Address: L&T Island Cove: Mahim West, Mumbai, Maharashtra 400016",
      },
      {
        title: "Corporate Office",
        description:
          "Corporate Office: L&T Realty: L&T House, Ballard Estate, Mumbai, India",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title: "L&T Island Cove Mahim | Luxury Apartments in Thane",
    description:
      "Experience luxury living at L&T Island Cove Mahim, Thane. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "thane west",
      "L&T Island Cove Mahim",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "L&T Island Cove Mahim | Terms & Conditions",
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
      title: "L&T Island Cove Mahim | Privacy Policy",
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
      title: "L&T Island Cove Mahim | Cookies Policy",
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
      title: "L&T Island Cove Mahim | Thank You",
      description: "Thank you for your interest in L&T Island Cove Mahim.",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_117",
      publicId: "b1503e3ac69fef4d945f8b5abd31559c",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "LT Island Cove",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from L&T Island Cove Mahim.",
      },
    },
  },
};

export type MahimConfig = typeof mahimConfig;
