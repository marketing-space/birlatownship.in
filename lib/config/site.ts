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

export const siteConfig = {
  name: "Narang Privado",
  about:
    "Founded in 1988, Narang Realty is a renowned family real estate business that develops residential and commercial properties. The firm focuses on delivering refined, luxury housing and has already served 2000+ home buyers to date. It has already delivered projects across 5 million+ sq. ft. and won 50+ real estate awards. From connected community living, to soaring skyscarpers, our buildings enhance lifestyles across the city. We are deeply committed to our mission of creating superior developments that enrich the city and transform lives",
  contact: {
    phone: "+919876543210",
    whatsapp: "+919876543210",
    email: "sales@narangprivado.com",
    address: "Thane West, Mumbai, Maharashtra 400615",
  },

  navbar: {
    navItems: [
      {
        href: "/#home",
        label: "Home",
        icon: Home,
      },
      {
        href: "/#price",
        label: "Price",
        icon: IndianRupee,
      },
      {
        href: "/#site-plan",
        label: "Site & Floor Plan",
        icon: LayoutPanelTop,
      },
      {
        href: "/#amenities",
        label: "Amenities",
        icon: Trees,
      },
      {
        href: "/#gallery",
        label: "Gallery",
        icon: ImageIcon,
      },
      {
        href: "/#location",
        label: "Location",
        icon: MapPin,
      },
      {
        href: "/#virtual-tour",
        label: "Virtual Site Visit",
        icon: Video,
      },
    ],
    cta: {
      title: "Download Brochure",
      description: "Download the brochure to learn more about Narang Privado",
    },
  },

  branding: {
    logo: "/images/logo.svg",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/images/banner-1.webp",
        alt: "Narang Privado Exterior",
      },
      {
        src: "/images/banner-2.webp",
        alt: "Narang Privado Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Narang Privado.",
      },
      title: "Welcome to Narang Privado",
      description: `Experience living in a resort-like atmosphere only at Narang Privado, in Thane. This residential project offers Vastu-compliant 2, 3 &amp; 4 BHK residences - attached with expansive balconies &amp; large windows for cross ventilation. These homes are designed for a lavish lifestyle, with cozy master bedrooms, designer kitchens, and imported marble floors. 32+ amenities such as a clubhouse, swimming pool, pet park, a rock climbing wall, and a sports arena afford a luxury lifestyle. The inclusion of a serene forest walk, jacuzzi, tea pavilion, &amp; more revives your daily lifestyle. 
        
      Located off Pokhran Road 1, Thane West - the project is nestled amidst the scenic Yeoor Hills and Sanjay Gandhi National Park.Close to urban facilities like the Korum Mall, Holy Cross High School, and Horizon Hospital - Narang Privado is the complete package! The strategic location also gives smooth travel times via the Eastern Express Highway & amp; Thane Railway Station - both within 10 - 15 minutes of reach.The upcoming Majiwada & amp; Cadbury metro stations are close by as well.With world - class homes in a peaceful location - Narang Privado is where you can enjoy beautiful, tranquil moments in your everyday life.`,
    },
    offer: {
      title: "A LIMITED TIME OFFER",
      location: "At Thane (W) by Narang Realty",
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
          value: "6.20 Acres",
        },
        {
          title: "Floors",
          value: "2B+3P+38 Storeys",
        },
        {
          title: "Possession",
          value: "Dec 2026",
        },
        {
          title: "Ownership",
          value: "Freehold",
        },
      ],
      price: {
        title: "Luxurious 2, 3 & 4 BHK Starts at",
        value: "1.62 Cr",
        suffix: "All Inc",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2, 3 & 4 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    priceSuffix: "All Inclusive",
    prices: [
      {
        type: "2 BHK Regal",
        carpetArea: "737 Sq.ft.",
        price: "1.62 Cr",
      },
      {
        type: "2 BHK Luxury",
        carpetArea: "800 Sq.ft.",
        price: "1.77 Cr",
      },
      {
        type: "3 BHK Signature",
        carpetArea: "1070 Sq.ft.",
        price: "2.39 Cr",
      },
      {
        type: "3 BHK Regal",
        carpetArea: "1128 Sq.ft.",
        price: "2.55 Cr",
      },
      {
        type: "3 BHK Luxury",
        carpetArea: "1295 Sq.ft.",
        price: "2.95 Cr",
      },
      {
        type: "4 BHK Imperial",
        carpetArea: "1486 Sq.ft.",
        price: "3.64 Cr",
      },
      {
        type: "4 BHK Elite",
        carpetArea: "1616 Sq.ft.",
        price: "3.99 Cr",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/images/costing.webp",
        alt: "Narang Privado Costing",
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
        src: "/images/floor-1.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Narang Privado",
      },
    },
    floorPlans: {
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-737 Sq.ft.",
          image: "/images/floor-2.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-800 Sq.ft.",
          image: "/images/floor-3.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-1070 Sq.ft.",
          image: "/images/floor-4.jpg",
          category: "3 BHK",
        },
        {
          type: "3 BHK-1128 Sq.ft.",
          image: "/images/floor-5.jpg",
          category: "3 BHK",
        },
        {
          type: "3 BHK-1295 Sq.ft.",
          image: "/images/floor-6.jpg",
          category: "3 BHK",
        },
        {
          type: "4 BHK-1486 Sq.ft.",
          image: "/images/floor-7.jpg",
          category: "4 BHK",
        },
        {
          type: "4 BHK-1616 Sq.ft.",
          image: "/images/floor-8.jpg",
          category: "4 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Narang Privado",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Narang Privado",
    },
    amenities: [
      {
        title: "Banquet Clubhouse",
        image: "/images/amenities/banquetClubhouse0.webp",
        description: "A luxurious space for community gatherings and events",
      },
      {
        title: "Indoor Games Room",
        image: "/images/amenities/indoorGamesRoom0.webp",
        description: "A space for indoor games and activities",
      },
      {
        title: "Multi-Purpose Sports Court",
        image: "/images/amenities/multipurposeSportsCourt0.webp",
        description: "A space for multi-purpose sports and activities",
      },
      {
        title: "Day Care",
        image: "/images/amenities/daycare0.webp",
        description: "Quality childcare and early education facilities",
      },
      {
        title: "Kids Play Area",
        image: "/images/amenities/kidsplayarea0.webp",
        description: "A safe and fun space for children to play",
      },
      {
        title: "Outdoor Gym",
        image: "/images/amenities/outdoorGym0.webp",
        description: "A space for outdoor exercise and fitness",
      },
      {
        title: "Pet Park",
        image: "/images/amenities/petPark0.webp",
        description: "Pet friendly amenities",
      },
      {
        title: "Rock Climbing Pool",
        image: "/images/amenities/rockClimbingPool0.webp",
        description: "A space for rock climbing and fitness",
      },
      {
        title: "Walking Trail",
        image: "/images/amenities/walkingTrail0.webp",
        description: "A space for walking and fitness",
      },
      {
        title: "Relaxation Lounge",
        image: "/images/amenities/relaxationlounge0.webp",
        description: "A space for relaxation and meditation",
      },
      {
        title: "Swimming Pool",
        image: "/images/amenities/swimmingPool0.webp",
        description: "A space for swimming and fitness",
      },
      {
        title: "Yoga Corner",
        image: "/images/amenities/yogaCorner0.webp",
        description: "A space for yoga and meditation",
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
      description: "Download the gallery of Narang Privado",
    },
    images: [
      {
        title: "",
        image: "/images/gallery/1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/images/gallery/2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/images/gallery/3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/images/gallery/4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.712330327652!2d72.95630957520868!3d19.207762982024168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9618a7c9955%3A0x5a364a2a0c44817f!2sNarang%20Privado!5e0!3m2!1sen!2sin!4v1734800553102!5m2!1sen!2sin",
    image: {
      src: "/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Eastern Express Highway",
        description: "8 Mins",
      },
      {
        title: "Majiwada Metro Station",
        description: "10 Mins",
      },
      {
        title: "Thane Railway Station",
        description: "15 Mins",
      },
      {
        title: "Upcoming Cadbury Metro Station",
        description: "4 Mins",
      },
      {
        title: "Jupiter Hospital",
        description: "7 Mins",
      },
      {
        title: "Korum Mall",
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
    description: "Experience Narang Privado from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription: "Experience Narang Privado from the comfort of your home",
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
        src: "/images/ride.png",
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
        "Narang Realty has been registered via MahaRERA registration number and is available on the website https://maharera.mahaonline.gov.in/ under registered projects.",
      details: [
        {
          title: "Narang Realty MahaRERA",
          reraNumber: "P51700050065",
          qrCode: "/images/barcode-1.webp",
        },
      ],
    },
    legalInfo: [
      // {
      //   title: "Project Registration",
      //   description:
      //     "Project Registered under Government of India RERA Act 2016",
      // },
      // {
      //   title: "Authorised Advertiser",
      //   description:
      //     "Government RERA Authorised Advertiser's: Home Bazaar Services Pvt Ltd, Registration No A5200000045, CIN U45400MH2013PTC242930.",
      // },
      // {
      //   title: "RERA Numbers",
      //   description:
      //     "RERA Project Registration No.: P51800000818 | P51800001838 | P51800001137",
      // },
      // {
      //   title: "Site Address",
      //   description:
      //     "Runwal Forest: Lal Bahadur Shastri Marg, Ambedkar Nagar, Kanjurmarg West, Bhandup West, Mumbai, Maharashtra 400078",
      // },
      // {
      //   title: "Corporate Office",
      //   description:
      //     "Corporate Office: Runwal Group: 4th Floor, Runwal & Omkar Esquare, Off, Eastern Express Hwy, opp. Sion-Chunabhatti, Sion East, Signal, Mumbai, Maharashtra 400022",
      // },
    ],
    disclaimer:
      "We are an authorised marketing partner for this project.Provided content is given by respective owners and this website and content is for information purpose only and it does not constitute any offer to avail for any services.Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability.You can expect a call, SMS or emails on details",
  },

  seo: {
    title: "Narang Privado | Luxury Apartments in Thane",
    description:
      "Experience luxury living at Narang Privado, Thane. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "thane west",
      "narang realty",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
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

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_67",
      publicId: "e8e83c63a249cfc8f6a7ba6c95455824",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Narang-Privado",
      cfLeadsProjectSite: "Narang Privado",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Narang Privado",
      },
    },
  },
};

export type SiteConfig = typeof siteConfig;
