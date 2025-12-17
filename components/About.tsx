"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Add hook import
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-32 px-6 md:px-12 bg-background border-y border-accent/10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-primary uppercase tracking-widest text-2xl md:text-3xl mb-8 font-bold font-[family-name:var(--font-korean-serif)]">{t("about_subtitle")}</h3>
                    <div className="space-y-6 text-black font-medium leading-relaxed text-xl md:text-2xl font-[family-name:var(--font-korean-serif)]">
                        <p className="leading-loose">
                            {t("about_p2")}
                        </p>
                    </div>
                </motion.div>

                {/* Abstract/Visual Element Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] w-full rounded-sm overflow-hidden"
                >
                    <Image
                        src="/philosophy_new.png"
                        alt="Hand-carving guitar neck and heel"
                        fill
                        className="object-cover"
                    />

                </motion.div>
            </div>
        </section>
    );
}
