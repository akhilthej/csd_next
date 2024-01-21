import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import CsdLogo from '../components/Navbar/csdv2Logo.svg'
import Image from "next/image";

const Animate = () => {

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".box", {
      scrollTrigger: {
        trigger: '.box',
        start: 'top center',
        toggleActions: "restart pause reverse pause"
      },
      x: 100,
      duration: 5,
    });
  }, []);

  return (
    <div className='text-center '>
     <Image
            src={CsdLogo}
            alt="csdlogo"
            width={150}
            height={150}
            className="box "
          />
          </div>
  );
};

export default Animate;
