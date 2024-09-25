


const RingUs= () => {
    return (
        <div className="bg-bluegray basis-1/2">
            <div className="flex flex-col items-center  p-8">
                <h2 className="text-white text-4xl lg:text-5xl mb-4  md:mt-8 md:mb-8 text-center max-w-[800px]">Ring oss</h2>
                <p className="text-white font-sans lg:pt-4 sm:text-2xl  lg:max-w-[550px] text-justify">Varmt välkommen till oss på Tand Trygg. Vi har i dag 2 kliniker i Sverige. Om du vill <a href="" className="font-bold text-accent hover:text-darkblue">boka</a> om eller <a href="" className="font-bold text-accent hover:text-darkblue">boka ny tid</a> hos oss är du varmt välkommen att kontakta din klinik.</p>
                <div className="text-left mt-4 md:mt-14 flex flex-col">
                    <p className="text-white font-sans lg:pt-4 text-2xl sm:text-4xl lg:max-w-[550px] text-justify text left"><span  className="font-bold text-white">Norrköping</span> 08-002244</p>
                    <p className="text-white font-sans lg:pt-4 text-2xl sm:text-4xl lg:max-w-[550px] text-justify text-left"><span  className="font-bold text-white">Tranäs</span> 08-113355</p>
                </div>
            </div>
        </div>
    )
}

export default RingUs