

const ImplantsInfo = () => {
    return (
        <>
            <section className="font-sans flex flex-col items-center gap-10 w-full bg-bluegray py-28 px-5">
                <div className=" max-w-[800px] flex flex-col gap-10">
                    <div>
                        <h3 className="text-2xl md:text-4xl font-nunito font-semibold text-left text-neutral-100 mb-2 md:-ml-6">Tecken på att du kan behöva tandimplantat</h3>
                        <ul className="pl-3 py-1 text-neutral-200">
                            <li><span className="font-black text-darkblue pr-1">•</span> Svårt att tugga på grund av saknade tänder</li>
                            <li><span className="font-black text-darkblue pr-1">•</span> Lös protes eller brygga som orsakar obehag</li>
                            <li><span className="font-black text-darkblue pr-1">•</span> Estetiska problem på grund av tandluckor</li>
                            <li><span className="font-black text-darkblue pr-1">•</span> Förlorade eller saknade tänder</li>
                            <li><span className="font-black text-darkblue pr-1">•</span> Skadade tänder som inte kan räddas</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <section className="font-sans flex flex-col items-center gap-10 w-full bg-neutral-100 py-28 px-5">
                <div className=" max-w-[800px] flex flex-col gap-10">

                    <div>
                        <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-darkbluegray mb-2 md:-ml-6">Konsultation om tandimplantat hos Trygg Tandvård</h3>
                        <p className="border-l-[1px] border-neutral-300 pl-3">På <span className="font-bold">Trygg Tandvård i Tranås</span> förstår vi hur viktigt det är att känna sig trygg med sitt leende och sin tuggförmåga. Vi specialiserar oss på tandimplantat, en lösning som inte bara ersätter förlorade tänder utan också hjälper dig att återfå både funktion och självförtroende. Våra erfarna implantatspecialister arbetar med att hitta den bästa lösningen för dina individuella behov, och vi är med dig genom hela processen, från första konsultationen till det slutliga resultatet.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-darkbluegray mb-2 md:-ml-6">Varför tandimplantat?</h3>
                        <p className="border-l-[1px] border-neutral-300 pl-3">Tandimplantat är en långsiktig lösning för dig som har förlorat eller flera tänder. Det ger dig tillbaka den naturliga känslan av dina tänder och låter dig tugga och le som vanligt. Implantatet består av en titanskruv som opereras i käkbenet och fungerar som en konstgjord tandrot. På den fäster vi sedan en tandkrona som ser ut och känns precis som din egen tand.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-darkbluegray mb-2 md:-ml-6">Fördelar med tandimplantat:</h3>
                        <ul className="pl-3 py-1 ">
                            <li><span className="font-bold text-darkblue pr-1">1.</span> <span className="font-bold">Naturlig funktion och estetik</span> – Implantat fungerar precis som dina egna tänder och smälter i naturligt i ditt liv.</li>
                            <li><span className="font-bold text-darkblue pr-1">2.</span> <span className="font-bold">Återställd tuggförmåga</span> – Med implantat kan du tugga utan problem, vilket förbättrar både din kost och ditt välbefinnande.</li>
                            <li><span className="font-bold text-darkblue pr-1">3.</span> <span className="font-bold">Hållbar och snabb lösning</span> – Till skillnad från avtagbara proteser är tandimplantat en snabb lösning som ger långvarig stabilitet.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-darkbluegray mb-2 md:-ml-6">Våra alternativ för tandimplantat</h3>
                        <p className=" pl-3">Hos <span className="font-bold">Trygg Tandvård i Tranås</span> erbjuder vi flera alternativ för tandimplantat, beroende på dina behov och dina förutsättningar:</p>
                        <ul className="pl-3 py-3 ">
                            <li><span className="font-bold text-darkblue pr-1">1.</span> <span className="font-bold">Enstaka tandimplantat</span> – Om du har förlorat en enstaka tand kan vi ersätta den med ett individuellt implantat och krona som matchar dina befintliga tänder.</li>
                            <li><span className="font-bold text-darkblue pr-1">2.</span> <span className="font-bold">Implantat för flera tänder</span> – Om du saknar flera tänder kan vi sätta in fler implantat för att stödja en brygga, som ersätter flera tänder på en gång.</li>
                            <li><span className="font-bold text-darkblue pr-1">3.</span> <span className="font-bold">Hel käke med implantatstödd bro eller protes</span> – För patienter som saknar alla tänder i en eller båda käkarna erbjuder vi implantatstödda broar eller proteser som ger ett fullständigt nytt leende.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-darkbluegray mb-2 md:-ml-6">Din resa mot ett nytt leende</h3>
                        <p className="border-l-[1px] border-neutral-300 pl-3">Din resa börjar med en kostnadsfri konsultation hos oss, där vi gör en noggrann bedömning av dina förutsättningar. Vi utförde en förundersökning, tar röntgenbilder vid behov, och du får träffa en av våra erfarna implantatspecialister. Tillsammans diskuterar vi dina förväntningar och går igenom behandlingsalternativen för att besluta att vi väljer den lösning som passar dig bäst.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-darkbluegray mb-2 md:-ml-6">Under konsultationen kan du förvänta dig:</h3>
                        <ul className="pl-3 py-1 ">
                            <li><span className="font-bold text-darkblue pr-1">1.</span> En genomgång av dina individuella behov och förutsättningar</li>
                            <li><span className="font-bold text-darkblue pr-1">2.</span> Möjlighet att ställa alla frågor du har om tandimplantat och behandlingsprocessen.</li>
                            <li><span className="font-bold text-darkblue pr-1">3.</span> Förslag på den bästa behandlingsplanen för att återställa ditt leende.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-nunito font-semibold text-left text-darkbluegray mb-2 md:-ml-6">Pris och garantier</h3>
                        <p className="border-l-[1px] border-neutral-300 pl-3">Vi vet att tandimplantat är en investering, och därför erbjuder vi räntefria delbetalningslösningar för att göra behandlingen mer tillgänglig. Priset på behandlingen varierar beroende på hur många implantat du behöver och omfattning av behandlingen. Genom högkostnadsskyddet kan en del av kostnaden täckas av Försäkringskassan. Under konsultationen får du en tydlig prisuppskattning anpassad efter dina behov.</p>
                        <p className="border-l-[1px] border-neutral-300 pl-3 pt-3">På <span className="font-bold">Trygg Tandvård i Tranås</span> erbjuder vi dessutom gedigna garantier för att du ska känna dig trygg med din behandling. Vi erbjuder upp till fem års garanti på fast protetik och implantat samt ett års garanti på avtagbar protetik, med tre månaders eftervård inkluderad.</p>
                    </div>
                </div>
            </section> */}
        </>
    )
};

export default ImplantsInfo
