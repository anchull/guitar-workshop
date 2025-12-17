"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        // PLACEHOLDERS - Please replace with your actual keys
        const SERVICE_ID = "service_274gsdn";
        const TEMPLATE_ID = "template_hmp8pnu";
        const PUBLIC_KEY = "NQ7c5-mV2QvTzVdD1";

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: `
[Inquiry from Website]

Sender Name: ${formData.name}
Sender Email: ${formData.email}

--------------------------------------------------
Message:

${formData.message}
--------------------------------------------------
`,
                },
                PUBLIC_KEY
            );

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
            setErrorMessage(t("contact_emailjs_error"));
        }
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-white text-foreground">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-primary">{t("contact_subtitle")}</h2>
                    <p className="mt-4 text-primary/80 font-normal max-w-xl mx-auto leading-relaxed">
                        {t("contact_desc")}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-background p-8 border border-muted/20 shadow-sm max-w-2xl mx-auto"
                >
                    {status === "success" ? (
                        <div className="text-center py-12">
                            <div className="text-accent text-5xl mb-4">♩</div>
                            <h3 className="text-2xl font-serif text-primary mb-2">{t("contact_success_title")}</h3>
                            <p className="text-muted-foreground">{t("contact_success_desc")}</p>
                            <Button onClick={() => setStatus("idle")} variant="link" className="mt-6">{t("contact_send_another")}</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-primary/70">{t("contact_label_name")}</label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder={t("contact_placeholder_name")}
                                        className="bg-white/50 placeholder:text-primary/40 text-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-primary/70">{t("contact_label_email")}</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder={t("contact_placeholder_email")}
                                        className="bg-white/50 placeholder:text-primary/40 text-primary"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-primary/70">{t("contact_label_subject")}</label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder={t("contact_placeholder_subject")}
                                    className="bg-white/50 placeholder:text-primary/40 text-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-primary/70">{t("contact_label_message")}</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder={t("contact_placeholder_message")}
                                    rows={6}
                                    className="bg-white/50 resize-none placeholder:text-primary/40 text-primary"
                                />
                            </div>

                            {status === "error" && (
                                <div className="text-red-500 text-sm text-center">
                                    {errorMessage}
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                size="lg"
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? t("contact_btn_sending") : t("contact_btn_send")}
                            </Button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
