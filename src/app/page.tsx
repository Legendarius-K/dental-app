import Hero from "@/components/Hero";
import { HowHelp } from "@/components/HowHelp";
import NewInTown from "@/components/NewInTown";
import SafeCare from "@/components/SafeCare";
import TimeToVisit from "@/components/TimeToVisit";

export default function Home() {
    return (
        <main className="h-full">
            <Hero/>
            
            
            <HowHelp/>
            <NewInTown/>
            <SafeCare/>
            {/* <TimeToVisit /> */}
        </main>
  );
}
