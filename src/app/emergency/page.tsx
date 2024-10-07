import Image from "next/image";
import ache from '../../../public/images/toothache.png'
import { contact } from "@/utils/data";
import BookButton from "@/components/BookButton";
import EmergencyInfo from "@/components/EmergencyInfo";
import TimeToVisit from "@/components/TimeToVisit";

const emergency = () => {
    return (
        <>
            <main className="bg-white flex flex-col items-center">
                <div className="md:pt-16 flex flex-col items-center max-w-[1150px] p-6 md:p-10">
                    <h2 className="mt-20 md:mt-10 text-4xl md:text-5xl font-semibold text-bluegray">Akut tandvård</h2>
                    <section className="w-full flex flex-col-reverse md:flex-row gap-16 my-10">
                        <div className="md:w-1/2 w-full flex flex-col gap-5 font-sans">
                            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-center md:text-left text-bluegray">Plötslig tandvärk?</h3>
                            <p>När du råkar ut för akuta tandproblem är det avgörande att få snabb och rätt hjälp. Oavsett om du lider av tandvärk, känsliga tänder eller en skadad tand eller fyllning, ska du inte behöva gå runt med smärta. Aqua Dentals kliniker erbjuder akut tandvård av hög kvalitet, med generösa öppettider på både vardagar, kvällar och helger.</p>
                            <p>Har du ont nu? Ring oss på <a href={`tel:${contact.phone}`} className="text-darkblue">{contact.phone}</a>, vi gör alltid vårt bästa för att ge dig en tid så snabbt som möjligt.</p>
                            <p>Hos oss möts du av erfarna tandläkare och tandsköterskor som använder den senaste tekniken. Även om du har tandvärk eller lider av tandläkarskräck, är vi experter på att skapa en behaglig och trygg upplevelse under hela ditt besök.</p>
                            <p>Många akuttandläkare har extra avgifter på kvällar och helger, men på Aqua Dental har vi tagit bort dessa tillägg. Hos oss betalar du samma pris för tandvård oavsett tid på dygnet eller veckodag.</p>
                            <div className="w-full flex justify-center md:justify-start">
                                <BookButton text="Boka nu" buttonStyle="w-[300px] md:w-[200px] py-3 mt-10" />
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <Image className="w-full h-auto rounded" src={ache} alt="ache" />
                        </div>
                    </section>

                </div>
            </main>
            <EmergencyInfo />
            <TimeToVisit background="bg-lightaccent" />
        </>
    )
};

export default emergency
