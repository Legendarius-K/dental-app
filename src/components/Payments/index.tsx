import Image from "next/image"
import Payment from "../../../public/images/payment.jpg"



const Payments = () => {
    return (
        <section className="flex flex-col md:flex-row bg-accent max-h-[600px]">
            <div className="basis-1/2 max-h-[400px]  md:max-h-full ">
            {/* <img src="../../images/payment.jpg" alt="" className=" max-h-[400px] w-full md:max-h-full "/> */}
                <Image src={Payment} alt="payment phone" style={{ objectFit: "cover" }} />
            </div>
            
            <div className="basis-1/2 p-8 flex flex-col items-center justify-center">
                <h2 className="text-bluegray text-2xl md:text-4xl lg:text-5xl md:mb-8 font-semibold text-center max-w-[800px]">Alltid hos Tand Trygg</h2>
                <div>
                    <p className="text-white font-sans lg:pt-4 sm:text-lg lg:text-2xl">- Tydliga och transparenta priser</p>
                    <p className="text-white font-sans lg:pt-4 sm:text-lg lg:text-2xl">- Inga dolda avgifter</p>
                    <p className="text-white font-sans lg:pt-4 sm:text-lg lg:text-2xl">- Samma pris sju dagar i veckan</p>
                    <p className="text-white font-sans lg:pt-4 sm:text-lg lg:text-2xl">- Specialisttandvård med hög tillgänglighet</p>
                </div>
                

            </div>
        </section>
    )
}

export default Payments