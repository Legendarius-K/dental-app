import Link from "next/link";
import BookButton from "../BookButton";


const NewInTown = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row">
            <div style={{ backgroundImage: "url('/images/smalltown2.jpg')", backgroundSize: "cover" }} className="h-[360px] md:h-[560px] md:w-1/2">
                
            </div>
            <div className="relative text-textwhite flex flex-col justify-center items-center md:w-1/2 bg-bluegray pt-20 pb-8 px-5 h-[360px]  md:h-[560px]">
                <h2 className="text-4xl md:text-5xl md:pb-3 font-semibold text-textwhite  text-center">Tranås</h2>
                <p className="text-lg md:text-xl text-textwhite font-sans text-center pt-1 pb-16">Välkommen till vår klinik på <Link className=" text-lightblue" target="blank" href={'https://www.google.com/maps/place/Storgatan+41,+573+32+Tran%C3%A5s/@58.0359296,14.9738697,457m/data=!3m2!1e3!4b1!4m6!3m5!1s0x465a27d8e5a89fa7:0x14316030462d4d54!8m2!3d58.0359268!4d14.97645!16s%2Fg%2F11c48w6550?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/place/Storgatan+41,+573+32+Tran%C3%A5s/@58.0358448,14.9757358,147m/data=!3m1!1e3!4m6!3m5!1s0x465a27d8e5a89fa7:0x14316030462d4d54!8m2!3d58.0359268!4d14.97645!16s%2Fg%2F11c48w6550?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D'}>Storgatan 41</Link></p>
                <h2 className="text-3xl md:text-4xl md:pb-3 font-semibold text-textwhite  text-center">Norrköping</h2>
                <p className="text-lg md:text-xl text-textwhite font-sans text-center pt-1 pb-10">Välkommen till vår klinik på <Link className=" text-lightblue" target="blank" href={'https://www.google.com/maps/place/Repslagaregatan+30,+602+45+Norrk%C3%B6ping/@58.5890818,16.188354,899m/data=!3m2!1e3!4b1!4m6!3m5!1s0x46593a4cd736a1eb:0xf51051c2a06ad9fa!8m2!3d58.5890791!4d16.192962!16s%2Fg%2F11c2fmqy6x?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D'}>Repslagaregatan 30</Link></p>
                <div className="bg-bluegray h-16 w-full absolute left-0 -bottom-8 md:hidden" style={{borderRadius: "50%"}}></div>
            </div>
        </section>
    )
};

export default NewInTown
