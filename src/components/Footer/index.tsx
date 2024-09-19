
import Link from "next/link";
import React from "react";



const Footer = () => {
  
  return (
    <footer className={`w-full py-16 mx-auto px-8 bg-[#B9D9EB] border-t-2 border-white`}>
      <div className="container mx-auto px-8 md:px-0 lg:px-8 flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col md:flex-row items-start ">
          <img src="../../Images/logo.png" alt="Logo" className="w-[80px] h-[80px] mb-4 md:mb-0 md:mr-4 rounded-full" />
          <div className="text-sm mt-4 md:mt-0 md:ml-8 align-top">
            <p className="p1">Address:</p>
            <p>Sankt Eriksgatan 500 | 113 43</p>
            <p>Nörrsköping</p>
          </div>
          <div className="text-sm mt-4 md:mt-0 md:ml-8">
            <p className="p1">Contact:</p>
            <p>+46 72 123 456</p>
            <p>info@tandtrygg.se</p>
            <div className="flex space-x-2 mt-2">
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <img src="../../Images/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <img src="../../Images/linkedIn-icon.png" alt="LinkedIn" className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-sm mt-8 md:mt-0">
          <p className=" p1 pb-4">Länkar</p>
          <ul className="flex flex-col md:flex-row align-baseline space-y-4 md:space-y-0 md:py-4">
            <li><Link href={``} className="md:pr-4 p2 font-size-[14px] md:underline">Boka tid</Link></li>
            <li><Link href={``} className="md:pr-4 p2 font-size-[14px] md:underline">Kontakta oss</Link></li>
            <li><Link href={``} className="md:pr-4 p2 font-size-[14px] md:underline">Om oss</Link></li>
            <li><Link href={``} className="md:pr-4 p2 font-size-[14px] md:underline">Priser</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-accent-white mt-8 pt-4 text-sm text-left">
        <div className="container mx-auto px-8 flex flex-col md:flex-row md:justify-between">
          <p className="md:text-right md:flex-row mt-4 md:mt-0 ">© 2024 Tandtrygg AB</p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:flex md:space-x-4">
            <Link href={``} className="py-2 underline">Integritetspolicy</Link>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

