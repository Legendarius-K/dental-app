import { div } from "framer-motion/client";
import { HoverEffect } from "./CardHoverFX";

export function HowHelp() {
    return (
        <div className="flex justify-center bg-textwhite">
            <div className="max-w-6xl mx-auto px-2 md:px-10 py-20 flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-nunito font-semibold my-6">Hur kan vi hjälpa dig?</h2>
                <HoverEffect items={projects} />
            </div>
        </div>
    );
}
export const projects = [
  {
    title: "Boka tid",
    image: "/images/clock.png",
    link: "https://www.muntra.com/trygg-tandvard/c/6270?language=sv",
  },
  {
    title: "Hitta oss",
    image: "/images/pin.png",
    link: "/find_us",
  },
  {
    title: "Priser",
    image: "/images/calculator.png",
    link: "/prices",
  },
  {
    title: "Akut tandvård",
    image: "/images/emergency.png",
    link: "/emergency",
  },
  {
    title: "Tandimplantat",
    image: "/images/orthodontics.png",
    link: "/implants",
  },
  {
    title: "Estetisk tandvård",
    image: "/images/aesthetic.png",
    link: "/aesthetics",
  },
];
