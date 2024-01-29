import React from "react";
import Link from "next/link";

import { GlobalData } from "@/public/GlodalData";
import Footer from "@/components/Footer/Footer";

import Image from "next/image";

const Webdevelopment = () => {
  return (
    <main>
      {/* Title Card */}
      <section className="relative bg-cover bg-center py-40 md:py-60 ">
        <Image
          src={GlobalData.WebDevelopment.Coverimage}
          alt="Cover Image"
          loading="lazy"
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          style={{ maxHeight: "70vh", zIndex: -1 }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="container mx-auto flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-10"></div>
            <div className="md:w-1/2 px-5 text-white text-center md:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
                {GlobalData.WebDevelopment.title}
              </h3>
              <p className="text-white sm:text-sm text-xs mb-8">
                You can contact us through mail or you can get in touch at our
                digital office.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:admin@cyberspacedigital.in"
                  className="btn-email transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  Email
                </a>
                <a
                  href="tel:+91-814-340-7758"
                  className="btn-phone transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  Phone
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital"
                  className="btn-whatsapp transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Single Line */}
      <section className="cursor-default section relative ">
        <div className="xl:max-w-8xl mx-auto px-4 py-10">
          {/* Heading for "Line of Engagement" section */}

          <div className="text-center mx-auto mb-12 lg:px-20">
            <p className="text-xl font-medium text-white">
              Websites as your Business Need
            </p>
            <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
              Build Your Web Office Online.
            </h2>
            <p className="text-sm font-medium text-white">
              Every business requires a unique website to effectively reach its
              customers or clients. At Cyber Space Digital, we are here to help
              you discover the best choices tailored to your needs.
            </p>
          </div>
        </div>
      </section>


{/*Services */}
<section className="flex items-center justify-center py-10 px-10">
   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {/* Item 1 */}
        <Link href="/services/webdevelopment"
          className="  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <Image
                      src={GlobalData.WebDevelopment.BusinessWebsiteIcon}
                      className="w-20 mx-auto mb-2"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
          <h2 className=' mb-3 font-semibold text-sm'>
           Business Websites{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className='m-0  max-w-[30ch] sm:text-sm text-xs opacity-50'>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        {/* Item 2 */}
        <Link href="/services/webdevelopment"
          className="  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <Image
                      src={GlobalData.WebDevelopment.EcommcerceIcon}
                      className="w-20 mx-auto mb-2"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
          <h2 className=' mb-3 font-semibold text-sm'>
          E-commerce{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] sm:text-sm text-xs opacity-50'>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        {/* Item 3 */}
        <Link href="/services/webdevelopment"
          className="  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <Image
                      src={GlobalData.WebDevelopment.WebRevamp}
                      className="w-20 mx-auto mb-2"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
          <h2 className=' mb-3 font-semibold text-sm'>
          Web Revamp{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] sm:text-sm text-xs opacity-50'>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        {/* Item 4 */}
        <Link href="/services/webdevelopment"
          className="  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <Image
                      src={GlobalData.WebDevelopment.CRMERPPanels}
                      className="w-20 mx-auto mb-2"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
          <h2 className=' mb-3 font-semibold text-sm'>
          CRM/ERP Panels{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] sm:text-sm text-xs opacity-50'>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        

        
      </div>
      </section>

{/*Contact Details */}
      <section className="bg-yellow-500 py-12 shadow-inner ">
        <div className="container mx-auto p-4">
          <h2 className="font-extrabold text-white text-4xl  py-2 md:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r text-center  mt-3 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[3.5rem] tracking-tight ">
            {GlobalData.company.companyName}
          </h2>
          <div className="text-center text-white">
            <span className="font-medium text-sm">Get is touch</span>
            <p className="text-lg pt-2 space-x-2 ">
              <a
                href="tel:+918143407758"
                class=" bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Call Now
              </a>
              <a
                href="mailto:admin@cyberspacedigital.in"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Email
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      </section>

 {/*Line of Engagement */}
 <section
          id="services"
          className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10"
        >
          <div className="xl:max-w-8xl mx-auto px-4">
            {/* Heading for "Line of Engagement" section */}

            <section className="text-center mx-auto mb-12 lg:px-20">
              <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 ">
                Line of Engagement
              </h2>
              <p className="text-sm font-medium text-black">
                Streamline the management of advertising and content for your
                business, saving you valuable time.
              </p>
            </section>

            {/* "Fixed Price Model" section */}
            <div className="flex flex-wrap flex-row -mx-4 text-center">
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <Image
                      src={GlobalData.CompanyEngagement.FixedPrice}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Fixed Price Model
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Under this model, the web development company and the client
                    agree on a fixed price for the entire project scope.
                  </p>
                </div>
              </div>

              {/* "Time and Materials Model" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <Image
                      src={GlobalData.CompanyEngagement.TimeandMaterials}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Time and Materials Model
                  </h3>
                  <p className="text-gray-500 text-sm">
                    The client pays based on the time and resources spent on the
                    project.
                  </p>
                </div>
              </div>

              {/* "On-Time Delivery" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <Image
                      src={GlobalData.CompanyEngagement.OnTimeDelivery}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    On-Time Delivery
                  </h3>
                  <p className="text-gray-500 text-sm">
                    The web development company commits to delivering projects
                    on or before agreed-upon deadlines.
                  </p>
                </div>
              </div>

              {/* "Hiring Model" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <Image
                      src={GlobalData.CompanyEngagement.HiringModel}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Hiring Model
                  </h3>
                  <p className="text-gray-500 text-sm">
                    if your project requires additional manpower and extra
                    resources, we are ready to scale up and bring in the
                    necessary talent to meet your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
     </section>



      {/* Help section */}
      <section className="text-center mx-auto my-8">
        <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
          Need Help ?
        </h2>
        <p className="cursor-default text-sm font-medium text-white mt-5 mb-10">
          Explore our comprehensive documentation for more information on our
          services.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://api.whatsapp.com/send?phone=9666643456&text=Need%20Details%20about."
            className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-white transition-colors hover:bg-slate-50 "
          >
            Whatsapp
          </a>
          <Link href="/contactus">
            <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-white transition-colors hover:bg-slate-50 hover:text-white">
              Contact us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Webdevelopment;
