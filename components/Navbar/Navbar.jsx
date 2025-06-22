"use client";
import { useState } from "react";
import Link from "next/link";
import { HiDevicePhoneMobile, HiPaintBrush } from "react-icons/hi2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TiThMenu } from "react-icons/ti";
import { TbSocial } from "react-icons/tb";
import { SiWebmoney } from "react-icons/si";
import { PiPaintBucketFill } from "react-icons/pi";
import { MdOutlineAdsClick } from "react-icons/md";
import {
  DigitalmarketingIcon,
  Advertisingicon,
  Graphicdesignicon,
  Webdevelopmenticon,
  Mobileappicon,
  Brandingicon,
} from "../../public/icons";
import {
  faBuilding,
  faSearch,
  faPencil,
  faNetworkWired,
  faPhone,
  faEnvelope,
  faBlog,faCalculator ,
  faInfoCircle,
  faAd,
  faHandHoldingUsd,
  faChartLine,
  faBullhorn,
  faMobile,
  faVideo,
  faMapMarkerAlt,
  faShoppingCart,
  faCog,
  faRetweet,
  faUserCheck,
  faCartShopping,
  faGlobe,
  faColumns,
  faChartBar,
  faPalette,
  faPrint,
  faLaptop,
  faUser,
  faBox,
  faFileAlt,
  faFlag,
  faImage,
  faBook,
  faTshirt,
  faMapSigns,
  faIdCard,
  faShapes,
  faFilm,
  faCamera,
  faFileSignature,
  faMapMarker,
  faBookOpen,
  faSignature,
  faCommentAlt,
  faHandHoldingHeart,
  faSyncAlt,
  faChartPie,
  faDesktop,
  faCogs,
  faTree,
  faMicrophone,
  faTv,
  faGamepad,
  faDraftingCompass,
  faCheckCircle,
  faWrench,
  faShieldAlt,
  faDollarSign,
  faShoppingBag,
  faFileInvoice,
  faTools,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";


import NavbarLogo from "./csdv2Logo.svg";
import Image from "next/image";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [openMenus, setOpenMenus] = useState({
    webDevelopment: false,
    mobileApp: false,
    digitalMarketing: false,
    multimedia: false,
    branding: false,
    advertising: false,
    more: false,
    mobileMenu: false,
  });
  const [isOpen, setIsOpen] = useState(false); // Add this line

  let closeTimeout;

  const closeAllMenus = () => {
    setOpenMenus({
      webDevelopment: false,
      mobileApp: false,
      digitalMarketing: false,
      multimedia: false,
      branding: false,
      advertising: false,
      more: false,
      mobileMenu: false,
    });
  };
  const handleMouseEnter = (menu) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
    closeAllMenus();
    setOpenMenus((prev) => ({ ...prev, [menu]: true }));
  };
  const handleMouseLeave = (menu) => {
    closeTimeout = setTimeout(() => {
      setOpenMenus((prev) => ({ ...prev, [menu]: false }));
    }, 500); // delay in ms
  };

  const NavImages = {
    link1: Webdevelopmenticon,
    link2: DigitalmarketingIcon,
    link3: Brandingicon,
    link4: Advertisingicon,
    link5: Mobileappicon,
    link6: Graphicdesignicon,
  };

  const webDevelopmentLinks = [
    {
      path: "/services/web-development-company/build-business-website",
      title: "Business Websites",
      description:
        "Our business website solutions are designed to drive growth, enhance visibility, and boost profitability in the digital landscape.",
      icon: faBuilding,
    },
    {
      path: "/services/web-developement-company/build-ecommerce-website",
      title: "E-commerce",
      description:
        "Elevate your online retail with our bespoke e-commerce solutions. Boost sales, engage customers, and thrive online.",
      icon: faCartShopping,
    },
    {
      path: "/services/web-developement-company/website-rebuild",
      title: "Web Revamp",
      description:
        "Transform and modernize your existing website with our web revamp services. Stay ahead and impress your audience.",
      icon: faGlobe,
    },
    {
      path: "/services/web-developement-company/control-center-for-business",
      title: "CRM/ERP Panels",
      description:
        "Enhance business operations with our CRM/ERM panels. Streamline processes, manage data, and boost productivity effectively.",
      icon: faColumns,
    },
  ];

  const digitalMarketingLinks = [
    {
      path: "/search-engine-optimization",
      title: "Search Engine Optimization",
      description: "Optimize your website for search engines.",
      icon: faSearch,
    },
    {
      path: "/content-marketing",
      title: "Content Marketing",
      description: "Create and distribute valuable content.",
      icon: faPencil,
    },
    {
      path: "/social-media-marketing",
      title: "Social Media Marketing",
      description: "Promote your brand on social platforms.",
      icon: faNetworkWired,
    },
    {
      path: "/email-marketing",
      title: "Email Marketing",
      description: "Engage your audience with email campaigns.",
      icon: faEnvelope,
    },
    {
      path: "/pay-per-click-advertising",
      title: "Pay-Per-Click Advertising",
      description: "Drive traffic with targeted ads.",
      icon: faAd,
    },
    {
      path: "/affiliate-marketing",
      title: "Affiliate Marketing",
      description: "Boost sales through affiliate programs.",
      icon: faHandHoldingUsd,
    },
    {
      path: "/analytics-and-data-analysis",
      title: "Analytics and Data Analysis",
      description: "Gain insights from data for better strategies.",
      icon: faChartLine,
    },
    {
      path: "/conversion-rate-optimization",
      title: "Conversion Rate Optimization",
      description: "Improve website conversion rates.",
      icon: faBullhorn,
    },
    {
      path: "/mobile-marketing",
      title: "Mobile Marketing",
      description: "Target users on mobile devices.",
      icon: faMobile,
    },
    {
      path: "/video-marketing",
      title: "Video Marketing",
      description: "Use videos for effective marketing.",
      icon: faVideo,
    },
    {
      path: "/local-seo-and-marketing",
      title: "Local SEO and Marketing",
      description: "Enhance local online visibility.",
      icon: faMapMarkerAlt,
    },
    {
      path: "/ecommerce-marketing",
      title: "Ecommerce Marketing",
      description: "Promote products in online stores.",
      icon: faShoppingCart,
    },
    {
      path: "/marketing-automation",
      title: "Marketing Automation",
      description: "Automate marketing tasks for efficiency.",
      icon: faCog,
    },
    {
      path: "/remarketing-retargeting",
      title: "Remarketing and Retargeting",
      description: "Re-engage potential customers.",
      icon: faRetweet,
    },
    {
      path: "/influencer-marketing",
      title: "Influencer Marketing",
      description: "Collaborate with influencers for promotion.",
      icon: faUserCheck,
    },
  ];

  const multimediaLinks = [
    {
      path: "/logo-design",
      title: "Logo Design",
      description: "Create a unique logo for your brand.",
      icon: faGlobe,
    },
    {
      path: "/brand-identity-design",
      title: "Brand Identity Design",
      description: "Build a strong brand identity.",
      icon: faGlobe,
    },
    {
      path: "/print-design",
      title: "Print Design",
      description: "Design materials for print.",
      icon: faPrint,
    },
    {
      path: "/web-design",
      title: "Web Design",
      description: "Create stunning websites.",
      icon: faLaptop,
    },
    {
      path: "/user-interface-design",
      title: "User Interface Design",
      description: "Design user-friendly interfaces.",
      icon: faUser,
    },
    {
      path: "/user-experience-design",
      title: "User Experience Design",
      description: "Enhance user satisfaction.",
      icon: faUser,
    },
    {
      path: "/packaging-design",
      title: "Packaging Design",
      description: "Create attractive packaging.",
      icon: faBox,
    },
    {
      path: "/poster-and-flyer-design",
      title: "Poster and Flyer Design",
      description: "Design promotional materials.",
      icon: faFileAlt,
    },
    {
      path: "/brochure-design",
      title: "Brochure Design",
      description: "Design informative brochures.",
      icon: faFileAlt,
    },
    {
      path: "/banner-design",
      title: "Banner Design",
      description: "Design eye-catching banners.",
      icon: faFlag,
    },
    {
      path: "/illustration-services",
      title: "Illustration Services",
      description: "Get custom illustrations.",
      icon: faPalette,
    },
    {
      path: "/infographic-design",
      title: "Infographic Design",
      description: "Create informative infographics.",
      icon: faChartBar,
    },
    {
      path: "/social-media-graphics",
      title: "Social Media Graphics",
      description: "Design graphics for social media.",
      icon: faImage,
    },
    {
      path: "/ebook-and-print-book-cover-design",
      title: "eBook and Print Book Cover Design",
      description: "Design book covers.",
      icon: faBook,
    },
    {
      path: "/t-shirt-and-merchandise-design",
      title: "T-shirt and Merchandise Design",
      description: "Design for apparel and merchandise.",
      icon: faTshirt,
    },
    {
      path: "/signage-and-billboard-design",
      title: "Signage and Billboard Design",
      description: "Create signage and billboards.",
      icon: faMapSigns,
    },
    {
      path: "/business-card-and-stationery-design",
      title: "Business Card and Stationery Design",
      description: "Design business cards and stationery.",
      icon: faIdCard,
    },
    {
      path: "/rendering-and-visualization",
      title: "Rendering and Visualization",
      description: "Create 3D renderings and visualizations.",
      icon: faShapes,
    },
    {
      path: "/motion-graphics-and-animation",
      title: "Motion Graphics and Animation",
      description: "Design motion graphics and animations.",
      icon: faFilm,
    },
    {
      path: "/photo-editing-and-retouching",
      title: "Photo Editing and Retouching",
      description: "Edit and retouch photos.",
      icon: faCamera,
    },
  ];

  const brandingLinks = [
    {
      path: "/brand-identity-design-exclusive",
      title: "Brand Identity Design Exclusive",
      description: "Exclusive brand identity design services.",
      icon: faGlobe,
    },
    {
      path: "/brand-logo-design",
      title: "Brand Logo Design",
      description: "Design a unique logo for your brand.",
      icon: faGlobe,
    },
    {
      path: "/brand-guidelines",
      title: "Brand Guidelines",
      description: "Create brand guidelines for consistency.",
      icon: faFileSignature,
    },
    {
      path: "/brand-positioning",
      title: "Brand Positioning",
      description: "Strategically position your brand.",
      icon: faMapMarker,
    },
    {
      path: "/brand-storytelling",
      title: "Brand Storytelling",
      description: "Craft compelling brand stories.",
      icon: faBookOpen,
    },
    {
      path: "/brand-naming",
      title: "Brand Naming",
      description: "Find the perfect name for your brand.",
      icon: faSignature,
    },
    {
      path: "/visual-identity-design",
      title: "Visual Identity Design",
      description: "Design a strong visual identity.",
      icon: faPalette,
    },
    {
      path: "/brand-messaging",
      title: "Brand Messaging",
      description: "Create effective brand messaging.",
      icon: faCommentAlt,
    },
    {
      path: "/brand-experience-design",
      title: "Brand Experience Design",
      description: "Enhance the brand experience.",
      icon: faHandHoldingHeart,
    },
    {
      path: "/brand-awareness-campaigns",
      title: "Brand Awareness Campaigns",
      description: "Run brand awareness campaigns.",
      icon: faBullhorn,
    },
    {
      path: "/rebranding-services",
      title: "Rebranding Services",
      description: "Rebrand your business effectively.",
      icon: faSyncAlt,
    },
    {
      path: "/brand-research-and-analysis",
      title: "Brand Research and Analysis",
      description: "Conduct brand research and analysis.",
      icon: faChartPie,
    },
    {
      path: "/brand-tracking-and-performance-evaluation",
      title: "Brand Tracking and Performance Evaluation",
      description: "Track and evaluate brand performance.",
      icon: faChartLine,
    },
  ];

  const advertisingLinks = [
    {
      path: "/display-advertising",
      title: "Display Advertising",
      description: "Effective display advertising solutions.",
      icon: faDesktop,
    },
    {
      path: "/video-advertising",
      title: "Video Advertising",
      description: "Engage with video advertising campaigns.",
      icon: faVideo,
    },
    {
      path: "/native-advertising",
      title: "Native Advertising",
      description: "Discover native advertising strategies.",
      icon: faGlobe,
    },
    {
      path: "/programmatic-advertising",
      title: "Programmatic Advertising",
      description: "Efficient programmatic advertising.",
      icon: faCogs,
    },
    {
      path: "/outdoor-advertising",
      title: "Outdoor Advertising",
      description: "Outdoor advertising solutions.",
      icon: faTree,
    },
    {
      path: "/print-advertising",
      title: "Print Advertising",
      description: "Effective print advertising services.",
      icon: faFileAlt,
    },
    {
      path: "/radio-advertising",
      title: "Radio Advertising",
      description: "Reach audiences through radio ads.",
      icon: faMicrophone,
    },
    {
      path: "/tv-advertising",
      title: "TV Advertising",
      description: "Impactful TV advertising campaigns.",
      icon: faTv,
    },
    {
      path: "/ingame-advertising",
      title: "In-Game Advertising",
      description: "Advertise within video games.",
      icon: faGamepad,
    },
    {
      path: "/theater-advertising",
      title: "Theater Advertising",
      description: "Promote in theaters and cinemas.",
      icon: faFilm,
    },
  ];

  const mobileappLinks = [
    {
      path: "/mobile-app-design",
      title: "Mobile App Design",
      description: "Creative and user-friendly app design.",
      icon: faPalette,
    },
    {
      path: "/ios-application-development",
      title: "iOS App Development",
      description: "Developing apps for iOS devices.",
      icon: faGlobe,
    },
    {
      path: "/android-app-development",
      title: "Android App Development",
      description: "Building apps for Android platforms.",
      icon: faGlobe,
    },
    {
      path: "/cross-platform-app-development",
      title: "Cross-Platform App Development",
      description: "Create apps compatible with multiple platforms.",
      icon: faGlobe,
    },
    {
      path: "/app-prototyping",
      title: "App Prototyping",
      description: "Prototyping app concepts for validation.",
      icon: faDraftingCompass,
    },
    {
      path: "/app-testing-and-quality-assurance",
      title: "App Testing and Quality Assurance",
      description: "Ensure app quality with rigorous testing.",
      icon: faCheckCircle,
    },
    {
      path: "/app-maintenance-and-support",
      title: "App Maintenance and Support",
      description: "Ongoing maintenance and support services.",
      icon: faWrench,
    },
    {
      path: "/app-security",
      title: "App Security",
      description: "Enhance app security and data protection.",
      icon: faShieldAlt,
    },
    {
      path: "/app-monetization-strategy",
      title: "App Monetization Strategy",
      description: "Strategies for app revenue generation.",
      icon: faDollarSign,
    },
    {
      path: "/app-store-optimization",
      title: "App Store Optimization",
      description: "Optimize apps for better visibility in stores.",
      icon: faSearch,
    },
    {
      path: "/ecommerce-app-development",
      title: "E-commerce App Development",
      description: "Developing apps for e-commerce businesses.",
      icon: faShoppingBag,
    },
  ];

  const moreLinks = [
    {
      path: "/services",
      title: "Services",
      description: "Creative and user-friendly app design.",
      icon: faTools,
    },
    {
      path: "/contactus/calculate",
      title: "Calculate",
      description: "Creative and user-friendly app design.",
      icon: faCalculator ,
    },
    {
      path: "/contactus/getquotation",
      title: "Get Quotation",
      description: "Creative and user-friendly app design.",
      icon: faFileInvoice
    },
    {
      path: "/blogs",
      title: "Blogs",
      description: "Creative and user-friendly app design.",
      icon: faBlog,
    },
    {
      path: "/aboutus",
      title: "About us",
      description: "Developing apps for iOS devices.",
      icon: faInfoCircle,
    },
    {
      path: "/Careers",
      title: "Careers",
      description: "Looking for a Job?",
      icon: faBriefcase
    },
    {
      path: "/contactus",
      title: "Contact",
      description: "Building apps for Android platforms.",
      icon: faPhone,
    },
    {
      path: "auth/login",
      title: "Login/Signup",
      description: "If your a customer or exisitng user please login.",
      icon: faBlog,
    },
  ];

  const mobilemenu = [
    {
      path: "/services",
      title: "Services",
      icon: faBuilding,
    },
    {
      path: "/services/web-development-company",
      title: "Web Development",
      icon: faLaptop,
    },
    {
      path: "/services/mobile-app-development-company",
      title: "Mobile App Development",
      icon: faMobile,
    },
    {
      path: "/services/multimedia-company",
      title: "MultiMedia",
      icon: faPalette,
    },
    {
      path: "/services/digital-marketing-company",
      title: "Digital Marketing",
      icon: faBullhorn,
    },
    {
      path: "/services/branding-comapny",
      title: "Branding",
      icon: faHandHoldingUsd,
    },
    {
      path: "/services/advertising-company",
      title: "Advertising",
      icon: faAd,
    },
    {
      path: "/blogs",
      title: "Blogs",
      icon: faBlog,
    },
    {
      path: "/aboutus",
      title: "About us",
      icon: faInfoCircle,
    },
    {
      path: "/contactus",
      title: "Contact",
      icon: faPhone,
    },
  ];

  return (
    <section className="sticky w-full top-0 z-50 bg-white/70 drop-shadow-lg ">
     {/* <div className="flex p-2 justify-between bg-black text-white text-[12px]">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="mr-1 text-[10px]" />
          mail@cyberspacedigital.in
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="mr-1 text-[10px]" />
          +918143407758
        </div>
      </div>*/}

      <div className=" sm:px-2 w-full h-17 flex justify-between items-center text-black">
        <Link href="/">
          <Image
            className="pl-2 h-auto w-36 lg:w-44"
            src={NavbarLogo}
            alt="csd_logo"
            width="52"
            height="auto"
          />
        </Link>
        <div className=" justify-end ">
          <ul className="flex items-center">
            {/* Web Development */}
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => handleMouseEnter("webDevelopment")}
              onMouseLeave={() => handleMouseLeave("webDevelopment")}
            >
              <div className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md px-4 py-2 text-[12px] text-black hover:bg-yellow-500 cursor-pointer">
                <div className="flex items-center gap-x-1">
                  <Link
                    className="text-[12px]"
                    href="/services/web-development-company"
                  >
                    <SiWebmoney className="text-[24px] mx-auto mb-1" />
                    Web Development
                  </Link>
                </div>
              </div>

              {openMenus.webDevelopment && (
                <div className="origin-top-right fixed right-0 mt-2 w-screen rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 z-50">
                  <div className="flex">
                    <div className="w-1/3 p-4">
                      {webDevelopmentLinks.slice(0, 2).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/3 p-4">
                      {webDevelopmentLinks.slice(2, 4).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/3 p-4">
                      <Image
                        className="w-[30rem] h-[10rem] object-contain"
                        src={NavImages.link1}
                        alt="Web Development"
                      />
                      <Link href="/services">
                        <h2 className="text-blue-600 hover:text-blue-900 cursor-pointer pt-1 text-[10px]">
                          Services ➤
                        </h2>
                      </Link>
                      <p className="text-[10px] text-gray-700">
                        Know all the services we provide.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/*Mobileapp */}
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => handleMouseEnter("mobileApp")}
              onMouseLeave={() => handleMouseLeave("mobileApp")}
            >
              <div className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md px-4 py-2 text-[12px] text-black hover:bg-yellow-500 cursor-pointer">
                <div className="flex items-center gap-x-1">
                  <Link
                    className="text-[12px]"
                    href="/services/mobile-app-development-company"
                  >
                    <HiDevicePhoneMobile className="text-[24px] mx-auto mb-1" />
                    Mobileapp
                  </Link>
                </div>
              </div>

              {openMenus.mobileApp && (
                <div className="origin-top-right fixed right-0 mt-2 w-screen rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 z-50">
                  <div className="flex">
                    <div className="w-1/4 p-4">
                      {mobileappLinks.slice(0, 5).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {mobileappLinks.slice(5, 10).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {mobileappLinks.slice(10, 15).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      <Image
                        className="w-[30rem] h-[15rem] object-contain"
                        src={NavImages.link5}
                        alt="Mobile App Development"
                      />
                      <Link href="/services">
                        <h2 className="text-blue-600 hover:text-blue-900 cursor-pointer pt-1 text-[10px]">
                          Services ➤
                        </h2>
                      </Link>
                      <p className="text-[10px] text-gray-700">
                        Know all the services we provide.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Digital Marketing */}
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => handleMouseEnter("digitalMarketing")}
              onMouseLeave={() => handleMouseLeave("digitalMarketing")}
            >
              <div className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md px-4 py-2 text-[12px] text-black hover:bg-yellow-500 cursor-pointer">
                <div className="flex items-center gap-x-1">
                  <Link
                    className="text-[12px]"
                    href="/services/digital-marketing-company"
                  >
                    {" "}
                    <TbSocial className="text-[24px] mx-auto mb-1" />
                    Digital Marketing
                  </Link>
                </div>
              </div>

              {openMenus.digitalMarketing && (
                <div className="origin-top-right fixed right-0 mt-2 w-screen rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 z-50">
                  <div className="flex">
                    <div className="w-1/4 p-4">
                      {digitalMarketingLinks.slice(0, 5).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {digitalMarketingLinks.slice(5, 10).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {digitalMarketingLinks.slice(10, 15).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      <Image
                        className="w-[30rem] h-[15rem] object-contain"
                        src={NavImages.link2}
                        alt="Digital Marketing Services"
                      />
                      <Link href="/services">
                        <h2 className="text-blue-600 hover:text-blue-900 cursor-pointer pt-1 text-[10px]">
                          Services ➤
                        </h2>
                      </Link>
                      <p className="text-[10px] text-gray-700">
                        Know all the services we provide.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/*Multimedia */}
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => handleMouseEnter("multimedia")}
              onMouseLeave={() => handleMouseLeave("multimedia")}
            >
              <div className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md px-4 py-2 text-[12px] text-black hover:bg-yellow-500 cursor-pointer">
                <div className="flex items-center gap-x-1">
                  <Link
                    className="text-[12px]"
                    href="/services/multimedia-company"
                  >
                    <HiPaintBrush className="text-[24px] mx-auto mb-1" />
                    Multimedia
                  </Link>
                </div>
              </div>

              {openMenus.multimedia && (
                <div className="origin-top-right fixed right-0 mt-2 w-screen rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 z-50">
                  <div className="flex">
                    <div className="w-1/5 p-4">
                      {multimediaLinks.slice(0, 5).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/5 p-4">
                      {multimediaLinks.slice(5, 10).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/5 p-4">
                      {multimediaLinks.slice(10, 15).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/5 p-4">
                      {multimediaLinks.slice(15, 20).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/5 p-4">
                      <Image
                        className="w-[30rem] h-[15rem] object-contain"
                        src={NavImages.link6}
                        alt="Multimedia Services"
                      />
                      <Link href="/services">
                        <h2 className="text-blue-600 hover:text-blue-900 cursor-pointer pt-1 text-[10px]">
                          Services ➤
                        </h2>
                      </Link>
                      <p className="text-[10px] text-gray-700">
                        Know all the services we provide.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Branding*/}
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => handleMouseEnter("branding")}
              onMouseLeave={() => handleMouseLeave("branding")}
            >
              <div className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md px-4 py-2 text-[12px] text-black hover:bg-yellow-500 cursor-pointer">
                <div className="flex items-center gap-x-1">
                  <Link
                    className="text-[12px]"
                    href="/services/branding-comapny"
                  >
                    <PiPaintBucketFill className="text-[24px] mx-auto mb-1" />
                    Branding
                  </Link>
                </div>
              </div>

              {openMenus.branding && (
                <div className="origin-top-right fixed right-0 mt-2 w-screen rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 z-50">
                  <div className="flex">
                    <div className="w-1/4 p-4">
                      {brandingLinks.slice(0, 5).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {brandingLinks.slice(5, 10).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {brandingLinks.slice(10, 15).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      <Image
                        className="w-[30rem] h-[15rem] object-contain"
                        src={NavImages.link3}
                        alt="Branding Services"
                      />
                      <Link href="/services">
                        <h2 className="text-blue-600 hover:text-blue-900 cursor-pointer pt-1 text-[10px]">
                          Services ➤
                        </h2>
                      </Link>
                      <p className="text-[10px] text-gray-700">
                        Know all the services we provide.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/*Advertising */}
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => handleMouseEnter("advertising")}
              onMouseLeave={() => handleMouseLeave("advertising")}
            >
              <div className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md px-4 py-2 text-[12px] text-black hover:bg-yellow-500 cursor-pointer">
                <div className="flex items-center gap-x-1">
                  <Link
                    className="text-[12px]"
                    href="/services/advertising-company"
                  >
                    <MdOutlineAdsClick className="text-[24px] mx-auto mb-1" />
                    Advertising
                  </Link>
                </div>
              </div>

              {openMenus.advertising && (
                <div className="origin-top-right fixed right-0 mt-2 w-screen rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 z-50">
                  <div className="flex">
                    <div className="w-1/4 p-4">
                      {advertisingLinks.slice(0, 5).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {advertisingLinks.slice(5, 10).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {advertisingLinks.slice(10, 15).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      <Image
                        className="w-[30rem] h-[15rem] object-contain"
                        src={NavImages.link4}
                        alt="Advertising Services"
                      />
                      <Link href="/services">
                        <h2 className="text-blue-600 hover:text-blue-900 cursor-pointer pt-1 text-[10px]">
                          Services ➤
                        </h2>
                      </Link>
                      <p className="text-[10px] text-gray-700">
                        Know all the services we provide.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/*handburger menu */}
            <li
              className="p-4 hidden lg:block relative"
              onMouseEnter={() => handleMouseEnter("more")}
              onMouseLeave={() => handleMouseLeave("more")}
            >
              <div className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md px-4 py-2 text-[14px] text-black hover:bg-yellow-500 cursor-pointer">
                <TiThMenu className="text-[24px] mx-auto mb-1" />
              </div>

              {openMenus.more && (
                <div className="origin-top-right fixed right-0 mt-2 w-screen rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 z-50">
                  <div className="flex">
                    <div className="w-1/3 p-4">
                      <Image
                        className="w-[30rem] h-[15rem] object-contain"
                        src={NavImages.link4}
                        alt="Advertising Services"
                      />
                      <Link href="/services">
                        <h2 className="text-blue-600 hover:text-blue-900 cursor-pointer pt-1 text-[10px]">
                          Services ➤
                        </h2>
                      </Link>
                      <p className="text-[10px] text-gray-700">
                        Know all the services we provide.
                      </p>
                    </div>

                    <div className="w-1/3 p-4">
                     
                    </div>

                    <div className="w-1/3 p-4">
                      {moreLinks.slice(0, 3).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="w-1/3 p-4">
                      {moreLinks.slice(3, 6).map((link) => (
                        <Link href={link.path} key={link.path}>
                          <div className="block px-4 py-2 text-[12px] text-black hover:bg-yellow-500 hover:text-white">
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                className="p-2 fa-2xl"
                                icon={link.icon}
                              />
                              <div>
                                {link.title}
                                <p className="text-[10px] text-gray-700">
                                  {link.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/*mobile menu */}
            <li className="p-2 lg:hidden z-50 relative">
              <button
                className="text-3xl"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                  setOpenMenus((prev) => ({
                    ...prev,
                    mobileMenu: !prev.mobileMenu,
                  })); // Toggle mobileMenu state
                }}
              >
               <TiThMenu className="text-[24px] mx-auto mb-1" />
             
              </button>
              {isOpen && ( // Use isOpen to conditionally render the mobile menu
                <div className="origin-top-right absolute right-0 mt-2 w-48 h-auto sm:rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 z-50">
                  {mobilemenu.map((link) => (
                    <Link
                      href={link.path}
                      key={link.path}
                      onClick={() => {
                        setIsOpen(false); // Close the menu when a link is clicked
                        setOpenMenus((prev) => ({
                          ...prev,
                          mobileMenu: false,
                        })); // Ensure mobileMenu state is also closed
                      }}
                    >
                      <div className="block px-4 py-2 text-[12px] text-black flex items-center hover:bg-yellow-500 hover:text-white">
                        <FontAwesomeIcon icon={link.icon} className="mr-2" />
                        {link.title}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
