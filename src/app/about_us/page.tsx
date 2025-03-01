import { AboutUs } from "@/components/AboutUs";

import HeroAbout from "@/components/Heroes/HeroAbout";
import NewContact from "@/components/NewContact";

const about_us = () => {
  return (
    <>
      <HeroAbout />
      <section className=" flex flex-col pt-20 justify-center">
        
          <AboutUs />
          
          <NewContact />
      </section>
    </>
  );
};

export default about_us;
