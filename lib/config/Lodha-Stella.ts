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

const route = routes.LodhaStella;

export const lodhaStellaSiteConfig = {
  name: "Lodha Stella",
  about:
    "Experience luxurious living at Lodha Stella, an exclusive residential enclave in Kapurbawdi, Thane. Offering spacious 3, 4, and 5 BHK vastu-compliant residences, complete with master bedrooms, duplex options, study rooms, and deck areas, this project redefines modern comfort. The 14,000 sq. ft. clubhouse, featuring a swimming pool, gym, and indoor games room, adds to the array of amenities. With 60% open space and a serene Ganesh Temple, the complex offers a tranquil environment.Conveniently located just 2 minutes from the Eastern Express Highway, Lodha Stella ensures effortless connectivity via Ghodbunder Road. Esteemed schools like St Joseph’s English High School and C.P. Goenka School, along with Currae Speciality Hospital, are easily accessible. Additionally, popular entertainment hubs like Viviana Mall and Korum Mall are nearby. Combining world-class amenities with a prime location, Lodha Stella offers the perfect residential experience.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Kolshet Rd, Kolshet Industrial Area, Thane West, Thane, Maharashtra 400607",
  },
  gtmId: "GTM-KXPZBNZT",
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
      description: "Download the brochure to learn more about Lodha Stella",
    },
  },

  branding: {
    logo: "/lodha-stella/images/logo.png",
    favicon: "/lodha-stella/images/Favicon.png",
    ogImage: "/lodha-stella/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/lodha-stella/images/banner-1.webp",
        alt: "Lodha Stella Exterior",
      },
      {
        src: "/lodha-stella/images/banner-2.webp",
        alt: "Lodha Stella Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description: "Download the brochure to learn more about Lodha Stella.",
      },
      title: "Welcome To Lodha Stella Thane",
      description: `Nestled in the lush environs of Kolshet road, Lodha Stella stands as a premium residential destination in Thane, coveted by discerning homebuyers. Expanding across 40 acres, Stella unfolds in three distinct phases, with the inaugural phase nearing its fulfillment. Presenting an array of 1 to 3 BHK configurations, each meticulously crafted floor plan maximizes space utility and elevates resident convenience. Complementing contemporary lifestyles, the project features tailored amenities including dedicated clubhouses for every zone, an invigorating swimming pool, and more. For those in pursuit of a meticulously planned development by a trusted developer in a prime locale, Amara emerges as the quintessential choice.
        
      Live in a home with optimal space planning. Presenting thoughtfully designed Air Conditioned^ homes at Amara with superior design to ensure more privacy. With spacious residences in the lush locale of Thane, Lodha Amara bridges the gap between city and nature and gives you a life replete with both!`,
    },
    offer: {
      title: "Booking Open",
      location: "Lodha Stella At Thane by Lodha Group",
      points: [
        { text: "Preferred Inventory Choice" },
        { text: "Special Price Benefits" },
        { text: "Subvention Pay Plan" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "2.2 Acres",
        },
        {
          title: "Floors",
          value: "41 Storeys",
        },
        {
          title: "Possession",
          value: "Mar 2027",
        },
      ],
      price: {
        title: "Luxurious 3, 4 & 5 BHK Starts from",
        value: "3.10 Cr*",
        suffix: "All Inclusive",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 3, 4 & 5 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "3 BHK",
        carpetArea: "1319 Sq.ft.",
        price: "3.10 Cr",
        suffix: "All Inclusive",
      },
      {
        type: "4 BHK",
        carpetArea: "1585 Sq.ft.",
        price: "3.91 Cr",
        suffix: "All Inclusive",
      },
      {
        type: "4 BHK Townhouse",
        carpetArea: "2568 + 453 Sq.ft.",
        price: "9.40 Cr",
        suffix: "All Inclusive",
      },
      {
        type: "4 BHK Townhouse",
        carpetArea: "3172 + 533 Sq.ft.",
        price: "11.18 Cr",
        suffix: "All Inclusive",
      },
      {
        type: "4 BHK Duplex",
        carpetArea: "2638 Sq.ft.",
        price: "8 Cr",
        suffix: "All Inclusive",
      },
      {
        type: "5 BHK Duplex",
        carpetArea: "3170 Sq.ft.",
        price: "10 Cr",
        suffix: "All Inclusive",
      },
      {
        type: "4 BHK Duplex Penthouse",
        carpetArea: "3313 Sq.ft.",
        price: "11.50 Cr",
        suffix: "All Inclusive",
      },
      {
        type: "5 BHK Duplex Penthouse",
        carpetArea: "3849 Sq.ft.",
        price: "13.50 Cr",
        suffix: "All Inclusive",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/lodha-stella/images/costing.webp",
        alt: "Lodha Stella Costing",
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
        src: "/lodha-stella/images/master-plan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Lodha Stella",
      },
    },
    floorPlans: {
      categories: ["All", "3 BHK", "4 BHK", "5 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "3 BHK-1319 Sq.ft.",
          image: "/lodha-stella/images/floor-1.jpg",
          category: "3 BHK",
        },
        {
          type: "4 BHK-1585 Sq.ft.",
          image: "/lodha-stella/images/floor-2.jpg",
          category: "4 BHK",
        },
        {
          type: "4 BHK-2568 + 453 Sq.ft.",
          image: "/lodha-stella/images/floor-3.jpg",
          category: "4 BHK",
        },
        {
          type: "4 BHK-3172 + 533 Sq.ft.",
          image: "/lodha-stella/images/floor-4.jpg",
          category: "4 BHK",
        },
        {
          type: "4 BHK-2638 Sq.ft.",
          image: "/lodha-stella/images/floor-1.jpg",
          category: "4 BHK",
        },
        {
          type: "5 BHK-3170 Sq.ft.",
          image: "/lodha-stella/images/floor-2.jpg",
          category: "5 BHK",
        },
        {
          type: "4 BHK-3313 Sq.ft.",
          image: "/lodha-stella/images/floor-1.jpg",
          category: "4 BHK",
        },
        {
          type: "5 BHK-3849 Sq.ft.",
          image: "/lodha-stella/images/floor-2.jpg",
          category: "5 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Lodha Stella",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Lodha Stella",
    },
    amenities: [
      {
        title: "Badminton Court",
        image: "/lodha-stella/images/amenities/6.png",
        description: "",
      },
      {
        title: "Cricket Pitch",
        image: "/lodha-stella/images/amenities/1.png",
        description: "",
      },
      {
        title: "Indoor Games Room",
        image: "/lodha-stella/images/amenities/2.png",
        description: "",
      },
      {
        title: "Grand Clubhouse",
        image: "/lodha-stella/images/amenities/3.png",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/lodha-stella/images/amenities/5.png",
        description: "",
      },
      {
        title: "Gym",
        image: "/lodha-stella/images/amenities/8.png",
        description: "",
      },
      {
        title: "Indoor Pool",
        image: "/lodha-stella/images/amenities/1.png",
        description: "",
      },
      {
        title: "Multiple Party Hall",
        image: "/lodha-stella/images/amenities/7.png",
        description: "",
      },
      {
        title: "Pool Side Cafe",
        image: "/lodha-stella/images/amenities/9.png",
        description: "",
      },
      {
        title: "Pool Side Deck",
        image: "/lodha-stella/images/amenities/4.png",
        description: "",
      },
      {
        title: "Lawn party",
        image: "/lodha-stella/images/amenities/party.webp",
        description: "",
      },
      {
        title: "Carrom & Chess Room",
        image: "/lodha-stella/images/amenities/Carrom & Chess Room.png",
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
      description: "Download the gallery of Lodha Stella",
    },
    images: [
      {
        title: "",
        image: "/lodha-stella/images/gallery/g1.png",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/lodha-stella/images/gallery/g2.png",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/lodha-stella/images/gallery/g3.png",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/lodha-stella/images/gallery/g4.png",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7534.965801111333!2d72.977762!3d19.217775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9e06c39cf9f%3A0x28d4cfaf9873e170!2sLodha%20Stella%2C%20Kapurbawdi%2C%20Thane!5e0!3m2!1sen!2sin!4v1736423989717!5m2!1sen!2sin",
    image: {
      src: "/lodha-stella/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Eastern Express Highway",
        description: "2 mins",
      },
      {
        title: "Ghodbunder Road",
        description: "13 Mins",
      },
      {
        title: "St Joseph’s English School",
        description: "5 Mins",
      },
      {
        title: "Currae Specialty Hospital",
        description: "9 Mins",
      },
      {
        title: "C.P Goenka International School",
        description: "7 Mins",
      },
      {
        title: "Viviana Mall",
        description: "6 Mins",
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
    description: "Experience Lodha Stella from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/lodha-stella/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription: "Experience Lodha Stella from the comfort of your home",
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
        src: "/lodha-stella/images/ride.png",
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
          reraNumber: "Rera No. P51700053017",
          qrCode: "/lodha-stella/images/barcode-1.webp",
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
          "RERA Project Registration No.:P51700053017",
      },
      {
        title: "Site Address",
        description:
          "Lodha Stella: Kolshet Rd, Kolshet Industrial Area, Thane West, Thane, Maharashtra 400607",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Lodha Stella by Lodha Group | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Lodha Stella, 3,4 & 5 BHK apartments with world-class amenities.",
    keywords: ["luxury apartments", "lodha group", "2 bhk", "3 bhk"],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  termsAndConditions: {
    seo: {
      title: "Terms & Conditions | Lodha Stella",
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
      title: "Privacy Policy | Lodha Stella",
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
      title: "Cookies Policy | Lodha Stella",
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
      title: "Lodha Stella | Thank You",
      description: "Thank you for your interest in Lodha Stella",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_88",
      publicId: "35ddedb2a4dbe2acce4d1782ef0ac751",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Lodha Stella",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Lodha Stella",
      },
    },
  },
};

export type LodhaStellaSiteConfig = typeof lodhaStellaSiteConfig;
