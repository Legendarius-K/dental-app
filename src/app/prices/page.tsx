import ContactForm from "@/components/ContactForm";
import HeroPrices from "@/components/Heroes/HeroPrices";
import Payments from "@/components/Payments";
import PriceList from "@/components/PriceList";
import PriceMap from "@/components/PriceMap";
import RingUs from "@/components/RingUs";


const prices = () => {
    return (
        <>
            <HeroPrices />
            <PriceList />
            <PriceMap />
            <Payments />
            <section className="flex flex-col md:flex-row ">
                <RingUs />
                <ContactForm />
            </section>


        </>
    )
};

export default prices
