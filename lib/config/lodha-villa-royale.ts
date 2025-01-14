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

const route = routes.LodhaVillaRoyale;

export const lodhaVillaRoyaleSiteConfig = {
  name: "Lodha Villa Royale",
  about:
    "One of India's leading real estate firms, the Lodha Group is renowned for building urban dream homes that offer refined living. The developer caters to all segments, from luxury to budget residences and has built iconic landmarks all across Mumbai, Thane, and Navi Mumbai. Lodha properties are known to feature quality interiors, state-of-the-art amenities, vast open spaces, and manicured green landscapes. A few of their standout properties are Lodha World Towers in Lower Parel, Lodha Palava in Dombivli, Lodha Crown in Thane, and Lodha Bellagio in Powai.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Kolshet Rd, Kolshet Industrial Area, Thane West, Thane, Maharashtra 400607",
  },
  gtmId: "GTM-54RP9RX",
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
      description: "Download the brochure to learn more about Lodha Villa Royale.",
    },
  },

  branding: {
    logo: "/lodha-villa-royale/images/logo.svg",
    favicon: "/lodha-villa-royale/images/icon.png",
    ogImage: "/lodha-villa-royale/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/lodha-villa-royale/images/banner-1.webp",
        alt: "Lodha villa Royale Exterior",
      },
      {
        src: "/lodha-villa-royale/images/banner-2.webp",
        alt: "Lodha villa Royale Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description: "Download the brochure to learn more about Lodha Villa Royale.",
      },
      title: "Welcome To Lodha Villa Royale Thane",
      description: `Lodha Villa Royale is an exquisite gated community offering luxurious villas in Palava, Dombivli. Nestled in a lush landscape, it features Vastu-compliant plots and customizable bareshell villas with flexible layouts, allowing residents to personalize their living spaces. The community is adorned with expansive open areas, tree-lined avenues, and a variety of amenities, including a café, swimming pool, meditation zone, library, kids’ playground, business center, gymnasium, multipurpose court, banquet hall, and more.

      The vibrant neighborhood of Lodha Villa Royale boasts robust infrastructure, with educational institutions like Lodha World School, EVA World School, Ira Global School, and St. Therese Convent School nearby. Health facilities such as Genesis Multispeciality Hospital and Bijankur Hospital, along with shopping destinations like Lodha Xperia Mall, Casa Rio Cricket Ground, and Dmart, are easily accessible. Connectivity is enhanced by Kalyan-Shilphata Road and Panvel Mumbra Road, offering convenient routes to Thane and Panvel. The forthcoming Airoli Katai Naka Freeway will reduce travel time to Airoli to just 15 minutes, and the upcoming Navi Mumbai International Airport is a mere 30-minute drive away. Lodha Villa Royale provides an aspirational setting to craft your ideal home in Palava.`,
    },
    offer: {
      title: "Exclusive Launch Offer",
      location: "At Thane by Lodha Group",
      points: [
        { text: "Flexi Payment Plan - 25:25:50" },
        { text: "50% Savings, 100 % Better Life!" },
        { text: "Spot Discounts Upto ₹8 Lacs" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: " 21 Acres",
        },
        {
          title: "Floors",
          value: "G+ 1 Storeys",
        },
        {
          title: "Possession",
          value: "Dec 2023",
        },
      ],
      price: {
        title: "Premium Plot + Bareshell Villa Starts from",
        value: "₹ 2.05 Cr",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
    "Choose from our range of luxurious plot and villa residences, each designed to offer the perfect blend of comfort and sophistication.",
    prices: [
      {
        type: "Plot",
        carpetArea: "250 sq. yds",
        price: "₹2.05 Cr",
        suffix: "Onwards",
      },
      {
        type: "Plot",
        carpetArea: "350 sq. yds",
        price: "₹2.97 Cr",
        suffix: "Onwards",
      },
      {
        type: "Plot",
        carpetArea: "450 sq. yds",
        price: "₹3.69 Cr",
        suffix: "Onwards",
      },
      {
        type: "Plot",
        carpetArea: "600 sq. yds",
        price: "₹6.56 Cr",
        suffix: "Onwards",
      },
      {
        type: "Plot + Bareshell Villa",
        carpetArea: "200 sq yd",
        price: "₹3.2 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/lodha-villa-royale/images/costing.jpg",
        alt: "Lodha Villa Royale Costing",
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
        src: "/lodha-villa-royale/images/master-plan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Lodha Villa Royale",
      },
    },
    floorPlans: {
      categories: ["All", "Plot"],
      title: "Floor Plans",
      plans: [
        {
          type: "Grand 250 Sq. Yards Ground Floor",
          image: "/lodha-villa-royale/images/floor-1.jpg",
          category: "Plot",
        },
        {
          type: "Grand 250 Sq. Yards First Floor",
          image: "/lodha-villa-royale/images/floor-2.jpg",
          category: "Plot",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Lodha Villa Royale",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Lodha Villa Royale",
    },
    amenities: [
      {
        title: "Badminton Court",
        image: "/lodha-villa-royale/images/amenities/BADMINTONCOURT.webp",
        description: "",
      },
      {
        title: "Cricket Pitch",
        image: "/lodha-villa-royale/images/amenities/CRICKETPITCH.webp",
        description: "",
      },
      {
        title: "Ganesha Temple",
        image: "/lodha-villa-royale/images/amenities/GANESHATEMPLE.webp",
        description: "",
      },
      {
        title: "Lawn Party Area",
        image: "/lodha-villa-royale/images/amenities/party.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/lodha-villa-royale/images/amenities/KIDSPLAYAREA.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/lodha-villa-royale/images/amenities/GYM.webp",
        description: "",
      },
      {
        title: "Indoor Pool",
        image: "/lodha-villa-royale/images/amenities/INDOORPOOL.webp",
        description: "",
      },
      {
        title: "Multiple Party Hall",
        image: "/lodha-villa-royale/images/amenities/MULTIPLEPARTYHALL.webp",
        description: "",
      },
      {
        title: "Pool Side Cafe",
        image: "/lodha-villa-royale/images/amenities/POOLSIDECAFE.webp",
        description: "",
      },
      {
        title: "Pool Side Deck",
        image: "/lodha-villa-royale/images/amenities/POOLSIDEDECK.webp",
        description: "",
      },
      {
        title: "Private Theatre",
        image: "/lodha-villa-royale/images/amenities/PRIVATETHEATRE.webp",
        description: "",
      },
      {
        title: "Private Woods",
        image: "/lodha-villa-royale/images/amenities/PRIVATEWOODS.webp",
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
      description: "Download the gallery of Lodha Villa Royale",
    },
    images: [
      {
        title: "",
        image: "/lodha-villa-royale/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/lodha-villa-royale/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/lodha-villa-royale/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/lodha-villa-royale/images/gallery/g4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45931.3134417171!2d73.112744!3d19.163592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7956bb71bcfaf%3A0xc5fa83806e4c2ad0!2sLodha%20Villa%20Royale%2C%20Palava!5e1!3m2!1sen!2sin!4v1736834235744!5m2!1sen!2sin",
    image: {
      src: "/lodha-villa-royale/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Kalyan Shilphata Road",
        description: "5 Mins",
      },
      {
        title: "Panvel Mumbra Road",
        description: "15 Mins",
      },
      {
        title: "Shil Phata Mahape Road",
        description: "20 Mins",
      },
      {
        title: "Airoli",
        description: "20 Mins",
      },
      {
        title: "Dmart",
        description: "15 Mins",
      },
      {
        title: "Navi Mumbai International Airport",
        description: "40 Mins",
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
    description: "Experience Lodha Villa Royale from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: { 
      src: "/lodha-villa-royale/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription: "Experience Lodha Villa Royale from the comfort of your home",
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
        src: "/lodha-villa-royale/images/ride.png",
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
          title: "Lodha Villa Royale Palava",
          reraNumber: "Rera No. P51700047245",
          qrCode: "/lodha-villa-royale/images/qr.webp",
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
          "RERA Project Registration No.: P51700047245",
      },
      {
        title: "Site Address",
        description:
          "Lodha Villa Royale Dombivli: Lodha Villa Royale, Central Avenue, Palava City, Maharashtra 421204.",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Lodha Villa Royale by Lodha Group | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Lodha Villa Royale, 2 & 3 BHK apartments with world-class amenities.",
    keywords: ["luxury apartments", "lodha group", "2 bhk", "3 bhk"],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  termsAndConditions: {
    seo: {
      title: "Terms & Conditions | Lodha Villa Royale",
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
      title: "Privacy Policy | Lodha Villa Royale",
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
      title: "Cookies Policy | Lodha Villa Royale",
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
      title: "Lodha Villa Royale | Thank You",
      description: "Thank you for your interest in Lodha Villa Royale.",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_5",
      publicId: "d7f104ebf1da61121dd7da950c50ae21",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Lodha Villa Royale",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Lodha Villa Royale",
      },
    },
  },
};

export type LodhaVillaRoyaleSiteConfig = typeof lodhaVillaRoyaleSiteConfig;
