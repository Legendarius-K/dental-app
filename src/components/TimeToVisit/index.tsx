import ContactButton from "../ContactButton";
import curly from "../../../public/images/curly.png";
import BookButton from "../BookButton";

const TimeToVisit = () => {
    return (
        <div className="bg-[#CF7D30] w-full h-[500px] relative">
            <div className="flex flex-col sm:flex-row p-10">
                <div className="basis-1/2">
                    <p className="text-4xl pb-6">Dags för en undersökning?</p>
                    <p className="text-xl ">Vi vet att du har hört det förr, men regelbundna besök hos</p>
                    <p className="text-xl ">tandvården är viktigt för att dina tänder ska må bra. </p>
                    <p className="text-xl pb-10"> Välkommen tilloss och upplev en trevligare tandläkare.</p>
                    <BookButton text="BOKA ONLINE" buttonStyle="text-xl p-3 w-[200px]" />
                    <ContactButton text="KONTAKTA OSS" buttonStyle="text-xl p-3 w-[200px]" />
                </div>
                <div className="z-60 min-w-[300px] basis-1/2 relative">
                    <img 
                        src={curly.src} 
                        alt="smiling lady" 
                        className="absolute top-[-300px] z-20 hidden md:inline-flex" // Scale the image by 30%
                    />
                    <img 
                        src={curly.src} 
                        alt="smiling lady" 
                        className="absolute bg-[#CF7D30] z-20 md:hidden md:visible" // Scale the image by 30%
                    />
                </div>
            </div>
        </div>
    )
};

export default TimeToVisit;
