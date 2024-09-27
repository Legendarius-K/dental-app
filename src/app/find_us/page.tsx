import HeroFindUs from "@/components/HeroFindUs";


const find_us = () => {
    return (
        <section>
            <HeroFindUs/>
            <div className="flex justify-around p-10">
                <div className="bg-lightblue">
                    <h3>Tand Trygg</h3>
                    <p></p>
                </div>
                <div className="bg-lightblue">
                    Telefontider
                </div>
            </div>
        </section>
    )
};

export default find_us
