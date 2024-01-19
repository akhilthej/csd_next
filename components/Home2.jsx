import VideoBackground from "./videos/Background";

export const metadata = {
  title: "Best Web Development & Digital marketing Company",
  description:
    "We are a prominent web design and development, digital marketing, Graphic designing , Advertising and branding company based in India. We have a strong track record of working with well-known brands to create high-performance, user-friendly, and secure web and mobile applications. Our expertise can transform your innovative ideas into a driving force for your business success.",
};

export default function Home() {
  return (
      <main className=" flex items-center justify-center min-h-screen">
        <VideoBackground />
        <div className=" z-10 relative mt-60 ">
          <section class="flex items-center justify-center relative">
            <div class="mx-auto">
              <div class="text-center">
                <null class="cursor-default  text-sm sm:text-2xl font-extrabold leading-8  text-white">
                  DESIGN . DEVELOP & DEPLOY
                </null>
                <h1 class="cursor-default upanddown font-extrabold text-transparent text-4xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 leading-[3.5rem] tracking-tight">
                  Cyber Space Digital
                </h1>

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
      </main>
   
  );
}
