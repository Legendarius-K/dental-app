import BookButton from "@/components/BookButton";
import HeroImplants from "@/components/Heroes/HeroImplants"
import ImplantsInfo from "@/components/ImplantsInfo";
import TimeToVisit from "@/components/TimeToVisit";
import { contact } from "@/utils/data";
import Image from "next/image";
import implants from './../../../public/images/implant.jpg'


const Implants = () => {
    return (
        <>
            <HeroImplants/>
            <main className="bg-white flex flex-col items-center">
                <div className="md:pt-16 flex flex-col items-center max-w-[1150px] p-6 md:p-10">
                    {/* <h2 className="mt-20 md:my-6 text-4xl md:text-5xl font-semibold text-bluegray">Akut tandvård</h2> */}
                    <section className="w-full flex flex-col md:flex-row gap-16 my-10">
                        <div className="md:w-1/2 w-full flex flex-col gap-5 font-sans">
                            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-center md:text-left text-bluegray">Är tandimplantat något för dig?</h3>
                            <p><span className="font-semibold">Har du förlorat en eller flera tänder</span> och letar efter en lösning? Tandimplantat kan vara den idealiska behandlingen för dig. Ett tandimplantat består av en skruv, oftast tillverkad av titan, som fungerar som en konstgjord tandrot. På denna fäster man en tandkrona för att ge ett naturligt utseende och återställa funktionen.</p>
                            <p><span className="font-semibold"> Tandimplantat ger en stabil och långvarig lösning med många fördelar.</span>  Du återfår din naturliga bettfunktion och kan tugga utan problem. Dessutom ser de ersatta tänderna ut som dina egna, och du slipper oroa dig för att de ska lossna. Många patienter upplever att deras livsglädje och självkänsla förbättras efter behandlingen.</p>
                            <p><span className="font-semibold">Om du är intresserad av tandimplantat,</span> är nästa steg att boka en konsultation. Du kan enkelt göra detta via vår onlinebokning, eller ringa oss på <a href={`tel:${contact.phone}`} className="text-darkblue">{contact.phone}</a> Vi ser fram emot att hjälpa dig!</p>
                            <div className="w-full flex justify-center md:justify-start">
                                <BookButton text="BOKA NU" buttonStyle="w-[300px] md:w-[200px] py-3 mt-10 shadow-lg md:text-xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <Image className="w-full h-auto rounded"  src={implants} alt="ache" />
                        </div>
                    </section>

                </div>
            </main>
            <ImplantsInfo />
            <TimeToVisit background="bg-lightaccent" />
        </>
    );
};

export default Implants