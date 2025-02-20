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

const route = routes.MaximumCity;

export const maxmiumCityConfig = {
  name: "Raunak Maximum City",
  about:
    "Raunak Group was established in 1980 with an aim to complete a common man's dream of purchasing their dream home at affordable pricing. Our aim is to provide value in whatever we do. We have developed various townships, and at various locations like Mumbai, Thane, Kalyan and Pune. Our envision is to exceed our expectations by providing high-quality construction and services to our customers.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Thane West",
  },
  gtmId: "GTM-W74NMB5",
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
      description: "Download the brochure to learn more about Raunak Maximum City",
    },
  },

  branding: {
    logo: "/maximum-city/images/logo.jpg",
    favicon: "/maximum-city/images/icon.png",
    ogImage: "/maximum-city/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/maximum-city/images/banner-1.webp",
        alt: "Raunak Maximum City Exterior",
      },
      {
        src: "/maximum-city/images/banner-2.webp",
        alt: "Raunak Maximum City Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description: "Download the brochure to learn more about Raunak Maximum City.",
      },
      title: "Welcome To Raunak Maximum City Thane",
      description: `Raunak Maximum City is launching its new tri-towers, a 35-storey residential development featuring fully furnished 1 and 2 BHK apartments, along with Jodi units. These spacious homes range from 430 to 1260 sq. ft. and are strategically located in Kasarvadavali, behind D-Mart on GB Road, Thane (West). With over 500 bookings already completed, only a limited number of units remain available. Prospective buyers can take advantage of exclusive on-table negotiations and special discounts for a limited time.  

      Ideally positioned in one of Thane’s prime locations, Raunak Maximum City offers the perfect blend of convenience and luxury, making it an excellent choice for homeowners and investors alike. Each fully loaded apartment comes with premium furnishings, including a free TV unit, a three-seater sofa, a four-seater dining table, a wardrobe, a center table, and a queen-size bed. Available configurations include 1, 2, 3, and 4.5 BHK apartments, with all-inclusive pricing starting at ₹58 Lakh, ₹87 Lakh, ₹1.21 Crore, and ₹1.69 Crore, respectively. With limited inventory remaining, now is the perfect time to secure your dream home with flexible payment plans and exclusive offers.`,
    },
    offer: {
      title: "Booking Open",
      location: "Raunak Maximum City at Kasarvadavali, Thane (W)",
      points: [
        { text: "Flexible Payment Plan" },
        { text: "On-table Negotiation" },
        { text: "Spot Booking Discounts" },
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
        title: "1 & 2 BHK or Jodi Premium & Luxe Starts from",
        value: "59 Lacs",
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
        type: "1 BHK",
        carpetArea: "430 Sq.ft.",
        price: "59 Lacs",
        suffix: "All Inc",
      },
      {
        type: "2 BHK",
        carpetArea: "610 - 630 Sq.ft.",
        price: "88 Lacs",
        suffix: "All Inc",
      },
      {
        type: "3 BHK (1+1 Jodi)",
        carpetArea: "860 Sq.ft.",
        price: "1.30 Cr",
        suffix: "All Inc",
      },
      {
        type: "4.5 BHK (2+2 Jodi)",
        carpetArea: "1220 - 1260 Sq.ft.",
        price: "1.65 Cr",
        suffix: "All Inc",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/maximum-city/images/costing.jpg",
        alt: "Raunak Maximum City Costing",
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
        src: "/maximum-city/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Raunak Maximum City",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-446 Sq.ft.",
          image: "/maximum-city/images/plan-1.png",
          category: "1 BHK",
        },
        {
          type: "2 BHK-618 Sq.ft.",
          image: "/maximum-city/images/plan-2.png",
          category: "2 BHK",
        },
        {
          type: "2 BHK-722 Sq.ft.",
          image: "/maximum-city/images/plan-3.png",
          category: "2 BHK",
        },
        {
          type: "3 BHK-958 Sq.ft.",
          image: "/maximum-city/images/plan-4.png",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Raunak Maximum City",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Raunak Maximum City",
    },
    amenities: [
      {
        title: "Badminton Court",
        image: "/maximum-city/images/amenities/BADMINTONCOURT.webp",
        description: "",
      },
      {
        title: "Cricket Pitch",
        image: "/maximum-city/images/amenities/CRICKETPITCH.webp",
        description: "",
      },
      {
        title: "Ganesha Temple",
        image: "/maximum-city/images/amenities/GANESHATEMPLE.webp",
        description: "",
      },
      {
        title: "Lawn Party",
        image: "/maximum-city/images/amenities/party.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/maximum-city/images/amenities/KIDSPLAYAREA.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/maximum-city/images/amenities/GYM.webp",
        description: "",
      },
      {
        title: "Indoor Pool",
        image: "/maximum-city/images/amenities/INDOORPOOL.webp",
        description: "",
      },
      {
        title: "Multiple Party Hall",
        image: "/maximum-city/images/amenities/MULTIPLEPARTYHALL.webp",
        description: "",
      },
      {
        title: "Pool Side Cafe",
        image: "/maximum-city/images/amenities/POOLSIDECAFE.webp",
        description: "",
      },
      {
        title: "Pool Side Deck",
        image: "/maximum-city/images/amenities/POOLSIDEDECK.webp",
        description: "",
      },
      {
        title: "Private Theatre",
        image: "/maximum-city/images/amenities/PRIVATETHEATRE.webp",
        description: "",
      },
      {
        title: "Carrom & Chess Room",
        image: "/maximum-city/images/amenities/Carrom & Chess Room.png",
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
      description: "Download the gallery of Raunak Maximum City",
    },
    images: [
      {
        title: "",
        image: "/maximum-city/images/gallery/1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/maximum-city/images/gallery/2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/maximum-city/images/gallery/3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/maximum-city/images/gallery/4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22951.88258084671!2d72.958556!3d19.262231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb2f98a63ccf%3A0x99207097ba27e5ee!2sRaunak%20Maximum%20City!5e1!3m2!1sen!2sin!4v1740038086256!5m2!1sen!2sin",
    image: { 
      src: "/maximum-city/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "High Street Mall",
        description: "10 Mins",
      },
      {
        title: "R Mall",
        description: "10 Mins",
      },
      {
        title: " Viviana Mall",
        description: "20 Mins",
      },
      {
        title: "Jupiter Hospital",
        description: "20 Mins",
      },
      {
        title: "D-Mart",
        description: "5 Mins",
      },
      {
        title: "Kasarvadavali Lake",
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
    description: "Experience Raunak Maximum City from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/maximum-city/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription: "Experience Raunak Maximum City from the comfort of your home",
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
        src: "/maximum-city/images/ride.png",
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
          reraNumber: "Rera No. P51700050827",
          qrCode: "/maximum-city/images/qr1.png",
        },
        {
          title: "",
          reraNumber: "Rera No. P51700050828",
          qrCode: "/maximum-city/images/qr2.png",
        },
        {
          title: "",
          reraNumber: "Rera No. P51700050829",
          qrCode: "/maximum-city/images/qr3.png",
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
          "RERA Project Registration No.: P51700050827 / P51700050828 / P51700050829 ",
      },
      {
        title: "Site Address",
        description:
          "Site Address: Raunak Bliss, behind Unnathi Greens, Haware City Road, Thane West, Maharashtra 400615",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Raunak Maximum City by Raunak Group | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Raunak Maximum City, 2 & 3 BHK apartments with world-class amenities.",
    keywords: ["luxury apartments", "lodha group", "2 bhk", "3 bhk"],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  termsAndConditions: {
    seo: {
      title: "Terms & Conditions | Raunak Maximum City",
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
      title: "Privacy Policy | Raunak Maximum City",
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
      title: "Cookies Policy | Raunak Maximum City",
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
      title: "Raunak Maximum City | Thank You",
      description: "Thank you for your interest in Raunak Maximum City",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_50",
      publicId: "d1eb477f932295f82a96fb735f5e3415",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Raunak Maximum",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Raunak Maximum City",
      },
    },
  },
};

export type MaxmiumCityConfig = typeof maxmiumCityConfig;
