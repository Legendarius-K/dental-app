

import BookButton from "../../BookButton";
import ContactButton from "../../ContactButton";


const HeroAbout = () => {
    return (
        <section
            className="relative w-full h-[550px] max-h-screen bg-cover bg-center text-neutral-100 font-sans"
            style={{ backgroundImage: "url('/images/doctors.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
            <div className="ml-6 mr-6 md:ml-[80px] xl:ml-[130px]">
                <h1 className="relative z-20 text-5xl md:text-8xl max-w-[700px] pt-52 md:pt-[190px] font-nunito font-bold">Om Tand Trygg</h1>

            </div>


        </section>
    );
};

export default HeroAbout;