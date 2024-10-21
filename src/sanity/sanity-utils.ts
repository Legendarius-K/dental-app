import { createClient, groq } from "next-sanity";
import { dataset, projectId } from "./env";

interface PriceTypes {
    title: string;
    treatment: string;
    slug: { current: string };
    code: string;
    amount_under_3000: number;
    amount_3000_15000: number;
    amount_over_15000: number;
}

export const getPrices = async (): Promise<PriceTypes[]> => {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
    });

    return client.fetch<PriceTypes[]>(
        groq`*[_type == "prices"]{
            title, 
            treatment,
            slug,
            code,
            amount_under_3000,
            amount_3000_15000,
            amount_over_15000
        }`
    );
};



