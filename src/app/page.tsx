import Hero from "@/components/Hero";
import { HowHelp } from "@/components/HowHelp";
import TimeToVisit from "@/components/TimeToVisit";

export default function Home() {
    return (
        <main className="h-full">
            <Hero/>
            <main className="h-[500px] bg-white">

            </main>
            
            <HowHelp/>
            <TimeToVisit />
        </main>
  );
}
