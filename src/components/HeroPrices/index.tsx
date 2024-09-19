import BookButton from "../BookButton";
import ContactButton from "../ContactButton";
import Navbar from "../Navbar";

const HeroPrices = () => {
    return (
        <section
            className="relative w-full h-[600px] bg-cover bg-center text-neutral-100 font-sans"
            style={{ backgroundImage: "url('/images/hero-price.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
            <div className=" ml-[130px]">
                <h1 className="relative z-20 text-7xl font-semibold max-w-[500px] pt-[190px]">Våra priser </h1>
                <h2 className="relative z-20 text-xl max-w-[500px] pt-6 font-light">Vårt mål på Aqua Dental är att erbjuda den bästa tandvården till rätt pris. Detta</h2>
                <h2 className="relative z-20 text-xl max-w-[500px] pt-6 font-light">gör vi genom att tillhandahålla bra priser men framförallt genom vår extremt höga kvalitet. </h2>
                <div className="flex gap-6 mt-10">
                    <BookButton text="BOKA ONLINE" buttonStyle="text-xl py-3 w-[200px] font-bold" />
                    <ContactButton text="KONTAKTA OSS" buttonStyle="text-xl py-3 w-[200px]" />
                </div>
            </div>
            

        </section>
    );
};

export default HeroPrices;