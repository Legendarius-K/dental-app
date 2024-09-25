import ContactForm from "@/components/ContactForm";
import HeroPrices from "@/components/HeroPrices";
import Payments from "@/components/Payments";
import PriceMap from "@/components/PriceMap";
import RingUs from "@/components/RingUs";


const prices = () => {
    return (
        <>
         <HeroPrices />
         <PriceMap />
         <Payments />
         <section className="flex flex-col md:flex-row ">
            <RingUs map={false} />
            <ContactForm />
         </section>
         
        </>
    )
};

export default prices
