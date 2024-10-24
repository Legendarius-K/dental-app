import { getPrices } from "@/sanity/sanity-utils";
import { div } from "framer-motion/client";

const PriceList= async () => {

    const prices = await getPrices();

    return (
        <div className="text-[16px] flex flex-col font-bold p-8">
            <div className="grid grid-cols-4 pt-5">
                <p className="pl-8">Nr</p>
                <p className="sm:col-span-2 hidden sm:inline-block">Namn</p>
                <div className="flex sm:flex-col sm:grid sm:grid-cols-3 ">
                    <p className="text-right mx-4">Upp till 3000 kr</p>
                    <p className="text-bluegray text-right mx-4">3000-15000 kr</p>
                    <p className="text-accent text-right mx-4">Över 15000 kr</p>
                </div>
            </div>
            {prices.map((price, index)=> 
            <div key={index} className="grid grid-cols-4 pt-5">
                <p className="pl-8">{price.code}</p>
                <p className="col-span-2" key={index}>{price.treatment}</p>
                <div className="flex flex-col sm:grid sm:grid-cols-3 ">
                    <p className="text-right mx-4">{price.amount_under_3000}kr</p>
                    <p className="text-bluegray text-right mx-4">{price.amount_3000_15000}kr</p>
                    <p className="text-accent text-right mx-4">{price.amount_over_15000}kr</p>
                </div>
            </div>
        )}
        </div>
    )
}

export default PriceList;