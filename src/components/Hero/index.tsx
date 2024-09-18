import BookButton from "../BookButton";
import ContactButton from "../ContactButton";
import Navbar from "../Navbar";

const Hero = () => {
    return (
        <section
            className="relative w-full h-[700px] bg-cover bg-center text-neutral-100 font-sans"
            style={{ backgroundImage: "url('/images/home-hero.jpg')" }}
        >
            <Navbar />
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="ml-6 mr-6 md:ml-[80px] xl:ml-[130px]">
                <h1 className="relative z-20 text-5xl md:text-7xl max-w-[500px] pt-52 md:pt-[190px] font-nunito font-bold">Tranås <span className="relative before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-teal-300 md:before:bottom-5 before:bottom-4 before:left-0 before:translate-y-1">bästa</span> tandvård</h1>
                <h2 className="relative z-20 text-sm md:text-lg max-w-[500px] pt-6 font-light">Ny fräsch klinik mitt i Tranås. Boka idag så bjuder vi på de 100 första besöken!</h2>
            </div>
            <div className="flex f md:flex-row gap-6 mt-10 md:ml-[80px] xl:ml-[130px] mx-6">
                <BookButton text="BOKA ONLINE" buttonStyle="text-sm md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3" />
                <ContactButton text="KONTAKTA OSS" buttonStyle="text-sm md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3" />
            </div>
            <div className="flex z-30 absolute inset-x-0 bottom-0 h-32 md:h-16 flex-wrap md:flex-nowrap justify-around items-center text-pt-navyblue p-4 bg-pt-gray2 bg-neutral-100 text-neutral-800">
                <div className="w-[139px] md:w-auto  md:text-left mb-2 md:mb-0">
                    <p>&#8226; Enkel bokning</p>
                </div>
                <div className="w-[139px] md:w-auto  md:text-right mb-2 md:mb-0">
                    <p>&#8226; Kort väntetid</p>
                </div>
                <div className="w-[139px] md:w-auto  md:text-left">
                    <p>&#8226; Erfaren personal</p>
                </div>
                <div className="w-[139px] md:w-auto  md:text-right">
                    <p>&#8226; Nöjda kunder</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;

