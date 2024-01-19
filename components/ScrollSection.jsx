"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Link from "next/link";

import BusinessWebsiteCover from "@/public/ServicesCover/BusinessWebsiteCover.webp";
import CRMERPCover from "@/public/ServicesCover/CRMERPCover.webp";
import CustomWebsiteCover from "@/public/ServicesCover/CustomWebsiteCover.webp";
import EcommerceCoverImage from "@/public/ServicesCover/EcommerceCoverImage.webp";

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
          <div className="h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen min-w-full flex flex-col items-center">
              {/*Section 1*/}
              {/*Our Services*/}
              <div className="min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
                {/* First Row */}
                <div className="text-center ">
                  <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
                    Our Services
                  </h2>
                  <p className=" text-sm opacity-50">
                    Every business requires a unique website to effectively
                    reach its customers or clients. At Cyber Space Digital,
                    we're here to help you discover the best choices tailored to
                    your needs.
                  </p>
                </div>
                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                  <Link
                    href="/services/webdevelopment"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      Web Development{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      Find in-depth information about Next.js features and API.
                    </p>
                  </Link>

                  <Link
                    href="/services/digitalmarketing"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                  >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      Digital Marketing{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      Learn about Next.js in an interactive course
                      with&nbsp;quizzes!
                    </p>
                  </Link>

                  <Link
                    href="/services/multimedia"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      MultiMedia{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      Explore starter templates for Next.js.
                    </p>
                  </Link>

                  <Link
                    href="/services/branding"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      Branding{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      Instantly deploy your Next.js site to a shareable URL with
                      Vercel.
                    </p>
                  </Link>
                  <div></div>
                  <Link
                    href="/services/advertising"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      Advertising{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      Find in-depth information about Next.js features and API.
                    </p>
                  </Link>

                  <Link
                    href="/services/mobileappdevelopment"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      Mobile App Development{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      Find in-depth information about Next.js features and API.
                    </p>
                  </Link>
                  <div></div>
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
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">Brands Build</p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          9
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
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">
                          clients Recursion Rate
                        </p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          100%
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
                      <div className="flex flex-col items-center p-1">
                        <p className="text-xs text-gray-500">Apps Developed</p>
                        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                          7
                        </p>
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

                {/* Cards */}
                <div className="flex flex-wrap">
                  {/* First Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 1 */}
                      <Image
                        src={BusinessWebsiteCover}
                        alt="Card Image 1"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Business Websites
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li> Start-up Companies.</li>
                          <li> Marketing and Sales</li>
                          <li>Single Website for SEO</li>
                          <li>Enterprise</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 2 */}
                      <Image
                        src={EcommerceCoverImage}
                        alt="Card Image 2"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          E-commerce
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Single Vendor sales</li>
                          <li>Multi Vendor sales</li>
                          <li>Single sale page</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Third Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column ">
                      {/* Content for column 3 */}
                      <Image
                        src={CustomWebsiteCover}
                        alt="Card Image 3"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Web Revamp
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Complete Redesign</li>
                          <li>Complete Custom Code.</li>
                          <li>Theme Change</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Fourth Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 4 */}
                      <Image
                        src={CRMERPCover}
                        alt="Card Image 4"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          CRM/ERP Panels
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Custom Dashboard</li>
                          <li>Custom Management</li>
                          <li>All-in-one ERP solution.</li>
                        </a>
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
              {/*Section 3*/}
              {/*Digital Market*/}
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

                {/* Cards */}
                <div className="flex flex-wrap">
                  {/* First Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 1 */}
                      <Image
                        src={BusinessWebsiteCover}
                        alt="Card Image 1"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Business Websites
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li> Start-up Companies.</li>
                          <li> Marketing and Sales</li>
                          <li>Single Website for SEO</li>
                          <li>Enterprise</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 2 */}
                      <Image
                        src={EcommerceCoverImage}
                        alt="Card Image 2"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          E-commerce
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Single Vendor sales</li>
                          <li>Multi Vendor sales</li>
                          <li>Single sale page</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Third Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column ">
                      {/* Content for column 3 */}
                      <Image
                        src={CustomWebsiteCover}
                        alt="Card Image 3"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Web Revamp
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Complete Redesign</li>
                          <li>Complete Custom Code.</li>
                          <li>Theme Change</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Fourth Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 4 */}
                      <Image
                        src={CRMERPCover}
                        alt="Card Image 4"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          CRM/ERP Panels
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Custom Dashboard</li>
                          <li>Custom Management</li>
                          <li>All-in-one ERP solution.</li>
                        </a>
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
              {/*Section 3*/}
              {/*MultiMedia*/}
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

                {/* Cards */}
                <div className="flex flex-wrap">
                  {/* First Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 1 */}
                      <Image
                        src={BusinessWebsiteCover}
                        alt="Card Image 1"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Business Websites
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li> Start-up Companies.</li>
                          <li> Marketing and Sales</li>
                          <li>Single Website for SEO</li>
                          <li>Enterprise</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 2 */}
                      <Image
                        src={EcommerceCoverImage}
                        alt="Card Image 2"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          E-commerce
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Single Vendor sales</li>
                          <li>Multi Vendor sales</li>
                          <li>Single sale page</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Third Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column ">
                      {/* Content for column 3 */}
                      <Image
                        src={CustomWebsiteCover}
                        alt="Card Image 3"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Web Revamp
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Complete Redesign</li>
                          <li>Complete Custom Code.</li>
                          <li>Theme Change</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Fourth Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 4 */}
                      <Image
                        src={CRMERPCover}
                        alt="Card Image 4"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          CRM/ERP Panels
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Custom Dashboard</li>
                          <li>Custom Management</li>
                          <li>All-in-one ERP solution.</li>
                        </a>
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
              {/*Section 3*/}
              {/*MultiMedia*/}
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

                {/* Cards */}
                <div className="flex flex-wrap">
                  {/* First Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 1 */}
                      <Image
                        src={BusinessWebsiteCover}
                        alt="Card Image 1"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Business Websites
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li> Start-up Companies.</li>
                          <li> Marketing and Sales</li>
                          <li>Single Website for SEO</li>
                          <li>Enterprise</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 2 */}
                      <Image
                        src={EcommerceCoverImage}
                        alt="Card Image 2"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          E-commerce
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Single Vendor sales</li>
                          <li>Multi Vendor sales</li>
                          <li>Single sale page</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Third Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column ">
                      {/* Content for column 3 */}
                      <Image
                        src={CustomWebsiteCover}
                        alt="Card Image 3"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Web Revamp
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Complete Redesign</li>
                          <li>Complete Custom Code.</li>
                          <li>Theme Change</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Fourth Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 4 */}
                      <Image
                        src={CRMERPCover}
                        alt="Card Image 4"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          CRM/ERP Panels
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Custom Dashboard</li>
                          <li>Custom Management</li>
                          <li>All-in-one ERP solution.</li>
                        </a>
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
              {/*Section 3*/}
              {/*MultiMedia*/}
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

                {/* Cards */}
                <div className="flex flex-wrap">
                  {/* First Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 1 */}
                      <Image
                        src={BusinessWebsiteCover}
                        alt="Card Image 1"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Business Websites
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li> Start-up Companies.</li>
                          <li> Marketing and Sales</li>
                          <li>Single Website for SEO</li>
                          <li>Enterprise</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 2 */}
                      <Image
                        src={EcommerceCoverImage}
                        alt="Card Image 2"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          E-commerce
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Single Vendor sales</li>
                          <li>Multi Vendor sales</li>
                          <li>Single sale page</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Third Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column ">
                      {/* Content for column 3 */}
                      <Image
                        src={CustomWebsiteCover}
                        alt="Card Image 3"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Web Revamp
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Complete Redesign</li>
                          <li>Complete Custom Code.</li>
                          <li>Theme Change</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Fourth Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 4 */}
                      <Image
                        src={CRMERPCover}
                        alt="Card Image 4"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          CRM/ERP Panels
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Custom Dashboard</li>
                          <li>Custom Management</li>
                          <li>All-in-one ERP solution.</li>
                        </a>
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
              {/*Section 3*/}
              {/*MultiMedia*/}
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

                {/* Cards */}
                <div className="flex flex-wrap">
                  {/* First Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 1 */}
                      <Image
                        src={BusinessWebsiteCover}
                        alt="Card Image 1"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Business Websites
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li> Start-up Companies.</li>
                          <li> Marketing and Sales</li>
                          <li>Single Website for SEO</li>
                          <li>Enterprise</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 2 */}
                      <Image
                        src={EcommerceCoverImage}
                        alt="Card Image 2"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          E-commerce
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Single Vendor sales</li>
                          <li>Multi Vendor sales</li>
                          <li>Single sale page</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Third Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column ">
                      {/* Content for column 3 */}
                      <Image
                        src={CustomWebsiteCover}
                        alt="Card Image 3"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          Web Revamp
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Complete Redesign</li>
                          <li>Complete Custom Code.</li>
                          <li>Theme Change</li>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Fourth Column */}
                  <div className=" w-1/2 lg:w-1/4 p-2">
                    <div className="column">
                      {/* Content for column 4 */}
                      <Image
                        src={CRMERPCover}
                        alt="Card Image 4"
                        className="w-full h-48 p-2 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-sm font-semibold text-white mb-2 text-center">
                          CRM/ERP Panels
                        </h2>
                        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
                          <li>Custom Dashboard</li>
                          <li>Custom Management</li>
                          <li>All-in-one ERP solution.</li>
                        </a>
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
