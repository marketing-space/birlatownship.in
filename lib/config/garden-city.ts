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

const route = routes.Gardencity;

export const gardenCityConfig = {
  name: "Runwal Gardens City",
  about:
    "Founded in 1978, Runwal Group excels in establishing sprawling residential complexes, retail shopping malls, and commercial spaces. With a mission of developing standout landmarks rather than mere living spaces, Runwal homes are known for their aesthetic designs, plush interiors, and central green landscaping. Over the course of 40 years, the firm has become a leading face in real estate and changed the Mumbai skyline.",
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
      description:
        "Download the brochure to learn more about Runwal Gardens City",
    },
  },

  branding: {
    logo: "/gardencity/images/logo.png",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/gardencity/images/banner-3.webp",
        alt: "Runwal Gardens City Interior",
      },
      {
        src: "/gardencity/images/banner-2.webp",
        alt: "Runwal Gardens City Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Runwal Gardens City.",
      },
      title: "Welcome to Runwal Gardens",
      description: `A spectacular township amid the lush environs of Dombivli, Runwal Gardens brings every comfort and convenience right by your home! Its 1, 2, & 3 BHK modern apartments offer beautiful views and plush interiors. The property further houses a reputed school, supermarkets, malls, business spaces, and high street retail avenues. But what stand out are tons of lifestyle amenities! From a herb garden to a bonfire area and a doodle corner - there are luxuries you may have never imagined!

      Living a grand lifestyle is the only option here with 34+ gardens, 3 clubhouses, 3 central parks, 3000+ trees, 70% open space & lot more features. And benefit from the 250+ exclusive cluster amenities presented to you. Just 6-30 minutes away key day-to-day necessities - Ira Global School, DMart, PVR Xperia Palava, LODHA Xperia Mall, ICON Hospital & Millennium Business Park. So, indulge yourself in the first-class lifestyle at the majestic landmark - Future Avenue, Runwal Garden City.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Dombivali by Runwal Group",
      points: [
        { text: "Early Buy Discounts" },
        { text: "Construction Linked Pay Plan" },
        { text: "All Flats are Vastu-compliant" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "250 Acres",
        },
        {
          title: "Floors",
          value: "32 Storeys",
        },
        {
          title: "Possession",
          value: "Dec 25",
        },
      ],
      price: {
        title: "Luxurious 1, 2 & 3 BHK Starts At",
        value: "39 Lacs",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 1, 2, 3 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "1 BHK",
        carpetArea: "355 Sq.ft.",
        price: "39 Lacs",
        suffix: "Onwards",
      },
      {
        type: "1 BHK",
        carpetArea: "386 Sq.ft.",
        price: "42 Lacs",
        suffix: "Onwards",
      },
      {
        type: "1 BHK",
        carpetArea: "447 Sq.ft.",
        price: "45 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "533 Sq.ft.",
        price: "57 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "568 Sq.ft.",
        price: "61 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "598 Sq.ft.",
        price: "65 Lacs",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "740 Sq.ft.",
        price: "79 Lacs",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "819 Sq.ft.",
        price: "92 Lacs",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1018 Sq.ft.",
        price: "1.30 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1254 Sq.ft.",
        price: "1.65 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/gardencity/images/costing.webp",
        alt: "Runwal Gardens City Costing",
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
        src: "/gardencity/images/master-plan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Runwal Gardens City",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-355 Sq.ft.",
          image: "/gardencity/images/floor-1.jpg",
          category: "1 BHK",
        },
        {
          type: "1 BHK-379 Sq.ft.",
          image: "/gardencity/images/floor-2.jpg",
          category: "1 BHK",
        },
        {
          type: "1 BHK-386 Sq.ft.",
          image: "/gardencity/images/floor-3.jpg",
          category: "1 BHK",
        },
        {
          type: "1 BHK-533 Sq.ft.",
          image: "/gardencity/images/floor-4.jpg",
          category: "1 BHK",
        },
        {
          type: "2 BHK-568 Sq.ft.",
          image: "/gardencity/images/floor-5.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-598 Sq.ft.",
          image: "/gardencity/images/floor-6.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-740 Sq.ft.",
          image: "/gardencity/images/floor-7.jpg",
          category: "3 BHK",
        },
        {
          type: "3 BHK-819 Sq.ft.",
          image: "/gardencity/images/floor-8.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Runwal Gardens City",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Runwal Gardens City",
    },
    amenities: [
      {
        title: "Sky Cafe",
        image: "/gardencity/images/amenities/sky-cafe.png",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/gardencity/images/amenities/swimming-pool.png",
        description: "",
      },
      {
        title: "Pet Park",
        image: "/gardencity/images/amenities/pet-park.png",
        description: "",
      },
      {
        title: "Sky Club",
        image: "/gardencity/images/amenities/sky-club.png",
        description: "",
      },
      {
        title: "Library",
        image: "/gardencity/images/amenities/library.png",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/gardencity/images/amenities/banquet-hall.png",
        description: "",
      },
      {
        title: "Creche",
        image: "/gardencity/images/amenities/creche.png",
        description: "",
      },
      {
        title: "Picnic & BBQ Pavilion",
        image: "/gardencity/images/amenities/picnic-bbq-pavilion.png",
        description: "",
      },
      {
        title: "Theatre",
        image: "/gardencity/images/amenities/theatre.png",
        description: "",
      },
      {
        title: "Supermarket",
        image: "/gardencity/images/amenities/supermarket.png",
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
      description: "Download the gallery of Runwal Gardens City",
    },
    images: [
      {
        title: "",
        image: "/gardencity/images/gallery/gallery-1.jpg",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/gardencity/images/gallery/gallery-2.jpg",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/gardencity/images/gallery/gallery-3.jpg",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/gardencity/images/gallery/gallery-4.png",
        description: "Spacious bedrooms with modern aesthetics",
      },
      {
        title: "",
        image: "/gardencity/images/gallery/gallery-5.png",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7536.548101745783!2d73.088077!3d19.183229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e855053847bb48c!2sRunwal%20Gardens!5e0!3m2!1sen!2sin!4v1633931142463!5m2!1sen!2sin",
    image: {
      src: "/gardencity/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Eastern Express Highway",
        description: "Approx 30 min drive",
      },
      {
        title: "Kalyan-Shilphata Road",
        description: "4-6 Mins",
      },
      {
        title: "Airoli-Katai Tunnel Road",
        description: "5-7 Mins",
      },
      {
        title: "Dombivli Railway Station",
        description: "15-20 Mins",
      },
      {
        title: "Diva Railway Junction",
        description: "20-25 Mins",
      },
      {
        title: " Navi Mumbai International Airport",
        description: "Just 30 km drive",
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
    description: "Experience Runwal Gardens City from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/gardencity/images/banner-2.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Runwal Gardens City from the comfort of your home",
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
        src: "/gardencity/images/ride.png",
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
      description:
        "Runwal Gardens Dombivali has been registered via MahaRERA registration number: P51700022699 and is available on the website <a href='https://maharera.mahaonline.gov.in/'>https://maharera.mahaonline.gov.in/</a> under registered projects.",
      details: [
        {
          title: "Runwal Gardens Dombivali",
          reraNumber: "Project Maha RERA - P51700022699",
          qrCode: "/gardencity/images/barcode-1.webp",
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
    title: "Runwal Gardens Dombivali | Luxury Apartments in Thane",
    description:
      "Experience luxury living at Runwal Gardens Dombivali, Thane. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "thane west",
      "Runwal Gardens Dombivali",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Runwal Gardens Dombivali | Terms & Conditions",
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
      title: "Runwal Gardens Dombivali | Privacy Policy",
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
      title: "Runwal Gardens Dombivali | Cookies Policy",
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
      title: "Runwal Gardens Dombivali | Thank You",
      description: "Thank you for your interest in Runwal Gardens Dombivali",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_59",
      publicId: "7d8ee9b19e759225721aa4c65c2381d7",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Runwal Gardens Dombivli",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Runwal Gardens City",
      },
    },
  },
};

export type GardenCitySiteConfig = typeof gardenCityConfig;
