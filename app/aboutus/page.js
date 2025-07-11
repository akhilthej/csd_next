"use client";

import Head from "next/head";

import {
  AboutCover,
  CEO,
  CEO_OriginalImage,
  CTO,
  CTO_OriginalImage,
  COO,
  COO_OriginalImage,
} from "../../public/images";
import Image from "next/image";
import { useState } from "react";

const Aboutus = () => {
  const [isCEOHovered, setIsCEOHovered] = useState(false);
  const [isCOOHovered, setIsCOOHovered] = useState(false);
  const [isCTOHovered, setIsCTOHovered] = useState(false);

  return (
    <div className="Aboutus">
      <Head>
        <title>About Us - Cyber Space Digital</title>
        <meta
          name="description"
          content="Know more about our Company and our team Cyber Space Digital."
        />
        <link rel="canonical" href="/aboutus" />
      </Head>

      <main className="mt-28">
        <section>
          <h2 className="text-3xl text-center lg:text-4xl font-bold leading-9 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
            About Us
          </h2>
          <p className="font-normal text-base leading-6 text-black px-10 pb-4">
            We are a group of 5 experienced individuals working in web
            development and digital services for a diverse range of local and
            international brands. We have been in business for the past 6 years,
            providing high-quality, innovative solutions to meet the unique
            needs of each of our clients. With a strong focus on user experience
            and a deep understanding of the latest industry trends and
            technologies, we have established a reputation for delivering
            exceptional results. Our team has a wide range of skills and
            expertise, including front-end and back-end development, digital
            marketing, and project management, which allows us to provide
            comprehensive services that drive real results for our clients.
            Whether youre a small startup or a large enterprise, we have the
            skills and experience to help you achieve your goals.
          </p>
        </section>

        {/* "need Help" section */}
        <section className="text-center mx-auto my-8 bg-yellow-500 py-10">
          <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-white  tracking-tight ">
            Your Vision, Our Code – Perfectly Executed.
          </h2>
          <p className="cursor-default text-sm font-medium text-black">
            Unlocking the Full Potential of Your Online Brand.
          </p>
        </section>

        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                Our Story
              </h2>
              <p className="font-normal text-base leading-6 text-black">
                Our story began 6 years ago, when a group of 5 engineering
                students came together with a shared passion for web development
                and digital services. We had all studied computer science and
                had a keen interest in technology, and we saw an opportunity to
                use our skills to help local and international brands grow their
                online presence.
                <br />
                We started small, working on freelance projects and building our
                portfolio. We quickly realized that there was a high demand for
                our services and that we had a real talent for creating custom
                websites and web applications that met the unique needs of each
                of our clients.
                <br />
                As our business grew, we decided to form a digital agency, and
                we were able to attract a diverse range of clients, from small
                startups to large enterprises. We were driven by our desire to
                provide high-quality, innovative solutions that would help our
                clients achieve their goals.
                <br />
                Over the past 6 years, we have built a reputation for delivering
                exceptional results, and we have established a loyal customer
                base. We have a wide range of skills and expertise, including
                front-end and back-end development, digital marketing, and
                project management, which allows us to provide comprehensive
                services that drive real results for our clients.
              </p>
            </div>
            <div className="w-full lg:w-8/12 lg:h-3/5">
              <Image
                className="w-full h-full rounded-2xl shadow-2xl"
                src={AboutCover.src}
                alt="A group of People"
                width={800}
                height={500}
              />

              <p className="font-normal text-base leading-6 mt-10 text-black">
                We have had many successes and also faced many challenges, but
                we have learned from our mistakes and have grown as a team. Now,
                we are a team of experts who have worked with a variety of
                industries and have developed a deep understanding of what works
                best for each of them.
                <br />
                We are proud of our achievements and are excited about the
                future. We are committed to continuously learning and staying
                up-to-date with the latest industry trends and technologies, so
                that we can continue to provide the best possible service to our
                clients.
                <br />
                Looking back, we can say that we are grateful for the
                opportunity to turn our passion into a successful business and
                we are looking forward to continue providing our clients with
                the best solutions to help them grow their online presence.
              </p>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-3xl text-center lg:text-4xl font-bold leading-9 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
            More About Us
          </h2>
          <p className="font-normal text-base leading-6 text-black px-10 pb-4">
            As a group of web developers and digital service providers, we
            specialize in creating custom websites and web applications that are
            tailored to the specific needs of each of our clients. Our team has
            a wealth of experience in various web development technologies and
            frameworks, including HTML, CSS, JavaScript, React, Angular, Vue,
            and more.
            <br /> We are also proficient in back-end development, using
            technologies such as NodeJS, PHP, and Python to create robust and
            scalable systems that can handle high traffic and complex business
            logic. Our team is also well-versed in database management and
            optimization, ensuring that our solutions are performant and
            efficient.
            <br />
            In addition to web development, we also provide a range of digital
            services such as digital marketing, search engine optimization
            (SEO), social media marketing, and email marketing to help our
            clients reach a wider audience and generate more leads. We have a
            team of experts who have worked with a variety of industries and
            have developed a deep understanding of what works best for each of
            them.
            <br />
            We also have a strong focus on user experience and design, creating
            visually stunning and user-friendly websites that are easy to
            navigate and engage with. Our design team works closely with our
            development team to ensure that each project is aesthetically
            pleasing and fully functional.
            <br />
            Finally, we pride ourselves on our project management skills,
            ensuring that each project is delivered on time, within budget, and
            to the highest standards of quality. We keep our clients informed
            throughout the development process, making sure that they are happy
            with the progress and that any issues are addressed in a timely
            manner.
          </p>
        </section>

        {/*.....Owners.....*/}
        <div className="py-20">
          <div className="container mx-auto px-2 md:px-12 xl:px-32">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-center text-2xl font-bold md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                Leadership Board
              </h2>
              <p className="text-black lg:w-8/12 lg:mx-auto">
                CSD is known for its multi-project handling. We deal with
                various technologies and development projects, the talent of its
                people includes some of the brightest minds and most experienced
                executives in business.
              </p>
            </div>

            <div className="grid items-center grid-cols-3 space-x-2">
              <div className="space-y-4 text-center">
                <div
                  onMouseEnter={() => setIsCOOHovered(true)}
                  onMouseLeave={() => setIsCOOHovered(false)}
                  className="relative"
                >
                  <Image
                    className="w-64 h-64 cursor-pointer mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                    src={isCOOHovered ? COO_OriginalImage.src : COO.src} // Conditional rendering based on hover state
                    loading="lazy"
                    width={640}
                    height={805}
                    alt="Jayaraj Gedela"
                  />
                </div>
                <div>
                  <h4 className="text-[12px] md:text-2xl text-black">
                    Jayaraj Gedela
                  </h4>
                  <span className="block text-sm text-gray-900 ">
                    Chief Operations Officer
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-center">
                <div
                  onMouseEnter={() => setIsCEOHovered(true)}
                  onMouseLeave={() => setIsCEOHovered(false)}
                  className="relative"
                >
                  <Image
                    className="w-64 h-64 mx-auto cursor-pointer object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                    src={isCEOHovered ? CEO_OriginalImage.src : CEO.src} // Conditional rendering based on hover state
                    loading="lazy"
                    width={1000}
                    height={667}
                    alt="Akhil Thej Reddy"
                  />
                </div>
                <div>
                  <p>Founder</p>
                  <h4 className="text-[12px] md:text-2xl text-black">
                    Akhil Thej Reddy
                  </h4>
                  <span className="block text-sm text-gray-900">
                    Chief Executive Officer
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-center">
                <div
                  onMouseEnter={() => setIsCTOHovered(true)}
                  onMouseLeave={() => setIsCTOHovered(false)}
                  className="relative"
                >
                  <Image
                    className="w-64 h-64 cursor-pointer mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                    src={isCTOHovered ? CTO_OriginalImage.src : CTO.src} // Conditional rendering based on hover state
                    loading="lazy"
                    width={1000}
                    height={667}
                    alt="Pavan Kumar"
                  />
                </div>
                <div>
                  <h4 className="text-[12px] md:text-2xl text-black">
                    Pavan Kumar
                  </h4>
                  <span className="block text-sm text-gray-900">
                    Chief Technical Officer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aboutus;
