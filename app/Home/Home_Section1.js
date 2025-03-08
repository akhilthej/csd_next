"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { DigitalmarketingIcon, Advertisingicon, Graphicdesignicon, Webdevelopmenticon, Mobileappicon, Brandingicon } from "../../public/icons";

// Placeholder icons (replace with actual image paths)
const icons = {
  "Digital Marketing": DigitalmarketingIcon,
  "Web Development": Webdevelopmenticon,
  "Mobile App Development": Mobileappicon,
  Branding: Brandingicon,
  "Graphic Design": Graphicdesignicon,
  Advertising: Advertisingicon,
};

const Home = () => {
  const [selected, setSelected] = useState("Digital Marketing");
  const [fade, setFade] = useState(false); // State to control fade effect

  const handleButtonClick = (category) => {
    setFade(true); // Start fade out
    setTimeout(() => {
      setSelected(category);
      setFade(false); // Start fade in
    }, 500); // Duration of fade out
  };

  const images = {
    "Digital Marketing": DigitalmarketingIcon,
    "Web Development": DigitalmarketingIcon,
    "Mobile App Development": DigitalmarketingIcon,
    Branding: DigitalmarketingIcon,
    "Graphic Design": DigitalmarketingIcon,
    Advertising: DigitalmarketingIcon,
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
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col md:flex-row h-screen">
        <div
          className="flex-1 flex justify-center items-center relative"
          style={{
            backgroundImage: `url(${DigitalmarketingIcon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src={images[selected]}
            alt={selected}
            className={`max-w-full max-h-full relative z-10 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center px-4 text-white">
        
          <h1 className="text-[24px] md:text-2xl font-bold">{selected}</h1>
          <p className="text-[12px] text-center mb-2">{descriptions[selected]}</p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="flex flex-wrap justify-center">
            {Object.keys(images).map((category) => (
              <button
                key={category}
                onClick={() => handleButtonClick(category)}
                className="m-1 p-2 text-sm text-white rounded w-24 md:w-40 text-[12px] flex flex-col items-center"
              >
                <Image
                  src={icons[category]}
                  alt={category}
                  className="w-24 h-auto mb-1"
                  width={50}
                  height={50}
                />
                <span>{category}</span> {/* Category Name */}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;