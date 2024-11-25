
import smile from "../../../public/images/about/smile.svg";
import tooth1 from "../../../public/images/about/tooth1.svg";
import tooth2 from "../../../public/images/about/tooth2.svg";
import hand from "../../../public/images/about/hand.svg";
import target from "../../../public/images/about/target.svg";
import handshake from "../../../public/images/about/handshake.svg";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <div className="flex justify-center pb-20">
      <div className="space-y-8 max-w-[1000px] flex flex-col items-center font-sans px-4">
        <InfoCard
          title="Trygg Tandvård – Din partner för ett friskt och hållbart leende"
          description="Sedan vi öppnade 2022 har vårt mål varit att erbjuda tandvård som kombinerar omtanke, professionalism och modern teknik. Vi tror på att skapa en tandvårdsupplevelse där du känner dig välkommen, trygg och omhändertagen från första stund. Hos oss blir tandvård mer än bara en rutin – det blir en upplevelse som gör dig stolt över ditt leende."
          image={smile}
          alt="smile"
        />
        <InfoCard
          title="Anpassad tandvård för ditt behov – på dina villkor"
          description="På Trygg Tandvård anpassar vi oss helt efter dina behov. Vi erbjuder flexibla öppettider och rättvisa priser som gäller varje dag, oavsett om du besöker oss på en vardag eller helg. Ingen extra avgift för helgtider, ingen stress – bara trygg och tillgänglig tandvård när det passar dig bäst. Vi ser till att ditt besök hos oss är enkelt och smidigt, med fokus på din komfort och välbefinnande."
          image={tooth1}
          alt="tooth"
        />
        <InfoCard
          title="Högsta kvalitet – för ditt leende som varar livet ut"
          description="Vi förstår hur viktigt det är med tandvård som håller i längden. Därför använder vi oss av den senaste tekniken och de mest beprövade metoderna för att säkerställa att dina behandlingar är av högsta kvalitet. Varje besök hos oss är en investering i din långsiktiga munhälsa. Vårt mål är att ge dig ett friskt och hållbart leende som du kan lita på – utan överraskningar eller dolda kostnader."
          image={tooth2}
          alt="tooth"
        />
        <InfoCard
          title="Din trygghet och bekvämlighet i fokus"
          description="Hos Trygg Tandvård värdesätter vi varje steg i din vårdresa. Från det ögonblick du kliver in hos oss tills du går härifrån med ett leende, är vi engagerade i att göra ditt besök så bekvämt som möjligt. Oavsett om det gäller en vanlig kontroll eller en mer avancerad behandling, är vi här för att lyssna på dina behov och ge dig det omhändertagande du förtjänar."
          image={hand}
          alt="hand"
        />
        <InfoCard
          title="Vår vision – en tryggare framtid för tandvård"
          description="Vi tror att tandvård ska vara tillgänglig, trygg och positiv för alla. Genom att sätta våra patienter i fokus strävar vi efter att skapa en plats där tandvård inte bara är ett måste, utan något du ser fram emot. Vår vision är att göra tandvård tillgänglig för fler och göra varje besök hos oss en anledning att le. På Trygg Tandvård är vi här för att förändra hur du ser på din tandvård – tryggt, modernt och med omtanke."
          image={target}
          alt="target"
        />
        <InfoCard
          title="Välkommen till en tandvårdsupplevelse utöver det vanliga"
          description="Oavsett om du behöver en enkel undersökning eller mer avancerad behandling, kan du lita på att du är i goda händer hos oss. Vår passion för kvalitet, vår värme och vår omtanke om varje patient gör att vi står ut. Kom och upplev skillnaden med Trygg Tandvård – en plats där din munhälsa alltid är vår högsta prioritet."
          image={handshake}
          alt="handshake"
        />
      </div>
    </div>
  );
};

interface InfoCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const InfoCard = ({ title, description, image, alt }: InfoCardProps) => {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-6 items-center justify-around bg-lightblue/50 py-10 md:p-10 rounded shadow-lg">
      <div className="md:mr-10 w-[80%]">
        <h2 className="text-xl md:text-2xl font-nunito font-black md:font-bold pb-2 text-neutral-700">
          {title}
        </h2>
        <p>{description}</p>
      </div>
      <div className="w-[100px]">
        <Image className="w-full h-auto" src={image} alt={alt} />
      </div>
    </section>
  );
};

export default InfoCard;
