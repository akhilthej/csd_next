import Link from "next/link";
import React from "react";
import Services from "../../components/ServicesComponent";
import { HomeCommunityCover, goodfirms } from "../../public/images";
import Image from "next/image";

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
      <div className="relative mt-10 pt-10 sm:pt-0 mb-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20">
          <div className="content">
            <div className="flex items-center gap-3">
              <hr className="w-10 bg-orange-500 border " />
              <span className="md:text-[18px] font-medium text-gray-800 ">
                About
              </span>
            </div>
            <p className="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 ">
              Cyber Space Digital
            </p>
            <p className="mt-5 md:text-md ">
              I'm creative designer based in Bangladesh, and I'm very passionate
              and dedicated to my <br className="hidden md:block" /> work.Your
              Satisfaction is my success
            </p>
            <div className="flex gap-4 mt-10">
              <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">
                Get In Touch
                <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
              </button>
            </div>
          </div>
          <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
            <Image
              className="h-10 rounded-sm hover:animate-pulse max-w-full"
              src={goodfirms}
              alt="goodfirms_icon"
              width="120"
              height="50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTitle;
