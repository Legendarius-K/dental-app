


const RingUs= ({map}:{map:boolean}) => {
    return (
        <div className="bg-bluegray basis-1/2">
            <div className="flex flex-col items-center justify-center p-8">
                <h2 className="text-white text-4xl lg:text-5xl mb-4  mt-8 md:mb-8 text-center max-w-[800px]">Ring oss</h2>
                <p className="text-white font-sans lg:pt-4 sm:text-2xl  lg:max-w-[550px] text-justify">Varmt välkommen till oss på Tand Trygg. Vi har i dag 2 kliniker i Sverige. Om du vill <a href="" className="font-bold text-accent hover:text-darkblue">boka</a> om eller <a href="" className="font-bold text-accent hover:text-darkblue">boka ny tid</a> hos oss är du varmt välkommen att kontakta din klinik.</p>
                <div className="text-left mt-14">
                    <p className="text-white font-sans lg:pt-4 sm:text-4xl lg:max-w-[550px] text-justify text left"><span  className="font-bold text-white">Norrköping</span> 08-002244</p>
                    <p className="text-white font-sans lg:pt-4 sm:text-4xl lg:max-w-[550px] text-justify text-left"><span  className="font-bold text-white">Tranäs</span> 08-113355</p>
                </div>
                {map && 
                <>
                    <h2 className="text-white text-4xl lg:text-4xl mb-4 md:mb-8 text-center max-w-[800px]">Här hittar du vår klinik</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33798.424318674515!2d14.93595324369289!3d58.03183079042202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465987fd56607ce5%3A0x1f93fa2a89c6fcd!2zVHJhbsOlcw!5e0!3m2!1sen!2sse!4v1727266307373!5m2!1sen!2sse" width="500" height="300"  loading="lazy"></iframe>
                </>
               
                }
                    
            </div>

        </div>
    )
}

export default RingUs