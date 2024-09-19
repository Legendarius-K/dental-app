import ContactButton from "../ContactButton";
import curly from "../../../public/images/curly.png";
import BookButton from "../BookButton";

const TimeToVisit = () => {
    return (
        <div className="bg-[#CF7D30] w-full md:h-[384px] relative">
            <div className="flex flex-col sm:flex-row p-10">
                <div className="basis-1/2 p-8 ml-[100px]">
                    <p className="text-4xl pb-6">Dags för en undersökning?</p>
                    <p className="text-xl ">Vi vet att du har hört det förr, men regelbundna besök hos</p>
                    <p className="text-xl ">tandvården är viktigt för att dina tänder ska må bra. </p>
                    <p className="text-xl pb-10"> Välkommen tilloss och upplev en trevligare tandläkare.</p>
                    <div className="flex gap-6 mt-10">
                    <BookButton text="BOKA ONLINE" buttonStyle="text-xl p-3 w-[200px]" />
                    <ContactButton text="KONTAKTA OSS" buttonStyle="text-xl p-3 w-[200px]" />
                    </div>
                </div>
                <div className="z-60 min-w-[300px] basis-1/2 relative">
                    <img 
                        src={curly.src} 
                        alt="smiling lady" 
                        className="absolute bottom-[0px] z-20 hidden md:inline-flex" 
                    />
                    <img 
                        src={curly.src} 
                        alt="smiling lady" 
                        className="absolute bg-[#CF7D30] z-20 md:hidden md:visible" 
                    />
                </div>
            </div>
        </div>
    )
};

export default TimeToVisit;
