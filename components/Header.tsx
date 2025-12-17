"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "ko" : "en");
    };

    const navItems = [
        { name: t("nav_home"), href: "#home" },
        { name: t("nav_philosophy"), href: "#about" },
        { name: t("nav_collection"), href: "#gallery" },
        { name: t("nav_process"), href: "#process" },
        { name: t("nav_contact"), href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            {/* 1. Background Layer (Handlers blur and color) */}
            {/* This is separate so the parent <header> doesn't get 'backdrop-filter' which breaks fixed children */}
            <div
                className={cn(
                    "absolute inset-0 transition-all duration-300 ease-in-out z-0",
                    isScrolled
                        ? "bg-background/90 backdrop-blur-md shadow-md border-b border-foreground/5"
                        : "bg-transparent"
                )}
            />

            {/* 2. Main Header Content */}
            <div className="relative z-10 py-4 px-6 md:px-12 flex items-center justify-between">
                <Link
                    href="/"
                    className={cn(
                        "text-2xl md:text-3xl font-serif font-bold tracking-widest transition-colors",
                        isScrolled ? "text-primary" : "text-cream"
                    )}
                >
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-base uppercase tracking-widest transition-colors font-medium relative group py-1",
                                isScrolled ? "text-foreground hover:text-primary" : "text-cream/90 hover:text-white"
                            )}
                        >
                            {item.name}
                            <span className={cn(
                                "absolute left-0 bottom-0 w-full h-[1px] transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100",
                                isScrolled ? "bg-primary" : "bg-white"
                            )} />
                        </Link>
                    ))}

                    <button
                        onClick={toggleLanguage}
                        className={cn(
                            "flex items-center gap-2 text-xs uppercase tracking-widest border px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 active:scale-95",
                            isScrolled
                                ? "border-foreground/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                                : "border-cream/30 text-cream hover:bg-white hover:text-black hover:border-white"
                        )}
                        aria-label="Switch Language"
                    >
                        <span className="text-sm">{language === "en" ? "🇰🇷" : "🇺🇸"}</span>
                        <span>{language === "en" ? "KO" : "EN"}</span>
                    </button>
                </nav>

                {/* Mobile Controls */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleLanguage}
                        className={cn(
                            "flex items-center gap-1 text-xs uppercase tracking-widest border px-2 py-1 rounded-full transition-colors",
                            isScrolled ? "border-foreground/20 text-foreground" : "border-cream/30 text-cream"
                        )}
                        aria-label="Switch Language"
                    >
                        <span className="text-sm">{language === "en" ? "🇰🇷" : "🇺🇸"}</span>
                        <span>{language === "en" ? "KO" : "EN"}</span>
                    </button>

                    <button
                        className={cn("transition-colors", isScrolled ? "text-foreground" : "text-cream")}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? null : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* 3. Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[100] bg-[#F9F5F0] flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
                    <button
                        className="absolute top-6 right-6 text-[#2C1810] p-2"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <X size={32} />
                    </button>

                    <nav className="flex flex-col items-center space-y-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-3xl font-serif text-[#2C1810] hover:text-[#E5D3B3] transition-colors tracking-widest"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <button
                        onClick={() => {
                            toggleLanguage();
                            setMobileMenuOpen(false);
                        }}
                        className="mt-8 px-8 py-3 border border-[#2C1810]/20 rounded-full text-[#2C1810] uppercase tracking-widest hover:bg-[#E5D3B3] hover:text-[#2C1810] transition-all flex items-center gap-3"
                    >
                        <span className="text-2xl">{language === "en" ? "🇰🇷" : "🇺🇸"}</span>
                        <span>{language === "en" ? "Switch to Korean" : "Switch to English"}</span>
                    </button>
                </div>
            )}
        </header>
    );
}
