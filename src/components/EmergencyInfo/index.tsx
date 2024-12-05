const EmergencyInfo = () => {
  return (
    <>
      <section className="font-sans flex flex-col items-center gap-10 w-full bg-bluegray py-28 px-5">
        <div className=" max-w-[800px] flex flex-col gap-10  text-neutral-100">
          <div>
            <h3 className="text-2xl md:text-4xl font-nunito font-semibold text-left mb-2 md:-ml-6">
              Tecken på att du behöver akut tandvård
            </h3>
            <ul className="pl-3 py-1">
              <li>
                <span className="font-black text-darkblue pr-1">•</span>{" "}
                Ihållande tandvärk
              </li>
              <li>
                <span className="font-black text-darkblue pr-1">•</span>{" "}
                Utslagen eller skadad tand
              </li>
              <li>
                <span className="font-black text-darkblue pr-1">•</span>{" "}
                Lossnade fyllningar
              </li>
              <li>
                <span className="font-black text-darkblue pr-1">•</span> Lokala
                svullnader i tandköttet
              </li>
              <li>
                <span className="font-black text-darkblue pr-1">•</span> Problem
                med visdomständer
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <section className="font-sans flex flex-col items-center gap-10 w-full bg-neutral-100 py-20 px-5">
        <div className=" max-w-[800px] flex flex-col gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">
              Så går det till
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              Vid ett akutbesök hos tandläkaren fokuseras undersökningen på det
              specifika problemet som orsakat ditt besvär, så att vi snabbt kan
              lindra dina besvär. Vid större problem kan ett återbesök bli
              aktuellt för en permanent lösning, men under akutbesöket erbjuds
              en provisorisk behandling och smärtlindring. Vi erbjuder akut
              tandvård på flera orter, inklusive Stockholm, Göteborg, Malmö,
              Uppsala och fler städer runt om i Sverige.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">
              Pris för akut tandvård
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              En akut undersökning kostar 795 kronor. Behandlingskostnader kan
              variera beroende på problemets omfattning. Inga ingrepp påbörjas
              utan ett kostnadsförslag, och vi tillämpar inga extra avgifter för
              akut tandvård på kvällar eller helger.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">
              När behöver du akut tandvård?
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              Akut tandvård är nödvändig vid olyckor, såsom en utslagen eller
              skadad tand, eller trauma mot munnen. Snabb vård ökar chansen att
              tanden kan räddas och minskar risken för permanenta skador.
              Förvara en lös tand i munnen för bästa chans att sättas tillbaka.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">
              Vikten av snabb behandling
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              Snabb tandvård förhindrar förvärrade problem och minimerar risken
              för permanenta skador på tänderna.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">
              Vad orsakar akut tandvärk?
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              Tandvärk kan orsakas av inflammation i tandnerven, hål,
              inflammerat tandkött, eller tandpressning/gnissling. Problem med
              visdomständer, sprickor i tänderna, eller blottade tandhalsar kan
              också leda till akuta besvär. Regelbundna besök minskar risken för
              akuta problem.
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default EmergencyInfo;
