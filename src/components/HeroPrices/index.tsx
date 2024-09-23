import BookButton from "../BookButton";
import ContactButton from "../ContactButton";
import Navbar from "../Navbar";


const HeroPrices = () => {
    return (
        <section
            className="relative w-full h-[600px] bg-cover bg-center text-neutral-100 font-sans"
            style={{ backgroundImage: "url('/images/hero-price2.jpg')" }}
        >
             <Navbar />
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            <div className="ml-6 mr-6 md:ml-[80px] xl:ml-[130px]">
                <h1 className="relative z-20 text-5xl md:text-7xl max-w-[500px] pt-52 md:pt-[190px] font-nunito font-bold">Våra priser</h1>
                <h2 className="relative z-20 md:text-lg max-w-[500px] pt-6 font-light">Vårt mål på Aqua Dental är att erbjuda den bästa tandvården till rätt pris. Detta gör vi genom att tillhandahålla bra priser men framförallt genom vår extremt höga kvalitet.</h2>
            </div>
                <div className="relative z-20 flex f md:flex-row gap-6 mt-10 md:ml-[80px] xl:ml-[130px] mx-6">
                    <BookButton text="BOKA ONLINE" buttonStyle="text-xl py-3 w-[200px] font-bold" />
                    <ContactButton text="KONTAKTA OSS" buttonStyle="text-xl py-3 w-[200px]" />
                </div>
            
           
            

        </section>
    );
};

export default HeroPrices;