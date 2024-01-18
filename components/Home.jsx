import Image from "next/image";
import Link from "next/link";
import BrandsSlider from './Sliders/BrandsSlider'

import VideoBackground from "./videos/Background";
import {
  DFC,
  Archivitus,
  iliha,
  labelanuneni,
  latonskincare,
  Prasidda_logo,
  ragingtuskers,
  serpsit,
} from "@/public/Client_Logos/ClientsData";

import BusinessWebsiteCover from '@/public/ServicesCover/BusinessWebsiteCover.webp'
import CRMERPCover from '@/public/ServicesCover/CRMERPCover.webp'
import CustomWebsiteCover from '@/public/ServicesCover/CustomWebsiteCover.webp'
import EcommerceCoverImage from '@/public/ServicesCover/EcommerceCoverImage.webp'

export const metadata = {
  title: 'Best Web Development & Digital marketing Company',
  description: 'We are a prominent web design and development, digital marketing, Graphic designing , Advertising and branding company based in India. We have a strong track record of working with well-known brands to create high-performance, user-friendly, and secure web and mobile applications. Our expertise can transform your innovative ideas into a driving force for your business success.',
}

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      {/*herosection */}
      <div className=" flex items-center justify-center">
        <VideoBackground />
        <div className=" z-10 relative mt-60 ">
          <section class="flex items-center justify-center relative">
            <div class="mx-auto">
              <div class="text-center">
                <null class="cursor-default  text-sm sm:text-2xl font-extrabold leading-8  text-white">
                  DESIGN . DEVELOP & DEPLOY
                </null>
                <h1 class="cursor-default upanddown font-extrabold text-transparent text-4xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
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
        </div>
      </div>



      {/*Services*/}
      <h2 className="mt-20 cursor-default pb-0 sm:pb-5 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
        Services
      </h2>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/services/webdevelopment"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Web Development{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        <Link
          href="/services/digitalmarketing"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Digital Marketing{" "}
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
            MultiMedia{" "}
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
            Branding{" "}
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
            Advertising{" "}
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
            Mobile App Development{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>
        <div></div>
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
      <div className="flex flex-col items-center p-1">
        <p className="text-xs text-gray-500">Brands Build</p>
        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
          9
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
      <div className="flex flex-col items-center p-1">
        <p className="text-xs text-gray-500">clients Recursion Rate</p>
        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
          100%
        </p>
      </div>
    </div>
  </div>
  
  <div className="w-auto sm:mr-20">
    <div className="column ">
      {/* Third Column */}
      <div className="flex flex-col items-center p-1">
        <p className="text-xs text-gray-500">Digital Marketing Clients</p>
        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
          16
        </p>
      </div>
      <div className="flex flex-col items-center p-1">
        <p className="text-xs text-gray-500">Apps Developed</p>
        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
          7
        </p>
      </div>
    </div>
  </div>
</div>


    
<BrandsSlider />
      {/*Logos*/}
      <div className="pt-16">
        <div className="container mx-auto px-6 ">
          <div className="m-auto text-center lg:w-7/12">
            <h2 className="cursor-default pb-0 sm:pb-5 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
              Our Clients
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <div className="p-4">
              <Image src={DFC} alt="" width={100} height={100} />
            </div>
            <div className="p-4">
              <Image src={Prasidda_logo} alt="" width={100} height={100} />
            </div>
            <div className="p-4">
              <Image src={serpsit} alt="" width={100} height={100} />
            </div>
            <div className="p-4">
              <Image src={iliha} alt="" width={100} height={100} />
            </div>
            <div className="p-4">
              <Image src={latonskincare} alt="" width={100} height={100} />
            </div>
            <div className="p-4">
              <Image src={labelanuneni} alt="" width={100} height={100} />
            </div>
            <div className="p-4">
              <Image src={Archivitus} alt="" width={100} height={100} />
            </div>
            <div className="p-4">
              <Image src={ragingtuskers} alt="" width={100} height={100} />
            </div>
          </div>
        </div>
      </div>


      {/*Web Development*/}
      <div className="min-h-screen flex flex-col justify-center items-center">
        {/* First Row */}
        <div className="text-center ">
          <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
            Web Development
          </h2>
          <p className=" text-sm opacity-50">
            Every business requires a unique website to effectively reach its
            customers or clients. At Cyber Space Digital, we're here to help you
            discover the best choices tailored to your needs.
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
        <p className="text-xs text-gray-500">Digital Marketing Clients</p>
        <p className="cursor-default font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
          16
        </p>
      </div>
    </div>
  </div>
</div>

 {/* Cards */}
<div className="flex flex-wrap">
  {/* First Column */}
  <div className=" w-1/2 lg:w-1/4 p-2">
    <div className="column">
      {/* Content for column 1 */}
      <Image
        src={BusinessWebsiteCover}
        alt="Card Image 1"
        className="w-full h-48 p-2 object-cover"
      />
      <div className="p-4">
        <h2 className="text-sm font-semibold text-white mb-2 text-center">
          Business Websites
        </h2>
        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
          <li> Start-up Companies.</li>
          <li> Marketing and Sales</li>
          <li>Single Website for SEO</li>
          <li>Enterprise</li>
        </a>
      </div>
    </div>
  </div>

  {/* Second Column */}
  <div className=" w-1/2 lg:w-1/4 p-2">
    <div className="column">
      {/* Content for column 2 */}
      <Image
        src={EcommerceCoverImage}
        alt="Card Image 2"
        className="w-full h-48 p-2 object-cover"
      />
      <div className="p-4">
        <h2 className="text-sm font-semibold text-white mb-2 text-center">
          E-commerce
        </h2>
        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
          <li>Single Vendor sales</li>
          <li>Multi Vendor sales</li>
          <li>Single sale page</li>
        </a>
      </div>
    </div>
  </div>

  {/* Third Column */}
  <div className=" w-1/2 lg:w-1/4 p-2">
    <div className="column ">
      {/* Content for column 3 */}
      <Image
        src={CustomWebsiteCover}
        alt="Card Image 3"
        className="w-full h-48 p-2 object-cover"
      />
      <div className="p-4">
        <h2 className="text-sm font-semibold text-white mb-2 text-center">
          Web Revamp
        </h2>
        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
          <li>Complete Redesign</li>
          <li>Complete Custom Code.</li>
          <li>Theme Change</li>
        </a>
      </div>
    </div>
  </div>

  {/* Fourth Column */}
  <div className=" w-1/2 lg:w-1/4 p-2">
    <div className="column">
      {/* Content for column 4 */}
      <Image
        src={CRMERPCover}
        alt="Card Image 4"
        className="w-full h-48 p-2 object-cover"
      />
      <div className="p-4">
        <h2 className="text-sm font-semibold text-white mb-2 text-center">
          CRM/ERP Panels
        </h2>
        <a className="text-white text-xs m-0 max-w-[20ch] opacity-50">
          <li>Custom Dashboard</li>
          <li>Custom Management</li>
          <li>All-in-one ERP solution.</li>
        </a>
      </div>
    </div>
  </div>
</div>

<div className="text-center p-2 mt-2 bg-white text-black text-sm rounded-sm">
       <Link href='/services/webdevelopment'> <button>Know More</button></Link></div>
      </div>

      {/*Digital Marketing*/}
      <div className="min-h-screen flex flex-col justify-center items-center">
        {/* First Row */}
        <div className="text-center ">
          <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
            Digital Marketing
          </h2>
          <p className=" text-sm opacity-50">
            In today's digital-driven world, businesses rely on digital
            marketing to expand their reach, engage with customers, and achieve
            success. It offers cost-effective strategies, real-time insights,
            and the ability to adapt to the ever-changing online landscape,
            making it an indispensable tool for modern businesses.
          </p>
        </div>

        {/* Second Row */}
        <div className="flex justify-center flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* First Column */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500">client retention rate</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              98.6%
            </p>
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <p className="text-sm text-gray-500">Websites build till now</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              50+
            </p>
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <p className="text-sm text-gray-500">Project Delivery on time</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              96%
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  SOCIAL MEDIA MARKETING
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>custom dashboard for your business.</li>
                  <li>custom management tool.</li>
                  <li>all in one erp solution.</li>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Local SEO and Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Single Vendor sales</li>
                  <li>Multi Vendor sales</li>
                  <li>Single sale page</li>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Youtube/Google Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Complete website redesign</li>
                  <li>Complete Development and Designing</li>
                  <li>Theme Change</li>
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Affiliate Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Custom dashboard for your business.</li>
                  <li>Custom management tool.</li>
                  <li>All in one erp solution.</li>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="m-10 text-sm">Know More</button>
      </div>

      {/*Multi Media*/}
      <div className="min-h-screen flex flex-col justify-center items-center">
        {/* First Row */}
        <div className="text-center ">
          <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
           Multi Media
          </h2>
          <p className=" text-sm opacity-50">
            In today's digital-driven world, businesses rely on digital
            marketing to expand their reach, engage with customers, and achieve
            success. It offers cost-effective strategies, real-time insights,
            and the ability to adapt to the ever-changing online landscape,
            making it an indispensable tool for modern businesses.
          </p>
        </div>

        {/* Second Row */}
        <div className="flex justify-center flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* First Column */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500">client retention rate</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              98.6%
            </p>
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <p className="text-sm text-gray-500">Websites build till now</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              50+
            </p>
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <p className="text-sm text-gray-500">Project Delivery on time</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              96%
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  SOCIAL MEDIA MARKETING
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>custom dashboard for your business.</li>
                  <li>custom management tool.</li>
                  <li>all in one erp solution.</li>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Local SEO and Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Single Vendor sales</li>
                  <li>Multi Vendor sales</li>
                  <li>Single sale page</li>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Youtube/Google Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Complete website redesign</li>
                  <li>Complete Development and Designing</li>
                  <li>Theme Change</li>
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Affiliate Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Custom dashboard for your business.</li>
                  <li>Custom management tool.</li>
                  <li>All in one erp solution.</li>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="m-10 text-sm">Know More</button>
      </div>

      {/*Branding*/}
      <div className="min-h-screen flex flex-col justify-center items-center">
        {/* First Row */}
        <div className="text-center ">
          <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
          Branding
          </h2>
          <p className=" text-sm opacity-50">
            In today's digital-driven world, businesses rely on digital
            marketing to expand their reach, engage with customers, and achieve
            success. It offers cost-effective strategies, real-time insights,
            and the ability to adapt to the ever-changing online landscape,
            making it an indispensable tool for modern businesses.
          </p>
        </div>

        {/* Second Row */}
        <div className="flex justify-center flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* First Column */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500">client retention rate</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              98.6%
            </p>
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <p className="text-sm text-gray-500">Websites build till now</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              50+
            </p>
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <p className="text-sm text-gray-500">Project Delivery on time</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              96%
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  SOCIAL MEDIA MARKETING
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>custom dashboard for your business.</li>
                  <li>custom management tool.</li>
                  <li>all in one erp solution.</li>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Local SEO and Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Single Vendor sales</li>
                  <li>Multi Vendor sales</li>
                  <li>Single sale page</li>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Youtube/Google Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Complete website redesign</li>
                  <li>Complete Development and Designing</li>
                  <li>Theme Change</li>
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Affiliate Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Custom dashboard for your business.</li>
                  <li>Custom management tool.</li>
                  <li>All in one erp solution.</li>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="m-10 text-sm">Know More</button>
      </div>

      {/*Advertising*/}
      <div className="min-h-screen flex flex-col justify-center items-center">
        {/* First Row */}
        <div className="text-center ">
          <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
          Advertising
          </h2>
          <p className=" text-sm opacity-50">
            In today's digital-driven world, businesses rely on digital
            marketing to expand their reach, engage with customers, and achieve
            success. It offers cost-effective strategies, real-time insights,
            and the ability to adapt to the ever-changing online landscape,
            making it an indispensable tool for modern businesses.
          </p>
        </div>

        {/* Second Row */}
        <div className="flex justify-center flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* First Column */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500">client retention rate</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              98.6%
            </p>
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <p className="text-sm text-gray-500">Websites build till now</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              50+
            </p>
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <p className="text-sm text-gray-500">Project Delivery on time</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              96%
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  SOCIAL MEDIA MARKETING
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>custom dashboard for your business.</li>
                  <li>custom management tool.</li>
                  <li>all in one erp solution.</li>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Local SEO and Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Single Vendor sales</li>
                  <li>Multi Vendor sales</li>
                  <li>Single sale page</li>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Youtube/Google Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Complete website redesign</li>
                  <li>Complete Development and Designing</li>
                  <li>Theme Change</li>
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Affiliate Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Custom dashboard for your business.</li>
                  <li>Custom management tool.</li>
                  <li>All in one erp solution.</li>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="m-10 text-sm">Know More</button>
      </div>

      {/*Mobile App Development*/}
      <div className="min-h-screen flex flex-col justify-center items-center">
        {/* First Row */}
        <div className="text-center ">
          <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
          Mobile App Development
          </h2>
          <p className=" text-sm opacity-50">
            In today's digital-driven world, businesses rely on digital
            marketing to expand their reach, engage with customers, and achieve
            success. It offers cost-effective strategies, real-time insights,
            and the ability to adapt to the ever-changing online landscape,
            making it an indispensable tool for modern businesses.
          </p>
        </div>

        {/* Second Row */}
        <div className="flex justify-center flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* First Column */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500">client retention rate</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              98.6%
            </p>
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <p className="text-sm text-gray-500">Websites build till now</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              50+
            </p>
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <p className="text-sm text-gray-500">Project Delivery on time</p>
            <p className="cursor-default font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              96%
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  SOCIAL MEDIA MARKETING
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>custom dashboard for your business.</li>
                  <li>custom management tool.</li>
                  <li>all in one erp solution.</li>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Local SEO and Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Single Vendor sales</li>
                  <li>Multi Vendor sales</li>
                  <li>Single sale page</li>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Youtube/Google Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Complete website redesign</li>
                  <li>Complete Development and Designing</li>
                  <li>Theme Change</li>
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Card Image 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-black mb-2 text-center">
                  Affiliate Marketing
                </h2>
                <a className="text-gray-700 text-sm">
                  <li>Custom dashboard for your business.</li>
                  <li>Custom management tool.</li>
                  <li>All in one erp solution.</li>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="m-10 text-sm">Know More</button>
      </div>
    </main>
  );
}
