import BookButton from "../BookButton";
import ContactButton from "../ContactButton";
import Navbar from "../Navbar";

const Hero = () => {
    return (
        <section
            className="relative w-full h-[700px] bg-cover bg-center text-neutral-100 font-sans"
            style={{ backgroundImage: "url('/images/niceteeth.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className=" ml-[130px]">
                <h1 className="relative z-20 text-7xl font-semibold max-w-[500px] pt-[190px]">Tranås <span className="relative before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-teal-300 before:bottom-5 before:left-0 before:translate-y-1">bästa</span> tandvård</h1>
                <h2 className="relative z-20 text-xl max-w-[500px] pt-6 font-light">Ny fräsch klinik mitt i Tranås. Boka idag så bjuder vi på de 100 första besöken!</h2>
                <div className="flex gap-6 mt-10">
                    <BookButton text="BOKA ONLINE" buttonStyle="text-xl py-3 w-[200px]" />
                    <ContactButton text="KONTAKTA OSS" buttonStyle="text-xl py-3 w-[200px]" />
                </div>
            </div>
            <div className="z-30 absolute inset-x-0 bottom-0 h-32 md:h-16 flex flex-wrap md:flex-nowrap justify-around items-center text-pt-navyblue p-4 bg-pt-gray2 bg-neutral-100 text-neutral-800">
                <div className="w-[139px] md:w-auto  md:text-left mb-2 md:mb-0">
                    <p>Enkel bokning</p>
                </div>
                <div className="w-[139px] md:w-auto  md:text-right mb-2 md:mb-0">
                    <p>Kort väntetid</p>
                </div>
                <div className="w-[139px] md:w-auto  md:text-left">
                    <p>Erfaren personal</p>
                </div>
                <div className="w-[139px] md:w-auto  md:text-right">
                    <p>Nöjda kunder</p>
                </div>
            </div>
            <Navbar/>
        </section>
    );
};

export default Hero;