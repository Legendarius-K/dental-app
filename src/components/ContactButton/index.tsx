import Link from "next/link";

type ContactButtonProps = {
    text: string
    buttonStyle: string
}

const ContactButton = ({ text, buttonStyle }: ContactButtonProps) => {
    return (
        <Link href="/" className={`z-20 relative inline-flex items-center justify-start inline-block overflow-hidden transition-all bg-neutral-100 rounded-full hover:bg-darkblue group ${buttonStyle}`}>
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-darkblue rounded-full"></span>
            <span className="relative w-full text-center text-neutral-800 transition-colors duration-200 ease-in-out group-hover:text-white">{text}</span>
        </Link>
    )
};

export default ContactButton
