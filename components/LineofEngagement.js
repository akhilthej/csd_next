import {
  FixedPrice,
  TimeManage,
  OntimeDelivery,
  HiringModel,
} from "../public/icons";
import Image from "next/image";
function LineofEngagement() {
  return (
      <section className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10">
          <div className="xl:max-w-8xl mx-auto px-4">
            <section className="text-center mx-auto mb-12 lg:px-20">
              <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 ">
                Line of Engagement
              </h2>
              <p className="text-sm font-medium text-black">
                Streamline the management of advertising and content for your
                business, saving you valuable time.
              </p>
            </section>

            <div className="flex flex-wrap flex-row -mx-4 text-center">
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <Image
                      src={FixedPrice}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Fixed Price Model
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Under this model, the web development company and the client
                    agree on a fixed price for the entire project scope.
                  </p>
                </div>
              </div>

              {/* "Time and Materials Model" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <Image
                      src={TimeManage}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Time and Materials Model
                  </h3>
                  <p className="text-gray-500 text-sm">
                    The client pays based on the time and resources spent on the
                    project.
                  </p>
                </div>
              </div>

              {/* "On-Time Delivery" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <Image
                      src={OntimeDelivery}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    On-Time Delivery
                  </h3>
                  <p className="text-gray-500 text-sm">
                    The web development company commits to delivering projects
                    on or before agreed-upon deadlines.
                  </p>
                </div>
              </div>

              {/* "Hiring Model" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <Image
                      src={HiringModel}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Hiring Model
                  </h3>
                  <p className="text-gray-500 text-sm">
                    if your project requires additional manpower and extra
                    resources, we're ready to scale up and bring in the
                    necessary talent to meet your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default LineofEngagement