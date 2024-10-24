'use client'

import BookButton from "../../BookButton";
import ContactButton from "../../ContactButton";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            className="relative w-full h-[700px] max-h-screen bg-cover bg-center text-neutral-100 font-sans"
            style={{ backgroundImage: "url('/images/niceteeth.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <div className="ml-6 mr-6 md:ml-[80px] xl:ml-[130px]">
                <h1 className="relative z-20 text-4xl sm:text-5xl md:text-7xl max-w-[160px] sm:max-w-[450px] pt-[230px] md:pt-[150px] font-nunito font-bold">Tandvård för ett <span className="underline decoration-[#84DAE0] decoration-2 underline-offset-4">friskt</span> och <span className="underline decoration-[#84DAE0] decoration-2 underline-offset-4">hållbart</span>  </h1>
                <h2 className="relative z-20 md:text-lg max-w-[500px] pt-6 font-light"><span className="font-bold	">Gratis första konsultation</span>– För alla nya patienter!</h2>
                <h2 className="relative z-20 md:text-lg max-w-[500px] pt-6 font-light"><span className="font-bold	">Familjerabatt</span> – Få rabatt när hela familjen bokar sina besök samtidigt.</h2>
            </div>
            <motion.div className="relative z-20 flex f md:flex-row gap-6 mt-10 md:ml-[80px] xl:ml-[130px] mx-6"
                initial={{
                    opacity: 0,
                    y: 50
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.3,
                        duration: 0.5
                    }
                }}
                viewport={{ once: true }}>
                <BookButton text="BOKA ONLINE" buttonStyle="text-sm md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3" />
                <ContactButton text="KONTAKTA OSS" buttonStyle="text-sm md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3" />
            </motion.div>
            <div className="hidden sm:flex z-30 absolute inset-x-0 bottom-0 h-32 md:h-14 flex-wrap md:flex-nowrap justify-around items-center text-pt-navyblue p-4 bg-pt-gray2 bg-black/20 text-neutral-100">
                <div className="w-[139px] md:w-auto  md:text-left mb-2 md:mb-0 text-sm md:">
                    <p>&#8226; Enkel bokning</p>
                </div>
                <div className="w-[139px] md:w-auto  md:text-right mb-2 md:mb-0 text-sm ">
                    <p>&#8226; Kort väntetid</p>
                </div>
                <div className="w-[139px] md:w-auto  md:text-left text-sm md:t">
                    <p>&#8226; Erfaren personal</p>
                </div>
                <div className="w-[139px] md:w-auto  md:text-right text-sm md">
                    <p>&#8226; Nöjda kunder</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;


