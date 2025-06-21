import Link from "next/link";
import React from "react";
import Services from "../../components/ServicesComponent";
import { HomeCommunityCover } from "../../public/images";
import {
  FixedPrice,
  TimeManage,
  OntimeDelivery,
  HiringModel,
  goodfirms,
} from "../../public/icons";
import Image from "next/image";
import {
  FaShoppingCart,
  FaFilm,
  FaGavel,
  FaHotel,
  FaHeartbeat,
  FaCar,
  FaBuilding,
  FaGraduationCap,
} from "react-icons/fa";
import ImageSlider from "@/components/ImageSlider";

const HomeTitle = () => {
  return (
    <div>
      {/*section -1*/}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-b-[100px]"
        >
          <source src="/HomeHero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for darker text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 rounded-b-[100px]" />

        {/* Foreground Content */}
        <div className="relative z-20 flex items-center justify-center min-h-screen px-2">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-[14px] sm:text-[24px] font-bold leading-8 text-white cursor-default">
              DESIGN . DEVELOP & DEPLOY
            </p>

            <div className=" w-screen h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 my-4" />

            <h1 className="upanddown text-4xl sm:text-6xl lg:text-9xl font-extrabold text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text leading-tight tracking-tight font-display cursor-default whitespace-nowrap">
              CYBER SPACE DIGITAL
            </h1>

            <div className=" w-screen h-px  bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 my-4" />

            <p className="text-sm text-white cursor-default">
              Take your brand online today for a global presence.
            </p>
          </div>
        </div>
      </section>

      {/*section -2*/}
      <Services />

      {/*section -3*/}
      <section className="w-full overflow-hidden py-10 bg-gray-200">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <p className="text-[14px] sm:text-[24px] font-bold leading-8 text-black cursor-default">
            Your Vision, Our Code – Perfectly Executed.
          </p>
          <div className=" w-screen h-px  bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <p className="text-[14px] text-black cursor-default">
            Unlocking the Full Potential of Your Online Brand.
          </p>

          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-yellow-500 rounded-md">
              Build Today
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-md">
              Get Quotation
            </button>
          </div>
        </div>
      </section>

      {/*section -4*/}
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

      {/*section -5*/}
      <section className="w-full overflow-hidden py-10 bg-gray-200">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <p className="text-[14px] sm:text-[24px] font-bold leading-8 text-black cursor-default">
            Quick Action
          </p>
          <div className=" w-screen h-px  bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <p className="text-[14px] text-black cursor-default">
            24/7 we are here to help you find your answers.
          </p>

          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-white border  rounded-md">
              Phone
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-md">
              Email
            </button>
            <button className="px-4 py-2 bg-white border  rounded-md">
              Whatsapp
            </button>
          </div>
        </div>
      </section>

      {/*section -6*/}
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:w-7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                About Cyber Space Digital
              </h2>
              <p className="mt-6 text-gray-600">
                Cyber Space Digital is a Visakhapatnam-based IT agency founded
                in 2020. We specialize in web and mobile app development,
                digital marketing, and customized CRM solutions. With a focus on
                innovation and results, we help businesses transform their
                online presence and streamline operations.
              </p>
              <p className="mt-4 text-gray-600">
                Our in-house SaaS platform, CRM Geni, empowers businesses with
                tools for client management, invoicing, and performance tracking
                — all under one roof. We’re committed to delivering 360° digital
                solutions tailored to your growth.
              </p>
            </div>
            <div className="md:w-5/12 lg:w-5/12">
              <Image
                src={goodfirms}
                alt="Cyber Space Digital Illustration"
                loading="lazy"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/*section -7*/}
 

      {/*section -8*/}
      <section className="text-center mx-auto mb-12 lg:px-20">
        <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3">
          Induestries we Serve, Globally
        </h2>
        <p className="text-sm font-medium text-black">
          We Build Afficient software for our customer.
        </p>
      </section>

      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
          <FaShoppingCart className="text-3xl text-orange-500 mb-2" />
          <p className="font-medium">Retail</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
          <FaFilm className="text-3xl text-orange-500 mb-2" />
          <p className="font-medium">Media & Entertainment</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
          <FaGavel className="text-3xl text-orange-500 mb-2" />
          <p className="font-medium">Legal & Finance</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
          <FaHotel className="text-3xl text-orange-500 mb-2" />
          <p className="font-medium">Hospitality</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
          <FaHeartbeat className="text-3xl text-orange-500 mb-2" />
          <p className="font-medium">Health Care</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
          <FaCar className="text-3xl text-orange-500 mb-2" />
          <p className="font-medium">Automotive</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
          <FaBuilding className="text-3xl text-orange-500 mb-2" />
          <p className="font-medium">Realestate</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
          <FaGraduationCap className="text-3xl text-orange-500 mb-2" />
          <p className="font-medium">Education</p>
        </div>
      </div>

      {/*section -9*/}
      <section className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10">
        <div className="xl:max-w-8xl mx-auto px-4">
          <section className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 ">
              Line of Engagement
            </h2>
            <p className="text-sm font-medium text-black">
              Streamline the management of advertising and content for your
              business, saving you valuable time.
            </p>
          </section>

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
                    src={FixedPrice}
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
                    src={TimeManage}
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
                    src={OntimeDelivery}
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
                  The web development company commits to delivering projects on
                  or before agreed-upon deadlines.
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
                    src={HiringModel}
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
                  resources, were ready to scale up and bring in the necessary
                  talent to meet your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "need more help" section */}
      <section className="text-center mx-auto py-8 bg-primary">
        <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-white mt-3  tracking-tight ">
          Need Help ?
        </h2>
        <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
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
    </div>
  );
};

export default HomeTitle;
