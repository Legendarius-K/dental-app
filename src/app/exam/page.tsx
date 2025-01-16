import BookButton from "@/components/BookButton";
import HeroExam from "@/components/Heroes/HeroExam";
import Image from "next/image";
import { contact } from "@/utils/data";
import exam from "../../../public/images/dental-xray.jpg";

const ExamPage = () => {
  return (
    <>
      <HeroExam />
      <main className="bg-white flex flex-col items-center">
        <div className="md:pt-16 flex flex-col items-center max-w-[1150px] p-6 md:p-10">
          {/* <h2 className="mt-20 md:my-6 text-4xl md:text-5xl font-semibold text-bluegray">Akut tandvård</h2> */}
          <section className="w-full flex flex-col md:flex-row gap-16 my-10">
            <div className="md:w-1/2 w-full flex flex-col gap-5 font-sans">
              <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-center md:text-left text-bluegray">
                Basundersökning
              </h3>
              <p>
                <span className="font-semibold">
                  Regelbundna tandundersökningar
                </span>{" "}
                är ett enkelt sätt att hålla tänderna friska och undvika större
                problem. Genom att gå till tandläkaren regelbundet kan små
                problem som karies eller tandköttsinflammation upptäckas i tid
                och behandlas innan de blir allvarliga.
              </p>
              <p>
                <span className="font-semibold block">
                  Vad händer vid en tandundersökning?
                </span>{" "}
                Tandläkaren tittar på dina tänder, ditt tandkött och resten av
                munnen för att se om allt ser bra ut. De letar efter hål,
                inflammationer eller andra saker som kan påverka din munhälsa.
                Om något upptäcks kan du få hjälp direkt, och tandläkaren ger
                dig tips på hur du bäst tar hand om dina tänder hemma.
              </p>
              <p>
                <span className="font-semibold block">Vanliga problem</span> De
                vanligaste problemen är hål i tänderna (karies) och inflammerat
                tandkött (tandlossning). Dessa kan oftast undvikas med bra
                tandborstning, användning av tandtråd och att gå på regelbundna
                undersökningar.
              </p>
              <p>
                <span className="font-semibold block">
                  Så förebygger du problem
                </span>{" "}
                <ul className="pl-3 py-1">
                  <li>
                    <span className="font-black text-darkblue pr-1">•</span>{" "}
                    Borsta tänderna två gånger om dagen.
                  </li>
                  <li>
                    <span className="font-black text-darkblue pr-1">•</span>{" "}
                    Använd tandtråd eller mellanrumsborstar.
                  </li>
                  <li>
                    <span className="font-black text-darkblue pr-1">•</span>{" "}
                    Undvik för mycket socker.
                  </li>
                  <li>
                    <span className="font-black text-darkblue pr-1">•</span>{" "}
                    Besök tandläkaren regelbundet.
                  </li>
                </ul>
              </p>
              <p>
                Med små insatser kan du hålla dina tänder friska och undvika större
                behandlingar i framtiden. En frisk mun är en viktig del av att
                må bra!
              </p>
              <div className="w-full flex justify-center md:justify-start">
                <BookButton
                  text="BOKA NU"
                  buttonStyle="w-[300px] md:w-[200px] py-3 mt-10 shadow-lg md:text-xl"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <Image className="w-full h-auto rounded" src={exam} alt="ache" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ExamPage;
