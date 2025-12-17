"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
    const { t } = useLanguage();
    const [activeStep, setActiveStep] = useState(0);

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
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onClick={() => setActiveStep(index)}
                                className={`relative pl-8 border-l-2 cursor-pointer transition-all duration-300 group
                                    ${activeStep === index
                                        ? "border-accent"
                                        : "border-muted/30 hover:border-accent/50"
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

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: activeStep === index ? "auto" : 0,
                                        opacity: activeStep === index ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-foreground/85 font-normal leading-relaxed whitespace-pre-line pb-2">
                                        {step.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Image Presentation */}
                    <div className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-square lg:sticky lg:top-24">
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
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
