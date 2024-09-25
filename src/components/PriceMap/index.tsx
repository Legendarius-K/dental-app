import  Phone  from '../../../public/images/telephone.png';
import BookButton from '../BookButton';



const PriceMap = () => {
    return (
        <section className="flex flex-col md:flex-row bg-white max-h-[1000px]">
            <div className="basis-1/2 p-8 flex flex-col items-center justify-center">
                <h2 className="text-black text-4xl lg:text-4xl mb-4 md:mb-8 text-center max-w-[800px]">Det får du för pengarna</h2>
                <div>
                    <p className="text-black font-sans lg:pt-4 sm:text-md  lg:max-w-[550px] text-justify">Vad prisvärd <a href="" className="font-bold text-accent hover:text-darkblue">tandvård</a> egentligen innebär beror ju så klart på vem du frågar. För oss handlar det om kvalitativa behandlingar och ingrepp som håller över tid. Som minimerar risken för komplikationer, återbesök och upprepande åtgärder</p>
                    <p className="text-black font-sans lg:pt-4 sm:text-md  lg:max-w-[550px] text-justify">Att verka förebyggande och långsiktigt är därför några av våra viktigaste åtaganden. Vårt löfte är att aldrig kompromissa med <a href="" className="font-bold text-accent hover:text-darkblue">trygghet, kvalitet och patientsäkerhet.</a> </p>
                    <p className="text-black font-sans lg:pt-4 sm:text-md  lg:max-w-[550px] text-justify"> Våra tandläkare har i snitt 20 års erfarenhet och var fjärde har en <a href="" className="font-bold text-accent hover:text-darkblue">specialistutbildning.</a> Vi är också stolta över att finnas tillgängliga 365 dagar utan någon helg- och kvällstaxa. </p>
                </div>
            </div>
            <div className="basis-1/2 p-8 flex flex-col ">
                <h2 className="text-black text-4xl lg:text-4xl mb-4 md:mb-8 text-center max-w-[800px]">Hitta en ledig tid</h2>
                <div className='bg-bluegray flex justify-between items-center'>
                    <h2 className=" text-white text-2xl md:text-4xl lg:text-5xl md:mb-8 text-center max-w-[800px] font-sans my-4 pl-2">Välj en klinik </h2>
                    <img src={Phone.src} alt="" className='w-[40px] h-[40px] bg-mainblue hover:bg-white rounded-full border-2 p-1 m-6 cursor-pointer' />
                </div>
                <div className='flex my-4 xl:w-[75%]'>
                    <p className="w-[80%] text-3xl lg:text-5xl p-2">Nörrköping</p>
                    <BookButton text="BOKA HÄR" buttonStyle="text-sm md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3 font-bold" />
                </div>
                <div className='flex xl:w-[75%]'>
                <p className="w-[80%] text-3xl lg:text-5xl p-2 ">Tranås</p>
                <BookButton text="BOKA HÄR" buttonStyle="text-sm md:text-xl py-1 md:py-3 w-[200px] h-12 md:h-auto px-3 font-bold" />
                </div>
            </div>
            
            
        </section>
    )
}

export default PriceMap