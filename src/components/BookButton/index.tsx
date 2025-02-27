import Link from "next/link";

type BookButtonProps = {
  text: string;
  buttonStyle: string;
  hrefNorrköping?: boolean;
};

const BookButton = ({ text, buttonStyle, hrefNorrköping }: BookButtonProps) => {
    return (
      <Link
        href={
          hrefNorrköping
            ? "https://www.dermamedicalcenter.se/"
            : "https://www.muntra.com/trygg-tandvard/c/6270?language=sv"
        }
        target="blank"
        className={`z-20 relative inline-flex items-center justify-start inline-block overflow-hidden transition-all duration-200 bg-mainblue rounded-full hover:bg-darkblue group ${buttonStyle}`}
      >
        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-200 transition-all border-darkblue rounded-full"></span>
        <span className="relative w-full text-center text-neutral-800 transition-colors duration-200 ease-in-out group-hover:text-white">
          {text}
        </span>
      </Link>
    );
};

export default BookButton
