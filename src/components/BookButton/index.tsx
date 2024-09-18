import Link from "next/link";

type BookButtonProps = {
    text: string
    buttonStyle: string
}

const BookButton = ({ text, buttonStyle }: BookButtonProps) => {
    return (
        // <button className={`font-sans  relative z-20 bg-teal-300 text-neutral-800 rounded-3xl shadow-xl ${buttonStyle}`}>
        //     {text}
        // </button>

        <Link href="/" className={`z-20 relative inline-flex items-center justify-start inline-block overflow-hidden transition-all bg-teal-300 rounded-full hover:bg-teal-500 group px-5 py-3 ${buttonStyle}`}>
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-teal-500 rounded-full"></span>
            <span className="relative w-full text-center text-neutral-800 transition-colors duration-200 ease-in-out group-hover:text-white">{text}</span>
        </Link>
    )
};

export default BookButton
