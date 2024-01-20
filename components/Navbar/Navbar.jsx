import Image from "next/image";
import CsdLogo from './csdv2Logo.svg';
import Link from "next/link";

const Navbar = () => {
  return (
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

        {/* Right Column - About us and Contact us */}
        <div className="flex flex-row">
          <Link href="/about" className="mx-4">
            <div className="text-sm ">ABOUT US</div>
          </Link>
          <Link href="/contact" className="mx-4">
            <div className="text-sm ">CONTACT US</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
