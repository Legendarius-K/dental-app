import BookButton from "@/components/BookButton";
import Hero from "@/components/Heroes/Hero";
import { HowHelp } from "@/components/HowHelp";
import NewInTown from "@/components/NewInTown";
import SafeCare from "@/components/SafeCare";
import TimeToVisit from "@/components/TimeToVisit";
import { contact } from "@/utils/data";
import Image from "next/image";
import dentist from "../../public/images/dentist-1.jpg";
import HomeInfo from "@/components/HomeInfo";
import Phobia from "@/components/Phobia";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <HowHelp />
      <div className="flex flex-col items-center bg-white">
        <section className="w-full max-w-[1200px] flex flex-col md:flex-row justify-center gap-16 my-10 md:p-16">
          <div className="md:w-1/2  w-full flex flex-col gap-5 font-sans">
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-center md:text-left text-bluegray">
              Pålitlig tandläkare med trygg vård i Tranås
            </h3>
            <p>
              <span className="font-semibold">
                Hos Trygg Tandvård får du professionell och omsorgsfull
                tandvård.
              </span>{" "}
              Vi strävar alltid efter att sätta patientens behov i fokus och
              bemöter alla med värme och respekt. Oavsett om du behöver en
              rutinundersökning eller mer avancerad behandling kan du känna dig
              trygg hos oss.
            </p>
            <p>
              Vår ambition är att skapa långsiktiga relationer med våra
              patienter. Därför prioriterar vi inte bara högkvalitativ tandvård
              utan också ett personligt och trevligt bemötande. Många som
              besöker oss uppskattar just detta och rekommenderar oss vidare.
            </p>
            <p>
              Vi vill göra tandvård tillgänglig för alla, oavsett behov och
              ekonomi. Våra priser är konkurrenskraftiga, och vi erbjuder
              möjligheten att använda högkostnadsskydd.
            </p>
            <h3 className="text-lg md:text-xl font-nunito font-semibold text-center md:text-left text-bluegray">
              När du behöver akut tandvård i Tranås – boka tid hos oss
            </h3>
            <p>
              <span className="font-semibold">
                Har du tandvärk, svullnad eller andra akuta besvär som inte kan
                vänta?
              </span>{" "}
              Vänd dig till en tandläkare i Tranås för snabb hjälp. Vi erbjuder
              akuttider samma dag eller senast dagen efter din kontakt. Tandvärk
              orsakas ofta av inflammation i tandens nerv, rot eller fäste och
              kan bero på obehandlade hål. Visdomständer är särskilt utsatta och
              kräver ibland att de dras ut. För att undvika spridning av
              infektionen bör du söka vård direkt. Regelbundna kontroller är
              bäst, men vid smärta eller feber – boka en akuttid omedelbart!
            </p>
            

            <div className="w-full flex justify-center md:justify-start">
              <BookButton
                text="BOKA NU"
                buttonStyle="w-[300px] md:w-[200px] py-3 mt-10 shadow-lg md:text-xl"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <Image className="w-full h-auto rounded" src={dentist} alt="ache" />
          </div>
        </section>
      </div>
      <HomeInfo />
      <NewInTown />
      <Phobia />
      <SafeCare />
      <TimeToVisit background="bg-textwhite" />
    </main>
  );
}
