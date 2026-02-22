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

const route = routes.Taranya;

export const taranyaConfig = {
  name: "Birla Taranya",
  about:
    "Birla Estates, the real estate arm of the Aditya Birla Group, is renowned for developing world-class residential, commercial, and mixed-use projects across India. With a strong presence in key metropolitan cities like **Mumbai, Bangalore, and Gurugram (NCR)**, the company has earned a reputation for quality, innovation, and trust.In **November 2024**, Birla Estates was officially rebranded as **Aditya Birla Real Estate**, marking a new chapter in its journey of excellence. Headquartered in **Mumbai**, the company also operates premium regional offices in **Mumbai**, **Bangalore**, and the **NCR** region.A wholly owned subsidiary of **Century Textiles and Industries Ltd.**, the firm is led by CEO **K. T. Jithendran**. As part of the prestigious **Aditya Birla Group**, a global conglomerate founded in **1875**, Birla Estates continues to shape the future of real estate in India with integrity, vision, and innovation.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address: "Thane Belapur Road",
  },
  gtmId: "GTM-P7ST6K6T",
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
        "Download the brochure to learn more about Birla Taranya.",
    },
  },

  branding: {
    logo: "/taranya/images/logo.svg",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/taranya/images/banner1.webp",
        alt: "Birla Taranya.", 
      },
      {
        src: "/taranya/images/banner2.webp",
        alt: "Birla Taranya Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Birla Taranya.",
      },
      title: "Welcome to Birla Taranya",
      description: `Birla Taranya is a newly launched integrated township strategically located adjacent to Thane–Belapur Road in Airoli. Spread across multiple elegant towers, the development offers spacious 1, 2, and 3 BHK premium residences thoughtfully crafted for modern urban living.

These intelligently planned homes feature expansive layouts that maximise space utilisation, natural ventilation, and abundant daylight. Each residence is designed to create bright, airy interiors, while private decks allow residents to unwind and enjoy pleasant views of the surroundings.

The township is enriched with vast open spaces and a host of lifestyle amenities, including a well-appointed clubhouse, gymnasium, children’s play area, indoor games room, swimming pool, multipurpose sports court, and more—ensuring recreation and wellness for every age group.

Situated in an upscale neighbourhood, Birla Taranya enjoys proximity to renowned social and commercial landmarks such as Smt. Sulochanadevi Singhania School, Euro School, Kalwa Criticare Hospital, Korum Mall, Lake Shore Mall, Bethany Hospital, Dmart, Mindspace Airoli, Gigaplex IT Park, IKEA, and Rutu Business Park.

Connectivity is seamless with Thane–Belapur Road and LBS Marg nearby, offering smooth access to key commercial hubs. The Eastern Express Highway and Ghodbunder Road are also easily reachable, while Kalwa and Airoli railway stations are just minutes away.

Birla Taranya presents a promising address for those seeking an upgraded lifestyle in the thriving locale of Airoli.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Thane Belapur Road by Birla Estates",
      points: [
        { text: "EOI Amount Of ₹2 Lakhs" },
        { text: "Instant Benefits On Spot Booking" },
        { text: "Save Big On Early Buy Discounts" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "14 Acres",
        },
        {
          title: "Floors",
          value: "G + 37 Storeys",
        },
        {
          title: "Possession",
          value: "Dec 2030",
        },
      ],
      price: {
        title: "Luxurious 1, 2 & 3 BHK Starts from",
        value: "88 Lacs",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of Newly Launched 1, 2 & 3 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "1 BHK",
        carpetArea: "487 Sq.ft.",
        price: "88 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK L",
        carpetArea: "763 Sq.ft.",
        price: "1.46 Cr",
        suffix: "Onwards",
      },
      {
        type: "2 BHK XL",
        carpetArea: "889 Sq.ft.",
        price: "1.71 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK L",
        carpetArea: "1057 Sq.ft.",
        price: "2.08 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK XL",
        carpetArea: "1166 Sq.ft.",
        price: "2.24 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/taranya/images/costing.jpg",
        alt: "Birla Taranya.",
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
        src: "/taranya/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Birla Taranya.",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-487 Sq.ft.",
          image: "/taranya/images/plan-1.jpg",
          category: "1 BHK",
        },
        {
          type: "2 BHK-889 Sq.ft.",
          image: "/taranya/images/plan-2.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-1166 Sq.ft.",
          image: "/taranya/images/plan-3.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Birla Taranya.",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Birla Taranya.",
    },
    amenities: [
      {
        title: "Clubhouse",
        image: "/taranya/images/amenities/clubhouse.webp",
        description: "",
      },
      {
        title: "Gymnasium",
        image: "/taranya/images/amenities/gymnasium.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/taranya/images/amenities/swimming_pool.webp",
        description: "",
      },
      {
        title: "Children’s Play Area",
        image: "/taranya/images/amenities/childrens_play_area.webp",
        description: "",
      },
      {
        title: "Jogging & Cycling Tracks",
        image: "/taranya/images/amenities/jogging_cycling_tracks.webp",
        description: "",
      },
      {
        title: "Mini Theatre",
        image: "/taranya/images/amenities/mini_theatre.webp",
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
      description: "Download the gallery of Birla Taranya.",
    },
    images: [
      {
        title: "",
        image: "/taranya/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/taranya/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/taranya/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/taranya/images/gallery/g4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5740.675882803543!2d72.98331507770995!3d19.184781400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9849e453b7f%3A0x73f64132d249d3bf!2sBirla%20Taranya%20Thane!5e1!3m2!1sen!2sin!4v1771755533293!5m2!1sen!2sin" ,
    image: {
      src: "/taranya/images/locationmap.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Thane Belapur Road",
        description: "1 Mins",
      },
      {
        title: "Airoli Railway Station",
        description: "10 Mins",
      },
      {
        title: "Eastern Express Highway",
        description: "15 Mins",
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
    description: "Experience Birla Taranya from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/taranya/images/banner1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Birla Taranya from the comfort of your home",
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
        src: "/taranya/images/ride.png",
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
        "",
      details: [
        {
          title: "Birla Taranya ",
          reraNumber: "",
          qrCode: "/taranya/images/coming.jpg",
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
        title: "Site Address",
        description:
          "Birla Taranya: Pune - Mumbai Hwy, Indal Colony, Kharegaon, Kalwa, Thane, Maharashtra 400605",
      },
      {
        title: "Contact Us",
        description:
          " Corporate Office: Birla Estates: BIRLA AURORA, 8, Dr Annie Besant Rd, Century Bazaar, Worli, Mumbai, Maharashtra 400030",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title: "Birla Taranya | Luxury Apartments in Pune",
    description:
      "Experience luxury living at Birla Taranya, Pune. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "pune",
      "Birla Taranya",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Birla Taranya | Terms & Conditions",
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
      title: "Birla Taranya | Privacy Policy",
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
      title: "Birla Taranya | Cookies Policy",
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
      title: "Birla Taranya | Thank You",
      description: "Thank you for your interest in Birla Taranya.",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_134",
      publicId: "1af87c30bb3d17bc3239f59cb9c1e187",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Birla taranya",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Birla Taranya.",
      },
    },
  },
};

export type TaranyaConfig = typeof taranyaConfig;
