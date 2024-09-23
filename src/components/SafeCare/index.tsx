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

    const rotate = useTransform(scrollYProgress, [0, 1], [-10, 8]);

    return (
        <section ref={ref} className="bg-accent px-5 sm:px-10 lg:px-14 xl:px-28 py-24 flex justify-center">
            <div className="max-w-[1200px] flex flex-col gap-10">
                <div className='flex flex-col sm:flex-row gap-10 items-center'>
                    <div className=' sm:basis-1/2'>
                        <h2 className="text-bluegray text-3xl sm:text-5xl sm:mb-8 font-semibold text-center max-w-[500px]">Trygg och vänlig tandvård</h2>
                        <p className="text-white font-sans pt-4">Det är vårt outtröttliga mål. Vi vill göra det lättare, tryggare och trevligare att gå till tandläkaren.</p>
                    </div>
                    <div className="py-10 p-2 lg:p-6 xl:p-10 sm:basis-1/2">
                        <motion.div style={{ rotate }}>
                            <Image className="w-full h-auto" src={teeth} alt="Teeth" />
                        </motion.div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-10'>
                    <div className=' sm:basis-1/2'>
                        <h2 className="text-bluegray text-3xl font-semibold text-center">Vi ses snart igen</h2>
                        <p className="text-white font-sans pt-4">Även om vi gillar att träffa dig är vårt mål att det inte ska behöva ske så ofta. Vårt arbetssätt syftar till att verka förebyggande och långsiktigt, för att minimera risken för komplikationer och oönskade återbesök.</p>
                        <p className="text-white font-sans pt-4"> Därför är vi pedantiskt noggranna med kvalitet och lovar att aldrig kompromissa med odontologisk kompetens.</p>
                    </div>
                    <div className=' sm:basis-1/2'>
                        <h2 className="text-bluegray text-3xl font-semibold text-center">Tandvårdsrädd?</h2>
                        <p className="text-white font-sans pt-4">Att känna obehag inför sitt möte med tandvården är vanligt och är ingenting att skämmas över. Tvärtom, berätta gärna det för oss vid bokningstillfället - så anpassar vi besöket därefter.</p>
                        <p className="text-white font-sans pt-4">Hos oss träffar du alltid tandläkare med lång erfarenhet av att bemöta och behandla patienter med tandvårdsrädsla.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafeCare;
