import { dentists } from "../../../utils/data";


const StaffContainer = () => {
    return (
        <section className="bg-bluegray min-h-[700px] flex flex-col items-center px-20">
        <h2 className="text-white text-4xl lg:text-6xl m-6 text-center max-w-[800px]">Vi som jobbar här</h2>
        <div className="flex flex-col md:flex-row w-full">
            <h2 className="text-white text-4xl lg:text-4xl m-6 font-semibold basis-1/2">Det är vi som är Trygg Tandvård </h2>
            <p className="text-white text-xl basis-1/2 ">Vi är ett team av tandläkare, tandhygienister, tandsköterskor och tandtekniker med rätt erfarenhet och hög kompetens. Kontinuerlig kompetensutveckling är en naturlig del av vår vardag: i våra respektive professioner samt i användande av den toppmoderna tekniska utrustning vi har – och införskaffar vid behov. Tillsammans är det vi som är Aqua Dental. </p>
        </div>
        <div className="flex flex-col md:flex-row w-full flex-wrap md:justify-center items-center">
            {dentists.map((item, index)=> <div className="flex flex-col  items-center m-4 p-4 w-[250px] h-[250px]">
                <img src={item.pictureUrl} alt="" className="w-32 h-32 rounded-full object-cover"/>
                
                <h4 className="text-white text-lg font-bold">{item.name}</h4>
                <h4 className="text-white text-md text-center">{item.title}</h4>

            
            </div>)}
        </div>
        </section>
    )
}

export default StaffContainer;