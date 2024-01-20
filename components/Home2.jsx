// YourExistingSection.js
import Contacus from '../app/contact/images/Contact_us.png'

import Image from 'next/image';
import Link from 'next/link';

const YourExistingSection = () => {
  return (
    <section className="snap-point relative flex items-center justify-center text-center mx-auto my-8 bg-cover bg-center min-h-screen">
      <div className="absolute inset-0">
        <Image
          src={Contacus}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 ">
        <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 tracking-tight">
          Need Help ?
        </h2>
        <p className="cursor-default text-sm font-medium text-white mt-5 mb-10">
          Explore our comprehensive documentation for more information on our
          services.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/* Your button code here */}
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contact">
              <button className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
                FAQ
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-white transition-colors hover:bg-slate-50 hover:text-black">
                Contact us
              </button>
            </Link>
          </div>
      </div>
      
      

    </section>
  );
};

export default YourExistingSection;
