import ContactForm from "@/components/ContactForm";
import HeroPrices from "@/components/Heroes/HeroPrices";
import Payments from "@/components/Payments";
import PriceList from "@/components/PriceList";
import PriceMap from "@/components/PriceMap";
import PricesInfo from "@/components/PricesInfo";
import RingUs from "@/components/RingUs";

const prices = () => {
  return (
    <>
      <HeroPrices />

      <PriceMap />
      <Payments />
      <PricesInfo />
      <PriceList />
      <ContactForm />
    </>
  );
};

export default prices;
