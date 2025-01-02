"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import orto from "../../../public/images/orthodontics.png";
import emergency from "../../../public/images/emergency.png";
import aesthetic from "../../../public/images/aesthetic.png";
import implants from "../../../public/images/implant.png";
import teeth from "../../../public/images/teeth.png";
import exam from "../../../public/images/dental-exam.png";
import arrowBlack from "../../../public/images/nav-arrow-black.svg";
import arrowWhite from "../../../public/images/nav-arrow-white.svg";
import Image from "next/image";
import BookButton from "../BookButton";
import Hamburger from 'hamburger-react'
import logoWhite from '../../../public/images/TryggTandvård_logo2_vit.png'
import logoBlack from '../../../public/images/TryggTandvård_logo2_svart.png'


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [dropDownBurger, setDropdownBurger] = useState<boolean>(false);
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdownBurger = () => {
    setDropdownBurger(!dropDownBurger);
  };

  const closeMenu = () => {
    setDropdownOpen(false);
    setOpen(false);
  };

  useEffect(() => {
    !isOpen && setDropdownBurger(false);
  }, [isOpen]);

  useEffect(() => {
    if (dropdownOpen || isOpen) {
      document.body.classList.add(
        "overflow-y-hidden",
        "touch-none",
        "overscroll-none",
        "scrollbar-gutter-stable"
      );
    } else {
      document.body.classList.remove(
        "overflow-y-hidden",
        "touch-none",
        "overscroll-none",
        "scrollbar-gutter-stable"
      );
    }
  }, [dropdownOpen, isOpen]);

  const navItems = [
    { title: "Hitta oss", link: "/find_us" },
    { title: "Priser", link: "/prices" },
    { title: "Om oss", link: "/about_us" },
  ];

  const dropdownItems = [
    {
      image: emergency,
      title: "Akut tandvård",
      subTitle: "Vid tandvärk och olyckor",
      link: "/emergency",
    },
    {
      image: implants,
      title: "Tandimplantat",
      subTitle: "Ersättning av förlorade tänder",
      link: "/implants",
    },
    {
      image: aesthetic,
      title: "Estetisk tandvård",
      subTitle: "Korrigera tändernas utseende",
      link: "/aesthetics",
    },
    {
      image: orto,
      title: "Tandreglering",
      subTitle: "För sneda eller trångställda tänder",
      link: "/orthodontics",
    },
    {
      image: exam,
      title: "Basundersökning",
      subTitle: "Bedömning av tänder och tandhälsa",
      link: "/exam",
    },
    {
      image: teeth,
      title: "Alla behandlingar",
      subTitle: "Se alla våra behandlingar",
      link: "/all-treatments",
    },
  ];

    useEffect(() => {
        !isOpen && setDropdownBurger(false)
    }, [isOpen])

    useEffect(() => {
        if (dropdownOpen || isOpen) {
            document.body.classList.add("overflow-y-hidden", "touch-none", "overscroll-none", "scrollbar-gutter-stable")
        } else {
            document.body.classList.remove("overflow-y-hidden", "touch-none", "overscroll-none", "scrollbar-gutter-stable")
        }
    }, [dropdownOpen, isOpen]);

    return (
      <nav
        className={` fixed top-0 left-0 z-40 w-full py-4 flex justify-between items-center transition-all px-4 h-[56px] bg-black bg-opacity-60 ${dropdownOpen ? "text-textmain" : "text-textwhite"}`}
      >
        <div
          onClick={closeMenu}
          className={`OVERLAY fixed top-0 left-0 bg-black opacity-40 w-full h-screen ${dropdownOpen || isOpen ? "" : "hidden"}`}
        ></div>
        <Link href={"/"}>
          <h1
            className={`relative pl-10 md:pl-0 z-20 text-lg md:text-xl font-semibold  ${dropdownOpen ? "text-textmain" : ""}`}
          >
            {!dropdownOpen && (
              <Image
                className="w-[190px] md:w-[240px]"
                src={logoWhite}
                alt="logo"
              />
            )}
            {dropdownOpen && (
              <Image className="w-[240px]" src={logoBlack} alt="logo" />
            )}
          </h1>
        </Link>
        <div className="gap-5 lg:gap-10 hidden md:flex">
          <div
            onClick={toggleDropdown}
            className={`flex items-center z-40 cursor-pointer transition-all ${dropdownOpen ? "text-textmain before:bg-mainblue before:origin-center before:h-[1px] before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-mainblue after:origin-center after:h-[1px] after:w-[55%] after:bottom-0 after:right-[50%]" : ""} relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-mainblue before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-mainblue after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]`}
          >
            <p>Behandlingar</p>
            <div className="w-[17px] ml-1 pt-1">
              {!dropdownOpen && (
                <Image className="w-full h-auto" src={arrowWhite} alt="arrow" />
              )}
              {dropdownOpen && (
                <Image
                  className="w-full h-auto pb-1"
                  src={arrowBlack}
                  alt="arrow"
                />
              )}
            </div>
          </div>
          <div
            className={`absolute z-60 left-0 flex w-full justify-center bg-neutral-100 transition-transform duration-300 pt-[90px] pb-6 ${!dropdownOpen ? "-translate-y-[200%]" : "-translate-y-10"}`}
          >
            <div className="grid grid-cols-2">
              {dropdownItems.map((item, index) => (
                <Link
                  onClick={closeMenu}
                  key={index}
                  className="pr-20 pl-3 flex transition-all border-lightblue/70 py-2 hover:bg-gradient-to-r rounded hover:from-lightblue/60 hover:to-textwhite"
                  href={item.link}
                >
                  <div className="w-[43px] mr-2">
                    <Image
                      className="w-full h-auto"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.subTitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {navItems.map((item, index) => (
            <Link
              key={index}
              className="z-40 relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-mainblue before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-mainblue after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]"
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className={` ${isOpen && "hidden"}`}>
          <BookButton
            text="BOKA TID"
            buttonStyle="text-sm py-[7px] w-[90px] shadow-lg"
          />
        </div>
        <div className="absolute z-30 left-1 top-[4px] md:hidden">
          <Hamburger
            color={isOpen ? "black" : "white"}
            size={25}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>

        {/* Hamburger menu below */}

        <div
          className={`z-20 fixed top-0 w-4/5 h-screen bg-neutral-100 transition-all text-neutral-800 px-10 py-3 flex flex-col gap-4 ${isOpen ? "left-0" : "-left-full"}`}
        >
          <Link href={"/"}>
            {/* <h1
              className={`text-right w-full z-40 text-xl md:text-2xl font-semibold mb-20`}
            >
              Tand Trygg
            </h1> */}
            <Image
              className="absolute right-4 top-2 w-[220px]"
              src={logoBlack}
              alt="logo"
            />
          </Link>
          <div
            onClick={toggleDropdownBurger}
            className={`mt-20 text-xl flex items-center z-40 cursor-pointer transition-all ${dropdownOpen ? "text-black" : ""} relative `}
          >
            <p>- Behandlingar</p>
            <div className="w-[18px] ml-1 pt-1">
              <Image
                className={`w-full h-auto pb-0 ${dropDownBurger && "rotate-180"}`}
                src={arrowBlack}
                alt="arrow"
              />
            </div>
          </div>
          <div
            className={`text-neutral-500 z-60 flex flex-col gap-3 w-full justify-center bg-neutral-100 transition-all duration-300 py-3 pl-3 overflow-hidden ${!dropDownBurger ? "hidden" : ""}`}
          >
            {dropdownItems.map((item, index) => (
              <Link
                onClick={closeMenu}
                key={index}
                className="flex"
                href={item.link}
              >
                <div className="w-[25px] mr-2">
                  <Image
                    className="w-full h-auto"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <h3 className="text-lg">{item.title}</h3>
              </Link>
            ))}
          </div>
          {navItems.map((item, index) => (
            <Link
              onClick={closeMenu}
              key={index}
              className="text-xl z-40 relative "
              href={item.link}
            >
              - {item.title}
            </Link>
          ))}
          <div className="w-full mt-10">
            <BookButton
              text="BOKA TID"
              buttonStyle="text-lg py-[10px] w-full  shadow-lg"
            />
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
