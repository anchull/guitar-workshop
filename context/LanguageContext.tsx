"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, TranslationKey } from "@/lib/translations";

type Language = "en" | "ko";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    // Default to Korean; if user previously chose a language, restore it.
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === "undefined") return "ko";
        const saved = window.localStorage.getItem("language");
        return saved === "en" || saved === "ko" ? saved : "ko";
    });

    useEffect(() => {
        window.localStorage.setItem("language", language);
    }, [language]);

    const t = (key: TranslationKey): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
