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

const route = routes.EveraHeights;

export const evaraHeightsConfig = {
  name: "L&T Evara Heights",
  about:
    "The real estate arm of Larsen and Toubro, L&T Realty, was established in 2011. The firm is famous for developing residential, retail, and commercial real estate buildings that stand out for their unique and sleek designs. Besides building the Grand Central Mall in Seawoods, it is famous for its beautiful residential complexes across popular locales such as Powai, South Bombay, and Navi Mumbai.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    email: "sales@narangprivado.com",
    address: "Thane West, Mumbai, Maharashtra 400615",
  },
  gtmId: "GTM-NKLHQHSJ",
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
        "Download the brochure to learn more about L&T Evara Heights.",
    },
  },

  branding: {
    logo: "/evaraheights/images/logo.svg",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/evaraheights/images/banner-1.webp",
        alt: "L&T Evara Heights.",
      },
      {
        src: "/evaraheights/images/banner-2.webp",
        alt: "L&T Evara Heights Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about L&T Evara Heights.",
      },
      title: "Welcome to L&T Evara Heights",
      description: `L&T Evara Heights is a thoughtfully designed gated community nestled just behind Viviana Mall on Pokhran Road, Thane. Offering spacious 2, 3, and 4 BHK residences with private sundecks, the homes provide captivating views of the Yeoor Hills and the Thane skyline. Each tower features modern elevations with an east-west orientation to ensure ample natural light and cross-ventilation throughout the day.

Every apartment is intelligently planned to maximise space, privacy, and functionality. These fully air-conditioned homes are equipped with smart home automation, elegant marble flooring, premium fittings, and impressive floor-to-ceiling heights for a truly luxurious living experience.

As an IGBC Gold Certified development, L&T Evara Heights boasts over 1 lakh sq. ft. of world-class amenities. Residents can enjoy a banquet hall, infinity-edge swimming pool, yoga and meditation zones, gymnasium, jogging and cycling tracks, pickleball court, indoor games, and more — all designed to foster an active and balanced lifestyle.

Located in one of Thane’s most sought-after neighbourhoods, the community offers excellent social infrastructure. Renowned schools like DAV Public School, New Horizon Scholars School, and Lodha World School, along with top medical centres such as Jupiter Hospital and Infinity Medisurge, are all close by. Premier retail and commercial hubs including Viviana Mall, High Street Mall, ThaneOne Corporate Park, and NaMo Grand Central Park are within easy reach.

Connectivity is another strong advantage. The project enjoys seamless access to the Eastern Express Highway and Ghodbunder Road, linking residents to the Western Express Highway, South Mumbai, Powai, and the Central Suburbs via LBS Marg. Thane Railway Station is easily accessible, and the upcoming Cadbury Junction Metro Station is just 5 minutes away.

L&T Evara Heights is more than a residential complex — it’s an exclusive address for a refined community, set in the privileged locale of Pokhran Road, Thane.

`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Pokhran Road, Thane by LNT Realty",
      points: [
        { text: "Spot Booking Offers" },
        { text: "Early Buy Discounts" },
        { text: "Attractive Payment Plan" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "12.60 Acres",
        },
        {
          title: "Floors",
          value: "G + 56 Floors",
        },
        {
          title: "Possession",
          value: "December 2028",
        },
      ],
      price: {
        title: "Luxurious 2, 3 & 4 BHK Starts At",
        value: "1.86  Cr",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2, 3, 4 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "2 BHK",
        carpetArea: "750 Sq.ft.",
        price: "1.86 Cr",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "850 Sq.ft.",
        price: "2.08 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1057 Sq.ft.",
        price: "2.45 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1088 Sq.ft.",
        price: "2.54 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1214 Sq.ft.",
        price: "2.63 Cr",
        suffix: "Onwards",
      },
      {
        type: "4 BHK",
        carpetArea: "1930 Sq.ft.",
        price: "On Request",
        suffix: "",
      },
      {
        type: "4 BHK",
        carpetArea: "2235 Sq.ft.",
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
        src: "/evaraheights/images/costing.jpg",
        alt: "L&T Evara Heights.",
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
        src: "/evaraheights/images/masterplan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of L&T Evara Heights.",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-750 Sq.ft.",
          image: "/evaraheights/images/plan1.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-850 Sq.ft.",
          image: "/evaraheights/images/plan2.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-1057 Sq.ft.",
          image: "/evaraheights/images/plan3.jpg",
          category: "3 BHK",
        },
        {
          type: "3 BHK-1214 Sq.ft.",
          image: "/evaraheights/images/plan4.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of L&T Evara Heights.",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of L&T Evara Heights.",
    },
    amenities: [
      {
        title: "Jogging Track",
        image: "/evaraheights/images/amenities/joggingpath_1.webp",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/evaraheights/images/amenities/BanquetHall.webp",
        description: "",
      },
      {
        title: "Gymnasium",
        image: "/evaraheights/images/amenities/gym_01.webp",
        description: "",
      },
      {
        title: "Pickleball Court",
        image: "/evaraheights/images/amenities/pickleballcourt.webp",
        description: "",
      },
      {
        title: "Infinity Swimming Pool",
        image: "/evaraheights/images/amenities/InfinitySwimmingPool.webp",
        description: "",
      },
      {
        title: "Cycling Track",
        image: "/evaraheights/images/amenities/cycling20path_1.webp",
        description: "",
      },
      {
        title: "Landscaped Gardens",
        image: "/evaraheights/images/amenities/landscapedgreens.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/evaraheights/images/amenities/kidsplayarea1.webp",
        description: "",
      },
      {
        title: "Multipurpose Hall",
        image: "/evaraheights/images/amenities/multipurposehall.webp",
        description: "",
      },
      {
        title: "Indoor Games",
        image: "/evaraheights/images/amenities/IndoorGameRoom.webp",
        description: "",
      },
      {
        title: "Yoga & Meditation Zone",
        image: "/evaraheights/images/amenities/yogazone_1.webp",
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
      description: "Download the gallery of L&T Evara Heights.",
    },
    images: [
      {
        title: "",
        image: "/evaraheights/images/gallery/G1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/evaraheights/images/gallery/G2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/evaraheights/images/gallery/G3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/evaraheights/images/gallery/G4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45839.94641954619!2d72.97072!3d19.209749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b920b01f1a55%3A0x61761321577e7e16!2sL%26T%20Realty%20Evara%20Heights%20Thane%20Sales%20Office!5e1!3m2!1sen!2sin!4v1736597128585!5m2!1sen!2sin",
    image: {
      src: "/evaraheights/images/LocationMap.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Eastern Express Highway",
        description: "5 Mins",
      },
      {
        title: "Ghodbunder Road",
        description: "10 Mins",
      },
      {
        title: "LBS Marg",
        description: "5 Mins",
      },
      {
        title: "Thane Belapur Road",
        description: "10 Mins",
      },
      {
        title: "Thane Railway Station",
        description: "15 Mins",
      },
      {
        title: "Upcoming Cadbury Junction Metro Station",
        description: "2 Mins",
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
    description: "Experience L&T Evara Heights from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/evaraheights/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience L&T Evara Heights from the comfort of your home",
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
        src: "/evaraheights/images/ride.png",
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
        "L and T Realty Evara Heights is available on the website <a href='https://maharera.mahaonline.gov.in/'>https://maharera.mahaonline.gov.in/</a> under registered projects.",
      details: [
        {
          title: "L and T Realty Evara Heights T1",
          reraNumber: "Project Maha RERA - P51700077650",
          qrCode: "/evaraheights/images/barcode-1.webp",
        },
        {
          title: "L and T Realty Evara Heights T2",
          reraNumber: "Project Maha RERA - P51700077678",
          qrCode: "/evaraheights/images/barcode-1.webp",
        },
        {
          title: "L and T Realty Evara Heights T4",
          reraNumber: "Project Maha RERA - P51700077681",
          qrCode: "/evaraheights/images/barcode-1.webp",
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
          "MAHA RERA Project Registration No.: P51700077650 | P51700077678 | P51700077681.",
      },
      {
        title: "Site Address",
        description:
          "LNT Evara Heights: L&T Realty Sales Office, next to Viviana Mall, Laxmi Nagar, Thane West, Thane, Maharashtra 400601.",
      },
      {
        title: "Corporate Office",
        description:
          "Corporate Office: LNT Realty: L&T Realty, 8th Floor, A.M.Naik Tower, L&T Campus, Gate No. 3, Jogeshwari - Vikhroli Link Rd, Powai, Mumbai, Maharashtra 400072.",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title: "L&T Evara Heights | Luxury Apartments in Thane",
    description:
      "Experience luxury living at L&T Evara Heights, Thane. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "thane west",
      "L&T Evara Heights",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "L&T Evara Heights | Terms & Conditions",
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
      title: "L&T Evara Heights | Privacy Policy",
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
      title: "L&T Evara Heights | Cookies Policy",
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
      title: "L&T Evara Heights | Thank You",
      description: "Thank you for your interest in L&T Evara Heights.",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_110",
      publicId: "1c54474cabc4c8d26c8dd53c5bd35613",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Salesinquiries-EvaraHeights",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from L&T Evara Heights.",
      },
    },
  },
};

export type EvaraHeightsConfig = typeof evaraHeightsConfig;
