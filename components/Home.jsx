import React from "react";
import VideoBackground from "./videos/Background";
import "./Animations/title.css";



export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen">
    <VideoBackground />
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
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


      <div class=" animate-fade-in-screen mt-6 flex items-center justify-center gap-4 flex-wrap">
              <a href="/contactus">
                <div class="text-xs sm:text-sm transform rounded bg-yellow-500 px-12 py-2 font-medium text-black transition-colors hover:bg-orange-500">
                  Build Today
                </div>
              </a>
              <a href="/getquotation">
                <div class="text-xs sm:text-sm transform rounded bg-yellow-500 px-12 py-2 font-medium text-black transition-colors hover:bg-orange-500">
                  Get Quotation
                </div>
              </a>
            </div>

      
    </div></section>
  );

}

