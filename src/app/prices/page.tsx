import ContactForm from "@/components/ContactForm";
import HeroPrices from "@/components/HeroPrices";
import Payments from "@/components/Payments";
import PriceMap from "@/components/PriceMap";


const prices = () => {
    return (
        <>
         <HeroPrices />
         <PriceMap />
         <Payments />
         <ContactForm />
        </>
    )
};

export default prices
