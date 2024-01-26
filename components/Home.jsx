"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Link from "next/link";
import BrandsSlider from "./Sliders/BrandsSlider";

import VideoBackground from "./videos/Background";
import "./Animations/title.css";

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
      {
        /* A return function for killing the animation on component unmount */
      }
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
              {/*Section 1*/}
              {/*Web Development*/}
              <section className="flex items-center justify-center min-h-screen">
                <VideoBackground />
                <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
                  <div className="animate-fade-in">
                    <null class="animate-fade-in-screen cursor-default text-sm sm:text-2xl font-bold leading-8  text-white">
                      DESIGN . DEVELOP & DEPLOY
                    </null>
                  </div>
                  <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

                  <h1 className="z-10 upanddown text-4xl md:text-9xl lg:text-8xl font-extrabold text-transparent duration-1000 bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight  cursor-default text-edge-outline animate-title font-display font-display sm:text-6xl whitespace-nowrap bg-clip-text ">
                    CYBER SPACE DIGITAL
                  </h1>
                  <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

                  <div className="animate-fade-in">
                    <null class="animate-fade-in-screen cursor-default text-sm  leading-8  text-white">
                      Take your brand online today for a global presence.
                    </null>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
                    {/* Item 1 */}
                    <a
                      href="/services/webdevelopment"
                      className=" animate-fade-in-services group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                      <h2 className=" mb-3 font-semibold text-sm">
                        Web <br /> Development{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </a>

                    {/* Item 2 */}
                    <Link
                      href="/services/digitalmarketing"
                      className="animate-fade-in-services2 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                      <h2 className="mb-3 font-semibold text-sm">
                        Digital <br /> Marketing{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    {/* Item 3 */}
                    <Link
                      href="/services/multimedia"
                      className="animate-fade-in-services3 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                      <h2 className="mb-3 font-semibold text-sm">
                        Multi
                        <br /> Media{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    {/* Item 4 */}
                    <Link
                      href="/services/branding"
                      className="animate-fade-in-services4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                      <h2 className="mb-3 font-semibold text-sm">
                        Branding{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    {/* Item 5 */}
                    <Link
                      href="/services/advertising"
                      className="animate-fade-in-services5 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                      <h2 className="mb-3 font-semibold text-sm">
                        Advertising{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    {/* Item 6 */}
                    <Link
                      href="/services/mobileappdevelopment"
                      className="animate-fade-in-services6 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                      <h2 className="mb-3 font-semibold text-sm">
                        Mobile app{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 1*/}
              {/*Services*/}
              <div className=" min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
                {/* First Row */}
                <div className="text-center ">
                  <h2 className=" cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
                    Our Clients
                  </h2>
                  <p className=" text-sm opacity-50">We provide the best.</p>
                </div>
                <BrandsSlider />
              </div>
            </div>
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 2*/}
              {/*Web Development*/}
              <div className="min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
                {/* First Row */}
                <div className="text-center ">
                  <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
                    Web Development
                  </h2>
                  <p className="text-sm opacity-50">
                    Every business requires a unique website to effectively
                    reach its customers or clients. At Cyber Space Digital, were
                    here to help you discover the best choices tailored to your
                    needs.
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
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
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
                    reach its customers or clients. At Cyber Space Digital, were
                    here to help you discover the best choices tailored to your
                    needs.
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
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
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
                    reach its customers or clients. At Cyber Space Digital, were
                    here to help you discover the best choices tailored to your
                    needs.
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
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
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
                    reach its customers or clients. At Cyber Space Digital, were
                    here to help you discover the best choices tailored to your
                    needs.
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
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
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
                    reach its customers or clients. At Cyber Space Digital, were
                    here to help you discover the best choices tailored to your
                    needs.
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
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 2*/}
              {/*Web Development*/}
              <div className="min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
                {/* First Row */}
                <div className="text-center ">
                  <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
                    Mobile Apps
                  </h2>
                  <p className=" text-sm opacity-50">
                    Every business requires a unique website to effectively
                    reach its customers or clients. At Cyber Space Digital, were
                    here to help you discover the best choices tailored to your
                    needs.
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
          </section>

          <section className=" h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 2*/}
              {/*Web Development*/}
              <div className="min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
                <div className="text-center mx-auto my-8">
                  <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
                    Need Help ?
                  </h2>
                  <p className="cursor-default text-sm font-medium text-white mt-5 mb-10">
                    Explore our comprehensive documentation for more information
                    on our services.
                  </p>
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <Link href="/contact">
                      <button className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
                        FAQ
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-white transition-colors hover:bg-slate-50 hover:text-black">
                        Contact us
                      </button>
                    </Link>
                  </div>
                </div>

                <section className="flex items-center justify-center py-20 px-10">
                  <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
                    {/* Item 1 */}
                    <a
                      href="/services/webdevelopment"
                      className="  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                      <h2 className=" mb-3 font-semibold text-sm">
                        Web <br /> Development{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </a>

                    {/* Item 2 */}
                    <Link
                      href="/services/digitalmarketing"
                      className=" group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                      <h2 className="mb-3 font-semibold text-sm">
                        Digital <br /> Marketing{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    {/* Item 3 */}
                    <Link
                      href="/services/multimedia"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                      <h2 className="mb-3 font-semibold text-sm">
                        Multi
                        <br /> Media{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    {/* Item 4 */}
                    <Link
                      href="/services/branding"
                      className=" group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                      <h2 className="mb-3 font-semibold text-sm">
                        Branding{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    {/* Item 5 */}
                    <Link
                      href="/services/advertising"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                      <h2 className="mb-3 font-semibold text-sm">
                        Advertising{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    {/* Item 6 */}
                    <Link
                      href="/services/mobileappdevelopment"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                      <h2 className="mb-3 font-semibold text-sm">
                        Mobile app{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
