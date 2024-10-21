import { getPrices } from "@/sanity/sanity-utils";
import { div } from "framer-motion/client";

const PriceList= async () => {

    const prices = await getPrices();

    return (
        <div className="text-[16px] flex flex-col font-bold p-8">
            {prices.map((price, index)=> 
            <div className="grid grid-cols-4 pt-5">
                <p key={index} className="pl-8">{price.code}</p>
                <p className="col-span-2" key={index}>{price.treatment}</p>
                <div className="flex flex-col sm:grid sm:grid-cols-3 ">
                    <p key={index} className="text-right">{price.amount_under_3000}kr</p>
                    <p key={index} className="text-bluegray text-right">{price.amount_3000_15000}kr</p>
                    <p key={index} className="text-accent text-right">{price.amount_over_15000}kr</p>
                </div>
            </div>
        )}
        </div>
    )
}

export default PriceList;