import HeroAllTreatments from "@/components/Heroes/HeroAllTreatments"
import TimeToVisit from "@/components/TimeToVisit"
import { treatments } from "@/utils/data"
import { div } from "framer-motion/client"

export default function AllTreatments() {
    return (
        <>
            <HeroAllTreatments />
            <section className="flex justify-center flex-wrap p-5 py-16 pb-28">
                {treatments?.map((treatment, index) => <TreatmentCard key={index} title={treatment.title} info={treatment.info} />)}
            </section>
            <TimeToVisit background="bg-lightaccent" />
        </>
    )
};

const TreatmentCard = ({ title, info }: { title: string, info: string }) => {
    return (
        <div className="bg-lightblue/60 py-4 md:py-12 px-6 m-5 w-[340px] shadow-lg rounded">
            <h2 className="font-nunito text-[22px] font-semibold pb-1 text-nowrap">{title}</h2>
            <p className="hidden md:block font-sans text-zinc-600 pt-1">{info}</p>
        </div>
    )
}

