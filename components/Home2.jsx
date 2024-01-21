import Link from 'next/link'
import React from 'react'

const Home2 = () => {
  return (
    <>
    {/* "Documentation" section */}
    <section className="text-center mx-auto my-8">
          <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
            Need Help ?
          </h2>
          <p className="cursor-default text-sm font-medium text-white mt-5 mb-10">
            Explore our comprehensive documentation for more information on our
            services.
          </p>
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
        </section>
        </>
  )
}

export default Home2