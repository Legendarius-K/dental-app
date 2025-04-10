const Phobia = () => {
  return (
    <>
      <section className="font-sans flex flex-col items-center gap-10 w-full bg-white py-28 px-5">
        <div className=" max-w-[800px] flex flex-col gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-darkbluegray mb-2 md:-ml-6">
              Vi hjälper dig med tandvårdsfobin
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3 pt-3">
              <span className="font-bold">Tandläkarskräck är vanligt,</span> och
              många känner oro inför tandläkarbesök. Cirka hälften av alla vuxna
              upplever någon form av ångest, medan fem procent lider av svår
              tandvårdsfobi. För en del innebär det enbart obehag, men för andra
              kan rädslan leda till att de undviker tandläkaren helt, vilket kan
              påverka munhälsan.
            </p>
            <p className="border-l-[1px] border-neutral-300 pl-3 pt-3">
              Tandläkarskräck kan bero på tidigare negativa upplevelser, känslan
              av att sakna kontroll eller obehaget av ljud och behandlingar. Det
              behöver inte alltid handla om smärta. Att undvika tandvård kan
              dock leda till sämre tänder och mer omfattande ingrepp i
              framtiden. Vi erbjuder skonsam tandvård, inklusive lasertandvård,
              för att göra ditt besök tryggare.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-darkbluegray mb-2 md:-ml-6">
              FAKTA: Så övervinner du tandläkarskräck
            </h3>

            <div className="pl-3 py-3 flex flex-col gap-3">
              <div>
                <h3 className="font-bold pr-1">Välj rätt tandläkare</h3>{" "}
                <p className="">
                  Sök en tandläkare med erfarenhet av tandvårdsrädsla. Våra
                  erfarna tandläkare anpassar behandlingen för att göra besöket
                  tryggare.
                </p>
              </div>
              <div>
                <h3 className="font-bold pr-1">Prata om din rädsla</h3>{" "}
                <p className="">
                  Berätta för tandläkaren! De kan boka längre besök och anpassa
                  behandlingen efter dina behov, vilket minskar stress och
                  ångest.
                </p>
              </div>
              <div>
                <h3 className="font-bold pr-1">Ta med stöd</h3>{" "}
                <p className="">
                  En vän eller familjemedlem kan skapa trygghet och lugn under
                  besöket.
                </p>
              </div>
              <div>
                <h3 className="font-bold pr-1">Lugnande medicin</h3>{" "}
                <p className="">
                  Vid svår rädsla kan sedering användas för att minska oro.
                  Beslut tas i samråd med din tandläkare på Trygg Tandvård i
                  Tranås.
                </p>
              </div>
              <div>
                <h3 className="font-bold pr-1">Lasertandvård</h3>{" "}
                <p className="">
                  Laser kan ersätta borren, vilket minskar obehag från ljud och
                  vibrationer.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-darkbluegray mb-2 md:-ml-6">
              Din resa mot ett nytt leende
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              Din resa börjar med en kostnadsfri konsultation hos oss, där vi
              gör en noggrann bedömning av dina förutsättningar. Vi utförde en
              förundersökning, tar röntgenbilder vid behov, och du får träffa en
              av våra erfarna implantatspecialister. Tillsammans diskuterar vi
              dina förväntningar och går igenom behandlingsalternativen för att
              besluta att vi väljer den lösning som passar dig bäst.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-darkbluegray mb-2 md:-ml-6">
              Under konsultationen kan du förvänta dig:
            </h3>
            <ul className="pl-3 py-1 ">
              <li>
                <span className="font-bold text-darkblue pr-1">1.</span> En
                genomgång av dina individuella behov och förutsättningar
              </li>
              <li>
                <span className="font-bold text-darkblue pr-1">2.</span>{" "}
                Möjlighet att ställa alla frågor du har om tandimplantat och
                behandlingsprocessen.
              </li>
              <li>
                <span className="font-bold text-darkblue pr-1">3.</span> Förslag
                på den bästa behandlingsplanen för att återställa ditt leende.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-darkbluegray mb-2 md:-ml-6">
              Pris och garantier
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              Vi vet att tandimplantat är en investering, och därför erbjuder vi
              räntefria delbetalningslösningar för att göra behandlingen mer
              tillgänglig. Priset på behandlingen varierar beroende på hur många
              implantat du behöver och omfattning av behandlingen. Genom
              högkostnadsskyddet kan en del av kostnaden täckas av
              Försäkringskassan. Under konsultationen får du en tydlig
              prisuppskattning anpassad efter dina behov.
            </p>
            <p className="border-l-[1px] border-neutral-300 pl-3 pt-3">
              På <span className="font-bold">Trygg Tandvård i Tranås</span>{" "}
              erbjuder vi dessutom gedigna garantier för att du ska känna dig
              trygg med din behandling. Vi erbjuder upp till fem års garanti på
              fast protetik och implantat samt ett års garanti på avtagbar
              protetik, med tre månaders eftervård inkluderad.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Phobia;
