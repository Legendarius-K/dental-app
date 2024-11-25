import { AboutUs } from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import HeroAbout from "@/components/Heroes/HeroAbout";
import RingUs from "@/components/RingUs";
import StaffContainer from "@/components/StaffContainer";

const about_us = () => {
  return (
    <>
      <HeroAbout />
      <section className=" flex flex-col pt-20 justify-center">
        
          <AboutUs />
          <ContactForm />
        
      </section>
    </>
  );
};

export default about_us;
