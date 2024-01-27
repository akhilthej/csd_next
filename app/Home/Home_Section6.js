import Link from 'next/link'
import React from 'react'


const Home_Section6 = () => {
  return (
    <div className="min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
    {/* First Row */}
    <div className="text-center ">
      <h2 className="cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
        Advertising
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
  )
}

export default Home_Section6