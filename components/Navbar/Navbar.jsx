import Image from "next/image";
import CsdLogo from './csdv2Logo.svg';
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 shadow-lg shadow-[#4f2c1a17]/50 bg-[#00000017] backdrop-blur-md z-50 px-10">
      <div className="w-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/"
          className="h-auto w-auto py-2 flex flex-row items-center">
           <Image
        src={CsdLogo}
        alt="csdlogo"
        width={50}
        height={50}
        className="cursor-pointer "
      />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Cyber Space Digital
          </span>
        </Link>

        

        
      </div>
    </div>
  );
};

export default Navbar;
