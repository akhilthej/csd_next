import Link from "next/link";

const HomeTitle = () => {
  return (
    <section>
      <section className="flex items-center  justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
          <div className="">
            <p className=" cursor-default text-sm sm:text-2xl font-bold leading-8  text-white">
              DESIGN . DEVELOP & DEPLOY
            </p>
          </div>
          <div className="hidden w-screen h-px  md:block  bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

          <h1 className="z-10 upanddown text-4xl lg:text-9xl font-extrabold text-transparent duration-1000 bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight  cursor-default text-edge-outline  font-display font-display sm:text-6xl whitespace-nowrap bg-clip-text ">
            CYBER SPACE DIGITAL
          </h1>
          <div className="hidden w-screen h-px  md:block  bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

          <div className="">
            <p className=" cursor-default text-sm  leading-8  text-white">
              Take your brand online today for a global presence.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
            {/* Item 1 */}
            <a
              href="/services/webdevelopment"
              className=" -services group rounded-lg border border-transparent px-5 py-4 transition-colors bg-black/70 hover:border-neutral-700 hover:bg-neutral-800/30 text-white"
            >
              <h2 className=" mb-3 font-semibold text-sm">
                Web <br /> Development{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            {/* Item 2 */}
            <Link
              href="/services/digitalmarketing"
              className="-services2 group rounded-lg border border-transparent px-5 py-4 transition-colors bg-black/70 hover:border-neutral-700 hover:bg-neutral-800/30 text-white"
            >
              <h2 className="mb-3 font-semibold text-sm">
                Digital <br /> Marketing{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                Find in-depth information about Next.js features and API.
              </p>
            </Link>

            {/* Item 3 */}
            <Link
              href="/services/multimedia"
              className="-services3 group rounded-lg border border-transparent px-5 py-4 transition-colors bg-black/70 hover:border-neutral-700 hover:bg-neutral-800/30 text-white"
            >
              <h2 className="mb-3 font-semibold text-sm">
                Multi
                <br /> Media{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                Find in-depth information about Next.js features and API.
              </p>
            </Link>

            {/* Item 4 */}
            <Link
              href="/services/branding"
              className="-services4 group rounded-lg border border-transparent px-5 py-4 transition-colors bg-black/70 hover:border-neutral-700 hover:bg-neutral-800/30 text-white"
            >
              <h2 className="mb-3 font-semibold text-sm">
                Branding{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                Find in-depth information about Next.js features and API.
              </p>
            </Link>

            {/* Item 5 */}
            <Link
              href="/services/advertising"
              className="-services5 group rounded-lg border border-transparent px-5 py-4 transition-colors bg-black/70 hover:border-neutral-700 hover:bg-neutral-800/30 text-white"
            >
              <h2 className="mb-3 font-semibold text-sm">
                Advertising{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                Find in-depth information about Next.js features and API.
              </p>
            </Link>

            {/* Item 6 */}
            <Link
              href="/services/mobileappdevelopment"
              className="-services6 group rounded-lg border border-transparent px-5 py-4 transition-colors bg-black/70 hover:border-neutral-700 hover:bg-neutral-800/30 text-white"
            >
              <h2 className="mb-3 font-semibold text-sm">
                Mobile app{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] sm:text-sm text-xs opacity-50">
                Find in-depth information about Next.js features and API.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="min-h-screen lg:max-w-5xl lg:w-full flex flex-col justify-center items-center overflow-hidden">
          {/* First Row */}
          <div className="text-center text-white">
            <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
              Web Development
            </h2>
            <p className="text-sm opacity-50">
              Every business requires a unique website to effectively reach its
              customers or clients. At Cyber Space Digital, were here to help
              you discover the best choices tailored to your needs.
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
                  <p className="text-xs text-gray-500">Advertisements Run</p>
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
      </section>


      <section>
           <div className="min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
     {/* First Row */}
     <div className="text-center text-white">
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
      </section>
    </section>
  );
};

export default HomeTitle;
