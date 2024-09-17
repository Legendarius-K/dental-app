const Hero = () => {
    return (
        <section
            className="relative w-full h-[700px] bg-cover bg-center text-neutral-100 font-sans"
            style={{ backgroundImage: "url('/images/home-hero.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <h1 className="relative z-20 text-7xl font-semibold max-w-[500px] pt-[190px] ml-[130px]">
                Tranås bästa tandvård
            </h1>
            <h2 className="relative z-20 text-2xl max-w-[500px] pt-10 ml-[130px] font-light">Ny fräsch klinik mitt i Tranås. Boka idag så bjuder vi på de 100 första besöken!</h2>
        </section>
    );
};

export default Hero;