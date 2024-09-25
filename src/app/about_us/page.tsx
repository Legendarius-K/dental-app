import ContactForm from "@/components/ContactForm";
import HeroAbout from "@/components/HeroAbout"
import RingUs from "@/components/RingUs";


const about_us = () => {
    return (
        <>
         <HeroAbout />  
         <section className="flex flex-col md:flex-row ">
         <div className="basis-1/2 p-8 flex flex-col items-center">
                <h2 className="text-black text-4xl lg:text-4xl mb-4 text-center max-w-[800px]">Tand Trygg på 60 sekunder!</h2>
                <div>
                    <p className="text-black font-sans lg:pt-4 sm:text-md  lg:max-w-[550px] text-justify">Resan mot trygg och vänlig tandvård med <span className="font-bold text-accent">Tand Trygg </span>började 2024 i hjärtat av Norrköping. Vi grundade vår klinik med en vision om att skapa en plats där tandvård är något man ser fram emot, snarare än fruktar. Vi tror att ingen ska behöva känna obehag eller oro när de går till tandläkaren.</p>
                    <p className="text-black font-sans lg:pt-4 sm:text-md  lg:max-w-[550px] text-justify">På Tand Trygg är vårt mål att revolutionera svensk tandvård genom att erbjuda den <span className="font-bold text-accent ">tryggaste </span>och mest <span className="font-bold text-accent">omtänksamma</span> upplevelsen för våra patienter. Vi har som ambition att göra varje besök enkelt, smärtfritt och vänligt, med fokus på att förbättra våra patienters leenden och självförtroende.</p>
                    <p className="text-black font-sans lg:pt-4 sm:text-md  lg:max-w-[550px] text-justify">Vår resa har precis börjat, men med starka värderingar, <span className="font-bold text-accent ">engagerade </span>medarbetare och en <span className="font-bold text-accent ">passion</span> för tandvård, är vi fast beslutna att göra <span className="font-bold text-accent ">skillnad</span> i våra patienters liv.</p>
                </div>
            </div>
            <ContactForm />
         </section>
        </>
    )
};

export default about_us
