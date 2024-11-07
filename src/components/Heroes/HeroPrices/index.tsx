

import BookButton from "../../BookButton";
import ContactButton from "../../ContactButton";


const Hero = () => {
    return (
      <section
        className="relative w-full h-[550px] max-h-screen bg-cover bg-center text-neutral-100 font-sans"
        style={{ backgroundImage: "url('/images/hero-price2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="ml-6 mr-6 md:ml-[80px] xl:ml-[130px]">
          <h1 className="relative z-20 text-5xl md:text-7xl max-w-[500px] pt-52 md:pt-[190px] font-nunito font-bold">
            Våra priser
          </h1>
          <h2 className="relative z-20 md:text-lg max-w-[500px] pt-6 font-light">
            Vårt mål på Trygg Tand är att erbjuda den bästa tandvården till rätt
            pris. Detta gör vi genom att tillhandahålla bra priser men
            framförallt genom vår extremt höga kvalitet
          </h2>
        </div>
        <div className="relative z-20 flex f md:flex-row gap-6 mt-10 md:ml-[80px] xl:ml-[130px] mx-6">
          <BookButton
            text="BOKA ONLINE"
            buttonStyle="text-base md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3"
          />
          <ContactButton
            text="KONTAKTA OSS"
            buttonStyle="text-base md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3"
          />
        </div>
      </section>
    );
};

export default Hero;


