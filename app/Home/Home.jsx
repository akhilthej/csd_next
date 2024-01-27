"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import "../../components/Animations/Title.css";

import HomeTitle from "./HomeTitle";
import Home_Section1 from "./Home_Section1";
import Home_Section2 from "./Home_Section2";
import Home_Section3 from "./Home_Section3";
import Home_Section4 from "./Home_Section4";
import Home_Section5 from "./Home_Section5";
import Home_Section6 from "./Home_Section6";
import Home_Section7 from "./Home_Section7";
import Home_Section8 from "./Home_Section8";

function Home() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-800vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 1,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className=""
          style={{
            height: "100vh",
            width: "900vw",
            display: "flex",
            flexDirection: "row",
            position: "relative",
          }}
        >
          <section className="h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section title*/}
              <HomeTitle />
            </div>
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 1*/}
              <Home_Section1 />
            </div>
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 2*/}
              <Home_Section2 />
            </div>
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 3*/}
              <Home_Section3 />
            </div>
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 4*/}
              <Home_Section4 />
            </div>
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 5*/}
              <Home_Section5 />
            </div>
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 6*/}
              <Home_Section6 />
            </div>
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 7*/}
              <Home_Section7 />
            </div>
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 8*/}
              <Home_Section8 />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
