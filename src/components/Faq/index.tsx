'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/utils/functions";

interface QuestionProps {
    question: string;
    answer: string;
    isActive: boolean;
    onClick: () => void;
}

const Question: React.FC<QuestionProps> = ({ question, answer, isActive, onClick }) => {
    return (
        <div onClick={onClick} className="relative border-[1px] border-gray-300 hover:border-gray-600 bg-neutral-50 p-5 rounded-3xl cursor-pointer w-full max-w-[700px] transition-all pr-20 my-3">
            <div className="h-fit w-[25px] absolute right-6 inset-y-0 top-1/2 -translate-y-1/2">
                {/* <Image className={`${isActive ? '-rotate-' : ''} `} src={''} alt="arrow" style={{ width: "100%", height: "auto" }} /> */}
                <ChevronRight size={30} className={`text-mainblue ${isActive ? '-rotate-90' : ''} `} />
            </div>
            <h2 className="text-lg font-sans">{question}</h2>
            <div className={`font-roboto overflow-hidden transition-all duration-200 ease-in-out ${isActive ? 'max-h-screen opacity-100 my-4' : 'max-h-0 opacity-0 my-0'}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
}

type FaqItem = {
    id: string
    question: string
    answer: string
}

type FaqProps = {
    dark: boolean
    title: string
    questions: FaqItem[]
}

const Faq = ({ title, questions, dark }: FaqProps) => {
    const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

    const handleClick = (id: string) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    return (
        <main id="faqComponent" className={cn(
            "bg-neutral-100 py-24 px-8 pb-28 text-pretty font-nunito",
            dark && 'bg-bluegray'
            )}>
            <section className="content flex flex-col items-center">
                <div className={cn(
                    "font-lato upper text-center mb-5",
                    dark && 'text-neutral-100'
                    )}>
                    <h3 className=" text-[20px]">FAQ</h3>
                    <h2 className="text-5xl font-bold mx-2 my-5 text-black">Vanliga frågor om {title}</h2>
                    <p className="text-lg my-10"></p>
                </div>
                {questions.map((q) => (
                    <Question
                        key={q.id}
                        question={q.question}
                        answer={q.answer}
                        isActive={activeQuestion === q.id}
                        onClick={() => handleClick(q.id)}
                    />
                ))}
            </section>
        </main>
    );
};

export default Faq;
