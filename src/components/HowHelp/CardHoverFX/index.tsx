'use client'

import { cn } from "@/utils/functions";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        image: string; // Changed to accept image instead of description
        link: string;
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 xl:gap-5 md:gap-3 gap-1",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item.link}
                    key={item.link}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-teal-300/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <div className="flex justify-center">
                            <CardImage src={item.image} alt={item.title} />
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full flex justify-center w-full p-4 overflow-hidden bg-teal-100 border border-transparent dark:border-white/[0.2] shadow-lg relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export const CardImage = ({
    src,
    alt,
    className,
}: {
    src: string;
    alt: string;
    className?: string;
}) => {
    return (
        <img
            src={src}
            alt={alt}
            className={cn("w-[50px] h-auto rounded-t-2xl", className)} // Add styling as needed
        />
    );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-neutral-800 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
