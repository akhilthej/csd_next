import React from "react";
import VideoBackground from "./videos/Background";
import "./Animations/title.css";

import Link from "next/link";



export default function Home() {
  return (
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
        <a href="/services/webdevelopment"
          className=" animate-fade-in-services group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

          <h2 className=' mb-3 font-semibold text-sm'>
            Web <br/> Development{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] sm:text-sm text-xs opacity-50'>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        {/* Item 2 */}
        <Link href="/services/digitalmarketing"
          className="animate-fade-in-services2 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

          <h2 className='mb-3 font-semibold text-sm'>
            Digital <br/> Marketing{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] sm:text-sm text-xs opacity-50'>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        {/* Item 3 */}
        <Link href="/services/multimedia"
          className="animate-fade-in-services3 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

          <h2 className='mb-3 font-semibold text-sm'>
            Multi<br/> Media{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] sm:text-sm text-xs opacity-50'>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        {/* Item 4 */}
        <Link href="/services/branding"
          className="animate-fade-in-services4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

          <h2 className='mb-3 font-semibold text-sm'>
          Branding{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] sm:text-sm text-xs opacity-50'>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        {/* Item 5 */}
        <Link href="/services/advertising"
          className="animate-fade-in-services5 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

          <h2 className='mb-3 font-semibold text-sm'>
          Advertising{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] sm:text-sm text-xs opacity-50'>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        {/* Item 6 */}
        <Link href="/services/mobileappdevelopment"
          className="animate-fade-in-services6 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

          <h2 className='mb-3 font-semibold text-sm'>
          Mobile app{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] sm:text-sm text-xs opacity-50'>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>
      </div>

    </div></section>
  );

}

