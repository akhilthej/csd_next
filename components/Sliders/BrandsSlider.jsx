import React from 'react'
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
import Image from 'next/image';

const BrandsSlider = () => {
  return (

    <div className="py-16">
  <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
    <div className="m-auto text-center lg:w-7/12">
      <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">
        Your favorite companies are our partners.
      </h2>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      <div className="p-4">
        <Image
          src={DFC}
          className="w-32"
          alt=""
        />
      </div>
      <div className="p-4">
        <Image
          src={Archivitus}
          className="w-32 "
          alt=""
        />
      </div>
      <div className="p-4">
        <Image
          src={iliha}
          className="w-32 "
          alt=""
        />
      </div>
      <div className="p-4">
        <Image
          src={labelanuneni}
          className="w-32 "
          alt=""
        />
      </div>
      <div className="p-4">
        <Image
          src={latonskincare}
          className="w-32"
          alt=""
        />
      </div>
      <div className="p-4">
        <Image
          src={Prasidda_logo}
          className="w-32"
          alt=""
        />
      </div>
      <div className="p-4">
        <Image
          src={serpsit}
          className="w-20"
          alt=""
        />
      </div>
      <div className="p-4">
        <Image
          src={ragingtuskers}
          className="w-24"
          alt=""
        />
      </div>
    </div>
  </div>
</div>

  )
}

export default BrandsSlider