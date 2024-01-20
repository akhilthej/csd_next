"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Link from "next/link";


function ScrollSection() {
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
        translateX: "-600vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className=""
          style={{
            height: "100vh",
            width: "700vw",
            display: "flex",
            flexDirection: "row",
            position: "relative",
          }}>
          <div className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 1*/}
              {/*Services*/}
              <div className=" min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">

                {/* First Row */}
                <div className="text-center ">
                  <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
                    Our Services
                  </h2>
                  <p className=" text-sm opacity-50">
                    We provide the best.
                  </p>
                </div>

                <div className="flex flex-wrap">
                  {/* First Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 1 */}

                      
                      <div className="p-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Business Websites
                          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          Description
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 2 */}
                      <div className="p-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          E-commerce
                          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          Description
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Third Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column ">
                      {/* Content for column 3 */}
                      <div className="p-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Web Revamp
                          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          Description
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Fourth Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 4 */}
                      <div className="p-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          CRM/ERP Panels
                          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          Description
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* 5th Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column ">
                      {/* Content for column 3 */}
                      <div className="p-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Web Revamp
                          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          Description
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* 6th Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 4 */}
                      <div className="p-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          CRM/ERP Panels
                          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          Description
                        </a>
                      </div>
                    </div>
                  </div>

                  
                </div>

                
              </div>
            </div>
          </div> 

          <div className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 2*/}
              {/*Web Development*/}
              <div className="min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
                {/* First Row */}
                <div className="text-center ">
                  <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
                    Web Development
                  </h2>
                  <p className=" text-sm opacity-50">
                    Every business requires a unique website to effectively
                    reach its customers or clients. At Cyber Space Digital,
                    we're here to help you discover the best choices tailored to
                    your needs.
                  </p>
                  Build your business global today
                </div>

                {/*Count*/}
                <div className="flex flex-wrap items-center">
                  <div className="w-auto sm:mr-20">
                    <div className="column ">
                      {/* First Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">Websites Build</p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          50+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-auto sm:mr-20 ">
                    <div className="column">
                      {/* Second Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">
                          Advertisements Run
                        </p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          1500+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-auto sm:mr-20">
                    <div className="column ">
                      {/* Third Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">
                          Digital Marketing Clients
                        </p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          16
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-2 mt-2 bg-white text-black text-sm rounded-sm">
                  <Link href="/services/webdevelopment">
                    {" "}
                    <button>Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 2*/}
              {/*Web Development*/}
              <div className="min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
                {/* First Row */}
                <div className="text-center ">
                  <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
                    Digital Marketing
                  </h2>
                  <p className=" text-sm opacity-50">
                    Every business requires a unique website to effectively
                    reach its customers or clients. At Cyber Space Digital,
                    we're here to help you discover the best choices tailored to
                    your needs.
                  </p>
                  Build your business global today
                </div>

                {/*Count*/}
                <div className="flex flex-wrap items-center">
                  <div className="w-auto sm:mr-20">
                    <div className="column ">
                      {/* First Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">Websites Build</p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          50+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-auto sm:mr-20 ">
                    <div className="column">
                      {/* Second Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">
                          Advertisements Run
                        </p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          1500+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-auto sm:mr-20">
                    <div className="column ">
                      {/* Third Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">
                          Digital Marketing Clients
                        </p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          16
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-2 mt-2 bg-white text-black text-sm rounded-sm">
                  <Link href="/services/webdevelopment">
                    {" "}
                    <button>Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 2*/}
              {/*Web Development*/}
              <div className="min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
                {/* First Row */}
                <div className="text-center ">
                  <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
                    Multi Media
                  </h2>
                  <p className=" text-sm opacity-50">
                    Every business requires a unique website to effectively
                    reach its customers or clients. At Cyber Space Digital,
                    we're here to help you discover the best choices tailored to
                    your needs.
                  </p>
                  Build your business global today
                </div>

                {/*Count*/}
                <div className="flex flex-wrap items-center">
                  <div className="w-auto sm:mr-20">
                    <div className="column ">
                      {/* First Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">Websites Build</p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          50+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-auto sm:mr-20 ">
                    <div className="column">
                      {/* Second Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">
                          Advertisements Run
                        </p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          1500+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-auto sm:mr-20">
                    <div className="column ">
                      {/* Third Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">
                          Digital Marketing Clients
                        </p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          16
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-2 mt-2 bg-white text-black text-sm rounded-sm">
                  <Link href="/services/webdevelopment">
                    {" "}
                    <button>Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 2*/}
              {/*Web Development*/}
              <div className="min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
                {/* First Row */}
                <div className="text-center ">
                  <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
                    Branding
                  </h2>
                  <p className=" text-sm opacity-50">
                    Every business requires a unique website to effectively
                    reach its customers or clients. At Cyber Space Digital,
                    we're here to help you discover the best choices tailored to
                    your needs.
                  </p>
                  Build your business global today
                </div>

                {/*Count*/}
                <div className="flex flex-wrap items-center">
                  <div className="w-auto sm:mr-20">
                    <div className="column ">
                      {/* First Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">Websites Build</p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          50+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-auto sm:mr-20 ">
                    <div className="column">
                      {/* Second Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">
                          Advertisements Run
                        </p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          1500+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-auto sm:mr-20">
                    <div className="column ">
                      {/* Third Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">
                          Digital Marketing Clients
                        </p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          16
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-2 mt-2 bg-white text-black text-sm rounded-sm">
                  <Link href="/services/webdevelopment">
                    {" "}
                    <button>Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 2*/}
              {/*Web Development*/}
              <div className="min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
                {/* First Row */}
                <div className="text-center ">
                  <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
                    Advertising
                  </h2>
                  <p className=" text-sm opacity-50">
                    Every business requires a unique website to effectively
                    reach its customers or clients. At Cyber Space Digital,
                    we're here to help you discover the best choices tailored to
                    your needs.
                  </p>
                  Build your business global today
                </div>

                {/*Count*/}
                <div className="flex flex-wrap items-center">
                  <div className="w-auto sm:mr-20">
                    <div className="column ">
                      {/* First Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">Websites Build</p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          50+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-auto sm:mr-20 ">
                    <div className="column">
                      {/* Second Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">
                          Advertisements Run
                        </p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          1500+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-auto sm:mr-20">
                    <div className="column ">
                      {/* Third Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">
                          Digital Marketing Clients
                        </p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          16
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-2 mt-2 bg-white text-black text-sm rounded-sm">
                  <Link href="/services/webdevelopment">
                    {" "}
                    <button>Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 2*/}
              {/*Web Development*/}
              <div className="min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
                {/* First Row */}
                <div className="text-center ">
                  <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
                    Mobile App's
                  </h2>
                  <p className=" text-sm opacity-50">
                    Every business requires a unique website to effectively
                    reach its customers or clients. At Cyber Space Digital,
                    we're here to help you discover the best choices tailored to
                    your needs.
                  </p>
                  Build your business global today
                </div>

                {/*Count*/}
                <div className="flex flex-wrap items-center">
                  <div className="w-auto sm:mr-20">
                    <div className="column ">
                      {/* First Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">Websites Build</p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          50+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-auto sm:mr-20 ">
                    <div className="column">
                      {/* Second Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">
                          Advertisements Run
                        </p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          1500+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-auto sm:mr-20">
                    <div className="column ">
                      {/* Third Column */}
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">
                          Digital Marketing Clients
                        </p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          16
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-2 mt-2 bg-white text-black text-sm rounded-sm">
                  <Link href="/services/webdevelopment">
                    {" "}
                    <button>Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
