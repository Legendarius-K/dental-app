import { PhoneCall } from "lucide-react";
import Phone from "../../../public/images/telephone.png";
import BookButton from "../BookButton";

const PriceMap = () => {
  return (
    <section className="flex flex-col md:flex-row bg-textwhite py-12 pb-0 md:pb-16 md:py-16 lg:py-24 lg:pb-16">
      <div className="w-full md:w-1/2  flex flex-col items-center justify-center px-4 md:px-8 pb-10">
        <h2 className="font-semibold text-2xl md:text-3xl mb-4 md:mb-8 text-center ">
          Det här får du hos Trygg Tandvård
        </h2>
        <div>
          <p className="text-black font-sans lg:pt-4 sm:text-md  lg:max-w-[550px] my-3">
            <span className="font-bold">Prisvärd tandvård </span>
            innebär olika saker för olika personer, men hos oss betyder det
            kvalitet och hållbarhet. Vi fokuserar på behandlingar som är
            långsiktiga och förebyggande för att minska risken för
            komplikationer och onödiga återbesök.
          </p>
          <p className="text-black font-sans lg:pt-4 sm:text-md  lg:max-w-[550px] my-3">
            <span className="font-bold">Vårt löfte</span> till dig är att alltid
            sätta trygghet, kvalitet och patientsäkerhet först. Våra erfarna
            tandläkare har gedigen kompetens och arbetar för att ge dig den
            bästa vården. Vi är dessutom tillgängliga året runt och tar inte ut
            några extra avgifter för kvällar och helger.
          </p>
          <p className="text-black font-sans lg:pt-4 sm:text-md  lg:max-w-[550px] my-3">
            Vi tror på att tandvård ska vara
            <span className="font-bold"> enkel</span> och
            <span className="font-bold "> tillgänglig</span> för alla. Därför
            erbjuder vi flexibla bokningsalternativ och en välkomnande miljö där
            du alltid kan känna dig trygg och omhändertagen. Hos oss är ditt
            leende vår högsta prioritet.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 md:border-l shadow-md rounded-xl bg-white pb-20 md:pb-0 md:mr-3 max-w-[600px]">
        <h2 className="text-3xl pl-6 text-textwhite py-2 font-nunito rounded-tl-xl rounded-tr-xl bg-bluegray">
          Hitta en ledig tid
        </h2>
        <div className="w-4/5 font-sans flex flex-col gap-4 mt-8 pl-6">
          <p>
            <span className="font-bold">Välj den klinik</span> som passar dig
            bäst från listan nedan för att hitta en ledig tid. Du kan enkelt
            boka din behandling på en tid som passar dig, oavsett om det är en
            vardag eller helg.
          </p>
          <p>
            <span className="font-bold">Vi ser fram emot</span> att välkomna dig
            och göra ditt besök hos oss så smidigt och bekvämt som möjligt!
          </p>
        </div>
        <div className="flex flex-col mt-12 pl-6 gap-4">
          <BookButton
            text="TRANÅS"
            buttonStyle="text-lg md:text-xl py-2 md:py-3 w-[200px] px-3 font-medium"
          />
          <BookButton
            hrefNorrköping
            text="NORRKÖPING"
            buttonStyle="text-lg md:text-xl py-2 md:py-3 w-[200px] px-3 font-medium"
          />
        </div>
      </div>
      {/* <div className="mt-10 pr-6 basis-1/2 flex flex-col border-l border-bluegray">
          <div className="px-6 bg-bluegray flex justify-between items-center">
            <h2 className=" text-white text-xl md:text-2xl lg:text-3xl text-center max-w-[800px] font-nunito my-4 pl-2">
              Välj en klinik{" "}
            </h2>
            <PhoneCall size={40} className="text-textwhite" />
          </div>
          <div className="flex my-4 xl:w-[75%]">
            <p className="w-[80%] text-xl lg:text-2xl p-2">Norrköping</p>
            <BookButton
              text="BOKA HÄR"
              buttonStyle="text-sm md:text-xl py-1 md:py-3 w-[200px] px-3 font-medium"
            />
          </div>
          <div className="flex xl:w-[75%]">
            <p className="w-[80%] text-xl lg:text-2xl p-2 ">Tranås</p>
            <BookButton
              text="BOKA HÄR"
              buttonStyle="text-sm md:text-xl py-1 md:py-3 w-[200px] px-3 font-medium"
            />
          </div>
        </div> */}
    </section>
  );
};

export default PriceMap;
