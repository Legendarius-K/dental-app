import ContactButton from "../ContactButton";
import curly from "../../../public/images/curly.png";
import BookButton from "../BookButton";
import Image from "next/image";

type TimeToVisitProps = {
    background?: string
}

const TimeToVisit = ({ background }:TimeToVisitProps) => {
    return (
        <div className={`flex justify-center ${background}`}>
            <div className=" w-full text-textmain relative py-0 max-w-[1400px]">
                <div className="flex flex-col lg:flex-row p-0 items-center">
                    <div className="w-[95%] lg:w-[45%] font-sans py-16 pt-28 lg:py-24 xl:py-36 px-5 text-center lg:text-start lg:ml-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-nunito font-semibold pb-6">Dags att kolla tänderna?</h2>
                        <p className="text-lg text-start md:pl-10 lg:pl-0">Regelbundna tandläkarbesök är nyckeln till friska tänder. Välkommen till Trygg Tandvård – tandvård som får dig att känna dig trygg och välkommen.</p>
                        <div className="flex gap-6 mt-10 justify-center lg:justify-start">
                            <BookButton text="BOKA ONLINE" buttonStyle="md:text-xl p-3 w-[200px] shadow-lg" />
                            <ContactButton text="KONTAKTA OSS" buttonStyle="md:text-xl p-3 w-[200px] bg-white shadow-lg" />
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
