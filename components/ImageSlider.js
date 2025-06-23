"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import {
  AdvertisingCoverHomeImage,
  BrandingCoverHomeImage,
  DigiatalMarketingCoverHomeImage,
  GraphicDesigningCoverHomeImage,
  WebDevelopmentCoverHomeImage,
} from "../public/images"; // Double-check this import path!

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: WebDevelopmentCoverHomeImage,
      title: "Web Development",
      description: "Create stunning websites, engage, grow online.",
      button1: {
        text: "Get Quotation",
        link: "/contactus",
      },
      button2: {
        text: "Contact us",
        link: "https://api.whatsapp.com/send?phone=918143407758&text=Hi,%20need%20Detials%20Regarding%20WebDevelopment",
      },
    },
    {
      url: DigiatalMarketingCoverHomeImage,
      title: "Digital Marketing",
      description: "Boost brands, reach audiences, measure results.",
      button1: {
        text: "Learn More",
        link: "/contactus",
      },
      button2: {
        text: "Contact Us",
        link: "https://api.whatsapp.com/send?phone=918143407758&text=Hi,%20need%20Detials%20Regarding%20DigitalMarketing",
      },
    },
    {
      url: GraphicDesigningCoverHomeImage,
      title: "Graphic Designing",
      description: "Design visuals, convey messages, inspire creativity.",
      button1: {
        text: "Explore",
        link: "/contactus",
      },
      button2: {
        text: "Contact Us",
        link: "https://api.whatsapp.com/send?phone=918143407758&text=Hi,%20need%20Detials%20Regarding%20GraphicDesigning",
      },
    },
    {
      url: BrandingCoverHomeImage,
      title: "Branding",
      description: "Craft identities, build trust, leave impressions.",
      button1: {
        text: "Learn More",
        link: "/contactus",
      },
      button2: {
        text: "Contact us",
        link: "https://api.whatsapp.com/send?phone=918143407758&text=Hi,%20need%20Detials%20Regarding%20Branding",
      },
    },
    {
      url: AdvertisingCoverHomeImage,
      title: "Advertising",
      description: "Promote products, captivate audiences, drive sales.",
      button1: {
        text: "Learn More",
        link: "/contactus",
      },
      button2: {
        text: "Contact us",
        link: "https://api.whatsapp.com/send?phone=918143407758&text=Hi,%20need%20Detials%20Regarding%20Advertising",
      },
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative mx-2 py-10 md:py-0">
  <div className="flex items-center justify-center h-52 md:h-72 lg:h-[70vh]">
    {images.map((image, index) => (
      <div
        key={index}
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0 rounded-lg" />
        {image.url && (
          <Image
            src={image.url}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
            fill
            priority
          />
        )}

        {/* 👉 Title & Buttons moved to bottom */}
        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-end px-4 pb-6 text-white">
          <h2 className="font-extrabold text-2xl md:text-5xl lg:text-6xl text-center">
            {image.title}
          </h2>
          <p className="text-xs sm:text-lg mt-2 text-center">{image.description}</p>
          <div className="mt-3">
            <a
              href={image.button1.link}
              className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-5 sm:px-12 py-2 font-medium text-white transition-colors mx-2"
            >
              {image.button1.text}
            </a>
            <a
              href={image.button2.link}
              className="text-xs sm:text-sm transform rounded bg-orange-500 border border-slate-200 px-5 sm:px-12 py-2 font-medium text-white transition-colors mx-2"
            >
              {image.button2.text}
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default ImageSlider;
