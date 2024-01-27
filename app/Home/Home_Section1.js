import React from 'react'
import BrandsSlider from "../../components/Sliders/BrandsSlider";

const Home_Section1 = () => {
  return (
     <div className=" min-h-screen  lg:max-w-5xl lg:w-full flex flex-col justify-center items-center">
     {/* First Row */}
     <div className="text-center ">
       <h2 className=" cursor-default mt-8 upanddown font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
         Our Clients
       </h2>
       <p className=" text-sm opacity-50">We provide the best.</p>
     </div>
     <BrandsSlider />
   </div>
  )
}

export default Home_Section1