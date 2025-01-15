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

const route = routes.LodhaPokhran;

export const lodhaPokhranSiteConfig = {
  name: "Lodha Bella Vista",
  about:
    "Founded in 1980, Lodha Group is a premier real estate developer in Mumbai. Mangal Prabhat Lodha is the chairman and founder. Presently the company is working on over 35 million sq. ft of space which accounts for around 30 projects that are located in and around Mumbai (from Napean Sea Road to Dombivali). The real estate company is expanding its reach by developing luxury living spaces in Pune and Hyderabad. The Group made history by recording one of the biggest land deals in India. They bought a plot in Wadala worth Rs 4,053 crore from the Mumbai Metropolitan Region Development Authority (MMRDA). Thane, is one of the popular and best places to have a property in Mumbai.It is in Konkan Division.It is also known as the city of lakes.This city is surrounded by scenic hills, which add to its beauty. Thane consists of many well-known micro markets Thane.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Pokhran Road, Thane West",
  },
  gtmId: "GTM-5P4FW3M",
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
        "Download the brochure to learn more about Lodha Bella Vista",
    },
  },

  branding: {
    logo: "/lodha-pokhran/images/logo.png",
    favicon: "/lodha-pokhran/images/favicon.png",
    ogImage: "/lodha-pokhran/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/lodha-pokhran/images/banner-1.png",
        alt: "Lodha Bella Vista Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Lodha Bella Vista.",
      },
      title: "Welcome To Lodha Bella Vista",
      description: `Lodha Bella Vista, nestled in the heart of Thane's Pokhran Road, is a residential marvel that epitomizes modern luxury and comfort. Situated amidst lush greenery and designed with meticulous attention to detail, this development by Lodha Group stands out as a symbol of refined living in a bustling urban landscape.Lodha Bella Vista on Pokhran Road is more than just a residential address; it is a testament to luxury, comfort, and community living. Whether you seek a serene retreat amidst nature or a convenient urban lifestyle, this development promises to exceed expectations with its unmatched blend of modern architecture, luxurious amenities, and sustainable practices.

      Strategically located on Pokhran Road, Thane, Lodha Bella Vista enjoys excellent connectivity to key areas in Mumbai and Thane. Its proximity to Eastern Express Highway ensures easy access to business hubs like Powai, BKC, and Andheri, making it an ideal choice for professionals seeking convenience and comfort.`,
    },
    offer: {
      title: "Booking Open",
      location: "At Pokhran Road Thane",
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
          value: "2 Acres",
        },
        {
          title: "Total Towers",
          value: "2",
        },
        {
          title: "Possession",
          value: "Under Construction",
        },
      ],
      price: {
        title: "2, 3 & 4 BHK Premium Residences Starts At",
        value: "1.69 Cr",
        suffix: "All Inc",
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
        carpetArea: "750-850 Sq.ft.",
        price: "On Request",
        suffix: "",
      },
      {
        type: "3 BHK",
        carpetArea: "1050-1150 Sq.ft.",
        price: "On Request",
        suffix: "",
      },
      {
        type: "4 BHK",
        carpetArea: "1500-1700 Sq.ft.",
        price: "On Request",
        suffix: "",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/lodha-pokhran/images/costing.jpg",
        alt: "Lodha Bella Vista Costing",
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
        src: "/lodha-pokhran/images/master-plan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Lodha Bella Vista",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK", "4 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK",
          image: "/lodha-pokhran/images/floor-1.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK",
          image: "/lodha-pokhran/images/floor-2.jpg",
          category: "3 BHK",
        },
        {
          type: "4 BHK",
          image: "/lodha-pokhran/images/floor-3.jpg",
          category: "4 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Lodha Bella Vista",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Lodha Bella Vista",
    },
    amenities: [
      {
        title: "Senior Citizen Cove",
        image: "/lodha-pokhran/images/amenities/senior-citizen-cove.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/lodha-pokhran/images/amenities/gym.webp",
        description: "",
      },
      {
        title: "Security System",
        image: "/lodha-pokhran/images/amenities/security.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/lodha-pokhran/images/amenities/kids-play-area.webp",
        description: "",
      },
      {
        title: "Yoga",
        image: "/lodha-pokhran/images/amenities/yoga-zone.webp",
        description: "",
      },
      {
        title: "Club House",
        image: "/lodha-pokhran/images/amenities/club-house.webp",
        description: "",
      },
      {
        title: "Sport Court",
        image: "/lodha-pokhran/images/amenities/sports-club.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/lodha-pokhran/images/amenities/swimming-pool.webp",
        description: "",
      },
      {
        title: "Amphitheatre",
        image: "/lodha-pokhran/images/amenities/amphitheatre.jpg",
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
      description: "Download the gallery of Lodha Bella Vista",
    },
    images: [
      {
        title: "",
        image: "/lodha-pokhran/images/gallery/gallery-1.jpg",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/lodha-pokhran/images/gallery/gallery-2.jpg",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/lodha-pokhran/images/gallery/gallery-3.jpg",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/lodha-pokhran/images/gallery/gallery-4.jpg",
        description: "Spacious bedrooms with modern aesthetics",
      },
      {
        title: "",
        image: "/lodha-pokhran/images/gallery/gallery-5.jpg",
        description: "Spacious bedrooms with modern aesthetics",
      },
      {
        title: "",
        image: "/lodha-pokhran/images/gallery/gallery-6.jpg",
        description: "Spacious bedrooms with modern aesthetics",
      },
      {
        title: "",
        image: "/lodha-pokhran/images/gallery/gallery-7.jpg",
        description: "Spacious bedrooms with modern aesthetics",
      },
      {
        title: "",
        image: "/lodha-pokhran/images/gallery/gallery-8.jpg",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241124.60127079234!2d73.00146!3d19.213892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fcfe76fd59%3A0xcf367d85f7c50283!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1673591939992!5m2!1sen!2sin",
    image: {
      src: "/lodha-pokhran/images/map.jpg",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Thane Railway Station",
        description: "15 Mins",
      },
      {
        title: "Hiranandani Meadows",
        description: "2 Mins",
      },
      {
        title: "Ghodbunder Road",
        description: "5 Mins",
      },
      {
        title: "Vasant Vihar",
        description: "5 Mins",
      },
      {
        title: "Jupiter Hospital",
        description: "5 Mins",
      },
      {
        title: "Vivina Mall",
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
    description: "Experience Lodha Bella Vista from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/lodha-pokhran/images/banner-1.png",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Lodha Bella Vista from the comfort of your home",
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
        src: "/lodha-pokhran/images/ride.png",
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
          reraNumber: "Rera No. P51700024060",
          qrCode: "/lodha-pokhran/images/P51700024060.jpg",
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
        description: "RERA Project Registration No : P51700024060",
      },
      {
        title: "Site Address",
        description:
          "Lodha Bella Vista: Pokhran Road, Khewra Cir Marg, off Ghodbunder Road, Manpada, Thane West, Maharashtra 400607",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title: "Lodha Pokhran | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Lodha Bella Vista, 2 & 3 BHK apartments with world-class amenities.",
    keywords: ["luxury apartments", "2 bhk", "3 bhk"],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  termsAndConditions: {
    seo: {
      title: "Terms & Conditions | Lodha Bella Vista",
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
      title: "Privacy Policy | Lodha Bella Vista",
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
      title: "Cookies Policy | Lodha Bella Vista",
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
      title: "Lodha Bella Vista | Thank You",
      description: "Thank you for your interest in Lodha Bella Vista",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_14",
      publicId: "c728696eabb8ad779e8530a5008cb543",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:b42a07344f6c7121843fd5005f9bed1f1e978dc9,1677149932",
      __vtCurrency: "1",
      name: "Lodha Pokhran",
      cfLeadsProjectSite: "Lodha Pokhran",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Lodha Bella Vista",
      },
    },
  },
};

export type LodhaPokhranSiteConfig = typeof lodhaPokhranSiteConfig;
