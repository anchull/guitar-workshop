"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Add hook import
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/custom_main_image.jpg"
                    alt="Handcrafted Classical Guitar"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-accent uppercase tracking-[0.3em] text-xl md:text-3xl mb-8 md:mb-12">
                        {t("hero_subtitle")}
                    </h2>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-korean-serif)] text-cream mb-10 tracking-wide">
                        <span className="font-bold">{t("hero_title_main")}</span>
                        <span className="font-normal text-[0.85em] align-middle">{t("hero_title_connector")}</span>
                        <span className="font-bold">{t("hero_span")}</span>
                    </h1>

                    <div className="mt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
                        <a
                            href="#gallery"
                            className="inline-flex items-center justify-center w-full sm:w-auto rounded-full h-12 px-10 bg-accent text-accent-foreground shadow-lg shadow-black/20 hover:bg-accent/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/25 active:translate-y-0 active:shadow-lg font-serif tracking-wide"
                        >
                            {t("hero_cta_collection")}
                        </a>
                        <a
                            href="#about"
                            className="inline-flex items-center justify-center w-full sm:w-auto rounded-full h-12 px-10 border border-cream/70 text-cream bg-white/0 hover:bg-cream hover:text-primary transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 font-serif tracking-wide"
                        >
                            {t("hero_cta_philosophy")}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
