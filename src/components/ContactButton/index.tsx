type ContactButtonProps = {
    text: string
    buttonStyle: string
}

const ContactButton = ({ text, buttonStyle }: ContactButtonProps) => {
    return (
        <button className={`font-sans  relative z-20 bg-neutral-100 text-neutral-800 rounded-3xl shadow-xl ${buttonStyle}`}>
            {text}
        </button>
    )
};

export default ContactButton
