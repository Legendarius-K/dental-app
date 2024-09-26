import Hero from "@/components/Hero";
import { HowHelp } from "@/components/HowHelp";
import SafeCare from "@/components/SafeCare";
import TimeToVisit from "@/components/TimeToVisit";

export default function Home() {
    return (
        <main className="h-full">
            <Hero/>
            
            
            <HowHelp/>
            <SafeCare/>
            <TimeToVisit />
        </main>
  );
}
