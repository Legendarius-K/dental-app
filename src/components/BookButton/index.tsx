type BookButtonProps = {
    text: string
    buttonStyle: string
}

const BookButton = ({ text, buttonStyle }:BookButtonProps) => {
    return (
        <button className={`font-sans  relative z-20 bg-teal-300 text-neutral-800 rounded-3xl shadow-xl ${buttonStyle}`}>
            {text}
        </button>
    )
};

export default BookButton
