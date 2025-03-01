"use client"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const ContacthtmlForm = () => {
  const [capVal, setCapVal] = useState(null);
  const [status, setStatus] = useState("Send");
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.sendForm('service_zeosaij', 'template_hc1ra2t', form.current, {
        publicKey: 'MUrXdjL-6yZpi0TUk',
      });
      setStatus("Message Sent!");
      setTimeout(() => setStatus("Send"), 3000); // Reset after 3 seconds
    } catch (error) {
      console.error('FAILED...', error.text);
      setStatus("Send");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input type="text" name="user_name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" name="user_email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea name="message" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required></textarea>
      </div>
      <div className="flex flex-col items-center gap-4">
        <ReCAPTCHA 
          sitekey="6LczTOYqAAAAADUaULeZhm-Puyo0BWuUU2pQmsSm"
          onChange={val => setCapVal(val)}
        />
        <input 
          disabled={!capVal || status === "Sending..."} 
          type="submit" 
          value={status} 
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-lg cursor-pointer transition-all ${!capVal || status === "Sending..." ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`} 
        />
      </div>
    </form>
  );
};

export default ContacthtmlForm;
