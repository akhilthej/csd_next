import React from 'react';

import Link from 'next/link';
import {
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
 <div className=" flex items-end justify-start fixed bottom-0 left-0 ">
    <div> 
      <ul className='flex items-center  -mb-5'>
        <div className='px-2'>
        <Link href='https://wa.me/918143407758?text=Im%20inquiring%20from%20web%20site'><FaWhatsapp className="w-10 h-10 text-green-500 mb-5 " /></Link>
          </div>
        </ul>
        <null className=' cursor-default text-white italic text-xs pb-2'>Designed & Developed by <Link href="https://cyberspacedigital.in/"> Cyber Space Digital</Link></null>
    </div>
  </div>
</footer>
  )
}

export default Footer