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

const route = routes.LodhaUpperThane;

export const lodhaUpperThaneSiteConfig = {
  name: "Lodha Casa Verdura",
  about:
    "LANDMARKS THAT MEET GLOBAL STANDARDS Whether it's transforming the skyline of Mumbai with one of India's most iconic landmarks, crafting some of the most desirable residences in London, creating a world-class destination in the heart of Mumbai, or delivering India's No.1 smart city#, one name is transforming the way we live with landmarks of global standards: Lodha. More than 2,000 associates work relentlessly to create developments of exceptional quality with a passion for delivering the finest homes, offices and retail. Our passion is to create landmarks that meet global standards, epitomise the values of our family, and are built on a legacy of trust spanning 3 decades. Every one of our developments delivers world-class design and uncompromised quality, and is benchmarked against the highest standards of service.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Thane - Dombivli Link Rd, off Mumbai - Nashik Expressway, Anjur, Mumbai - 421302",
  },
  gtmId: "GTM-TL2M74M",
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
        "Download the brochure to learn more about Lodha Upper Thane",
    },
  },

  branding: {
    logo: "/lodha-upper-thane/images/logo.png",
    favicon: "/lodha-upper-thane/images/icon.png",
    ogImage: "/lodha-upper-thane/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/lodha-upper-thane/images/banner-1.webp",
        alt: "Lodha Upper Thane Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Lodha Upper Thane.",
      },
      title: "Welcome To Lodha Casa Verdura",
      description: `Mumbai-Nashik Highway, Thane, Mumbai. Casa Verdura at Lodha Upper Thane extends an invitation to a lifestyle marked by unparalleled luxury and convenience, nestled in the heart of Thane, Mumbai's most sought-after suburb. Envision a realm where every whim is within easy reach, where visionary architecture by Hafeez Contractor and landscaping by Prabhakar B. Bhagwat & Associates converge to create an urban sanctuary. With over 80% dedicated to open spaces, serenity prevails amidst the city's hustle and bustle. Indulge in a dream lifestyle with amenities including a ready cricket and football ground, and the opulent 50,000 sq.ft. clubhouse, The Nest, along with a plethora of other world-class facilities. Be among the privileged few to make Casa Verdura their home and relish the epitome of contemporary living.
      
      Enter a realm where verdant foliage harmonizes with contemporary ease. Experience a lifestyle of seamless accessibility, with Dombivli West station merely a 10-minute drive away, and Thane conveniently reachable within 20 minutes. Welcome to Casa Verdura by Lodha. At Casa Verdura, discover meticulously planned, expansive 2-bedroom residences featuring decks, each space meticulously designed to enrich your way of life. Lose yourself in the embrace of lush green surroundings, where every instance becomes a tribute to the abundance of nature. From pristine forests to tranquil ponds, revel in the essence of eco-friendly living throughout this distinctive enclave.`,
    },
    offer: {
      title: "Booking Open",
      location: "At Upper Thane, Mumbai by Lodha Group",
      points: [
        { text: "Upper Thane New Launch" },
        { text: "Zero Floor Rise" },
        { text: "Avail Best Offer & Discounts" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "200+ Acres",
        },
        {
          title: "Floors",
          value: "G+24 Storeys",
        },
        {
          title: "Possession",
          value: "Sept 2026",
        },
      ],
      price: {
        title: "1, 2 & 3 BHK Apartment",
        value: "54 Lacs*",
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
        type: "1 BHK with Deck",
        carpetArea: "484 Sq.ft.",
        price: "54 Lacs*",
        suffix: "Onwards",
      },
      {
        type: "2 BHK with Deck",
        carpetArea: "572 Sq.ft.",
        price: "65 Lacs*",
        suffix: "Onwards",
      },
      {
        type: "2 BHK Ultima with Deck",
        carpetArea: "660 Sq.ft.",
        price: "75.5 Lacs*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK with Deck",
        carpetArea: "758 Sq.ft.",
        price: "95.5 Lacs*",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/lodha-upper-thane/images/costing.jpg",
        alt: "Lodha Upper Thane Costing",
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
        src: "/lodha-upper-thane/images/master-plan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Lodha Upper Thane",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK",
          image: "/lodha-upper-thane/images/floor-1.jpg",
          category: "1 BHK",
        },
        {
          type: "2 BHK",
          image: "/lodha-upper-thane/images/floor-2.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK",
          image: "/lodha-upper-thane/images/floor-3.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Lodha Upper Thane",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Lodha Upper Thane",
    },
    amenities: [
      {
        title: "School",
        image: "/lodha-upper-thane/images/amenities/world-school.webp",
        description: "",
      },
      {
        title: "Senior Citizen Zone",
        image: "/lodha-upper-thane/images/amenities/senior-citizen-zone.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/lodha-upper-thane/images/amenities/gym.webp",
        description: "",
      },
      {
        title: "Indoor Games Room",
        image: "/lodha-upper-thane/images/amenities/indoor-games-room.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/lodha-upper-thane/images/amenities/kids-play-area.webp",
        description: "",
      },
      {
        title: "Multi-Purpose Court",
        image:
          "/lodha-upper-thane/images/amenities/multi-purpose-sports-court.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/lodha-upper-thane/images/amenities/swimming-pool.webp",
        description: "",
      },
      {
        title: "Temple",
        image: "/lodha-upper-thane/images/amenities/temple.webp",
        description: "",
      },
      {
        title: "Retail",
        image: "/lodha-upper-thane/images/amenities/retail.webp",
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
      description: "Download the gallery of Lodha Upper Thane",
    },
    images: [
      {
        title: "",
        image: "/lodha-upper-thane/images/gallery/gallery-1.jpg",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/lodha-upper-thane/images/gallery/gallery-2.jpg",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/lodha-upper-thane/images/gallery/gallery-3.jpg",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/lodha-upper-thane/images/gallery/gallery-4.jpg",
        description: "Spacious bedrooms with modern aesthetics",
      },
      {
        title: "",
        image: "/lodha-upper-thane/images/gallery/gallery-5.jpg",
        description: "Spacious bedrooms with modern aesthetics",
      },
      {
        title: "",
        image: "/lodha-upper-thane/images/gallery/gallery-6.jpg",
        description: "Spacious bedrooms with modern aesthetics",
      },
      {
        title: "",
        image: "/lodha-upper-thane/images/gallery/gallery-7.jpg",
        description: "Spacious bedrooms with modern aesthetics",
      },
      {
        title: "",
        image: "/lodha-upper-thane/images/gallery/gallery-8.jpg",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.140198070808!2d73.04544744988908!3d19.23272075196299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bdda789b5933%3A0x9957b5dee6341539!2sLODHA%20Upper%20Thane!5e0!3m2!1sen!2sin!4v1669616565411!5m2!1sen!2sin",
    image: {
      src: "/lodha-upper-thane/images/map.jpg",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Viviana Mall",
        description: "15 Mins",
      },
      {
        title: "Jupiter Hospitals",
        description: "15 Mins",
      },
      {
        title: "Lodha World School",
        description: "15 Mins",
      },
      {
        title: "Majiwada",
        description: "15 Mins",
      },
      {
        title: "International Airport",
        description: "60 Mins",
      },
      {
        title: "Central Suburbs",
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
    description: "Experience Lodha Upper Thane from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/lodha-upper-thane/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Lodha Upper Thane from the comfort of your home",
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
        src: "/lodha-upper-thane/images/ride.png",
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
          reraNumber: "Rera No. P51700055789",
          qrCode: "/lodha-upper-thane/images/barcode-1.jpg",
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
          "Government RERA Authorised Advertiser's: Home Bazaar Services Pvt Ltd, Registration No A5200000045, CIN U45400MH2013PTC242930.",
      },
      {
        title: "RERA Numbers",
        description: "RERA Project Registration No.: P51700055789",
      },
      {
        title: "Site Address",
        description:
          "Lodha Upper Thane: Thane - Dombivli Link Rd, off Mumbai - Nashik Expressway, Anjur, Mumbai - 421302",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Lodha Upper Thane | Price, Floor Plans, Amenities | Download Brochure",
    description:
      "Experience luxury living at Lodha Upper Thane. 1, 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Lodha Upper Thane",
      "lodha group",
      "1 bhk",
      "2 bhk",
      "3 bhk",
    ],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  termsAndConditions: {
    seo: {
      title: "Terms & Conditions | Lodha Upper Thane",
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
      title: "Privacy Policy | Lodha Upper Thane",
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
      title: "Cookies Policy | Lodha Upper Thane",
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
      title: "Lodha Upper Thane | Thank You",
      description: "Thank you for your interest in Lodha Upper Thane",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_20",
      publicId: "aa3f07dbbccd793c75f28ef370f711f3",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:f9f52a29f892480a75e431efd9edf87aa67d3590,1677155501",
      __vtCurrency: "1",
      name: "Lodha Upper Thane",
      cfLeadsProjectSite: "Lodha Upper Thane",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Lodha Upper Thane",
      },
    },
  },
};

export type LodhaUpperThaneSiteConfig = typeof lodhaUpperThaneSiteConfig;
