"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

function HoverPlayVideo({
    src,
    className,
}: {
    src: string;
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const shouldPlayRef = useRef(false);
    const srcAttachedRef = useRef(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const attachSrcIfNeeded = useCallback(() => {
        const el = videoRef.current;
        if (!el) return;
        // Always ensure the correct src is attached (avoid "all cards show same video")
        const current = el.getAttribute("src") ?? "";
        if (srcAttachedRef.current && current === src) return;

        // Attach src lazily to prevent showing any preloaded first frame
        el.setAttribute("src", src);
        try {
            el.load();
        } catch {
            // ignore
        }
        srcAttachedRef.current = true;
    }, [src]);

    const detachSrc = useCallback(() => {
        const el = videoRef.current;
        if (!el) return;
        if (!srcAttachedRef.current) return;

        try {
            el.pause();
        } catch {
            // ignore
        }

        // Remove src so browser can't render a "preview frame"
        el.removeAttribute("src");
        try {
            el.load();
        } catch {
            // ignore
        }
        srcAttachedRef.current = false;
        setIsPlaying(false);
    }, []);

    const attemptPlay = useCallback(() => {
        const el = videoRef.current;
        if (!el) return;
        attachSrcIfNeeded();
        // Ensure autoplay policy compatibility
        el.muted = true;
        el.playsInline = true;

        const p = el.play();
        if (p && typeof (p as Promise<void>).catch === "function") {
            (p as Promise<void>).catch(() => {
                // Autoplay may still be blocked; we'll retry on loadeddata if visible.
            });
        }
    }, []);

    const play = async () => {
        shouldPlayRef.current = true;
        attemptPlay();
    };

    const stop = () => {
        shouldPlayRef.current = false;
        const el = videoRef.current;
        if (!el) return;
        el.pause();
    };

    // Auto-play when the video container is visible in viewport.
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Start loading/playing slightly before it fully enters view
        const thresholds = [0, 0.01, 0.1, 0.25, 0.5, 1];
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry) return;

                const shouldPlay = entry.isIntersecting && entry.intersectionRatio >= 0.01;
                shouldPlayRef.current = shouldPlay;
                if (shouldPlay) {
                    attemptPlay();
                } else {
                    const el = videoRef.current;
                    if (el) el.pause();
                    // Detach src when offscreen so no still frame remains
                    detachSrc();
                }
            },
            { threshold: thresholds, rootMargin: "200px 0px 200px 0px" }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, [attemptPlay, detachSrc]);

    return (
        <div ref={containerRef} className="absolute inset-0 bg-black">
            <video
                ref={videoRef}
                key={src}
                className={[
                    className ?? "",
                    // Hide any "first frame" / preview until the video is actually playing
                    "transition-opacity duration-300",
                    isPlaying ? "opacity-100" : "opacity-0",
                ].join(" ")}
                muted
                playsInline
                autoPlay
                preload="none"
                loop
                disablePictureInPicture
                controlsList="nodownload noplaybackrate noremoteplayback"
                // no controls: user requested no UI
                onPlaying={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onLoadedData={() => {
                    if (shouldPlayRef.current) attemptPlay();
                }}
                onMouseEnter={play}
                onMouseLeave={stop}
                onFocus={play}
                onBlur={stop}
                onTouchStart={play}
                onTouchEnd={stop}
            />
        </div>
    );
}

export default function Gallery() {
    const { t } = useLanguage();

    const models: Array<{
        id: string;
        titleKey: TranslationKey;
        descKey: TranslationKey;
        video: string;
    }> = [
        {
            id: "spanish",
            titleKey: "model_spanish_title",
            descKey: "model_spanish_desc",
            video: "/model_traditional.mp4",
        },
        {
            id: "lattice",
            titleKey: "model_lattice_title",
            descKey: "model_lattice_desc",
            video: "/model_lattice.mp4",
        },
        {
            id: "doubletop",
            titleKey: "model_doubletop_title",
            descKey: "model_doubletop_desc",
            video: "/model_doubletop.mp4",
        },
    ];

    const woods: Array<{
        id: string;
        titleKey: TranslationKey;
        descKey: TranslationKey;
        image: string;
    }> = [
        {
            id: "rosewood",
            titleKey: "wood_rosewood_title",
            descKey: "wood_rosewood_desc",
            image: "/wood_rosewood_final_v4.png",
        },
        {
            id: "maple",
            titleKey: "wood_maple_title",
            descKey: "wood_maple_desc",
            image: "/wood_maple_custom.jpg",
        },
        {
            id: "jacaranda",
            titleKey: "wood_jacaranda_title",
            descKey: "wood_jacaranda_desc",
            image: "/wood_jacaranda.png",
        },
    ];

    return (
        <section id="gallery" className="py-24 px-6 md:px-12 bg-stone-50">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-20 text-center">
                    <p className="text-accent tracking-[0.35em] text-sm md:text-base mb-4">
                        {t("gallery_subtitle")}
                    </p>
                    <h2 className="text-5xl md:text-7xl font-serif text-primary tracking-wide drop-shadow-sm">
                        {t("gallery_title")}
                    </h2>
                    <div className="mt-6 mx-auto h-px w-20 bg-accent/70" />
                </div>

                {/* Models Showcase - Zig Zag Layout */}
                <div className="flex flex-col gap-32 mb-40">
                    {models.map((model, index) => (
                        <motion.div
                            key={model.id}
                            // Animation removed to prevent 'darkening' effect perception from fade-in
                            // Even items: img-left, text-right. Odd items: img-right, text-left.
                            className={`group flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-24`}
                        >
                            {/* Media Side (hover-play video) */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl rounded-sm">
                                    <HoverPlayVideo
                                        src={model.video}
                                        className="absolute inset-0 h-full w-full object-contain bg-black transform transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2 text-center lg:text-left">
                                <div className="max-w-md mx-auto lg:mx-0">
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-6">
                                        {t(model.titleKey)}
                                    </h3>
                                    <div className="w-16 h-[1px] bg-accent mx-auto lg:mx-0 mb-8" />
                                    <p className="text-foreground/85 font-normal leading-relaxed text-lg font-serif">
                                        {t(model.descKey)}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Wood Options Section */}
                <div className="max-w-6xl mx-auto border-t border-primary/10 pt-24 text-center">
                    <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-14 italic opacity-90">
                        {t("gallery_wood_title")}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {woods.map((wood, index) => (
                            <motion.div
                                key={wood.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.8 }}
                                className="group cursor-default"
                            >
                                {/* Visual Swatch */}
                                <div className="relative w-48 h-48 mx-auto mb-8 rounded-full shadow-xl overflow-hidden border-4 border-white/50 group-hover:border-accent transition-colors duration-500">
                                    <Image
                                        src={wood.image}
                                        alt={t(wood.titleKey)}
                                        fill
                                        style={wood.id === "rosewood" ? { filter: "brightness(0.78)" } : undefined}
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {wood.id === "rosewood" && (
                                        <div className="absolute inset-0 bg-black/26 pointer-events-none z-[5]" />
                                    )}
                                    {/* Strong Gloss Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/60 pointer-events-none z-10" />
                                </div>

                                <h4 className="text-xl font-serif text-primary mb-3 font-medium tracking-wide group-hover:text-accent-foreground transition-colors">
                                    {t(wood.titleKey)}
                                </h4>
                                <p className="text-base text-foreground/80 font-normal px-4 leading-relaxed">
                                    {t(wood.descKey)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
