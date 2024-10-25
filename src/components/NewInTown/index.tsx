import BookButton from "../BookButton";


const NewInTown = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row">
            <div style={{ backgroundImage: "url('/images/smalltown2.jpg')", backgroundSize: "cover" }} className="h-[360px] md:h-[560px] md:w-1/2">
                
            </div>
            <div className="relative text-textwhite flex flex-col justify-center items-center md:w-1/2 bg-bluegray pt-20 pb-8 px-5 h-[360px]  md:h-[560px]">
                <h2 className="text-4xl md:text-5xl md:pb-3 font-semibold text-textwhite  text-center">Tranås</h2>
                <p className="text-lg md:text-xl text-textwhite font-sans text-center pt-1 pb-16">Välkommen till vår klinik på Storgatan 41</p>
                <h2 className="text-3xl md:text-4xl md:pb-3 font-semibold text-textwhite  text-center">Norrköping</h2>
                <p className="text-lg md:text-xl text-textwhite font-sans text-center pt-1 pb-10">Välkommen till vår klinik på Repslagaregatan 30</p>
                <div className="bg-bluegray h-16 w-full absolute left-0 -bottom-8 md:hidden" style={{borderRadius: "50%"}}></div>
            </div>
        </section>
    )
};

export default NewInTown
