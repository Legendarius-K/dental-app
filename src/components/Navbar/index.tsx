'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import orto from "../../../public/images/orthodontics.png"
import emergency from "../../../public/images/emergency.png"
import aesthetic from "../../../public/images/aesthetic.png"
import implants from "../../../public/images/implant.png"
import teeth from "../../../public/images/teeth.png"
import arrowBlack from "../../../public/images/nav-arrow-black.svg"
import arrowWhite from "../../../public/images/nav-arrow-white.svg"
import Image from "next/image";
import BookButton from "../BookButton";
import Hamburger from 'hamburger-react'


const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
    const [dropDownBurger, setDropdownBurger] = useState<boolean>(false)
    const [isOpen, setOpen] = useState(false)

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    const toggleDropdownBurger = () => {
        setDropdownBurger(!dropDownBurger)
    }

    const closeMenu = () => {
        setDropdownOpen(false)
        setOpen(false)
    }

    useEffect(() => {
        !isOpen && setDropdownBurger(false)
    }, [isOpen])

    useEffect(() => {
        if (dropdownOpen || isOpen) {
            document.body.classList.add("overflow-y-hidden", "touch-none", "overscroll-none")
        } else {
            document.body.classList.remove("overflow-y-hidden", "touch-none", "overscroll-none")
        }
    }, [dropdownOpen, isOpen]);

    const navItems = [
        { title: "Hitta oss", link: '/find_us' },
        { title: "Priser", link: '/prices' },
        { title: "Om oss", link: '/about_us' },
    ]

    return (
        <nav className={`fixed top-0 left-0 z-40 w-full py-4 flex justify-center transition-all px-10 h-[56px] bg-black bg-opacity-60 ${dropdownOpen ? "text-black" : ''}`}>
            <div onClick={closeMenu} className={`OVERLAY fixed top-0 left-0 bg-black opacity-40 w-full h-screen ${dropdownOpen || isOpen ? '' : 'hidden'}`}></div>
            <Link href={'/'}><h1 className={`z-20 text-xl md:text-2xl font-semibold absolute left-14 md:left-5 lg:left-10 top-[11px] ${dropdownOpen ? "text-black" : ''}`}>Tand Trygg</h1></Link>
            <div className="gap-5 lg:gap-10 hidden md:flex">
                <div onClick={toggleDropdown} className={`flex items-center z-40 cursor-pointer transition-all ${dropdownOpen ? "text-black" : ''} relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-teal-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-teal-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]`}>
                    <p>Behandlingar</p>
                    <div className="w-[17px] ml-1 pt-1">
                        {!dropdownOpen && <Image className="w-full h-auto" src={arrowWhite} alt="arrow" />}
                        {dropdownOpen && <Image className="w-full h-auto pb-1" src={arrowBlack} alt="arrow" />}
                    </div>
                </div>
                <div className={`absolute z-60 left-0 flex w-full justify-center bg-neutral-100 text-black transition-transform duration-300 pt-[100px] pb-6 ${!dropdownOpen ? "-translate-y-[200%]" : "-translate-y-10"}`}>
                    <div className="flex flex-col">

                        <Link className="px-20 flex hover:bg-teal-100 rounded-xl py-2 transition-all" href={'/emergency'}>
                            <div className="w-[43px] mr-2">
                                <Image className="w-full h-auto" src={emergency} alt="emergency" />
                            </div>
                            <div>
                                <h3>Akut tandvård</h3>
                                <p className="text-sm text-gray-500">Vid tandvärk och olyckor</p>
                            </div>

                        </Link>

                        <Link className="px-20 flex hover:bg-teal-100 rounded-xl py-2" href={'/emergency'}>
                            <div className="w-[43px] mr-2">
                                <Image className="w-full h-auto" src={aesthetic} alt="aesthetic" />
                            </div>
                            <div>
                                <h3>Estetisk tandvård</h3>
                                <p className="text-sm text-gray-500">Korrigera tändernas utseende</p>
                            </div>
                        </Link>

                        <Link className="px-20 flex hover:bg-teal-100 rounded-xl py-2" href={'/emergency'}>
                            <div className="w-[43px] mr-2">
                                <Image className="w-full h-auto" src={teeth} alt="teeth" />
                            </div>
                            <div>
                                <h3>Alla behandlingar</h3>
                                <p className="text-sm text-gray-500">Se alla våra behandlingar</p>
                            </div>
                        </Link>

                    </div>
                    <div className="flex flex-col">

                        <Link className="px-20 flex hover:bg-teal-100 rounded-xl py-2" href={'/emergency'}>
                            <div className="w-[43px] mr-2">
                                <Image className="w-full h-auto" src={implants} alt="implants" />
                            </div>
                            <div>
                                <h3>Tandimplantat</h3>
                                <p className="text-sm text-gray-500">Ersättning av förlorade tänder</p>
                            </div>
                        </Link>


                        <Link className="px-20 flex hover:bg-teal-100 rounded-xl py-2" href={'/emergency'}>
                            <div className="w-[43px] mr-2">
                                <Image className="w-full h-auto" src={orto} alt="orto" />
                            </div>
                            <div>
                                <h3>Tandreglering</h3>
                                <p className="text-sm text-gray-500">För sneda eller trångställda tänder</p>
                            </div>
                        </Link>

                    </div>
                </div>
                {navItems.map((item, index) => <Link key={index} className="z-40 relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-teal-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-teal-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]" href={item.link}>{item.title}</Link>)}
            </div>
            <div className={`absolute right-5 lg:right-10 top-[11px] ${isOpen && 'hidden'}`}>
                <BookButton text="BOKA TID" buttonStyle="text-sm py-[7px] w-[90px] shadow-lg" />
            </div>
            <div className="absolute z-30 left-1 top-[2px] md:hidden">
                <Hamburger color={isOpen ? 'black' : 'white'} size={25} toggled={isOpen} toggle={setOpen} />
            </div>







            <div className={`z-20 fixed top-0 w-4/5 h-screen bg-neutral-100 transition-all text-neutral-800 px-10 py-3 flex flex-col gap-4 ${isOpen ? 'left-0' : '-left-full'}`}>
                <Link href={'/'}><h1 className={`text-right w-full z-40 text-xl md:text-2xl font-semibold mb-20`}>Tand Trygg</h1></Link>
                <div onClick={toggleDropdownBurger} className={` text-xl flex items-center z-40 cursor-pointer transition-all ${dropdownOpen ? "text-black" : ''} relative `}>
                    <p>Behandlingar</p>
                    <div className="w-[18px] ml-1 pt-1">
                        <Image className={`w-full h-auto pb-0 ${dropDownBurger && 'rotate-180'}`} src={arrowBlack} alt="arrow" />

                    </div>
                </div>
                <div className={`text-neutral-500 z-60 flex flex-col gap-2 w-full justify-center bg-neutral-100 transition-all duration-300 py-3 pl-3 overflow-hidden ${!dropDownBurger ? "hidden" : ""}`}>


                    <Link className="flex" href={'/emergency'}>
                        <div className="w-[25px] mr-2">
                            <Image className="w-full h-auto" src={emergency} alt="emergency" />
                        </div>
                        <h3>Akut tandvård</h3>
                    </Link>

                    <Link className="flex" href={'/emergency'}>
                        <div className="w-[25px] mr-2">
                            <Image className="w-full h-auto" src={aesthetic} alt="aesthetic" />
                        </div>
                        <h3>Estetisk tandvård</h3>
                    </Link>

                    <Link className="flex" href={'/emergency'}>
                        <div className="w-[25px] mr-2">
                            <Image className="w-full h-auto" src={teeth} alt="teeth" />
                        </div>
                        <h3>Alla behandlingar</h3>
                    </Link>

                    <Link className="flex" href={'/emergency'}>
                        <div className="w-[25px] mr-2">
                            <Image className="w-full h-auto" src={implants} alt="implants" />
                        </div>
                        <h3>Tandimplantat</h3>
                    </Link>

                    <Link className="flex" href={'/emergency'}>
                        <div className="w-[25px] mr-2">
                            <Image className="w-full h-auto" src={orto} alt="orto" />
                        </div>
                        <h3>Tandreglering</h3>
                    </Link>

                </div>

                <Link className="text-xl z-40 relative " href={'/find_us'}>Hitta oss</Link>
                <Link className="text-xl z-40  relative " href={'/prices'}>Priser</Link>
                <Link className="text-xl z-40 relative " href={'/about_us'}>Om oss</Link>
                <div className="w-full mt-10">
                    <BookButton text="BOKA TID" buttonStyle="text-lg py-[10px] w-full  shadow-lg" />
                </div>
                {/* <div className="text-orange-600 text-sm absolute bottom-20 left-10">
                    <p>070-123 456 78</p>
                </div> */}
            </div>

        </nav>
    )
};

export default Navbar
