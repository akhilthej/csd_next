import Link from 'next/link'
import Home_Section9 from './Home_Section9'

const Home_Section8 = () => {
  return (
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
           className=" animate-fade-in-services group rounded-lg border border-transparent px-5 py-4 transition-colors bg-black/70 hover:border-neutral-700 hover:bg-neutral-800/30 text-white"
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
           className="animate-fade-in-services2 group rounded-lg border border-transparent px-5 py-4 transition-colors bg-black/70 hover:border-neutral-700 hover:bg-neutral-800/30 text-white"
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
           className="animate-fade-in-services3 group rounded-lg border border-transparent px-5 py-4 transition-colors bg-black/70 hover:border-neutral-700 hover:bg-neutral-800/30 text-white"
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
           className="animate-fade-in-services4 group rounded-lg border border-transparent px-5 py-4 transition-colors bg-black/70 hover:border-neutral-700 hover:bg-neutral-800/30 text-white"
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
           className="animate-fade-in-services5 group rounded-lg border border-transparent px-5 py-4 transition-colors bg-black/70 hover:border-neutral-700 hover:bg-neutral-800/30 text-white"
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
           className="animate-fade-in-services6 group rounded-lg border border-transparent px-5 py-4 transition-colors bg-black/70 hover:border-neutral-700 hover:bg-neutral-800/30 text-white"
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
  )
}

export default Home_Section8