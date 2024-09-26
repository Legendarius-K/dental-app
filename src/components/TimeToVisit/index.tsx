import ContactButton from "../ContactButton";
import curly from "../../../public/images/curly.png";
import BookButton from "../BookButton";
import Image from "next/image";

const TimeToVisit = () => {
    return (
        <div className="bg-textwhite flex justify-center">
            <div className=" w-full text-textmain relative py-0 max-w-[1400px]">
                <div className="flex flex-col lg:flex-row p-0 items-center">
                    <div className="w-[95%] lg:w-[45%] font-sans py-16 pt-28 lg:py-24 xl:py-36 px-5 text-center lg:text-start lg:ml-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-nunito font-semibold pb-6">Dags för en undersökning?</h2>
                        <p className="text-lg text-start md:pl-10 lg:pl-0">Vi vet att du har hört det förr, men regelbundna besök hos tandvården är viktigt för att dina tänder ska må bra. Välkommen till oss och upplev en trevligare tandläkare.</p>
                        <div className="flex gap-6 mt-10 justify-center lg:justify-start">
                            <BookButton text="BOKA ONLINE" buttonStyle="md:text-xl p-3 w-[200px] bg-amber-500" />
                            <ContactButton text="KONTAKTA OSS" buttonStyle="md:text-xl p-3 w-[200px] border-2 border-neutral-400" />
                        </div>
                    </div>
                    <div className="lg:absolute lg:w-1/2 bottom-0 right-0">
                        <div className="lg:absolute bottom-0 right-[50%] lg:translate-x-1/2 lg:w-[83%] max-w-[590px]">
                            <Image className="w-full h-auto" src={curly} alt="Girl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TimeToVisit;
