import BookButton from "../BookButton";


const NewInTown = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row">
            <div style={{ backgroundImage: "url('/images/smalltown2.jpg')", backgroundSize: "cover" }} className="h-[360px] md:h-[560px] md:w-1/2">
                
            </div>
            <div className="relative text-textwhite flex flex-col justify-center items-center md:w-1/2 bg-bluegray pt-20 pb-8 px-5 h-[360px]  md:h-[560px]">
                <h2 className="text-4xl md:text-5xl md:pb-3 font-semibold text-textwhite  text-center">Tandvård av högsta kvalitet hos Trygg Tandvård i Tranås</h2>
                <p className="text-xl text-textwhite font-sans text-center pt-3 pb-10">Välkommen till vår klinik på <span className="text-accent">Storgatan 41 i Tranås</span>, där du möts av våra erfarna och engagerade tandläkare. Vi kompromissar aldrig med kvalitet, personlig service eller tillgänglighet. Hos oss står du som patient alltid i fokus, och vi strävar efter att ge dig tandvård av högsta kvalitet.
                Vi ser fram emot att hjälpa dig ta hand om din munhälsa. Kontakta oss gärna för att boka en tid på <span className="text-accent">070-123 456</span> eller <span className="text-accent">online</span>.</p>
                <BookButton text="BOKA ONLINE" buttonStyle="text-sm md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3" />
                <div className="bg-bluegray h-16 w-full absolute left-0 -bottom-8 md:hidden" style={{borderRadius: "50%"}}></div>
            </div>
        </section>
    )
};

export default NewInTown
