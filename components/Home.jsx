import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
     

{/*herosection */}
      <section class="flex items-center justify-center pt-40 pb-20">
          <div class="mx-auto">
            <div class="text-center">
              <null class="cursor-default text-sm sm:text-2xl font-extrabold leading-8 text-white">
                DESIGN . DEVELOP & DEPLOY
              </null>
              <h1 class="cursor-default pb-0 sm:pb-5 upanddown font-extrabold text-transparent text-4xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 leading-[3.5rem] tracking-tight">
                Cyber Space Digital
              </h1>

              <p class="cursor-default text-sm sm:text-xl font-extrabold leading-8 text-gray-200">
                Take your brand online today for a global presence.
              </p>
            </div>
            <div class="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <a href="/contactus">
                <button class="text-xs sm:text-sm transform rounded bg-yellow-500 px-12 py-2 font-medium text-black transition-colors hover:bg-orange-500">
                  Build Today
                </button>
              </a>
              <a href="/getquotation">
                <button class="text-xs sm:text-sm transform rounded bg-yellow-500 px-12 py-2 font-medium text-black transition-colors hover:bg-orange-500">
                  Get Quotation
                </button>
              </a>
            </div>
          </div>
        </section>

      
{/*Services*/}
 <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/services/webdevelopment"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Web Development{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        <Link href="/services/digitalmarketing"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Digital Marketing{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </Link>

        <Link
          href="/services/multimedia"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            MultiMedia{' '}
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
            Branding{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </Link>
        <div></div>
        <Link
          href="/services/advertising"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Advertising{' '}
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
            Mobile App Development{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>
        <div>
        </div>
         
  </div>
  <div className='text-center text-gray-600'><Link href='/services'>All Services</Link></div> 
  
  
  
  



</main>
  )
}
