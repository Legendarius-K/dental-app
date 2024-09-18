'use client'

import Link from "next/link";
import { useState } from "react";
import orto from "../../../public/images/orthodontics.png"
import emergency from "../../../public/images/emergency.png"
import aesthetic from "../../../public/images/aesthetic.png"
import implants from "../../../public/images/implant.png"
import teeth from "../../../public/images/teeth.png"
import arrowBlack from "../../../public/images/nav-arrow-black.svg"
import arrowWhite from "../../../public/images/nav-arrow-white.svg"
import Image from "next/image";
import BookButton from "../BookButton";


const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)

    const handleClick = () => {
        setDropdownOpen(!dropdownOpen)
    }

    return (
        <nav className={`fixed top-0 left-0 z-40 w-full py-4 flex justify-center transition-all px-10 ${dropdownOpen ? "text-black" : ''}`}>
            <h1 className={`z-40 text-2xl font-semibold absolute left-10 ${dropdownOpen ? "text-black" : ''}`}>Tand Trygg</h1>
            <div className="flex gap-10">
                <div onClick={handleClick} className={`flex items-center z-40 cursor-pointer transition-all ${dropdownOpen ? "text-black" : ''} relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-teal-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-teal-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]`}>
                    <p>Behandlingar</p>
                    <div className="w-[15px] ml-1 pt-1">
                        {!dropdownOpen && <Image className="w-full h-auto" src={arrowWhite} alt="arrow" />}
                        {dropdownOpen && <Image className="w-full h-auto pb-1" src={arrowBlack} alt="arrow" />}
                    </div>
                    </div>
                <div className={`absolute left-0 flex w-full justify-center bg-neutral-100 text-black transition-transform duration-300 pt-[100px] pb-6 ${!dropdownOpen ? "-translate-y-[200%]" : "-translate-y-10"}`}>
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
                <Link className="z-40 relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-teal-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-teal-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]" href={'/find_us'}>Hitta oss</Link>
                <Link className="z-40  relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-teal-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-teal-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]" href={'/prices'}>Priser</Link>
                <Link className="z-40 relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-teal-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-teal-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]" href={'/about_us'}>Om oss</Link>
            </div>
            <div className="absolute right-10">
                <BookButton text="BOKA ONLINE" buttonStyle="text-sm py-2 w-[130px]" />
            </div>
        </nav>
    )
};

export default Navbar
