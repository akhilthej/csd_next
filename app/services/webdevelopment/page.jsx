import React from 'react'
import Link from 'next/link';

import { GlobalData} from '@/public/SiteData/GlodalData';
import Footer from '@/components/Footer/Footer';


const Webdevelopment = () => {
  return (
    <main>
      {/* Title Card */}
      <section
        className="py-10 sm:py-40 bg-cover bg-center"
        style={{ backgroundImage:`url("${GlobalData.WebDevelopment.Coverimage}")`}}
      >
      
        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="md:w-1/2 md:pr-10"></div>
          <div className="md:w-1/2 px-5">
            <div className="text-right md:text-left">
              {" "}
              {/* Align titles to the right on mobile, left on larger screens */}
              <h3 className="cursor-default  text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
                {GlobalData.WebDevelopment.title}
              </h3>
              <p className="cursor-default text-white sm:text-sm text-xs text-center sm:ml-0">
                You can contact us through mail or you can get in touch at our
                digital office.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:admin@cyberspacedigital.in"
                  className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  Email
                </a>
                <a
                  href="tel:+91-814-340-7758"
                  className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  Phone
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital"
                  className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>







  {/*Line of Engagement */}
  <section className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10">
  <div className="xl:max-w-8xl mx-auto px-4">
    {/* Heading for "Line of Engagement" section */}

    <div className="text-center mx-auto mb-12 lg:px-20">

    <p className="text-xl font-medium text-white">
    Websites as your Business Need
      </p>
      <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
      Build Your Web Office Online.
      </h2>
      <p className="text-sm font-medium text-white">
      Every business requires a unique website to effectively reach its customers or clients. At Cyber Space Digital, we are here to help you discover the best choices tailored to your needs.
     </p></div></div>
    </section>









<section className="bg-yellow-500 py-12 shadow-inner ">
      <div className="container mx-auto p-4">
        <h2 className="font-extrabold text-white text-4xl  py-2 md:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r text-center  mt-3 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[3.5rem] tracking-tight ">{GlobalData.company.companyName}</h2>
        <div className="text-center text-white">
        <span className='font-medium text-sm' >Get is touch</span>
          <p className="text-lg pt-2 space-x-2 ">
          <a href="tel:+918143407758" class=" bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Call Now</a>
          <a href="mailto:admin@cyberspacedigital.in" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Email
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
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
              <p className="text-sm font-medium text-white">
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
                    
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-white">
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
                   
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-white">
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
                    
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-white">
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
                    
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-white">
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
        Explore our comprehensive documentation for more information on our services.
      </p>
    
<div className="flex items-center justify-center gap-4 flex-wrap">

  <a href='https://api.whatsapp.com/send?phone=9666643456&text=Need%20Details%20about.' className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-white transition-colors hover:bg-slate-50 ">
    Whatsapp
  </a>
  <Link href='/contactus'>
  <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-white transition-colors hover:bg-slate-50 hover:text-white">
    Contact us
  </button></Link>
 </div>
 </section>


<Footer />
</main>

  )
}

export default Webdevelopment