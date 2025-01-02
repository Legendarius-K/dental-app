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
        <div className="absolute top-16 right-3 text-[8px] md:text-[10px] text-neutral-200 z-30">
          Allmäntandvård | Specialisttandvård | Tandreglering
        </div>
        <div className="ml-6 mr-6 md:ml-[80px] xl:ml-[130px]">
          <h1 className="relative z-20 text-4xl md:text-6xl max-w-[500px] pt-52 md:pt-[190px] font-nunito font-bold">
            Tandvård för ett{" "}
            <span className="underline decoration-[#84DAE0] decoration-2 underline-offset-4">
              friskt
            </span>{" "}
            och{" "}
            <span className="underline decoration-[#84DAE0] decoration-2 underline-offset-4">
              hållbart
            </span>{" "}
            leende
          </h1>
          {/* <h2 className="relative z-20 text-sm md:text-lg max-w-[500px] pt-6 font-light"><span className="font-semibold">Gratis första konsultation</span> – För alla nya patienter!</h2> */}
          <h2 className="relative z-20 text-sm md:text-lg max-w-[500px] pt-3 font-light">
            <span className="font-semibold">Familjerabatt</span> – Få rabatt när
            hela familjen bokar sina besök samtidigt
          </h2>
        </div>
        <motion.div
          className="relative z-20 flex f md:flex-row gap-6 mt-10 md:ml-[80px] xl:ml-[130px] mx-6"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <BookButton
            text="BOKA ONLINE"
            buttonStyle="text-base md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3"
          />
          <ContactButton
            text="KONTAKTA OSS"
            buttonStyle="text-base md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3"
          />
        </motion.div>
        <div className="flex z-30 absolute inset-x-0 bottom-0 h-24 md:h-12 flex-wrap md:flex-nowrap justify-around items-center text-pt-navyblue p-4 bg-pt-gray2 bg-black/20 text-neutral-100">
          <div className="w-[150px] md:w-auto  md:text-left mb-2 md:mb-0 text-[12px] md:">
            <p>&#8226; Omfattande garantier</p>
          </div>
          <div className="w-[150px] md:w-auto  md:text-right mb-2 md:mb-0 text-[12px] ">
            <p>&#8226; Räntefri delbetalning</p>
          </div>
          <div className="w-[150px] md:w-auto  md:text-left text-[12px] md:t">
            <p>&#8226; Specialisttandvård</p>
          </div>
          <div className="w-[150px] md:w-auto  md:text-right text-[12px] md">
            <p>&#8226; Brett tandvårdsutbud</p>
          </div>
        </div>
      </section>
    );
};

export default Hero;


