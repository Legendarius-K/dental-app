import Image from "next/image";
import Payment from "../../../public/images/payment.jpg";

const Payments = () => {
  return (
    <section className="flex flex-col md:flex-row bg-accent max-h-[600px]">
      <div
        className="basis-1/2 max-h-[400px]  md:max-h-full "
        style={{ backgroundImage: `url(${Payment.src})`, backgroundSize: 'cover' }}
      ></div>

      <div className="basis-1/2 p-8 flex flex-col items-center justify-center py-36">
        <h2 className="text-textmain text-3xl md:text-4xl lg:text-5xl mb-8 font-semibold text-center ">
          Alltid hos Tand Trygg
        </h2>
        <div className="text-white font-sans lg:pt-4 sm:text-lg lg:text-xl flex flex-col gap-3">
          <p className="">
            - Tydliga och transparenta priser
          </p>
          <p className="">
            - Inga dolda avgifter
          </p>
          <p className="">
            - Samma pris sju dagar i veckan
          </p>
          <p className="">
            - Specialisttandvård med hög tillgänglighet
          </p>
        </div>
      </div>
    </section>
  );
};

export default Payments;
