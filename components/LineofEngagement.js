import { FixedPrice, TimeManage, OntimeDelivery, HiringModel } from "../public/icons";
import Image from "next/image";

const engagementModels = [
  {
    icon: FixedPrice,
    title: "Fixed Price Model",
    description: "Under this model, the web development company and the client agree on a fixed price for the entire project scope.",
  },
  {
    icon: TimeManage,
    title: "Time and Materials Model",
    description: "The client pays based on the time and resources spent on the project.",
  },
  {
    icon: OntimeDelivery,
    title: "On-Time Delivery",
    description: "The web development company commits to delivering projects on or before agreed-upon deadlines.",
  },
  {
    icon: HiringModel,
    title: "Hiring Model",
    description: "If your project requires additional manpower and extra resources, we're ready to scale up and bring in the necessary talent to meet your needs.",
  },
];

export default function LineofEngagement() {
  return (
    <section className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10">
      <div className="xl:max-w-8xl mx-auto px-4">
        <div className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3">
            Line of Engagement
          </h2>
          <p className="text-sm font-medium text-black">
            Streamline the management of advertising and content for your business, saving you valuable time.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 text-center">
          {engagementModels.map(({ icon, title, description }, index) => (
            <div
              key={title}
              className="px-4 w-full sm:w-1/2 lg:w-1/4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={`${index * 0.1}s`}
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: `${index * 0.1}s`,
                animationName: "fadeInUp",
              }}
            >
              <div className="py-8 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="mb-4">
                  <Image
                    src={icon}
                    alt={title}
                    width={900}
                    height={600}
                    className="w-40 mx-auto"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
