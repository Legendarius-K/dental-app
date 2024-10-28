import GetInTouch from "@/components/GetInTouch";
import HeroFindUs from "@/components/Heroes/HeroFindUs";
import TimeToVisit from "@/components/TimeToVisit";

const find_us = () => {
    return (
        <section className="bg-textwhite">
            <HeroFindUs />
            <GetInTouch />
            <TimeToVisit background="bg-lightaccent" />
        </section>
    )
};

export default find_us

 