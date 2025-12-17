"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-primary text-primary-foreground py-10 px-6 border-t border-accent/20">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-5">
                <div className="text-center space-y-2">
                    <h2 className="text-xl md:text-2xl font-serif tracking-wide text-cream mb-3">{t("footer_name")}</h2>
                    <p className="text-sm md:text-base text-primary-foreground/70 font-light">
                        {t("footer_address")}
                    </p>
                    <p className="text-sm md:text-base text-primary-foreground/70 font-light">
                        {t("footer_phone")}
                    </p>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-primary-foreground/30">
                © {new Date().getFullYear()} Ahn Cheol-young Classical Guitar. {t("footer_rights")}
            </div>
        </footer>
    );
}
