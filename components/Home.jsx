import VideoBackground from "./videos/Background";
import './Animations/title.css'

export const metadata = {
  title: "Best Web Development & Digital marketing Company",
  description:
    "We are a prominent web design and development, digital marketing, Graphic designing , Advertising and branding company based in India. We have a strong track record of working with well-known brands to create high-performance, user-friendly, and secure web and mobile applications. Our expertise can transform your innovative ideas into a driving force for your business success.",
};

export default function Home() {
  return (
      <section className=" flex items-center justify-center min-h-screen">
        <VideoBackground />
        <div className=" z-10 relative ">
          <section class="flex items-center justify-center relative">
            <div class="mx-auto">
              <div class="text-center">
                <null class="cursor-default text-sm sm:text-2xl font-extrabold leading-8  text-white">
                  DESIGN . DEVELOP & DEPLOY
                </null>

<null className="animate-fade-in">
                <div className="hidden w-screen h-px  md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
 

                <h1 className="z-10 upanddown text-4xl md:text-9xl lg:text-8xlfont-extrabold text-transparent duration-1000 bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight  cursor-default text-edge-outline animate-title font-display sm:text-6xl  whitespace-nowrap bg-clip-text ">
        CYBER SPACE DIGITAL
      </h1>
                <div className="hidden w-screen h-px  md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
</null>

                <p class="cursor-default text-sm sm:text-xl font-extrabold leading-8 text-gray-200">
                  Take your brand online today for a global presence.
                </p>
              </div>
              <div class="mt-6 flex items-center justify-center gap-4 flex-wrap">
                <a href="/contactus">
                  <button class="text-xs sm:text-sm transform rounded bg-yellow-500 px-12 py-2 font-medium text-black transition-colors hover:bg-orange-500">
                    Build Today
                  </button>
                </a>
                <a href="/getquotation">
                  <button class="text-xs sm:text-sm transform rounded bg-yellow-500 px-12 py-2 font-medium text-black transition-colors hover:bg-orange-500">
                    Get Quotation
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
   
  );
}
