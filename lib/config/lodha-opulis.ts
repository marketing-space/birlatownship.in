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

const route = routes.LodhaOpulis;

export const lodhaOpulisSiteConfig = {
  name: "Lodha Opulis",
  about:
    "One of India's leading real estate firms, the Lodha Group is renowned for building urban dream homes that offer refined living. The developer caters to all segments, from luxury to budget residences and has built iconic landmarks all across Mumbai, Thane, and Navi Mumbai. Lodha properties are known to feature quality interiors, state-of-the-art amenities, vast open spaces, and manicured green landscapes. A few of their standout properties are Lodha World Towers in Lower Parel, Lodha Palava in Dombivli, Lodha Crown in Thane, and Lodha Bellagio in Powai.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Dombivli, Mumbai",
  },
  gtmId: "GTM-NZXXNBG4",
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
      description: "Download the brochure to learn more about Lodha Opulis",
    },
  },

  branding: {
    logo: "/lodha-opulis/images/logo.svg",
    favicon: "/lodha-opulis/images/icon.png",
    ogImage: "/lodha-opulis/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/lodha-opulis/images/banner-1.png",
        alt: "Lodha Opulis Exterior",
      },
      {
        src: "/lodha-opulis/images/banner-2.png",
        alt: "Lodha Opulis Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description: "Download the brochure to learn more about Lodha Opulis.",
      },
      title: "Welcome To Lodha Opulis",
      description: `Lodha Opulis is a 50-acre masterpiece that redefines luxury living in MMR. Designed by renowned architect Hafeez Contractor, this Art Deco-inspired landmark features the region’s largest 1 lakh sq. ft. clubhouse, seamlessly integrated with over 30 acres of lush open spaces. Offering a perfect balance of elegance and tranquility, it provides a serene escape from the city's hustle while embodying sophistication at its finest.  

      Designed for the elite, Lodha Opulis presents exquisite 3 BHK residences, penthouses, and duplexes, each featuring expansive private decks and state-of-the-art amenities. From an indoor swimming pool to private dining rooms and grand double-height lobbies, every detail is meticulously curated to offer an exclusive and refined lifestyle.`,
    },
    offer: {
      title: "Booking Open",
      location: "By Lodha Group At Manpada, Dombivli",
      points: [
        { text: "Avail the Special launch Offers" },
        { text: "Special Payment plan for EOI Customers." },
        { text: "25:25:25:25 Payment plan" },
        { text: "Avail the choice of inventory" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "50 Acres",
        },
        {
          title: "Possession",
          value: "2028",
        },
      ],
      price: {
        title: "Luxurious 3 BHK Starts from",
        value: "1.40 Cr*",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 3 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "3 BHK",
        carpetArea: "1103 Sq.ft.",
        price: "1.40 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK With Study",
        carpetArea: "1340 Sq.ft.",
        price: "1.70 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/lodha-opulis/images/costing.jpg",
        alt: "Lodha Opulis Costing",
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
        src: "/lodha-opulis/images/masterplansoon.png",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Lodha Opulis",
      },
    },
    floorPlans: {
      categories: ["All"],
      title: "Floor Plans",
      plans: [
        {
          type: "comming soon",
          image: "/lodha-opulis/images/plancommingsoon.png",
          category: "3 BHK",
        },
        {
          type: "comming soon",
          image: "/lodha-opulis/images/plancommingsoon.png",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Lodha Opulis",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Lodha Opulis",
    },
    amenities: [
      {
        title: "Badminton Court",
        image: "/lodha-opulis/images/amenities/BADMINTONCOURT.webp",
        description: "",
      },
      {
        title: "Cricket Pitch",
        image: "/lodha-opulis/images/amenities/CRICKETPITCH.webp",
        description: "",
      },
      {
        title: "Ganesha Temple",
        image: "/lodha-opulis/images/amenities/GANESHATEMPLE.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/lodha-opulis/images/amenities/pool.png",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/lodha-opulis/images/amenities/KIDSPLAYAREA.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/lodha-opulis/images/amenities/gym.png",
        description: "",
      },
      {
        title: "Indoor Pool",
        image: "/lodha-opulis/images/amenities/INDOORPOOL.webp",
        description: "",
      },
      {
        title: "Multiple Party Hall",
        image: "/lodha-opulis/images/amenities/MULTIPLEPARTYHALL.webp",
        description: "",
      },
      {
        title: "Pool Side Cafe",
        image: "/lodha-opulis/images/amenities/POOLSIDECAFE.webp",
        description: "",
      },
      {
        title: "Pool Side Deck",
        image: "/lodha-opulis/images/amenities/POOLSIDEDECK.webp",
        description: "",
      },
      {
        title: "Private Theatre",
        image: "/lodha-opulis/images/amenities/PRIVATETHEATRE.webp",
        description: "",
      },
      {
        title: "Private Woods",
        image: "/lodha-opulis/images/amenities/lawn.png",
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
      description: "Download the gallery of Lodha Opulis",
    },
    images: [
      {
        title: "",
        image: "/lodha-opulis/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/lodha-opulis/images/gallery/g2.jpg",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/lodha-opulis/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/lodha-opulis/images/gallery/g4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d183674.5755126486!2d72.987641!3d19.209017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7952bb3d30995%3A0xc6c9b7d444660d20!2sCasa%20Premier%2C%20Palava!5e1!3m2!1sen!2sin!4v1739001902059!5m2!1sen!2sin",
    image: {
      src: "/lodha-opulis/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Kalyan Shil Road",
        description: "2 Mins",
      },
      {
        title: "Manpada Metro station",
        description: "5 Mins",
      },
      {
        title: "Airoli-Katai Freeway",
        description: "8 Mins",
      },
      {
        title: "Navi Mumbai Airport",
        description: "30 Mins",
      },
      {
        title: "High Street Retail",
        description: "2 Mins",
      },
      {
        title: "Xperia Mall",
        description: "10 Mins",
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
    description: "Experience Lodha Opulis from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/lodha-opulis/images/banner-1.png",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription: "Experience Lodha Opulis from the comfort of your home",
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
        src: "/lodha-opulis/images/ride.png",
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
          reraNumber: "Rera No. P51700033960",
          qrCode: "/lodha-opulis/images/qr.jpg",
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
          "RERA Project Registration No.: P51700033960",
      },
      {
        title: "Site Address",
        description:
          "Lodha Opulis:Kalyan Shilphata Road, Dombivli, Maharashtra",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Lodha Opulis by Lodha Group | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Lodha Opulis, 3 BHK apartments with world-class amenities.",
    keywords: ["luxury apartments", "lodha group","3 bhk"],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  termsAndConditions: {
    seo: {
      title: "Terms & Conditions | Lodha Opulis",
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
      title: "Privacy Policy | Lodha Opulis",
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
      title: "Cookies Policy | Lodha Opulis",
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
      title: "Lodha Opulis | Thank You",
      description: "Thank you for your interest in Lodha Opulis",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_93",
      publicId: "17305954ad717a4ce188775239696d95",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Lodha Opulis",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Lodha Opulis",
      },
    },
  },
};

export type LodhaOpulisSiteConfig = typeof lodhaOpulisSiteConfig;
