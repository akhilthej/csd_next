import Link from 'next/link';

const SERVICES = () => {
  return (

      <main>

 {/* Title Card */}
 <section className="py-10 sm:py-40 bg-cover bg-center pt-20" style={{backgroundImage: `url(/ServicesCover/ServicesCoverImage.png)`,}}>
     
     <div className="flex flex-col items-center md:flex-row justify-center">
       <div className="md:w-1/2 md:pr-10"></div>
       <div className="md:w-1/2 px-5">
         <div className="text-right md:text-left">
           {" "}
           {/* Align titles to the right on mobile, left on larger screens */}
           <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
        Distribute your brand from&nbsp;Design to Code
        </h1>
        <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
        Specify helps you unify your brand identity by collecting, storing and
            distributing design tokens and assets — automatically.
        </p>
           <div className="mt-8 flex flex-wrap justify-center gap-4">
<a href="mailto:admin@cyberspacedigital.in" className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
 Email
</a>
<a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital" className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
 WhatsApp
</a>
</div>

         </div>
       </div>
     </div>
   </section>
   

   <section className="flex items-center justify-center py-20 px-10">
   <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
        {/* Item 1 */}
        <a href="/services/webdevelopment"
          className="  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

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
          className=" group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

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
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

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
          className=" group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

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
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

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
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

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
      </section>



{/* WE BUILD */}
<section  style={{backgroundImage: `url(/ServicesCover/HomeCommunityCover.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}>

          <div className="cursor-default px-10 py-40 flex flex-col items-center justify-center bg-black/70">
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-xl md:text-5xl lg:text-8xl bg-clip-text bg-yellow-400 tracking-tight ">
                WE BUILD
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-3xl md:text-5xl lg:text-5xl bg-clip-text bg-orange-600 tracking-tight ">
                SIMPLE BUT COMPLEX
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-xl md:text-5xl lg:text-8xl bg-clip-text bg-yellow-400 tracking-tight ">
                STABLE COMMUNITY
              </h2>
            </div>
          </div>
        </section>





        {/*Whatdowedo */}
        <section>
          <div className="cursor-default px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 py-10">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[3.5rem] tracking-tight text-white">
                What do we do?
              </h2>
              <p className=" text-white sm:text-xl ">
                How we research our clients requirements and processes.
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  
                </div>
                <h3 className="text-white mb-2 text-xl font-bold ">
                  Documentation
                </h3>
                <p className="text-white ">
                  Seems to be a herculean task for a project manager. Project
                  managers are often engaged in delivering high-end complex
                  projects.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">

                </div>
                <h3 className="text-white mb-2 text-xl font-bold ">Analyze</h3>
                <p className="text-white ">
                  When executing a project,we analyze it periodically. Failing
                  to do so, would mean unexpected challenges, overlooked
                  critical information, or flaws in the work process that
                  manifest as the project unfolds.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                
                </div>
                <h3 className="text-white mb-2 text-xl font-bold ">
                  Social Media Presents
                </h3>
                <p className="text-white ">
                  A company social media presence is how they portray
                  themselves online through their social networking accounts and
                  activity. Building a social media presence starts with
                  developing your goals.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  
                </div>
                <h3 className="text-white mb-2 text-xl font-bold ">Finance</h3>
                <p className="text-white ">
                  the funding of long-term projects, such as public
                  infrastructure or services, industrial projects, and others
                  through a specific financial structure.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                 
                </div>
                <h3 className="text-white mb-2 text-xl font-bold ">Strategy</h3>
                <p className="text-white ">
                  Craft beautiful, delightful experiences for both marketing and
                  product with real cross-company collaboration.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                
                </div>
                <h3 className="text-white mb-2 text-xl font-bold ">
                  Business Report
                </h3>
                <p className="text-white ">
                  At the end of every project we present our clients with
                  detailed reports .which can help them understand what we did
                  for there project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*Explore */}
        <section style={{backgroundImage: `url(/ServicesCover/HomeResourceCover.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section>
            <div className="cursor-default container px-6 py-10 mx-auto bg-black/60">
              <div className="lg:flex lg:items-center ">
                <div className="w-full space-y-12 lg:w-1/2 ">
                  <div>
                    <h2 className="text-3xl font-semibold text-white capitalize lg:text-4xl ">
                      explore our <br /> Resources for our community
                    </h2>
                    <div className="mt-2">
                      <span className="inline-block w-40 h-1 rounded-full bg-yellow-500" />
                      <span className="inline-block w-3 h-1 ml-1 rounded-full bg-yellow-500" />
                      <span className="inline-block w-1 h-1 ml-1 rounded-full bg-yellow-500" />
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-white bg-yellow-500 rounded-xl md:mx-4  ">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h2 className="text-2xl font-semibold text-white capitalize ">
                        Custom CRM
                      </h2>
                      <p className="mt-3 text-white ">
                        Customer relationship management (CRM) is a technology
                        for managing all your company relationships and
                        interactions with customers and potential customers. The
                        goal is simple: Improve business relationships.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-white bg-yellow-500 rounded-xl md:mx-4 ">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </span>
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h2 className="text-2xl font-semibold text-white capitalize ">
                        Google Data Maps Mining
                      </h2>
                      <p className="mt-3 text-white ">
                        Data mapping is crucial to the success of many data
                        processes. One misstep in data mapping can ripple
                        throughout your organization, leading to replicated
                        errors, and ultimately, to inaccurate analysis.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-white  bg-yellow-500 rounded-xl md:mx-4 ">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                        />
                      </svg>
                    </span>
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h2 className="text-2xl font-semibold text-white capitalize">
                        Custom Testing Tools
                      </h2>
                      <p className="mt-3 text-white ">
                        Testing Tools in software testing can be defined as
                        products that support various test activities starting
                        from planning, requirement gathering, build creation,
                        test execution, defect logging and test analysis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                  
                </div>
              </div>
            </div>
          </section>
        </section>





       
 {/* Help section */}
 <section className="text-center mx-auto my-8">
      <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
        Need Help ?
      </h2>
      <p className="cursor-default text-sm font-medium text-white mt-5 mb-10">
        Explore our comprehensive documentation for more information on our services.
      </p>
    
<div className="flex items-center justify-center gap-4 flex-wrap">

  <a href='https://api.whatsapp.com/send?phone=918143407758&text=Need%20Details%20about%20business%20website.' className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-white transition-colors hover:bg-slate-50 ">
    Whatsapp
  </a>
  <Link href='/contactus'>
  <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-white transition-colors hover:bg-slate-50 hover:text-white">
    Contact us
  </button></Link>
 </div>
 </section>
</main>
    
  )
}

export default SERVICES