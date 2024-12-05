import BookButton from "@/components/BookButton";
import { contact } from "@/utils/data";
import Image from "next/image";
import braces from "../../../public/images/braces.png";
import TimeToVisit from "@/components/TimeToVisit";
import OrtoInfo from "@/components/OrtoInfo";
import HeroOrto from "@/components/Heroes/HeroOrto";

export default function Orto() {
  return (
    <>
      <HeroOrto />
      <main className="bg-white flex flex-col items-center">
        <div className="md:pt-16 flex flex-col items-center max-w-[1150px] p-6 md:p-10">
          <section className="w-full flex flex-col md:flex-row gap-16 my-10">
            <div className="md:w-1/2 w-full flex flex-col gap-5 font-sans">
              <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-center md:text-left text-bluegray">
                Allt om tandreglering hos Trygg Tandvård i Tranås
              </h3>
              <p>
                <span className="font-semibold">
                  Ett vackert och rakt leende
                </span>{" "}
                gör stor skillnad, både för ditt självförtroende och din
                munhälsa. På Trygg Tandvård i Tranås hjälper vi dig att justera
                dina tänder för ett bättre bett och ett leende du kan vara stolt
                över.
              </p>
              <p>
                <span className="font-semibold">
                  Flexibla lösningar för alla åldrar
                </span>{" "}
                – oavsett om du är vuxen eller ung, erbjuder vi
                tandregleringsalternativ anpassade för dina behov. Våra
                behandlingar inkluderar allt från traditionella tandställningar
                till diskreta Invisalign-skenor och lingual tandreglering.
              </p>
              <p>
                <span className="font-semibold">
                  Specialister på tandreglering
                </span>{" "}
                med lång erfarenhet och hög kompetens ser till att du får bästa
                möjliga vård. Vi arbetar med de senaste teknikerna för att
                leverera hållbara och estetiskt tilltalande resultat.
              </p>
              <p>
                <span className="font-semibold">
                  Ta första steget mot ditt nya leende.
                </span>{" "}
                Boka en konsultation via vår onlinebokning, eller ring oss på{" "}
                <a href={`tel:${contact.phone}`} className="text-darkblue">
                  {contact.phone}
                </a>
                . Vi ser fram emot att hjälpa dig!
              </p>
              <div className="w-full flex justify-center md:justify-start">
                <BookButton
                  text="BOKA NU"
                  buttonStyle="w-[300px] md:w-[200px] py-3 mt-10 shadow-lg md:text-xl"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <Image
                className="w-full h-auto rounded"
                src={braces}
                alt="tandreglering"
              />
            </div>
          </section>
        </div>
      </main>

      <OrtoInfo />
      <TimeToVisit background="bg-textwhite" />
    </>
  );
}
