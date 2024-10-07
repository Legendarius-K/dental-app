

const EmergencyInfo = () => {
    return (
        <section className="font-sans flex flex-col items-center gap-10 w-full bg-neutral-100 py-20 px-5">
            <div className=" max-w-[800px] flex flex-col gap-10">
                <div>
                    <h3 className="text-2xl md:text-4xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">Tecken på att du behöver akut tandvård</h3>
                    <ul className="pl-3 py-1">
                        <li><span className="font-black text-darkblue pr-1">•</span> Ihållande tandvärk</li>
                        <li><span className="font-black text-darkblue pr-1">•</span> Utslagen eller skadad tand</li>
                        <li><span className="font-black text-darkblue pr-1">•</span> Lossnade fyllningar</li>
                        <li><span className="font-black text-darkblue pr-1">•</span> Lokala svullnader i tandköttet</li>
                        <li><span className="font-black text-darkblue pr-1">•</span> Problem med visdomständer</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">Så går det till</h3>
                    <p className="border-l-[1px] border-neutral-300 pl-3">Vid ett akutbesök hos tandläkaren fokuseras undersökningen på det specifika problemet som orsakat ditt besvär. Den generella munhälsan utvärderas inte under ett akutbesök, vilket gör att behandlingen kan påbörjas snabbt. Vid större problem kan ett återbesök bli aktuellt för att genomföra en permanent lösning, men under akutbesöket erbjuds du en tillfällig behandling och smärtlindring. Vi erbjuder akut tandvård på flera orter, inklusive Stockholm, Göteborg, Malmö, Uppsala och fler städer runt om i Sverige.</p>
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">Pris för akut tandvård</h3>
                    <p className="border-l-[1px] border-neutral-300 pl-3">En akut undersökning kostar 795 kronor. De åtgärder som kan behövas varierar beroende på problemets omfattning, och kostnaderna kan därför skilja sig åt mellan olika behandlingar. Inga ingrepp kommer att påbörjas utan att du först fått ett kostnadsförslag. Aqua Dental tillämpar inga extra avgifter för akut tandvård på kvällar eller helger, vilket innebär att priset är detsamma oavsett när du besöker oss.</p>
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">När behöver du akut tandvård?</h3>
                    <p className="border-l-[1px] border-neutral-300 pl-3">Akut tandvård är nödvändigt om du råkat ut för en olycka, till exempel slagit ut en tand, skadat en tand eller fått trauma mot munnen. Ju snabbare du söker vård, desto större är chansen att tanden kan räddas. Om tanden lossnar, försök att förvara den i munnen för bästa chans att den kan sättas tillbaka.</p>
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">Vikten av snabb behandling</h3>
                    <p className="border-l-[1px] border-neutral-300 pl-3">Att snabbt uppsöka tandvård vid akuta besvär är viktigt för att förhindra att problemen förvärras eller att permanenta skador uppstår på tänderna.</p>
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-bluegray mb-2 md:-ml-6">Vad orsakar akut tandvärk?</h3>
                    <p className="border-l-[1px] border-neutral-300 pl-3">Tandvärk kan ha många orsaker, såsom inflammerad tandnerv, hål i tänderna, inflammerat tandkött eller tandslipning/gnissling. Problem med visdomständer, sprickor i tänderna eller blottade tandhalsar kan också leda till akuta besvär. Regelbundna besök hos tandläkaren minskar risken för att akuta problem uppstår.</p>
                </div>
            </div>
        </section>
    )
};

export default EmergencyInfo
