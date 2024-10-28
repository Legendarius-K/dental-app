'use client'

import { contact, contactNk } from "@/utils/data";
import { cn } from "@/utils/functions";
import { useState } from "react";

const GetInTouch = () => {
    const [city, setCity] = useState<string>('tranås')

    const changeCity = (clinic: string) => {
        city !== clinic && setCity(clinic)
    }

    return (
        <section className="flex flex-col items-center bg-white justify-center">
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-nunito font-semibold mt-16 mb-10">Välkommen att höra av dig!</h2>
            <div className="flex justify-center mt-10 text-xl ">
                <button onClick={() => changeCity('tranås')} className={cn(
                    'px-10 py-1 border-l-2 border-r-2 border-t-2 border-darkbluegray rounded-t-lg',
                    city === 'tranås' && 'font-bold  bg-darkbluegray text-neutral-100'
                )}>Tranås</button>
                <button onClick={() => changeCity('norrköping')} className={cn(
                    'px-10  border-r-2 border-t-2 border-darkbluegray rounded-t-lg',
                    city === 'norrköping' && 'font-bold  bg-darkbluegray text-neutral-100'
                )}>Norrköping</button>
            </div>
            <div className="w-full max-w-[1400px] bg-darkbluegray pt-10">
                <div className="flex flex-col sm:flex-row px-4 pb-24  sm:p-10 sm:pb-28 mt-0">
                    {city === 'tranås' && (
                        <div className="flex flex-col justify-between w-full p-0 h-[443px]">
                            <ContactSquare title="Tand Trygg" two={contact.adress} three={contact.zipCode} phone={contact.phone} email={contact.email} />
                            <ContactSquare title="Telefontider" two="Måndag-onsdag: 10-15" three="Torsdag: 10-16" four="Fredag: 10-14" five="Helg: stängt" />
                        </div>
                    )}
                    {city === 'norrköping' && (
                        <div className="flex flex-col justify-between w-full p-0 h-[443px]">
                            <ContactSquare title="SDM Center" two={contactNk.adress} three={contactNk.zipCode} phone={contactNk.phone} email={contactNk.email} />
                            <ContactSquare title="Telefontider" two="Måndag-onsdag: 10-15" three="Torsdag: 10-16" four="Fredag: 10-14" five="Helg: stängt" />
                        </div>
                    )}

                    <div className="box-border w-[100%] mt-12 sm:mt-0">
                        {city === 'tranås' && <iframe className=" rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.4000391448901!2d14.97387507667052!3d58.03592961387203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465a27d8e5a89fa7%3A0x14316030462d4d54!2sStorgatan%2041%2C%20573%2032%20Tran%C3%A5s!5e1!3m2!1ssv!2sse!4v1730128546225!5m2!1ssv!2sse" width="100%" height="442" style={{ border: 0, }}></iframe>}
                        {city === 'norrköping' && <iframe className=" rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.5438527775475!2d16.19038707670768!3d58.589081870053086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46593a4cd736a1eb%3A0xf51051c2a06ad9fa!2sRepslagaregatan%2030%2C%20602%2045%20Norrk%C3%B6ping!5e1!3m2!1ssv!2sse!4v1730130091754!5m2!1ssv!2sse" width="100%" height="442" style={{ border: 0, }}></iframe>}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default GetInTouch

type ContactSquareProps = {
    title: string
    two: string
    three?: string
    four?: string
    five?: string
    six?: string
    seven?: string
    phone?: string
    email?: string
}

export const ContactSquare = ({ title, two, three, four, five, six, seven, phone, email }: ContactSquareProps) => {
    return (
        <div className="text-base text-neutral-500 font-sans p-5 w-full sm:w-[90%] shadow-lg h-[200px] rounded-lg bg-neutral-50">
            <h3 className="font-nunito text-textmain text-2xl font-bold border-b-2 border-darkbluegray mb-2">{title}</h3>
            <p>{two}</p>
            <p>{three}</p>
            <p>{four}</p>
            <p>{five}</p>
            <p>{six}</p>
            <p>{seven}</p>
            <a className="underline cursor-pointer block" href={`tel:${contact.phone}`}>{phone}</a>
            <a className="underline cursor-pointer block hover:text-accent" href="mailto:info@tandtrygg.se">{email}</a>
        </div>
    )
}