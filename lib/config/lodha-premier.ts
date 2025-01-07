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

const route = routes.LodhaPremier;

export const lodhaPremierSiteConfig = {
  name: "Lodha Premier",
  about:
    "One of India's leading real estate firms, the Lodha Group is renowned for building urban dream homes that offer refined living. The developer caters to all segments, from luxury to budget residences and has built iconic landmarks all across Mumbai, Thane, and Navi Mumbai. Lodha properties are known to feature quality interiors, state-of-the-art amenities, vast open spaces, and manicured green landscapes. A few of their standout properties are Lodha World Towers in Lower Parel, Lodha Palava in Dombivli, Lodha Crown in Thane, and Lodha Bellagio in Powai.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address: "Kalyan- Shil Road Dombivli East",
  },
  gtmId: "GTM-TSFFTV9",
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
      description: "Download the brochure to learn more about Lodha Premier",
    },
  },

  branding: {
    logo: "/lodha-premier/images/logo.png",
    favicon: "/lodha-premier/images/favicon.png",
    ogImage: "/lodha-premier/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/lodha-premier/images/banner-1.webp",
        alt: "Lodha Premier Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description: "Download the brochure to learn more about Lodha Premier.",
      },
      title: "Welcome To Lodha Premier",
      description: `Lodha Premier is a beautiful residential development project located at Manpada, Dombivli. Lodha Premier offers excellently created 1, 2 & 3 BHK lavishly furnished apartments with large sundecks, floor-to-ceiling windows, and designer bath fittingsnestled next to acres of forest greens. Exclusively, Lodha Premier Dombivli also comes along with an array of exceptional modern lifestyle amenities. It is an all-encompassing package that will comprise amenities such as a large sports complex, a school, a business district, a clubhouse, floral gardens, high street retail, and more.

      Right on the Kalyan-Shil Road, the property itself is close to Dombivli Station, Airoli, and a metro station on the upcoming Kalyan-Taloja line. The locale also features the top essentials such as hospitals, shopping malls, banks, ATMs, and restaurants. Guardian School & Aims Hospital are 15-20 minutes away. Overall, Lodha Codename Premier offers a stunning self-sufficient township that brings the best of modernity to your fingertips.`,
    },
    offer: {
      title: "Booking Open",
      location: "At Dombivali by Lodha Group",
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
          value: "50 Acres",
        },
        {
          title: "Floors",
          value: "24 Storeys",
        },
        {
          title: "Possession",
          value: "Dec 2024",
        },
      ],
      price: {
        title: "Luxurious 1, 2 & 3 Deck Flats Starts from",
        value: "44.99 Lacs",
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
        carpetArea: "444 Sq.ft.",
        price: "44.99 Lacs",
        suffix: "Onwards",
      },
      {
        type: "1 BHK with Deck",
        carpetArea: "479 Sq.ft.",
        price: "49.99 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "540 Sq.ft.",
        price: "57.99 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK with deck",
        carpetArea: "572 - 656 Sq.ft.",
        price: "63.99 Lacs",
        suffix: "Onwards",
      },
      {
        type: "3 BHK Ultima with Deck",
        carpetArea: "759 Sq.ft.",
        price: "83.99 Lacs",
        suffix: "Onwards",
      },
      {
        type: "3 BHK Premium",
        carpetArea: "960 Sq.ft.",
        price: "1.09 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/lodha-premier/images/costing.jpg",
        alt: "Lodha Premier Costing",
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
        src: "/lodha-premier/images/master-plan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Lodha Premier",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-444 Sq.ft.",
          image: "/lodha-premier/images/floor-1.jpg",
          category: "1 BHK",
        },
        {
          type: "1 BHK-Deck-479 Sq.ft.",
          image: "/lodha-premier/images/floor-2.jpg",
          category: "1 BHK",
        },
        {
          type: "2 BHK-540 Sq.ft.",
          image: "/lodha-premier/images/floor-3.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-Deck-572 Sq.ft.",
          image: "/lodha-premier/images/floor-4.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-Ultima Deck-656 Sq.ft.",
          image: "/lodha-premier/images/floor-5.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK Optima-759 Sq.ft.",
          image: "/lodha-premier/images/floor-6.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Lodha Premier",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Lodha Premier",
    },
    amenities: [
      {
        title: "Garden",
        image: "/lodha-premier/images/amenities/GARDEN.webp",
        description: "",
      },
      {
        title: "Gymnasium",
        image: "/lodha-premier/images/amenities/GYMNASIUM.webp",
        description: "",
      },
      {
        title: "Indoor Games Zone",
        image: "/lodha-premier/images/amenities/INDOORGAMESZONE.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/lodha-premier/images/amenities/KIDSPLAYAREA.webp",
        description: "",
      },
      {
        title: "Library & Cafe",
        image: "/lodha-premier/images/amenities/LIBRARY&CAFE.webp",
        description: "",
      },
      {
        title: "Mini Theatre",
        image: "/lodha-premier/images/amenities/MINITHEATRE.webp",
        description: "",
      },
      {
        title: "Retail",
        image: "/lodha-premier/images/amenities/RETAIL.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/lodha-premier/images/amenities/SWIMMINGPOOL.webp",
        description: "",
      },
      {
        title: "Volleyball Court",
        image: "/lodha-premier/images/amenities/VOLLEYBALLCOURT.webp",
        description: "",
      },
      {
        title: "Walking Trail",
        image: "/lodha-premier/images/amenities/WALKINGTRAIL.webp",
        description: "",
      },
      {
        title: "World Class School",
        image: "/lodha-premier/images/amenities/WORLDCLASSSCHOOL.webp",
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
      description: "Download the gallery of Lodha Premier",
    },
    images: [
      {
        title: "",
        image: "/lodha-premier/images/gallery/gallery-1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/lodha-premier/images/gallery/gallery-2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/lodha-premier/images/gallery/gallery-3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/lodha-premier/images/gallery/gallery-4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.099507581815!2d73.0903641!3d19.1831929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc6c9b7d444660d20!2sLodha%20Codename%20Premier%20Dombivli!5e0!3m2!1sen!2sin!4v1637216125991!5m2!1sen!2sin",
    image: {
      src: "/lodha-premier/images/map.jpg",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "D-Mart",
        description: "5 Mins",
      },
      {
        title: "Guardian School",
        description: "8 Mins",
      },
      {
        title: "Kalyan-Shil Junction",
        description: "15 Mins",
      },
      {
        title: "Dombivli Station",
        description: "20 Mins",
      },
      {
        title: "Lodha Xperia Mall",
        description: "10 Mins",
      },
      {
        title: "Aims Hospital",
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
    description: "Experience Lodha Premier from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/lodha-premier/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription: "Experience Lodha Premier from the comfort of your home",
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
        src: "/lodha-premier/images/ride.png",
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
          reraNumber: "Rera No. P51700033751",
          qrCode: "/lodha-premier/images/barcode-1.jpg",
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
        description: "RERA Project Registration No.: P51700033751",
      },
      {
        title: "Site Address",
        description: "Lodha Premier: Kalyan- Shil Road Dombivli East",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Lodha Premier by Lodha Group | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Lodha Premier, 2 & 3 BHK apartments with world-class amenities.",
    keywords: ["luxury apartments", "2 bhk", "3 bhk"],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  termsAndConditions: {
    seo: {
      title: "Terms & Conditions | Lodha Premier",
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
      title: "Privacy Policy | Lodha Premier",
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
      title: "Cookies Policy | Lodha Premier",
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
      title: "Lodha Premier | Thank You",
      description: "Thank you for your interest in Lodha Premier",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_6",
      publicId: "5137fabea171ff2009e23603c5f4944e",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Lodha Premier",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Lodha Premier",
      },
    },
  },
};

export type LodhaPremierSiteConfig = typeof lodhaPremierSiteConfig;
