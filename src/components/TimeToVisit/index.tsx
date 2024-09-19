//#CD8932 sof orange

import BookButton from "../BookButton";
import ContactButton from "../ContactButton";
import curly from "../../../public/images/curly.png"

const TimeToVisit = () => {
    return (
        <div className="bg-[#CF7D30] w-full h-[500px] relative">
          <div className="flex flex-col sm:flex-row p-10">
                <div className="basis-1/2">
                    <p className="text-4xl pb-6">Dags för en undersökning?</p>
                    <h4>Vi vet att du har hört det förr, men regelbundna besök hos</h4>
                    <h4>tandvården är viktigt för att dina tänder ska må bra. Välkommen till</h4>
                    <h4>oss och upplev en trevligare tandläkare.</h4>
                    <BookButton text="BOKA ONLINE" buttonStyle="text-xl p-3 w-[200px]" />
                    <ContactButton text="KONTAKTA OSS" buttonStyle="text-xl p-3 w-[200px]" />
                </div >
                <div className="z-10 min-w-[300px] basis-1/2 relative">
                    <img src={curly.src} alt="smiling lady" className="absolute"/>
                </div>

          </div>
        </div>
    )
};

export default TimeToVisit
