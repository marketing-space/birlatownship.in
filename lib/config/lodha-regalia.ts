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

const route = routes.LodhaRegalia;

export const lodhaRegaliaSiteConfig = {
  name: "Lodha Regalia",
  about:
    "One of India's leading real estate firms, the Lodha Group is renowned for building urban dream homes that offer refined living. The developer caters to all segments, from luxury to budget residences and has built iconic landmarks all across Mumbai, Thane, and Navi Mumbai. Lodha properties are known to feature quality interiors, state-of-the-art amenities, vast open spaces, and manicured green landscapes. A few of their standout properties are Lodha World Towers in Lower Parel, Lodha Palava in Dombivli, Lodha Crown in Thane, and Lodha Bellagio in Powai.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      " Mulund East",
  },
  gtmId: "GTM-WVQ7GSQ",
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
      description: "Download the brochure to learn more about Lodha Regalia",
    },
  },

  branding: {
    logo: "/lodha-regalia/images/logo.png",
    favicon: "/lodha-regalia/images/favicon.png",
    ogImage: "/lodha-regalia/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/lodha-regalia/images/banner-1.webp",
        alt: "Lodha Regalia Exterior",
      },
      {
        src: "/lodha-regalia/images/banner-2.png",
        alt: "Lodha Regalia Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description: "Download the brochure to learn more about Lodha Regalia.",
      },
      title: "Welcome To Lodha Regalia",
      description: `Set in the most prime location of Mulund, minutes from the Eastern Express Highway and at the doorstep of the rail station, Lodha Regalia offers high-rise living with stunning & limitless creek views, large, open green spaces, high-end amenities, excellent connectivity, and a truly upgraded lifestyle.

      The project offers a quiet and soothing green residential area with larger residences for your family encompassing 60,000+ sq. ft. of open green landscape and a 10,000 sq. ft International standard club area with the finest amenities and facilities at your disposal. A never-before opportunity to live the Lodha Life in Mulund.`,
    },
    offer: {
      title: "Booking Open",
      location: "At Mulund East by Lodha Group",
      points: [
        { text: "Flexi Payment Plan" },
        { text: "25 - 75 Builder Subvention" },
        { text: "Pay 12.5% & Book Your Home" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "2.4 Acres",
        },
        {
          title: "Floors",
          value: "G+37 Storeys",
        },
        {
          title: "Possession",
          value: "June 2025",
        },
      ],
      price: {
        title: "Luxurious 2 & 3 BHK Starts from",
        value: "2.04 Cr",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2, 3 & 4 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "2 BHK",
        carpetArea: "710 - 750 Sq.ft.",
        price: "2.04 Cr +",
        suffix: "",
      },
      {
        type: "2 BHK + Study",
        carpetArea: "810 Sq.ft.",
        price: "2.37 Cr +",
        suffix: "",
      },
      {
        type: "3 BHK",
        carpetArea: "977 Sq.ft.",
        price: "2.74 Cr +",
        suffix: "",
      },
      {
        type: "3 BHK + Study",
        carpetArea: "1146 Sq.ft.",
        price: "3.35 Cr +",
        suffix: "",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/lodha-regalia/images/costing.jpg",
        alt: "Lodha Regalia Costing",
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
        src: "/lodha-regalia/images/master-plan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Lodha Regalia",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-750 Sq.ft.",
          image: "/lodha-regalia/images/floor-1.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-Study 810 Sq.ft.",
          image: "/lodha-regalia/images/floor-2.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-977 Sq.ft.",
          image: "/lodha-regalia/images/floor-3.jpg",
          category: "3 BHK",
        },
        {
          type: "3 BHK-Study 1146 Sq.ft.",
          image: "/lodha-regalia/images/floor-4.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Lodha Regalia",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Lodha Regalia",
    },
    amenities: [
      {
        title: "Cafe",
        image: "/lodha-regalia/images/amenities/cafe.webp",
        description: "",
      },
      {
        title: "Exercise Lawn",
        image: "/lodha-regalia/images/amenities/exercise-lawn.webp",
        description: "",
      },
      {
        title: "Garden",
        image: "/lodha-regalia/images/amenities/garden.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/lodha-regalia/images/amenities/gym.webp",
        description: "",
      },
      {
        title: "Indoor Game Room",
        image: "/lodha-regalia/images/amenities/indoor-game-room.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/lodha-regalia/images/amenities/kids-play-area.webp",
        description: "",
      },
      {
        title: "Lap Pool",
        image: "/lodha-regalia/images/amenities/lap-pool.webp",
        description: "",
      },
      {
        title: "Multi-Purpose Hall",
        image: "/lodha-regalia/images/amenities/multi-purpose-hall.webp",
        description: "",
      },
      {
        title: "Reflexology Path",
        image: "/lodha-regalia/images/amenities/reflexology-path.webp",
        description: "",
      },
      {
        title: "Rock Climbing",
        image: "/lodha-regalia/images/amenities/rock-climbing.webp",
        description: "",
      },
      {
        title: "Temple",
        image: "/lodha-regalia/images/amenities/temple.webp",
        description: "",
      },
      {
        title: "Yoga Deck",
        image: "/lodha-regalia/images/amenities/yoga-deck.webp",
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
      description: "Download the gallery of Lodha Regalia",
    },
    images: [
      {
        title: "",
        image: "/lodha-regalia/images/gallery/gallery-1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/lodha-regalia/images/gallery/gallery-2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/lodha-regalia/images/gallery/gallery-3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/lodha-regalia/images/gallery/gallery-4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7183.91413666859!2d72.9590764!3d19.1685111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b975467590e9%3A0xfcceec239b14c680!2sCodename%20Limited%20Edition!5e1!3m2!1sen!2sin!4v1637478110041!5m2!1sen!2sin",
    image: {
      src: "/lodha-regalia/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Mulund Railway Station",
        description: "2 Mins",
      },
      {
        title: "Fortis Hospital",
        description: "15 Mins",
      },
      {
        title: "Bombay Presidency International School",
        description: "2 Mins",
      },
      {
        title: "R Mall",
        description: "11 Mins",
      },
      {
        title: "Kelkar College",
        description: "5 Mins",
      },
      {
        title: "Eastern Express Highway",
        description: "5 Mins",
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
    description: "Experience Lodha Regalia from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/lodha-regalia/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription: "Experience Lodha Regalia from the comfort of your home",
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
        src: "/lodha-regalia/images/ride.png",
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
          reraNumber: "Rera No. P51800018893",
          qrCode: "/lodha-regalia/images/P51800018893.jpg",
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
        description: "RERA Project Registration No.: P51800018893",
      },
      {
        title: "Site Address",
        description:
          "Lodha Regalia: Gopal Krishna Gokhale Rd, Shree Ji Society, Hanuman Chowk, Mulund East, Mumbai, Maharashtra 400081",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Lodha Mulund by Lodha Group | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Lodha Mulund. 2 & 3 BHK apartments with world-class amenities.",
    keywords: ["luxury apartments", "lodha regalia", "2 bhk", "3 bhk"],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  termsAndConditions: {
    seo: {
      title: "Terms & Conditions | Lodha Regalia",
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
      title: "Privacy Policy | Lodha Regalia",
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
      title: "Cookies Policy | Lodha Regalia",
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
      title: "Lodha Regalia | Thank You",
      description: "Thank you for your interest in Lodha Regalia",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_17",
      publicId: "2e3cb6d8d5e7ec93204f093226ad1b89",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:5d5afefcd5c83459cb4f5ea107342e112292e0fb,1677153993",
      __vtCurrency: "1",
      name: "Lodha Regalia",
      cfLeadsProjectSite: "Lodha Mulund",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Lodha Regalia",
      },
    },
  },
};

export type LodhaRegaliaSiteConfig = typeof lodhaRegaliaSiteConfig;
