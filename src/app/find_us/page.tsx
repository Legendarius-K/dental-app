import GetInTouch from "@/components/GetInTouch";
import HeroFindUs from "@/components/Heroes/HeroFindUs";
import TimeToVisit from "@/components/TimeToVisit";

const find_us = () => {
    return (
        <section className="bg-textwhite w-full">
            <HeroFindUs />
            <GetInTouch />
            <TimeToVisit  />
        </section>
    )
};

export default find_us

 