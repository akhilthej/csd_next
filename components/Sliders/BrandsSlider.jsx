'use client'
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';

import {
  DFC,
  Archivitus,
  iliha,
  labelanuneni,
  latonskincare,
  Prasidda_logo,
  ragingtuskers,
  serpsit,
  ThreeFatLogo,
  UJB,
} from "@/public/Client_Logos/ClientsData";

const BrandCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(6);

  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToScroll: 1,
    slidesToShow: slidesToShow,
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth < 768 ? 3 : 6);
    };

    // Initial update
    updateSlidesToShow();

    // Add event listener to update on window resize
    window.addEventListener('resize', updateSlidesToShow);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const brandImages = [
    { src: DFC },
    { src: Archivitus },
    { src: iliha },
    { src: labelanuneni },
    { src: latonskincare },
    { src: Prasidda_logo },
    { src: ragingtuskers },
    { src: serpsit },
    { src: ThreeFatLogo },
    { src: UJB },
    // Add more image URLs here
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <Slider {...settings}>
          {brandImages.map((image, index) => (
            <div key={index}>
              <Image
                src={image.src}
                alt={`Brand Logo ${index + 1}`}
                width={200} // Set the desired width
                height={80} // Set the desired height
                className="mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandCarousel;
