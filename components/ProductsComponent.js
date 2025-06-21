"use client";

import Image from "next/image";
import { useState } from "react";
import { FcIdea } from "react-icons/fc";

import {
  DigitalMarketingImage,
  AdvertisingImage,
  BrandingImage,
  GraphicDesignImage,
  MobileAppDevImage,
  WebDevelopmentImage,
} from "../public/images";

const ProductsComponent = () => {
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
    "CRM Geni": DigitalMarketingImage,
    "The Gold Jar": WebDevelopmentImage,
    Brandify: MobileAppDevImage,
    "Smart invite": BrandingImage,
    "Magic QR": GraphicDesignImage,
  };

  const descriptions = {
    "CRM Geni":
      "Digital marketing involves promoting products or services through digital channels.",
    "The Gold Jar":
      "Web development is the work involved in developing a website for the Internet.",
    Brandify:
      "Mobile app development is the process of creating software applications for mobile devices.",
    "Smart invite":
      "Branding is the process of creating a unique name and image for a product in the consumer's mind.",
    "Magic QR":
      "Graphic design is the art of visual communication that combines images and text.",
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Cover Image */}
      <Image
        src={images[selected]}
        alt={selected}
        fill
        className={`object-cover w-full h-full absolute top-0 left-0 z-0 transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        priority
      />

      {/* Overlay content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 h-full">
        {/* Middle Text Section */}
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center items-center px-4 text-white text-center">
          <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
            {selected}
          </h1>
          <p className="text-md md:text-lg max-w-lg drop-shadow-md">
            {descriptions[selected]}
          </p>
        </div>

        {/* Right Button Section */}
        <div className="col-span-1 md:col-span-6 p-2 sm:p-4 flex flex-col justify-center items-end">
          <div className="flex md:flex-col flex-row items-center md:items-end md:space-y-4 overflow-x-auto w-full md:w-auto ml-auto">
            {Object.keys(images).map((category) => (
              <button
                key={category}
                onClick={() => handleButtonClick(category)}
                className="p-2 text-black rounded w-36 md:w-40 text-[12px] flex flex-col items-center flex-shrink-0"
              >
                <span className="font-bold text-center flex space-x-2 text-[16px]">
                  <FcIdea />
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
