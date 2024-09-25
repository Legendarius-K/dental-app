"use client"

import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import GoogleCaptchaWrapper from "@/app/google-captcha-wrapper";
import { useForm } from "react-hook-form";
import Button from "../Button";



interface FormData {
  name: string;
  surname: string;
  email: string;
  phoneNumber?: string;
  reasonForContact?: string;
  message: string;
  terms: boolean;
  gRecaptchaToken: string;
}

export function Home2() {
  return (
    <GoogleCaptchaWrapper>
      <HomeInside />
    </GoogleCaptchaWrapper>
  );
}

function HomeInside() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [notification, setNotification] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      if (executeRecaptcha) {
        const gRecaptchaToken = await executeRecaptcha("enquiryFormSubmit");
        await submitEnquiryForm({ ...data, gRecaptchaToken });
      }
    } catch (error) {
      console.log("Recaptcha execution error:", error);
      setNotification("Recaptcha execution error");
    } finally {
      setIsLoading(false);
    }
  };

  const submitEnquiryForm = async (formData: FormData) => {
    try {
      const response = await axios.post("/api/contactFormSubmit", formData);

      if (response.data.success) {
        setNotification(`Success with score: ${response.data.score}`);
        await axios.post("/api/email", formData);
        setShowMessagePopup(true);
        setTimeout(() => setShowMessagePopup(false), 5000);
      } else {
        setNotification(`Failure with score: ${response.data.score}`);
      }
    } catch (error) {
      console.log("Form submission error:", error);
      setNotification("Form submission error");
    }
  };

 

  return (
    <div className="container">
      <main className="mt-5">
        <form
          id="contactForm"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-pt-gray2 p-4"
        >
          <div className="flex gap-3">
            <div className="wrapperName mb-5 basis-1/2 ">
            <label
              htmlFor="name"
              className="mb-1 block text-base font-medium text-black p1 font-bold"
            >
              Namn
              {
                <span
                  className={`ml-1 ${errors.name ? "text-red-500" : "text-black"}`}
                >
                  *
                </span>
              }
            </label>
            <input
  type="text"
  {...register("name", { required: true })}
  className={`form-control w-full border-b-2 border-darkblue bg-white py-3 px-6 text-base font-medium text-mainblue outline-none focus:border-mainblue focus:shadow-md p2 ${errors.name ? "border-red-500" : ""}`}
  placeholder="Namn"
/>

            {errors.name && (
              <span className="text-red-500">required</span>
            )}
          </div>
          <div className="wrapperSurname mb-5 basis-1/2">
            <label
              htmlFor="surname"
              className="mb-1 block text-base font-medium text-black p1"
            >
              Efternamn
              {
                <span
                  className={`ml-1 ${errors.name ? "text-red-500" : "text-black"}`}//change surname??
                >
                  *
                </span>
              }
            </label>
            <input
              type="text"
              {...register("surname", { required: true })}
              className={`form-control w-full border-b-2 border-darkblue bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-,ainblue focus:shadow-md p2 ${errors.name ? "border-red-500" : ""}`}
              placeholder="Efternamn"
            />
            {errors.name && (
              <span className="text-red-500">required</span>
            )}
          </div></div>
          
          
          <div className="wrapper flex flex-col md:flex-row md:gap-3">
            <div className="flex-grow wrapperEmail mb-5">
              <label
                htmlFor="email"
                className="mb-1 block text-base font-medium text-black p1"
              >
                Email
                {
                  <span
                    className={`ml-1 ${errors.email ? "text-red-500" : "text-black"}`}
                  >
                    *
                  </span>
                }
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className={`form-control w-full border-b-2 border-darkblue bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-mainblue focus:shadow-md p2 ${errors.email ? "border-red-500" : ""}`}
                placeholder="abc@gmail.com"
              />
              {errors.email && (
                <span className="text-red-500">required</span>
              )}
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
                {...register("phoneNumber")}
                className="form-control w-full border-b-2 border-darkblue bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-mainblue focus:shadow-md p2"
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
                  {...register("reasonForContact", { required: true })}
                  className="form-control w-full border-b-2 border-darkblue bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-mainblue focus:shadow-md p2"
                  
                >
                  <option value="">Allmän information</option>
                  <option value="bokning">Boka tid</option>
                  <option value="avbokning">Avbokning/Ombokning</option>
                  <option value="behandling">Behandlings fråga</option>
                  <option value="Feedback">Feedback</option>
                  <option value="övrigt">Övrigt</option>
                </select>
                {errors.reasonForContact && (
                  <span className="text-red-500">required</span>
                )}
              </div>

          <div className="wrapperMessage mb-5">
            <label
              htmlFor="message"
              className="mb-1 block text-base font-medium text-black p1"
              id="message"
            >
              Meddelandet
              {
                <span
                  className={`ml-1 ${errors.message ? "text-red-500" : "text-black"}`}
                >
                  *
                </span>
              }
            </label>
            <textarea
              rows={4}
              {...register("message", { required: true })}
              className={`form-control w-full border-2 border-darkblue rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-mainblue focus:shadow-md p2 ${errors.message ? "border-red-500" : ""}`}
              placeholder="Skriv ditt meddelandet"
            />
            {errors.message && (
              <span className="text-red-500">required</span>
            )}
          </div>
          <p className="p3 mb-5">
          Sidan skyddas av reCAPTCHA som tillämpar Googles
            <a
              className="text-blue-500"
              href="https://policies.google.com/privacy"
            > Integritespolicy</a>{" "}
            och
            <a
              className="text-blue-500"
              href="https://policies.google.com/terms"
            > Anvädarvilkor</a>
            .
          </p>
          {/* {notification && <p className="mt-3 text-info">{notification}</p>} */}
          <div className="wrapperTerms mb-5 form-check">
            <input
              type="checkbox"
              {...register("terms", { required: true })}
              className="form-check-input"
            />
            <label className="form-check-label ml-1">
              Jag gokänner{" "}
              <a
                className="text-blue-500"
                href={``}
              >vilkoren</a>
              *
            </label>
            {errors.terms && (
              <span className="text-red-500 ml-1">agreeToTerms</span>
            )}
          </div>

          <div className="wrapperButton flex items-center relative">
          <button  className={`z-20 relative inline-flex items-center justify-start inline-block overflow-hidden transition-all bg-mainblue rounded-full hover:bg-darkblue group text-sm md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3 font-bold`}>
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-darkblue rounded-full"></span>
            <span className="relative w-full text-center text-neutral-800 transition-colors duration-200 ease-in-out group-hover:text-white">SKICKA</span>
        </button>
            {showMessagePopup && (
              <div className="popup bg-[#63d285] text-pt-gray2  ml-3 absolute inset-y-0 left-[-13px] rounded-full button-text py-[15px] px-[32px] h-[48px] w-[303px] flex justify-center items-center text-nowrap">
                contactBtn
              </div>
            )}
            {isLoading && (
              <div className="loading-spinner ml-3">
                <svg
                  className="animate-spin h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}

export default HomeInside;
