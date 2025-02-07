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

const route = routes.LodhaCrownThane;

export const lodhaCrownThaneSiteConfig = {
  name: "Lodha Crown Thane",
  about:
    "At Lodha, our passion is to create landmarks that meet global standards, epitomise the values of our family, and are built on a legacy of trust spanning four decades. We are guided by our vision of 'Building a Better Life'. Lodha enables and transforms you to be a better version of yourself by maximising your potential and leading a flourished life. All our developments deliver the highest level of design and craftsmanship, uncompromising quality, unparalleled service - putting Lodha developments in the league of the world's finest. Our homes are designed to enable more productivity, amenities designed and curated to equip with opportunity! Be it greens/open spaces designed to live a healthier and fuller life or gentry to match like-mindedness, banquets and club houses to network or striking the right chord with the right people, Lodha ensures that your next biggest milestone, is within reach.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address: "Kolshet Road Thane W",
  },
  gtmId: "GTM-N89SLN8",
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
        "Download the brochure to learn more about Lodha Crown Kolshet",
    },
  },

  branding: {
    logo: "/lodha-crown-thane/images/logo.svg",
    favicon: "/lodha-crown-thane/images/favicon.png",
    ogImage: "/lodha-crown-thane/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/lodha-crown-thane/images/banner-1.png",
        alt: "Lodha Crown Kolshet Exterior",
      },
      {
        src: "/lodha-crown-thane/images/banner-2.png",
        alt: "Lodha Crown Kolshet Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Lodha Crown Kolshet.",
      },
      title: "Welcome To CROWN THANE KOLSHET",
      description: `Located at Kolshet Road, Thane, Lodha Crown is a residential project by leading developer Lodha Group. The project is strategically located in proximity to various commercial and business hubs, entertainment centers, social and retails hubs, etc. Lodha Crown is spread over an area of 4 acres with ample green landscape and healthy environs to keep its residents healthy.`,
    },
    offer: {
      title: "Booking Open",
      location: "At Kolshet, By Lodha Group",
      points: [
        { text: "Spot Booking Offer" },
        { text: "Early Buy Discount" },
        { text: "Zero Stamp Duty Benefit" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "4 Acres",
        },
        {
          title: "Floors",
          value: "G + 23 Storeys",
        },
        {
          title: "Possession",
          value: "March 25",
        },
      ],
      price: {
        title: "PREMIUM 1 & 2 BHK Starts From",
        value: "59 Lacs",
        suffix: "All Inclusive",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 1 & 2 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "1 BHK",
        carpetArea: "322 Sq.ft.",
        price: "59 Lacs",
        suffix: "All Inc",
      },
      {
        type: "2 BHK",
        carpetArea: "530 Sq.ft.",
        price: "97 Lacs",
        suffix: "All Inc",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/lodha-crown-thane/images/costing.jpg",
        alt: "Lodha Crown Kolshet Costing",
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
    masterPlan: null,
    floorPlans: {
      categories: ["All", "1 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK",
          image: "/lodha-crown-thane/images/floor-1.jpg",
          category: "1 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Lodha Crown Kolshet",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Lodha Crown Kolshet",
    },
    amenities: [
      {
        title: "Senior Citizen Cove",
        image: "/lodha-crown-thane/images/amenities/senior-citizen-cove.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/lodha-crown-thane/images/amenities/gym.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/lodha-crown-thane/images/amenities/kids-play-area.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/lodha-crown-thane/images/amenities/swimming-pool.webp",
        description: "",
      },
      // {
      //   title: "Security System",
      //   image: "/lodha-crown-thane/images/amenities/security-system.webp",
      //   description: "",
      // },
      {
        title: "Yoga",
        image: "/lodha-crown-thane/images/amenities/yoga.webp",
        description: "",
      },
      {
        title: "Library",
        image: "/lodha-crown-thane/images/amenities/library.webp",
        description: "",
      },
      {
        title: "Indoor Games",
        image: "/lodha-crown-thane/images/amenities/indoor-games.webp",
        description: "",
      },
      {
        title: "Amphitheatre",
        image: "/lodha-crown-thane/images/amenities/amphitheatre.webp",
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
      description: "Download the gallery of Lodha Crown Kolshet",
    },
    images: [
      {
        title: "",
        image: "/lodha-crown-thane/images/gallery/gallery-1.jpg",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/lodha-crown-thane/images/gallery/gallery-2.jpg",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/lodha-crown-thane/images/gallery/gallery-3.jpg",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/lodha-crown-thane/images/gallery/gallery-4.jpg",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7534.388213918673!2d72.982366274725!3d19.230370447997913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb931dbab075%3A0x66bf26e9d9a6f0cb!2sLodha%20Crown%20Kolshet!5e0!3m2!1sen!2sin!4v1670757204477!5m2!1sen!2sin",
    image: {
      src: "/lodha-crown-thane/images/map.jpg",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Rainbow International School",
        description: "2 Mins",
      },
      {
        title: "Hiranandani Foundation School",
        description: "10 Mins",
      },
      {
        title: "C.P. Goenka International School",
        description: "15 Mins",
      },
      {
        title: "Jupiter Hospital",
        description: "9 Mins",
      },
      {
        title: "Metro Station at Majiwada",
        description: "15 Mins",
      },
      {
        title: " Thane Railway Station",
        description: "25 Mins",
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
    description: "Experience Lodha Crown Kolshet from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/lodha-crown-thane/images/banner-1.png",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Lodha Crown Kolshet from the comfort of your home",
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
        src: "/lodha-crown-thane/images/ride.png",
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
          reraNumber: "Rera No. P51700046037",
          qrCode: "/lodha-crown-thane/images/P51700046037.jpg",
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
        description: "RERA Project Registration No.: P51700046037",
      },
      {
        title: "Site Address",
        description:
          "Lodha Crown: Akbar Camp Road, Road, Kolshet, Mumbai, Maharashtra 400607",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "LODHA CROWN KOLSHET | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Lodha Crown Kolshet, Thane. 2 & 3 BHK apartments with world-class amenities.",
    keywords: ["luxury apartments", "lodha group", "2 bhk", "3 bhk"],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  termsAndConditions: {
    seo: {
      title: "Terms & Conditions | Lodha Crown Kolshet",
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
      title: "Privacy Policy | Lodha Crown Kolshet",
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
      title: "Cookies Policy | Lodha Crown Kolshet",
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
      title: "Lodha Crown Kolshet | Thank You",
      description: "Thank you for your interest in Lodha Crown Kolshet",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_11",
      publicId: "c29af3f1c30e89ae3692a806c11f439c",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Lodha Crown Thane",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Lodha Crown Kolshet",
      },
    },
  },
};

export type LodhaCrownThaneSiteConfig = typeof lodhaCrownThaneSiteConfig;
