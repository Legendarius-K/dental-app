const PricesInfo = () => {
  return (
    <>
      <section className="font-sans flex flex-col items-center gap-10 w-full bg-bluegray py-28 px-5">
        <div className=" max-w-[800px] flex flex-col gap-10  text-neutral-100">
          <div>
            <h3 className="text-2xl md:text-4xl font-nunito font-semibold text-left mb-2 md:-ml-6">
              Hos oss på Trygg Tandvård erbjuder vi
            </h3>
            <ul className="pl-3 py-1">
              <li>
                <span className="font-black text-darkblue pr-1">•</span>{" "}
                Räntefri delbetalning
              </li>
              <li>
                <span className="font-black text-darkblue pr-1">•</span>{" "}
                Transparent prissättning
              </li>
              <li>
                <span className="font-black text-darkblue pr-1">•</span>{" "}
                Flexibla behandlingsalternativ
              </li>
              <li>
                <span className="font-black text-darkblue pr-1">•</span> Lokala
                Ingen helgtaxa
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="font-sans flex flex-col items-center gap-10 w-full bg-white py-20 px-5">
        <div className=" max-w-[800px] flex flex-col gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">
              Transparenta och rättvisa priser
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              Hos Trygg Tandvård har vi en tydlig prissättning utan dolda
              avgifter. Vår prisnivå speglar den kvalitet och omsorg vi
              erbjuder, och vi är stolta över att kunna ge dig den trygghet du
              förtjänar. Vi erbjuder konkurrenskraftiga priser och strävar
              alltid efter att ge våra patienter bästa möjliga värde.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">
              Samma pris – oavsett dag
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              Tandvärk väntar inte på vardagar, och det gör inte vi heller. På
              Trygg Tandvård har vi samma pris alla dagar i veckan, vilket
              innebär att du får samma service till samma kostnad, oavsett om
              det är helg eller kväll. Vi är här för att underlätta din
              tandvård, när du än behöver oss.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">
              Delbetalning från 299 kr/mån
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              Vi vet att tandvård är en investering, och därför erbjuder vi
              räntefri delbetalning med en fast månadskostnad, från 299 kr per
              månad. Oavsett behandling, kan du känna dig trygg med att du får
              samma månadskostnad varje gång.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">
              Låt oss hjälpa dig
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              Vill du veta mer om våra avbetalningslösningar eller boka en tid?
              Vi finns här för att svara på dina frågor. Fyll i formuläret så
              kontaktar vi dig snarast.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricesInfo;
