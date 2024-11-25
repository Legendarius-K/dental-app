

import BookButton from "../../BookButton";
import ContactButton from "../../ContactButton";


const Hero = () => {
    return (
      <section
        className="relative w-full h-[690px] md:h-[650px] max-h-screen bg-cover bg-center text-neutral-100 font-sans"
        style={{ backgroundImage: "url('/images/hero-price2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="ml-6 mr-6 md:ml-[80px] xl:ml-[130px]">
          <h1 className="relative z-20 text-5xl md:text-7xl max-w-[500px] pt-52 md:pt-[190px] font-nunito font-bold">
            Våra priser
          </h1>
          <h2 className="relative z-20 md:text-lg max-w-[500px] pt-6 font-light">
            Delbetala räntefritt med en fast månadskostnad hos Trygg Tandvård.
            Oavsett behandlingens kostnad får du ett snabbt besked, och vi
            hjälper dig att välja en betalningsplan som passar din ekonomi.
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
        <div className="flex z-30 absolute inset-x-0 bottom-0 h-24 md:h-12 flex-wrap md:flex-nowrap justify-around items-center text-pt-navyblue p-4 bg-pt-gray2 bg-black/20 text-neutral-100">
          <div className="w-[156px] md:w-auto  md:text-left mb-2 md:mb-0 text-[12px] md:">
            <p>&#8226; Ingen helgtaxa</p>
          </div>
          <div className="w-[156px] md:w-auto  md:text-right mb-2 md:mb-0 text-[12px] ">
            <p>&#8226; Transparent prissättning</p>
          </div>
          <div className="w-[156px] md:w-auto  md:text-left text-[12px] md:t">
            <p>&#8226; Räntefri delbetalning</p>
          </div>
          <div className="w-[156px] md:w-auto  md:text-right text-[12px] md">
            <p>&#8226; Flexibla behandlingsalternativ</p>
          </div>
        </div>
      </section>
    );
};

export default Hero;


