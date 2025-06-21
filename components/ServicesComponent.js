"use client";

import Image from "next/image";
import { useState } from "react";

import {
  DigitalmarketingIcon,
  Advertisingicon,
  Graphicdesignicon,
  Webdevelopmenticon,
  Mobileappicon,
  Brandingicon,
} from "../public/icons";

import {
  DigitalMarketingImage,
  AdvertisingImage,
  BrandingImage,
  GraphicDesignImage,
  MobileAppDevImage,
  WebDevelopmentImage,
} from "../public/images";

const icons = {
  "Digital Marketing": DigitalmarketingIcon,
  "Web Development": Webdevelopmenticon,
  "Mobile App Development": Mobileappicon,
  Branding: Brandingicon,
  "Graphic Design": Graphicdesignicon,
  Advertising: Advertisingicon,
};

const ServicesComponent = () => {
  const [selected, setSelected] = useState("Digital Marketing");
  const [fade, setFade] = useState(false);

  const handleButtonClick = (category) => {
    setFade(true);
    setTimeout(() => {
      setSelected(category);
      setFade(false);
    }, 500);
  };

  const images = {
    "Digital Marketing": DigitalMarketingImage,
    "Web Development": WebDevelopmentImage,
    "Mobile App Development": MobileAppDevImage,
    Branding: BrandingImage,
    "Graphic Design": GraphicDesignImage,
    Advertising: AdvertisingImage,
  };

  const descriptions = {
    "Digital Marketing":
      "Digital marketing involves promoting products or services through digital channels.",
    "Web Development":
      "Web development is the work involved in developing a website for the Internet.",
    "Mobile App Development":
      "Mobile app development is the process of creating software applications for mobile devices.",
    Branding:
      "Branding is the process of creating a unique name and image for a product in the consumer's mind.",
    "Graphic Design":
      "Graphic design is the art of visual communication that combines images and text.",
    Advertising:
      "Advertising is the activity of producing advertisements for commercial products or services.",
  };

  return (
    <div className=" overflow-hidden py-5 pt-20">
      <p className="text-[24px] text-center sm:text-[34px] font-bold leading-8 text-black cursor-default">
        Our Areas of Specialization
      </p>
      <div className=" w-screen h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 my-2" />
      <p className="text-sm text-black text-center cursor-default">
        We build your ideas into reality.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 h-full">
        {/* Left Image Section */}
        <div className="col-span-1 md:col-span-6 flex justify-center items-center relative p-4">
          <Image
            src={images[selected]}
            alt={selected}
            className={`max-w-full max-h-full relative z-10 transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            } animate-float`}
            width={500}
            height={500}
          />
        </div>

        {/* Middle Text Section */}
        <div className="col-span-1 md:col-span-4 flex flex-col justify-center items-center px-4 text-black text-center">
          <h1 className="text-xl md:text-2xl font-bold">{selected}</h1>
          <p className="text-sm md:text-[14px]">{descriptions[selected]}</p>
        </div>

        {/* Right Button Section */}
        <div className="col-span-1 md:col-span-2 p-2 sm:p-4">
          <div className="flex md:flex-col flex-row items-center md:items-start md:space-x-0 md:space-y-4 overflow-x-auto w-full">
            {Object.keys(images).map((category) => (
              <button
                key={category}
                onClick={() => handleButtonClick(category)}
                className="p-2 text-black rounded w-36 md:w-40 text-[12px] flex flex-col items-center flex-shrink-0"
              >
                <Image
                  src={icons[category]}
                  alt={category}
                  className="w-16 h-auto mb-1"
                  width={50}
                  height={50}
                />
                <span className="text-center">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
