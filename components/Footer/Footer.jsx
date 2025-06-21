import React from "react";
import Link from "next/link";

import { goodfirms, googlereview } from "../../public/icons";

import footer_csd from "./csdv2Logo.svg";

import { ImFacebook2, ImInstagram, ImTwitter, ImGithub } from "react-icons/im";
import Image from "next/image";

import { GlobalData } from "@/public/GlodalData";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <main className="bg-black  justify-center ">
      {/* Footer */}
      <section className="bg-black pb-5">
        <footer>
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-9 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <div className="text-white mb-2">
                  <div className="leading-tight tracking-tighter">
                    <h4 className="text-[46px] font-bold">Need Help?</h4>
                    <p className="text-[26px] ">+91 81434 07758</p>
                    <p className="text-[16px]">we are available 24/7.</p>
                  </div>
                </div>
                <Link href="/">
                  <Image
                    src={footer_csd}
                    alt="footer_csd"
                    width="200"
                    height="200"
                  />
                </Link>
                <p className="max-w-xs mt-4 text-[12px] text-gray-600 ">
                  We are a web Developing & Designing company with a mission to
                  help build there business online. We accomplish this by
                  continuously developing technology, giving expert assistance,
                  and ensuring a flawless online website experience.
                  <br />
                </p>

                <div className="flex space-x-6 text-gray-600 pt-2">
                  <Link href={GlobalData.company.companyfacebook}>
                    <ImFacebook2 />
                  </Link>
                  <Link href={GlobalData.company.companyinstagram}>
                    <ImInstagram />
                  </Link>
                  <Link href={GlobalData.company.companytwitter}>
                    <ImTwitter />
                  </Link>
                  <Link href={GlobalData.company.companygit}>
                    <ImGithub />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
                <div>
                  <p className="font-medium text-white">Company</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-gray-500">
                    <a href="/aboutus"> About us </a>
                    <a href="/clients"> Clients </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-white">Services</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-gray-500">
                    <a href="https://search.google.com/local/writereview?placeid=ChIJM0IEPqRRmg0RyLQAP_5varc">
                      {" "}
                      Google Map Review{" "}
                    </a>
                    <a href="/reviews"> Client Review </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-white">Helpful Links</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-gray-500">
                    <a href="/contactus"> Contact </a>
                    <a href="/contactus"> FAQs </a>
                    <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital">
                      {" "}
                      Live Chat{" "}
                    </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-white">Legal</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-gray-500">
                    <Link href="/Legal/privacy-policy"> Privacy Policy </Link>
                    <Link href="/Legal/terms-and-conditions">
                      <div> Terms & Conditions </div>
                    </Link>

                    <Link href="/Legal/return-policy">
                      <div> Cancellation & Refund Policy </div>
                    </Link>

                    <Link href="/Legal/disclaimer">
                      <div> Disclaimer </div>
                    </Link>

                    <Link href="/Legal/shipping-and-delivery">
                      <div> Shipping & Delivery </div>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div
                className="p-2"
                href="https://www.goodfirms.co/company/cyber-space-digital"
              >
                <Image
                  className="h-10 rounded-sm hover:animate-pulse max-w-full"
                  src={goodfirms}
                  alt="goodfirms_icon"
                  width="120"
                  height="50"
                />
              </div>
              <div
                className="p-2"
                href="https://g.page/r/Cci0AD_-b2q3EAI/review"
              >
                <Image
                  className="h-10 hover:animate-pulse max-w-full"
                  src={googlereview}
                  alt="googlereview_icon"
                  width="120"
                  height="50"
                />
              </div>
            </div>

            <div className="h-px my-8 border-0 bg-gray-700" />
            <p
              id="copyright"
              className="cursor-default text-center text-[12px] text-white"
            >
              © 2020-<span> {currentYear} </span>
              <span className="font-bold">Cyber Space Digital.</span> All Rights
              Reserved.
              <br />A Development & Designer Community ( #CSD )
            </p>
            <div className="flex pt-4 justify-center text-white text-[12px] space-x-4">
              <a href="/Legal/privacy-policy">Privacy Policy</a>
              <a href="/Legal/terms-and-conditions">Terms & Conditions</a>
              <a href="/Legal/disclaimer">Disclaimer</a>
              <a href="/site-map">Site Map</a>
            </div>
          </div>
        </footer>
        <section />
      </section>
    </main>
  );
};

export default Footer;
