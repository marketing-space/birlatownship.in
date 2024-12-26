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

const route = routes.LodhaAmara;

export const lodhaAmaraSiteConfig = {
  name: "Lodha Amara",
  about:
    "One of India's leading real estate firms, the Lodha Group is renowned for building urban dream homes that offer refined living. The developer caters to all segments, from luxury to budget residences and has built iconic landmarks all across Mumbai, Thane, and Navi Mumbai. Lodha properties are known to feature quality interiors, state-of-the-art amenities, vast open spaces, and manicured green landscapes. A few of their standout properties are Lodha World Towers in Lower Parel, Lodha Palava in Dombivli, Lodha Crown in Thane, and Lodha Bellagio in Powai.",
  contact: {
    phone: "+919876543210",
    whatsapp: "+919876543210",
    email: "sales@narangprivado.com",
    address: "Thane West, Mumbai, Maharashtra 400615",
  },

  navbar: {
    navItems: [
      {
        href: `/${route}/#home`,
        label: "Home",
        icon: Home,
      },
      {
        href: `/${route}/#price`,
        label: "Price",
        icon: IndianRupee,
      },
      {
        href: `/${route}/#site-plan`,
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
        href: `/${route}/#virtual-tour`,
        label: "Virtual Site Visit",
        icon: Video,
      },
    ],
    cta: {
      title: "Download Brochure",
      description: "Download the brochure to learn more about Lodha Amara",
    },
  },

  branding: {
    logo: "/lodha-amara/images/logo.png",
    favicon: "/lodha-amara/images/favicon.png",
    ogImage: "/lodha-amara/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/lodha-amara/images/banner-1.webp",
        alt: "Lodha Amara Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description: "Download the brochure to learn more about Lodha Amara.",
      },
      title: "Welcome To Lodha Amara Thane",
      description: `Nestled in the lush environs of Kolshet road, Lodha Amara stands as a premium residential destination in Thane, coveted by discerning homebuyers. Expanding across 40 acres, Amara unfolds in three distinct phases, with the inaugural phase nearing its fulfillment. Presenting an array of 1 to 3 BHK configurations, each meticulously crafted floor plan maximizes space utility and elevates resident convenience. Complementing contemporary lifestyles, the project features tailored amenities including dedicated clubhouses for every zone, an invigorating swimming pool, and more. For those in pursuit of a meticulously planned development by a trusted developer in a prime locale, Amara emerges as the quintessential choice.
        
      Live in a home with optimal space planning. Presenting thoughtfully designed Air Conditioned^ homes at Amara with superior design to ensure more privacy. With spacious residences in the lush locale of Thane, Lodha Amara bridges the gap between city and nature and gives you a life replete with both!`,
    },
    offer: {
      title: "Booking Open",
      location: "At Thane by Lodha Group",
      points: [
        { text: "Spot Booking Offers" },
        { text: "Avail Festival Offers" },
        { text: "Zero Stamp Duty Benefit" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "40 Acres",
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
        title: "Luxurious 1, 2 & 3 BHK Starts from",
        value: "79 Lacs",
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
        type: "1 BHK",
        carpetArea: "446 Sq.ft.",
        price: "79 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK LUXE",
        carpetArea: "618 Sq.ft.",
        price: "1.05 Cr",
        suffix: "Onwards",
      },
      {
        type: "2 BHK Deck",
        carpetArea: "666 Sq.ft.",
        price: "1.17 Cr",
        suffix: "Onwards",
      },
      {
        type: "2 BHK Deck",
        carpetArea: "722 Sq.ft.",
        price: "1.26 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "830 Sq.ft.",
        price: "1.57 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK Deck",
        carpetArea: "958 Sq.ft.",
        price: "1.82 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/lodha-amara/images/costing.jpg",
        alt: "Lodha Amara Costing",
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
        src: "/lodha-amara/images/master-plan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Lodha Amara",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-446 Sq.ft.",
          image: "/lodha-amara/images/floor-1.jpg",
          category: "1 BHK",
        },
        {
          type: "2 BHK-618 Sq.ft.",
          image: "/lodha-amara/images/floor-2.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-722 Sq.ft.",
          image: "/lodha-amara/images/floor-3.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-958 Sq.ft.",
          image: "/lodha-amara/images/floor-4.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Lodha Amara",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Lodha Amara",
    },
    amenities: [
      {
        title: "Badminton Court",
        image: "/lodha-amara/images/amenities/BADMINTONCOURT.webp",
        description: "",
      },
      {
        title: "Cricket Pitch",
        image: "/lodha-amara/images/amenities/CRICKETPITCH.webp",
        description: "",
      },
      {
        title: "Ganesha Temple",
        image: "/lodha-amara/images/amenities/GANESHATEMPLE.webp",
        description: "",
      },
      {
        title: "Grand Clubhouse",
        image: "/lodha-amara/images/amenities/GRANDCLUBHOUSE.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/lodha-amara/images/amenities/KIDSPLAYAREA.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/lodha-amara/images/amenities/GYM.webp",
        description: "",
      },
      {
        title: "Indoor Pool",
        image: "/lodha-amara/images/amenities/INDOORPOOL.webp",
        description: "",
      },
      {
        title: "Multiple Party Hall",
        image: "/lodha-amara/images/amenities/MULTIPLEPARTYHALL.webp",
        description: "",
      },
      {
        title: "Pool Side Cafe",
        image: "/lodha-amara/images/amenities/POOLSIDECAFE.webp",
        description: "",
      },
      {
        title: "Pool Side Deck",
        image: "/lodha-amara/images/amenities/POOLSIDEDECK.webp",
        description: "",
      },
      {
        title: "Private Theatre",
        image: "/lodha-amara/images/amenities/PRIVATETHEATRE.webp",
        description: "",
      },
      {
        title: "Private Woods",
        image: "/lodha-amara/images/amenities/PRIVATEWOODS.webp",
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
      description: "Download the gallery of Lodha Amara",
    },
    images: [
      {
        title: "",
        image: "/lodha-amara/images/gallery/gallery-1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/lodha-amara/images/gallery/gallery-2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/lodha-amara/images/gallery/gallery-3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/lodha-amara/images/gallery/gallery-4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0800452259236!2d72.98642671421521!3d19.235342951944546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb804e995433%3A0x2f047ee0483afb5a!2sLodha%20Amara!5e0!3m2!1sen!2sin!4v1626253261880!5m2!1sen!2sin",
    image: {
      src: "/lodha-amara/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Near Sandoz Baug Bus Stop",
        description: "",
      },
      {
        title: "Ghodbunder Road",
        description: "5 Mins",
      },
      {
        title: "Orchid Internation School",
        description: "5 Mins",
      },
      {
        title: "Kapurbwadi Junction",
        description: "5 Mins",
      },
      {
        title: "Viviana Mall",
        description: "10 Mins",
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
    description: "Experience Lodha Amara from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/lodha-amara/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription: "Experience Lodha Amara from the comfort of your home",
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
        src: "/lodha-amara/images/ride.png",
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
      phone: "+91 98765 43210",
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
          reraNumber: "Rera No. P51700020164",
          qrCode: "/lodha-amara/images/P51700020164.jpg",
        },
        {
          title: "",
          reraNumber: "Rera No. P51700020128",
          qrCode: "/lodha-amara/images/P51700020128.jpg",
        },
        {
          title: "",
          reraNumber: "Rera No. P51700018579",
          qrCode: "/lodha-amara/images/P51700018579.jpg",
        },
        {
          title: "",
          reraNumber: "Rera No. P51700020157",
          qrCode: "/lodha-amara/images/P51700020157.jpg",
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
        description:
          "RERA Project Registration No.: P51800000818 | P51800001838 | P51800001137",
      },
      {
        title: "Site Address",
        description:
          "Runwal Forest: Lal Bahadur Shastri Marg, Ambedkar Nagar, Kanjurmarg West, Bhandup West, Mumbai, Maharashtra 400078",
      },
      {
        title: "Corporate Office",
        description:
          "Corporate Office: Runwal Group: 4th Floor, Runwal & Omkar Esquare, Off, Eastern Express Hwy, opp. Sion-Chunabhatti, Sion East, Signal, Mumbai, Maharashtra 400022",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Lodha Amara by Lodha Group | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Lodha Amara, Thane. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "thane west",
      "lodha group",
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
      title: "Terms & Conditions | Lodha Amara",
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
      title: "Privacy Policy | Lodha Amara",
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
      title: "Cookies Policy | Lodha Amara",
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
      title: "Lodha Amara | Thank You",
      description: "Thank you for your interest in Lodha Amara",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_5",
      publicId: "d7f104ebf1da61121dd7da950c50ae21",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Lodha Amara",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Lodha Amara",
      },
    },
  },
};

export type LodhaAmaraSiteConfig = typeof lodhaAmaraSiteConfig;
