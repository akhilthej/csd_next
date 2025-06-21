import React from "react";
import Head from "next/head";
import Link from "next/link";
import { DigitalMarketingCompany } from "../../../public/PageData"; // Adjust the path as necessary

import LineofEngagement from "../../../components/LineofEngagement";

import { HomeCommunityCover } from "../../../public/images";
import Image from "next/image";
import { GlobalData } from "@/public/GlodalData";

const digitalMarketingCompany = () => {
  return (
    <div className="services">
      <Head>
        <title>Cyber Space Digital - Services</title>
        <meta
          name="description"
          content="Web Development and Digital Marketing Company. We are here to build you business online. One stop for all your digital needs."
        />
        <link rel="canonical" href="/services" />
      </Head>

      <main>
        {/* Title Card */}
        <section
          className="py-10 sm:py-40"
          style={{
            backgroundImage: `url("${DigitalMarketingCompany.coverImage.src}")`,
            backgroundSize:
              DigitalMarketingCompany.coverImage.style.backgroundSize,
            backgroundPosition:
              DigitalMarketingCompany.coverImage.style.backgroundPosition,
          }}
        >
          <div className="flex flex-col items-center md:flex-row justify-center">
            <div className="md:w-1/2 md:pr-10"></div>
            <div className="md:w-1/2 px-5">
              <div className="text-right md:text-left">
                <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
                  {DigitalMarketingCompany.title}
                </h1>
                <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
                  {DigitalMarketingCompany.subtitle}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/contactus">
                    <span className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black sm:text-[14px] text-[12px] hover:text-white">
                      Get in Touch
                    </span>
                  </Link>

                  <a href={GlobalData.company.companyWhatsapp}>
                    <span className="transform sm:text-[14px] text-[12px] rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 2 */}
        <section>
          <section className="text-center mx-auto my-12 lg:px-20">
            <p className="text-sm font-medium text-black">
              {DigitalMarketingCompany.section2.tagline}
            </p>
            <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3">
              {DigitalMarketingCompany.section2.heading}
            </h2>
            <p className="text-sm font-medium text-black">
              {DigitalMarketingCompany.section2.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/faq">
                <span className="transform rounded-md bg-black px-5 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black">
                  FAQ
                </span>
              </Link>

              <a href={GlobalData.company.companyWhatsapp}>
                <span className="transform rounded-md bg-black px-5 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black">
                  WhatsApp
                </span>
              </a>
            </div>
          </section>
          <section className="my-12 px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {DigitalMarketingCompany.services.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <Image
                      src={service.icon}
                      className="w-8 h-8 ml-auto mx-auto justify-center" // Set width and height to 30px (8 * 4 = 32px, close to 30px)
                      alt="illustration"
                      loading="lazy"
                      width={30} 
                      height={30}
                    />
                    <p className="font-medium sm:text-[14px] text-[12px]">{service.title}</p>
                    <p className="sm:text-[12px] text-[10px]">{service.description}</p>
                    <Link href={service.link}>
                      <button className="bg-primary sm:text-[14px] text-[10px] font-medium px-2 py-2 mt-2 rounded-md">
                        Get Quotation
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        </section>

        {/* Section - 3 */}
        <section
          style={{
            backgroundImage: `url(${HomeCommunityCover.src})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="cursor-default py-40 flex flex-col items-center justify-center bg-black/70">
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-yellow-400 tracking-tight">
                WE BUILD
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-5xl md:text-5xl lg:text-5xl bg-clip-text bg-orange-600 tracking-tight">
                SIMPLE BUT COMPLEX
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-yellow-400 tracking-tight">
                STABLE COMMUNITY
              </h2>
            </div>
          </div>
        </section>

        {/* section -4 */}
        <section className="text-center mx-auto my-8">
          <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 tracking-tight ">
            Need more information?
          </h2>
          <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
            Explore our comprehensive documentation for more information on our
            services.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contactus/getquotation">
              <button className="bg-primary text-[14px] font-medium px-4 py-2 mt-2 rounded-md">
                Get Quotation
              </button>
            </Link>
          </div>
        </section>

        {/*section -5*/}
        <LineofEngagement />

        {/* section -6 */}
        <section className="text-center mx-auto py-8 bg-primary">
          <h2 className="cursor-default font-extrabold text-transparent sm:text-[14px] text-[12px] bg-clip-text bg-white tracking-tight ">
            Get In Touch
          </h2>
          <p className="cursor-default text-sm font-medium text-black my-5 ">
            Explore our comprehensive documentation for more information on our
            services.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contactus">
              <button className="text-xs sm:text-sm transform rounded bg-white border  px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
                FAQ
              </button>
            </Link>
            <Link href="/contactus">
              <button className="text-xs sm:text-sm transform rounded border bg-white px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
                Contact us
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default digitalMarketingCompany;
