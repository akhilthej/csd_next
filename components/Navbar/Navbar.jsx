import Image from "next/image";
import CsdLogo from './csdv2Logo.svg';
import Link from "next/link";

import {
  FaWhatsapp,
} from "react-icons/fa";


const Navbar = () => {
  return (
    <nav>
    <div className="w-full fixed top-0 z-50 px-10">
      <div className="w-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Left Column - Centered Logo */}
        <Link href="/" className="h-auto w-auto py-4 flex flex-row items-center">
          <Image
            src={CsdLogo}
            alt="csdlogo"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </Link>

        {/* Center Column - Title */}
        <div className="flex-1 text-center">
          
        </div>

      </div>
    </div>



    <>
  <link
    rel="stylesheet"
    href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
  />
  {/* Container */}
  <div className="flex items-center fixed bottom-0 z-10 w-full justify-center">
    <div className="flex flex-col">
      <div className=" px-7 py-5 mx-auto rounded-2xl ">
        {/* Navigation Bar */}
        <div className="px-5 pt-3 bg-black/50 backdrop-blur-xl shadow-lg rounded-2xl">
          <div className="flex flex-row space-x-3">
            {/* Item #1 */}
            
            <div className="flex group">
              <Link href="/services" className="p-3 text-white hover:text-yellow-500">
                <span className="flex flex-col items-center">
                  {/* Icon */}
                  <i
                    className="mdi mdi-layers-outline mdi-24px mx-1 text-white group-hover:text-yellow-500
									transition-color duration-200"
                  />
                  {/* Text */}
                  <span className="text-xs mb-2 transition-all duration-200">
                    Services
                  </span>
                  {/* Focus Dot */}
                  <span
                    className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"
                  />
                </span>
              </Link>
            </div>
            {/* Item #2 */}
            <div className="flex group">
              <Link href="/blog" className="p-3 text-white hover:text-yellow-500">
                <span className="flex flex-col items-center">
                  {/* Icon */}
                  <i
                    className="mdi mdi-compass-outline mdi-24px mx-1 text-white group-hover:text-yellow-500
									transition-color duration-200"
                  />
                  {/* Text */}
                  <span className="text-xs mb-2 transition-all duration-200">
                    Explore
                  </span>
                  {/* Focus Dot */}
                  <span
                    className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"
                  />
                </span>
              </Link>
            </div>

            {/* Item #3 Active */}
            <div className="flex group">
              <Link href="/" className="p-3 text-white hover:text-yellow-500">
                <span className="flex flex-col items-center">
                  {/* Icon */}
                  <i
                    className="mdi mdi-home-outline mdi-24px mx-1 text-white group-hover:text-yellow-500
									transition-color duration-200"
                  />
                  {/* Text */}
                  <span className="text-xs mb-2 transition-all duration-200">
                    Home
                  </span>
                  {/* Focus Dot */}
                  <span
                    className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"
                  />
                </span>
              </Link>
            </div>

            {/* Item #4 */}
            <div className="flex group">
              <Link href="/about" className="p-3 text-white hover:text-yellow-500">
                <span className="flex flex-col items-center">
                  {/* Icon */}
                  <i
                    className="mdi mdi-basket-plus-outline mdi-24px mx-1 text-white group-hover:text-yellow-500
									transition-color duration-200"
                  />
                  {/* Text */}
                  <span className="text-xs mb-2 transition-all duration-200">
                    About
                  </span>
                  {/* Focus Dot */}
                  <span
                    className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"
                  />
                </span>
              </Link>
            </div>

            {/* Item #5 */}
            <div className="flex group">
              <Link href="/contact" className="p-3 text-white hover:text-yellow-500">
                <span className="flex flex-col items-center">
                  {/* Icon */}
                  <i
                    className="mdi mdi-account-circle-outline mdi-24px mx-1 text-white group-hover:text-yellow-500
									transition-color duration-200"
                  />
                  {/* Text */}
                  <span className="text-xs mb-2 transition-all duration-200">
                    Contact
                  </span>
                  {/* Focus Dot */}
                  <span
                    className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <section className=" flex items-end justify-start fixed bottom-0 left-0 ">
    <div> 
      <ul className='flex items-center  -mb-5'>
        <div className='px-2'>
        <Link href='https://wa.me/918143407758?text=Im%20inquiring%20from%20web%20site'><FaWhatsapp className="w-10 h-10 text-green-500 mb-5 " /></Link>
          </div>
        </ul>
        <null className=' cursor-default text-white italic text-xs pb-2'>Designed & Developed by <Link href="https://cyberspacedigital.in/"> Cyber Space Digital</Link></null>
    </div>
  </section>

</>



</nav>
  );
};

export default Navbar;
