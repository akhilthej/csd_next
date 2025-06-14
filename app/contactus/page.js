"use client";
import Head from "next/head";
import Image from "next/image";
import { ContactUsCover, ourproducts_contact } from "../../public/images";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const discordWebhookUrl = process.env.NEXT_PUBLIC_DIS_API;

    if (!discordWebhookUrl) {
      console.error("Discord webhook URL is not defined.");
      alert("Error: Discord webhook URL is not configured.");
      return;
    }

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const isValidPhone = (phone) => /^\+?\d{10,15}$/.test(phone);

    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    const message = {
      content: `Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`,
    };

    try {
      const response = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        alert(
          `Error: ${
            errorData.message ||
            "Error submitting the form. Please try again later."
          }`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="mb-6">
      <Head>
        <title>Contact us - Cyber Space Digital</title>
        <meta
          name="description"
          content="Web Development and Digital Marketing Company. We are here to build your business online. One stop for all your digital needs."
        />
        <link rel="canonical" href="/contactus" />
      </Head>

      {/* Title Card */}
      <section className="py-10 sm:py-40 relative">
        <div className="absolute inset-0">
          <Image
            src={ContactUsCover}
            alt="Contact Us Cover"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center relative z-10">
          <div className="md:w-1/2 md:pr-10"></div>
          <div className="md:w-1/2 px-5">
            <div className="text-right md:text-left">
              <h3 className="cursor-default text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
                Get in touch,
                <br />
                we’d love to hear from you.
              </h3>
              <p className="cursor-default text-white sm:text-sm text-xs text-center sm:ml-0">
                You can contact us through mail or you can get in touch at our
                digital office.
              </p>
              {/* Button Row */}
              <div className="mt-5 flex flex-row flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-4 overflow-x-auto">
                <a
                  href="mailto:mail@cyberspacedigital.in"
                  className="flex items-center gap-2 whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm sm:text-base font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  <FaEnvelope />
                  Email
                </a>
                <a
                  href="tel:+91-814-340-7758"
                  className="flex items-center gap-2 whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm sm:text-base font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  <FaPhone />
                  Phone
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital"
                  className="flex items-center gap-2 whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm sm:text-base font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
        <div>
          <h1 className="text-3xl font-extrabold">Let's Talk</h1>
          <p className="text-sm text-gray-400 mt-3">
            Have some big idea or brand to develop and need help? Then reach
            out, we'd love to hear about your project and provide help.
          </p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <HiOutlineMail className="text-yellow-500 text-[20px]" />
                </div>
                <a
                  target="blank"
                  href="mailto:mail@cyberspacedigital.in"
                  className="text-yellow-500 text-sm ml-3"
                >
                  <small className="block">Mail</small>
                  <strong>mail@cyberspacedigital.in</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Socials</h2>
            <ul className="flex mt-3 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="javascript:void(0)"
                  className="text-yellow-500 text-[20px]"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="javascript:void(0)"
                  className="text-yellow-500 text-[20px]"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="javascript:void(0)"
                  className="text-yellow-500 text-[20px]"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="ml-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-yellow-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-yellow-500"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-yellow-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-yellow-500"
            required
          />
          <button
            type="submit"
            className="text-white bg-yellow-500 hover:bg-yellow-500 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
          >
            Send
          </button>
        </form>
      </div>

      {/* Quick Access */}
      <section className="py-10 bg-gray-200">
        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="md:w-1/2 px-5">
            <div className="text-right md:text-left">
              <h3 className="cursor-default text-4xl fade-in-down font-extrabold text-center text-black tracking-tight">
                QUICK ACTION
              </h3>
              <p className="cursor-default text-black text-sm text-center">
                24/7 we are here to help you find your answers.
              </p>
              {/* Button Row */}
              <div className="mt-5 flex flex-row flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-4 overflow-x-auto">
                <a
                  href="mailto:mail@cyberspacedigital.in"
                  className="flex items-center gap-2 whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm sm:text-base font-medium text-white transition-colors hover:bg-black hover:text-white"
                >
                  <FaEnvelope />
                  Email
                </a>
                <a
                  href="tel:+91-814-340-7758"
                  className="flex items-center gap-2 whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm sm:text-base font-medium text-white transition-colors hover:bg-black hover:text-white"
                >
                  <FaPhone />
                  Phone
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital"
                  className="flex items-center gap-2 whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm sm:text-base font-medium text-white transition-colors hover:bg-black hover:text-white"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section
  className="py-10 sm:py-40 relative"
  style={{
    backgroundImage: `url(${ourproducts_contact.src})`, // Use .src if using next/image
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Black gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0"></div>

  <div className="flex flex-col md:flex-row items-start justify-center relative z-10">
    {/* Left Column with Content */}
    <div className="w-full md:w-1/2 px-5">
      <div className="text-left">
        <h3 className="cursor-default text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-white tracking-tight">
          Our Products
        </h3>
        <p className="cursor-default text-white sm:text-sm text-xs">
          Products we have developed.
        </p>
      </div>
    </div>

    {/* Right Column Placeholder */}
    <div className="hidden md:block md:w-1/2 md:pr-10"></div>
  </div>
</section>

    </div>
  );
};

export default ContactForm;
