"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
    const { t } = useLanguage();
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

    const steps = [
        {
            number: "01",
            title: t("process_step1_title"),
            description: t("process_step1_desc"),
            image: "/process_selection_final.jpg"
        },
        {
            number: "02",
            title: t("process_step2_title"),
            description: t("process_step2_desc"),
            image: "/process_construction_final.jpg"
        },
        {
            number: "03",
            title: t("process_step3_title"),
            description: t("process_step3_desc"),
            image: "/process_finishing_final.jpg"
        },
    ];

    // Auto-select the step as the user scrolls (no click needed).
    useEffect(() => {
        const els = stepRefs.current.filter(Boolean) as HTMLDivElement[];
        if (els.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // pick the most visible intersecting step
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
                if (!visible) return;

                const idx = els.findIndex((el) => el === visible.target);
                if (idx >= 0) setActiveStep(idx);
            },
            {
                threshold: [0.15, 0.3, 0.45, 0.6, 0.75],
                // Trigger a bit before center so it feels responsive while scrolling
                rootMargin: "-20% 0px -55% 0px",
            }
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [steps.length]);

    return (
        <section id="process" className="py-24 px-6 md:px-12 bg-background border-t border-muted/20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">{t("process_title")}</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    {/* Left Column: Navigation & Text */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                ref={(el) => {
                                    stepRefs.current[index] = el;
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onMouseEnter={() => setActiveStep(index)}
                                className={`relative pl-8 border-l-2 transition-all duration-300 group rounded-md
                                    ${activeStep === index
                                        ? "border-accent bg-accent/5"
                                        : "border-muted/30 hover:border-accent/50 hover:bg-muted/10"
                                    }`}
                            >
                                <div className={`absolute -left-[1.65rem] top-0 text-sm font-serif font-bold transition-colors duration-300 bg-background py-1
                                    ${activeStep === index ? "text-accent" : "text-muted/40 group-hover:text-muted-foreground"}`}>
                                    {step.number}
                                </div>

                                <h3 className={`text-xl font-serif mb-3 transition-colors duration-300
                                    ${activeStep === index ? "text-primary" : "text-muted-foreground group-hover:text-primary/70"}`}>
                                    {step.title}
                                </h3>

                                {/* Mobile: show image per step (no click) */}
                                <div className="lg:hidden mt-5 mb-6">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl">
                                        <div className="absolute inset-0 bg-black/10 z-10" />
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 0px"
                                        />
                                    </div>
                                </div>

                                <p className="text-foreground/85 font-normal leading-relaxed whitespace-pre-line pb-2">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Image Presentation */}
                    <div className="hidden lg:block w-full lg:w-1/2 relative aspect-square lg:sticky lg:top-24">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-black/10 z-10" />
                                <Image
                                    src={steps[activeStep].image}
                                    alt={steps[activeStep].title}
                                    fill
                                    className="object-cover"
                                    priority={activeStep === 0}
                                    sizes="(min-width: 1024px) 50vw, 0px"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
