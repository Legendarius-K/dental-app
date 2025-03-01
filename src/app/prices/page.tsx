
import HeroPrices from "@/components/Heroes/HeroPrices";
import NewContact from "@/components/NewContact";
import PriceMap from "@/components/PriceMap";
import PricesInfo from "@/components/PricesInfo";


const prices = () => {
  return (
    <>
      <HeroPrices />

      <PriceMap />
      <PricesInfo />
      <NewContact />
    </>
  );
};

export default prices;
