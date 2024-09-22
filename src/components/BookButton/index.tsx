import Link from "next/link";
import { motion } from "framer-motion";

type BookButtonProps = {
    text: string
    buttonStyle: string
}

const BookButton = ({ text, buttonStyle }: BookButtonProps) => {
    return (
        <motion.div whileTap={{ scale: 0.85 }}>
            <Link href="/" className={`font-medium z-20 relative inline-flex items-center justify-start inline-block overflow-hidden transition-all bg-teal-300 rounded-full hover:bg-teal-500 group ${buttonStyle}`}>
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-teal-500 rounded-full"></span>
                <span className="relative w-full text-center text-neutral-800 transition-colors duration-200 ease-in-out group-hover:text-white">{text}</span>
            </Link>
        </motion.div>
    )
};

export default BookButton
