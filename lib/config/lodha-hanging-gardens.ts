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

const route = routes.LodhaHangingGardens;

export const lodhaHangingGardensSiteConfig = {
  name: "Lodha Hanging Gardens",
  about:
    "One of India's leading real estate firms, the Lodha Group is renowned for building urban dream homes that offer refined living. The developer caters to all segments, from luxury to budget residences and has built iconic landmarks all across Mumbai, Thane, and Navi Mumbai. The firm has a grand real estate legacy and has delivered around 50,000+ homes in the last 7 years.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
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
        "Download the brochure to learn more about Lodha Hanging Gardens",
    },
  },

  branding: {
    logo: "/lodha-hanging-gardens/images/logo.svg",
    favicon: "/lodha-hanging-gardens/images/favicon.png",
    ogImage: "/lodha-hanging-gardens/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/lodha-hanging-gardens/images/banner-1.webp",
        alt: "Lodha Hanging Gardens Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Lodha Hanging Gardens.",
      },
      title: "Welcome To Lodha Hanging Gardens",
      description: `Lodha Hanging Gardens is a newly launched residential development located along the scenic Ulhas River in Palava City, Dombivli. This exclusive project offers spacious 3 BHK and 4 BHK apartments, each featuring expansive 9-ft. terrace-like decks, a separate maid's room, and a dedicated servant washroom. With only four units per floor and a private elevator for each, the design ensures unparalleled privacy and comfort. The 4 BHK apartments include walk-in wardrobes for added luxury. Additionally, the development includes G+1 townhouses, each with an attached garden and a double-height living room, creating a perfect blend of elegance and functionality.

      The vibrant neighbourhood of Lodha Hanging Gardens is equipped with renowned social facilities such as Lodha World School, Orchids The International School, NES International School, Guardian School, Neptune Super Speciality Hospital, Xperia Mall, Croma, Dmart, R Galleria, and the upcoming 500-bed Jupiter Hospital. This community is adjacent to the Kalyan Shilphata Road, providing smooth connectivity to NH-48 and Dombivli railway station. The upcoming Airoli Katai Tunnel Road is within 5 minutes of reach. The upcoming Navi Mumbai International Airport is a quick drive away. So, discover an unmatched lifestyle in the aspirational community of Lodha Hanging Gardens at Palava City, Dombivli.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Palava, Dombivli by Lodha Group",
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
          value: "15 Acres",
        },
        {
          title: "Floors",
          value: "G + 27 Storeys",
        },
        {
          title: "Possession",
          value: "December 2027",
        },
      ],
      price: {
        title: "Luxurious 3 & 4 BHK Starts At",
        value: "₹ 2.40 Cr",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 3 & 4 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "3 BHK",
        carpetArea: "1577 Sq.ft.",
        price: "2.40 Cr",
        suffix: "Onwards",
      },
      {
        type: "4 BHK",
        carpetArea: "1837 Sq.ft.",
        price: "2.84 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/lodha-hanging-gardens/images/costing.jpg",
        alt: "Lodha Hanging Gardens Costing",
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
        src: "/lodha-hanging-gardens/images/master-plan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Lodha Hanging Gardens",
      },
    },
    floorPlans: null,
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Lodha Hanging Gardens",
    },
    amenities: [
      {
        title: "Saint Amand Luxury Service",
        image: "/lodha-hanging-gardens/images/amenities/saint-amand.webp",
        description: "",
      },
      {
        title: "Marina Greens & Swale Park",
        image: "/lodha-hanging-gardens/images/amenities/central-park.jpg",
        description: "",
      },
      {
        title: "Gymnasium",
        image: "/lodha-hanging-gardens/images/amenities/gymnasium.jpg",
        description: "",
      },
      {
        title: "Club House",
        image: "/lodha-hanging-gardens/images/amenities/club-house.webp",
        description: "",
      },
      {
        title: "Spa",
        image: "/lodha-hanging-gardens/images/amenities/spa.webp",
        description: "",
      },
      {
        title: "Jogging Track",
        image: "/lodha-hanging-gardens/images/amenities/jogging-track.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/lodha-hanging-gardens/images/amenities/swimming-pool.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/lodha-hanging-gardens/images/amenities/kids-play-area.webp",
        description: "",
      },
      {
        title: "Yoga Zone",
        image: "/lodha-hanging-gardens/images/amenities/yoga-zone.webp",
        description: "",
      },
      {
        title: "Multipurpose Sports Court",
        image: "/lodha-hanging-gardens/images/amenities/multi-court.webp",
        description: "",
      },
      {
        title: "Landscape Garden",
        image: "/lodha-hanging-gardens/images/amenities/landscaped-garden.webp",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/lodha-hanging-gardens/images/amenities/banquet-hall.webp",
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
      description: "Download the gallery of Lodha Hanging Gardens",
    },
    images: [
      {
        title: "",
        image: "/lodha-hanging-gardens/images/gallery/gallery-1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/lodha-hanging-gardens/images/gallery/gallery-2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/lodha-hanging-gardens/images/gallery/gallery-3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/lodha-hanging-gardens/images/gallery/gallery-4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.627109284864!2d73.11039901014644!3d19.167793181980898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7951ca1413ce3%3A0x5090221964fe39a5!2sLodha%20Sales%20Gallery!5e0!3m2!1sen!2sin!4v1728479917125!5m2!1sen!2sin",
    image: {
      src: "/lodha-hanging-gardens/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Kalyan Shilphata Road",
        description: "2 Mins",
      },
      {
        title: "Bullet Train Station",
        description: "20 Mins",
      },
      {
        title: "Virar-Alibaug Multimodal Corridor",
        description: "5 Mins",
      },
      {
        title: "Upcoming Metro Station",
        description: "5 Mins",
      },
      {
        title: "Upcoming Airoli Katai Tunnel Road",
        description: "5 Mins",
      },
      {
        title: " Navi Mumbai International & Domestic Airport",
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
    description:
      "Experience Lodha Hanging Gardens from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/lodha-hanging-gardens/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Lodha Hanging Gardens from the comfort of your home",
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
        src: "/lodha-hanging-gardens/images/ride.png",
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
      phone: "+91 96190-95795",
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
        "Lodha Hanging Gardens has been registered via MahaRERA registration number: P51700077356 and is available on the website https://maharera.mahaonline.gov.in/ under registered projects.",
      details: [
        {
          title: "Lodha Hanging Gardens",
          reraNumber: "MahaRERA - P51700077356",
          qrCode: "/lodha-hanging-gardens/images/barcode-1.webp",
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
      "Lodha Hanging Gardens Luxurious 3 & 4 BHK Flats in Dombivli | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Lodha Hanging Gardens, Thane. 2 & 3 BHK apartments with world-class amenities.",
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
      title: "Terms & Conditions | Lodha Hanging Gardens",
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
      title: "Privacy Policy | Lodha Hanging Gardens",
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
      title: "Cookies Policy | Lodha Hanging Gardens",
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
      title: "Lodha Hanging Gardens | Thank You",
      description: "Thank you for your interest in Lodha Hanging Gardens",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_83",
      publicId: "477975d527a3af53b3d9ade26e54f6e7",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Dosti Eden",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Lodha Hanging Gardens",
      },
    },
  },
};

export type LodhaHangingGardensSiteConfig =
  typeof lodhaHangingGardensSiteConfig;
