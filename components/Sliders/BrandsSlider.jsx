import React from 'react';
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
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToScroll: 1,
    slidesToShow: window.innerWidth < 768 ? 3 : 6,
  };

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
