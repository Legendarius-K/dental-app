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
      <div className="flex flex-col lg:flex-row items-center w-full max-w-[1700px]">
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
        <div
          id="contactform"
          className=" w-full lg:w-1/2 px-2 md:px-6 pb-16 max-w-[800px]"
        >
          <h2 className="text-center pt-10 text-3xl font-semibold font-nunito">
            {/* Kontakta oss */}
          </h2>
          <main className="mt-5">
            <form
              id="contactForm"
              
              className="bg-pt-gray2 p-4"
            >
              <div className="flex gap-3">
                <div className="wrapperName mb-5 basis-1/2 ">
                  <label
                    htmlFor="name"
                    className="mb-1 block text-base font-medium text-black p1 font-bold"
                  >
                    Namn
                    
                  </label>
                  <input
                    type="text"
                    
                    className={`rounded form-control w-full border-b-2 bg-white py-3 px-6 text-base font-medium  outline-none hover:border-mainblue focus:border-mainblue focus:shadow-md p2 `}
                    placeholder="Namn"
                  />

                  
                </div>
                <div className="wrapperSurname mb-5 basis-1/2">
                  <label
                    htmlFor="surname"
                    className="mb-1 block text-base font-medium text-black p1"
                  >
                    Efternamn
                    
                  </label>
                  <input
                    type="text"
                    
                    className={`form-control w-full border-b-2  bg-white py-3 px-6 text-base font-medium text-gray-700 hover:border-mainblue focus:border-mainblue outline-none focus:border-,ainblue focus:shadow-md p2 `}
                    placeholder="Efternamn"
                  />
                  
                </div>
              </div>

              <div className="wrapper flex flex-col md:flex-row md:gap-3">
                <div className="flex-grow wrapperEmail mb-5">
                  <label
                    htmlFor="email"
                    className="mb-1 block text-base font-medium text-black p1"
                  >
                    Email
                    
                  </label>
                  <input
                    type="email"
                   
                    className={`form-control w-full border-b-2  bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none hover:border-mainblue focus:border-mainblue focus:shadow-md p2 `}
                    placeholder="abc@gmail.com"
                  />
                  
                </div>
                <div className="wrapperPhoneNumber mb-5">
                  <label
                    htmlFor="phoneNumber"
                    className="mb-1 block text-base font-medium text-black p1"
                    id="phoneNumber"
                  >
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    
                    className="form-control w-full border-b-2  bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none hover:border-mainblue focus:border-mainblue focus:shadow-md p2"
                    placeholder="070-XXX XXX"
                  />
                </div>
              </div>
              <div className="wrapperRFC mb-5">
                <label
                  htmlFor="reasonForContact"
                  className="mb-1 block text-base font-medium text-black p1"
                  id="reasonForContact"
                >
                  Vad gäller ditt ärende?
                </label>
                <select
                  
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

              <div className="wrapperMessage mb-5">
                <label
                  htmlFor="message"
                  className="mb-1 block text-base font-medium text-black p1"
                  id="message"
                >
                  Meddelande
                  
                </label>
                <textarea
                  rows={4}
                  
                  className={`form-control w-full border-2  rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none hover:border-mainblue focus:border-mainblue focus:shadow-md p2 `}
                  placeholder="Skriv ditt meddelandet"
                />
                
              </div>
              <p className="p3 mb-5">
                Sidan skyddas av reCAPTCHA som tillämpar Googles
                <a
                  className="text-blue-500"
                  href="https://policies.google.com/privacy"
                >
                  {" "}
                  Integritespolicy
                </a>{" "}
                och
                <a
                  className="text-blue-500"
                  href="https://policies.google.com/terms"
                >
                  {" "}
                  Användarvillkor
                </a>
                .
              </p>
              {/* {notification && <p className="mt-3 text-info">{notification}</p>} */}
              <div className="wrapperTerms mb-5 form-check flex">
                <input
                  type="checkbox"
                 
                  className="form-check-input cursor-pointer"
                />
                <label className="form-check-label ml-1">
                  Jag godkänner{" "}
                  <a className="text-blue-500" href={``}>
                    villkoren
                  </a>
                  *
                </label>
                
              </div>

              <div className="wrapperButton flex items-center relative">
                <button
                  className={`z-20 relative inline-flex items-center justify-start overflow-hidden transition-all bg-mainblue rounded-full hover:bg-darkblue group text-lg md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3 font-medium`}
                >
                  <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-darkblue rounded-full"></span>
                  <span className="relative w-full text-center text-neutral-800 transition-colors duration-200 ease-in-out group-hover:text-white">
                    SKICKA
                  </span>
                </button>
                
                
              </div>
            </form>
          </main>
        </div>
      </div>
    </section>
    <form ref={form} onSubmit={sendEmail} className="w-full lg:w-1/2 px-2 md:px-6 pb-16 max-w-[800px]">
    <div className="flex gap-3 flex-grow-1">
      <div className="mb-5 basis-1/2">
        <label className="mb-1 block text-base font-medium text-black p1 ">Name</label>
        <input type="text" name="user_name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-base font-medium text-black p1 ">Efternam</label>
        <input type="text" name="user_surname" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
      </div>
    </div>
    <div className="flex flex-col md:flex-row md:gap-3">
      <div className="mb-4">
        <label className="mb-1 block text-base font-medium text-black p1 ">Email</label>
        <input type="email" name="user_email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-base font-medium text-black p1 ">Telefonnummer</label>
        <input type="tel" name="user_phone" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
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
    </>
  );
};

export default ContacthtmlForm;
