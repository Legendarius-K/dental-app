"use client"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/utils/data";
const ContacthtmlForm = () => {
  const [capVal, setCapVal] = useState(null);
  const [status, setStatus] = useState("Skicka");
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Skickar...");

    try {
      await emailjs.sendForm('service_zeosaij', 'template_hc1ra2t', form.current, {
        publicKey: 'MUrXdjL-6yZpi0TUk',
      });
      setStatus("Skickat!");
      setTimeout(() => setStatus("Skicka"), 3000); 
    } catch (error) {
      console.error('FAILED...', error.text);
      setStatus("Skicka");
    }
  };

  return (
    <>
    <section className="flex flex-col justify-center items-center lg:flex-row bg-textwhite pt-10">
      <div className="flex flex-col lg:flex-row items-center w-full max-w-[1700px] ">
        <div className="flex justify-center self-start pt-10 w-full lg:w-1/2 bg-textwhite">
          <div className="w-full max-w-[600px] flex flex-col gap-6 md:gap-16 pt-10 px-6">
            <h2 className="font-nunito text-3xl md:text-5xl font-bold">
              Trygg Tandvård
            </h2>
            <h3 className="font-sans">
              Om du har en fråga eller behöver hjälp med något så får du gärna
              höra av dig till oss. Fyll i formuläret så återkommer vi till dig
              så fort vi kan.
            </h3>
            <a
              href="mailto:info@tryggtandvard.se" //OBS ÄNDRA MAIL
              className="flex items-center gap-4 text-lg"
            >
              <Mail fill="gainsboro" size={25} />
              <p className=" hover:underline decoration-darkblue">
                {contact.email}
              </p>
            </a>
            <a
              href={`tel:${contact.phone}`} //OBS ÄNDRA NUMMER
              className="flex items-center gap-4 text-lg"
            >
              <Phone fill="gainsboro" size={25} />
              <p className=" hover:underline decoration-darkblue">
                {contact.phone}
              </p>
            </a>
            <div className="flex items-center gap-4 text-lg">
              <MapPin fill="gainsboro" size={27} />
              <a
                href="https://maps.app.goo.gl/Lyto7Bm2RnJwwJw86"
                target="blank"
                className="flex flex-col hover:underline decoration-darkblue"
              >
                <p>{contact.adress}</p>
                <p>{contact.zipCode}</p>
              </a>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 px-2 md:px-6 py-16 max-w-[800px]">
    <form ref={form} onSubmit={sendEmail} className="w-full px-2 md:px-6 pb-16 max-w-[800px]">
    <div className="flex gap-3 flex-grow-1">
      <div className="mb-5 basis-1/2">
        <label className="mb-1 block text-base font-medium text-black p1 ">Name</label>
        <input type="text" name="user_name" placeholder='Namn' className="rounded form-control w-full border-b-2 bg-white py-3 px-6 text-base font-medium  outline-none hover:border-mainblue focus:border-mainblue focus:shadow-md p2 " required />
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-base font-medium text-black p1 ">Efternam</label>
        <input type="text" name="user_surname" placeholder='Efternamn' className="rounded form-control w-full border-b-2 bg-white py-3 px-6 text-base font-medium  outline-none hover:border-mainblue focus:border-mainblue focus:shadow-md p2 " required />
      </div>
    </div>
    <div className="flex flex-col md:flex-row md:gap-3">
      <div className="mb-4 basis-2/3">
        <label className="mb-1 block text-base font-medium text-black p1 ">Email</label>
        <input type="email" name="user_email" placeholder='abc@gmail.com' className="rounded form-control w-full border-b-2 bg-white py-3 px-6 text-base font-medium  outline-none hover:border-mainblue focus:border-mainblue focus:shadow-md p2 " required />
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-base font-medium text-black p1 ">Telefonnummer</label>
        <input type="tel" name="user_phone" placeholder="070-XXX XXX" className="rounded form-control w-full border-b-2 bg-white py-3 px-6 text-base font-medium  outline-none hover:border-mainblue focus:border-mainblue focus:shadow-md p2 " required />
      </div>
      </div>
      <div className="mb-4">
                <label
                  htmlFor="reasonForContact"
                  className="mb-1 block text-base font-medium text-black p1"
                  id="reasonForContact"
                >
                  Vad gäller ditt ärende?
                </label>
                <select
                  name="user_reasons"
                  className="form-control w-full border-b-2  bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none hover:border-mainblue focus:border-mainblue focus:shadow-md p2"
                >
                  <option value="" disabled selected>
                    Ärende
                  </option>
                  <option value="">Allmän information</option>
                  <option value="bokning">Boka tid</option>
                  <option value="avbokning">Avbokning/Ombokning</option>
                  <option value="behandling">Frågor om behandling</option>
                  <option value="Feedback">Feedback</option>
                  <option value="övrigt">Övrigt</option>
                </select>
                
              </div>
    
      <div className="mb-4">
        <label className="mb-1 block text-base font-medium text-black p1 ">Message</label>
        <textarea
                  rows={4}
                  name="message"
                  className={`form-control w-full border-2  rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none hover:border-mainblue focus:border-mainblue focus:shadow-md p2 `}
                  placeholder="Skriv ditt meddelandet"
                  required
                />
      </div>
      <div className="flex flex-col items-center gap-4">
        <ReCAPTCHA 
          sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
          onChange={val => setCapVal(val)}
        />
        <input 
          disabled={!capVal || status === "Skickar..."} 
          type="submit" 
          value={status} 
          className={`border-1 text-black font-bold text-2xl w-[20vw] h-[55px] cursor-pointer bg-darkblue rounded-full ${!capVal || status === "Skickar..." ? "opacity-50 cursor-not-allowed" : "hover:bg-[#4D99C4]"}`} 
        />
      </div>
    </form>
    </div>
      </div>
    </section>
    
    </>
  );
};

export default ContacthtmlForm;
