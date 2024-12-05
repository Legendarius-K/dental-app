const AestheticsInfo = () => {
  return (
    <>
      <section className="font-sans flex flex-col items-center gap-10 w-full bg-bluegray py-28 px-5">
        <div className="max-w-[800px] flex flex-col gap-10 text-neutral-100">
          <div>
            <h3 className="text-2xl md:text-4xl font-nunito font-semibold text-left mb-2 md:-ml-6">
              Fördelar med estetisk tandvård
            </h3>
            <ul className="pl-3 py-1">
              <li>
                <span className="font-black text-darkblue pr-1">•</span> Ökat
                självförtroende genom ett vackert leende
              </li>
              <li>
                <span className="font-black text-darkblue pr-1">•</span>{" "}
                Möjlighet att justera färg, form och storlek på tänder
              </li>
              <li>
                <span className="font-black text-darkblue pr-1">•</span>{" "}
                Naturliga och hållbara resultat
              </li>
              <li>
                <span className="font-black text-darkblue pr-1">•</span> Minskad
                osäkerhet i sociala situationer
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <section className="font-sans flex flex-col items-center gap-10 w-full bg-neutral-100 py-20 px-5">
        <div className="max-w-[800px] flex flex-col gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">
              Behandlingens gång
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              Vid en konsultation för estetisk tandvård diskuterar vi dina mål
              och behov för att skapa en personlig behandlingsplan. Tandläkaren
              bedömer vilka tekniker som bäst passar dig, oavsett om det gäller
              tandblekning, skalfasader eller tandreglering. Vårt mål är att ge
              dig ett naturligt och fräscht leende som du är stolt över.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">
              När kan estetisk tandvård vara rätt val?
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              Estetisk tandvård kan vara ett bra alternativ för dig som känner
              dig osäker över tändernas färg, form, storlek eller position.
              Många som genomgår behandlingar som tandblekning eller skalfasader
              upplever en positiv förändring i både självförtroende och
              livskvalitet.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">
              Resultat som varar
            </h3>
            <p className="border-l-[1px] border-neutral-300 pl-3">
              Med hjälp av moderna tekniker och material säkerställer vi
              hållbara och naturliga resultat. Vårt erfarna team har som mål att
              du ska känna dig trygg genom hela behandlingsprocessen och vara
              nöjd med ditt nya leende.
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AestheticsInfo;
