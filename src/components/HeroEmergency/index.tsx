

import BookButton from "../BookButton";
import ContactButton from "../ContactButton";


const Hero = () => {
    return (
        <section
            className="relative w-full h-[600px] max-h-screen bg-cover bg-center text-neutral-100 font-sans"
            style={{ backgroundImage: "url('/images/emergencyHero.png')" }}
        >
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <div className="ml-6 mr-6 md:ml-[80px] xl:ml-[130px]">
                <h1 className="relative z-20 text-5xl md:text-7xl max-w-[500px] pt-52 md:pt-[190px] font-nunito font-bold">Akut Tandvård</h1>
                <h2 className="relative z-20 md:text-lg max-w-[500px] pt-6 font-light">Akut tandvård är nödvändig när du snabbt behöver behandling för plötsliga tandproblem som smärta, skador eller infektioner, för att förhindra att tillståndet förvärras.</h2>
            </div>
            <div className="relative z-20 flex f md:flex-row gap-6 mt-10 md:ml-[80px] xl:ml-[130px] mx-6">
                <BookButton text="BOKA ONLINE" buttonStyle="text-sm md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3 " />
                <ContactButton text="KONTAKTA OSS" buttonStyle="text-sm md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3" />
            </div>
            
        </section>
    );
};

export default Hero;


