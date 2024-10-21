import { getPrices } from "@/sanity/sanity-utils";
import { div } from "framer-motion/client";

const PriceList= async () => {

    const prices = await getPrices();

    return (
        <div>
            {prices.map((price, index)=> <h4 key={index}>{price.title}</h4>)}
        </div>
    )
}

export default PriceList;