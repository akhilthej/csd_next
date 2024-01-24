import React from 'react'
import {
  DFC,
  Archivitus,
  iliha,
  labelanuneni,
  latonskincare,
  Prasidda_logo,
  ragingtuskers,
  serpsit,ThreeFatLogo,UJB,
} from "@/public/Client_Logos/ClientsData";
import Image from 'next/image';


const BrandsSlider = () => {
  
  return (

    <div className="container mx-auto mt-8">
    <div className="grid grid-cols-3 sm:grid-cols-3 gap-1">
      {/* Item 1 */}
      <div className="p-1 ">
        {/* Add content for Item 1 */}
        <Image
          src={DFC}
          className="w-32"
          alt=""
        />
      </div>

      {/* Item 2 */}
      <div className="p-1 ">
        {/* Add content for Item 2 */}
        <Image
          src={Archivitus}
          className="w-32"
          alt=""
        />
      </div>

      {/* Item 3 */}
      <div className="p-1 ">
        {/* Add content for Item 3 */}
        <Image
          src={iliha}
          className="w-32"
          alt=""
        />
      </div>

      {/* Item 4 */}
      <div className="p-1 ">
        {/* Add content for Item 4 */}
        <Image
          src={labelanuneni}
          className="w-32"
          alt=""
        />
      </div>

      {/* Item 5 */}
      <div className="p-1 ">
        {/* Add content for Item 5 */}
        <Image
          src={latonskincare}
          className="w-32"
          alt=""
        />
      </div>

      {/* Item 6 */}
      <div className="p-1 ">
        {/* Add content for Item 6 */}
        <Image
          src={Prasidda_logo}
          className="w-32"
          alt=""
        />
      </div>

      {/* Item 7 */}
      <div className="p-1 ">
        {/* Add content for Item 6 */}
        <Image
          src={ragingtuskers}
          className="w-32"
          alt=""
        />
      </div>

       {/* Item 7 */}
       <div className="p-1 ">
        {/* Add content for Item 6 */}
        <Image
          src={serpsit}
          className="w-32"
          alt=""
        />
      </div>

       {/* Item 7 */}
       <div className="p-1 ">
        {/* Add content for Item 6 */}
        <Image
          src={ThreeFatLogo}
          className="w-32"
          alt=""
        />
      </div>

       {/* Item 7 */}
       <div className="p-1 ">
        {/* Add content for Item 6 */}
        <Image
          src={UJB}
          className="w-32"
          alt=""
        />
      </div>
    </div>
  </div>

  )
}

export default BrandsSlider