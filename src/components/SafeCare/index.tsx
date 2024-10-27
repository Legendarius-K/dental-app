'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from "next/image";
import teeth from "../../../public/images/teeth-wireframe.png";
import { useRef } from 'react';

const SafeCare = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [-14, 12]);

    return (
        <section ref={ref} className="bg-accent px-5 sm:px-10 lg:px-14 xl:px-28 py-20 flex justify-center pb-36">
            <div className="max-w-[1200px] flex flex-col gap-10">
                <div className='flex flex-col sm:flex-row gap-10 items-center'>
                    <div className=' sm:basis-1/2'>
                        <h2 className="text-darkbluegray text-3xl sm:text-5xl sm:mb-8 font-semibold text-center max-w-[500px]">Sveriges tryggaste tandvård</h2>
                        <p className="text-white font-sans pt-4">På Trygg Tandvård vill vi göra tandvården enkel och behaglig för dig. Vårt mål är att du alltid ska känna dig trygg och väl omhändertagen. Läs vad våra patienter tycker om oss →</p>
                    </div>
                    <div className="py-10 p-2 lg:p-6 xl:p-10 sm:basis-1/2">
                        <motion.div style={{ rotate }}>
                            <Image className="w-full h-auto" src={teeth} alt="Teeth" />
                        </motion.div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-10'>
                    <div className=' sm:basis-1/2'>
                        <h2 className="text-darkbluegray text-3xl font-semibold text-center">Tillgänglighet som passar dig</h2>
                        <p className="text-white font-sans pt-4">Vi har öppet när du behöver oss, även på helger utan extra kostnader. På Trygg Tandvård betalar du samma pris alla dagar i veckan – vi finns här när det passar dig bäst.</p>
                        {/* <p className="text-white font-sans pt-4"> Därför är vi pedantiskt noggranna med kvalitet och lovar att aldrig kompromissa med odontologisk kompetens.</p> */}
                    </div>
                    <div className=' sm:basis-1/2'>
                        <h2 className="text-darkbluegray text-3xl font-semibold text-center">Förebyggande vård för långvarig hälsa</h2>
                        <p className="text-white font-sans pt-4">Vi arbetar för att du ska behöva träffa oss så lite som möjligt. Vår förebyggande tandvård minskar risken för problem och onödiga återbesök. Vi kompromissar aldrig med kvalitet och ser till att din vård är på topp.</p>
                        {/* <p className="text-white font-sans pt-4"> Därför är vi pedantiskt noggranna med kvalitet och lovar att aldrig kompromissa med odontologisk kompetens.</p> */}
                    </div>
                    <div className=' sm:basis-1/2'>
                        <h2 className="text-darkbluegray text-3xl font-semibold text-center">Orolig för att gå till tandläkaren?</h2>
                        <p className="text-white font-sans pt-4">Många känner obehag inför tandläkarbesök. Berätta gärna för oss vid bokningen, så anpassar vi ditt besök och ser till att du känner dig trygg. Våra erfarna tandläkare har lång erfarenhet av att hjälpa patienter som är oroliga.</p>
                        {/* <p className="text-white font-sans pt-4">Hos oss träffar du alltid tandläkare med lång erfarenhet av att bemöta och behandla patienter med tandvårdsrädsla.</p> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafeCare;
