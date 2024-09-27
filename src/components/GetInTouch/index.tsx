import { contact } from "@/utils/data";

const GetInTouch = () => {
    return (
        <section className="flex justify-center">
            <div className="w-full max-w-[1400px]">
                <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-nunito font-semibold mt-14">Välkommen att höra av dig!</h2>
                <div className="flex flex-col sm:flex-row p-4 pb-24  sm:p-10 sm:pb-28 mt-8">
                    <div className="flex flex-col justify-between w-full p-0 h-[450px]">
                        <ContactSquare title="Tand Trygg" two={contact.adress} three={contact.zipCode} phone={contact.phone} email={contact.email} />
                        <ContactSquare title="Telefontider" two="Måndag-onsdag: 10-15" three="Torsdag: 10-16" four="Fredag: 10-14" five="Helg: stängt" />
                    </div>
                    <div className="box-border w-[100%] mt-12 sm:mt-0 border-4 border-accent rounded">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31818.04789364442!2d14.93595308845188!3d58.03183079054311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465987fd56607ce5%3A0x1f93fa2a89c6fcd!2zVHJhbsOlcw!5e1!3m2!1ssv!2sse!4v1727419806771!5m2!1ssv!2sse" width="100%" height="442" style={{ border: 0, }}></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default GetInTouch

type ContactSquareProps = {
    title: string
    two: string
    three?: string
    four?: string
    five?: string
    six?: string
    seven?: string
    phone?: string
    email?: string
}

export const ContactSquare = ({ title, two, three, four, five, six, seven, phone, email }: ContactSquareProps) => {
    return (
        <div className="text-base text-neutral-500 font-sans p-5 w-full sm:w-[90%] shadow-lg h-[200px] rounded">
            <h3 className="font-nunito text-textmain text-2xl font-bold">{title}</h3>
            <p>{two}</p>
            <p>{three}</p>
            <p>{four}</p>
            <p>{five}</p>
            <p>{six}</p>
            <p>{seven}</p>
            <a className="underline cursor-pointer block" href={`tel:${contact.phone}`}>{phone}</a>
            <a className="underline cursor-pointer block hover:text-accent" href="mailto:info@tandtrygg.se">{email}</a>
        </div>
    )
}