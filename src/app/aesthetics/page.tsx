import BookButton from "@/components/BookButton";
import HeroAesthetics from "@/components/Heroes/HeroAesthetics";
import { contact } from "@/utils/data";
import Image from "next/image";
import aesthetic from "../../../public/images/aesthetic-fall.png";
import AestheticsInfo from "@/components/AestheticsInfo";
import TimeToVisit from "@/components/TimeToVisit";


export default function Aesthetics() {
    return (
      <>
        <HeroAesthetics />
        <main className="bg-white flex flex-col items-center">
          <div className="md:pt-16 flex flex-col items-center max-w-[1150px] p-6 md:p-10">
            <section className="w-full flex flex-col md:flex-row gap-16 my-10">
              <div className="md:w-1/2 w-full flex flex-col gap-5 font-sans">
                <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-center md:text-left text-bluegray">
                  Specialister på estetisk tandvård
                </h3>
                <p>
                  <span className="font-semibold">
                    Ett leende du trivs med kan göra stor skillnad
                  </span>{" "}
                  för både självförtroende och välmående. På Trygg Tandvård
                  erbjuder vi estetisk tandvård som hjälper dig att skapa det
                  leende du alltid önskat. Vi justerar allt från färg och form
                  till storlek och position – precis enligt dina önskemål.
                </p>
                <p>
                  <span className="font-semibold">
                    Lång erfarenhet och hög kompetens
                  </span>{" "}
                  inom estetisk tandvård i Tranås gör att du kan känna dig trygg
                  med att få vård av högsta kvalitet. Våra specialisttandläkare
                  har bred kompetens och arbetar för att ge dig ett naturligt
                  och fräscht leende.
                </p>
                <p>
                  <span className="font-semibold">
                    Missfärgade eller sneda tänder?
                  </span>{" "}
                  Vi förstår att detta kan påverka ditt självförtroende. Med
                  moderna metoder och senaste teknikerna kan vi snabbt och
                  hållbart korrigera det du är missnöjd med.
                </p>
                <p>
                  <span className="font-semibold">
                    Låt oss hjälpa dig att förbättra ditt leende.
                  </span>{" "}
                  Boka en konsultation via vår onlinebokning, eller ring oss på{" "}
                  <a href={`tel:${contact.phone}`} className="text-darkblue">
                    {contact.phone}
                  </a>
                  . Vi ser fram emot att få hjälpa dig!
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
                  src={aesthetic}
                  alt="estetisk tandvård"
                />
              </div>
            </section>
          </div>
        </main>
        <AestheticsInfo />
        <TimeToVisit background="bg-textwhite" />
      </>
    );
};

