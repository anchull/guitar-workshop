export type TranslationKey =
    | "nav_home" | "nav_philosophy" | "nav_collection" | "nav_process" | "nav_contact"
    | "hero_subtitle" | "hero_title_main" | "hero_title_connector" | "hero_span" | "hero_desc" | "hero_cta_collection" | "hero_cta_philosophy"
    | "about_subtitle" | "about_p2"
    | "gallery_subtitle" | "gallery_title" | "gallery_view_details" | "gallery_wood_title"
    | "model_spanish_title" | "model_spanish_desc"
    | "model_lattice_title" | "model_lattice_desc"
    | "model_doubletop_title" | "model_doubletop_desc"
    | "wood_rosewood_title" | "wood_rosewood_desc"
    | "wood_maple_title" | "wood_maple_desc"
    | "wood_jacaranda_title" | "wood_jacaranda_desc"
    | "process_subtitle" | "process_title" | "process_step1_title" | "process_step1_desc" | "process_step2_title" | "process_step2_desc" | "process_step3_title" | "process_step3_desc"
    | "contact_subtitle" | "contact_title" | "contact_desc" | "contact_success_title" | "contact_success_desc" | "contact_send_another"
    | "contact_label_name" | "contact_placeholder_name"
    | "contact_label_email" | "contact_placeholder_email"
    | "contact_label_subject" | "contact_placeholder_subject"
    | "contact_label_message" | "contact_placeholder_message"
    | "contact_btn_send" | "contact_btn_sending" | "contact_error_general"
    | "contact_emailjs_error"
    | "footer_name" | "footer_address" | "footer_phone" | "footer_rights";

export const translations: Record<"en" | "ko", Record<TranslationKey, string>> = {
    en: {
        nav_home: "Home",
        nav_philosophy: "Philosophy",
        nav_collection: "Works",
        nav_process: "Process",
        nav_contact: "Inquiries",

        hero_subtitle: "Ahn Cheol-young Classical Guitar",
        hero_title_main: "Soul",
        hero_title_connector: " & ",
        hero_span: "Resonance",
        hero_desc: "Where tradition and modern acoustics meet as sound.",
        hero_cta_collection: "View Works",
        hero_cta_philosophy: "Philosophy",

        about_subtitle: "The Philosophy",
        about_p2: "While I deeply respect and follow traditional Spanish construction methods, I flexibly incorporate modern acoustic physics and structural research to achieve richer resonance and natural sustain. My goal is not merely a well-crafted instrument, but a musical companion that breathes in the player's hands and grows with time.",


        gallery_subtitle: "The Collection",
        gallery_title: "View Works",
        gallery_view_details: "View Details",
        gallery_wood_title: "Can be crafted with the following woods:",

        model_spanish_title: "Model Traditional",
        model_spanish_desc: "A deep, warm tone and elegant resonance rooted in Spanish tradition. Optimized for the classical repertoire.",
        model_lattice_title: "Model Lattice",
        model_lattice_desc: "Maximizes nuanced expression with immediate response and powerful projection.",
        model_doubletop_title: "Model Double Top",
        model_doubletop_desc: "The pinnacle of modern acoustics. Overwhelming volume and clear balance—an ideal choice for competitions and concert halls.",

        wood_rosewood_title: "Indian Rosewood",
        wood_rosewood_desc: "Deep, solid, and the standard of aesthetics.",
        wood_maple_title: "Curly Maple",
        wood_maple_desc: "Stunning appearance with transparent, singing highs.",
        wood_jacaranda_title: "Brazilian Rosewood",
        wood_jacaranda_desc: "The 'Dream Wood'. Unrivaled overtones and resonance.",

        process_subtitle: "The Craft",
        process_title: "A Journey Towards Resonance",
        process_step1_title: "Selection",
        process_step1_desc: "Perfect sound begins with uncompromising tonewood selection. Using only master‑grade tonewoods that have undergone optimal seasoning, we deliver a refined resonance that deepens with time.",
        process_step2_title: "Construction",
        process_step2_desc: "Feeling the breath of the wood with every touch, we shape deep resonance through sincere, handcrafted artistry.",
        process_step3_title: "Finishing",
        process_step3_desc: "Hundreds of thin layers of French Polish (shellac) applied by hand. This organic finish allows the instrument to breathe and age gracefully.",

        contact_subtitle: "Inquiries",
        contact_title: "Begin the Conversation",
        contact_desc: "Whether you are looking for a commissioned instrument or have questions about available guitars, I would be honored to hear from you.",
        contact_success_title: "Message Sent",
        contact_success_desc: "Thank you. I will respond to your inquiry shortly.",
        contact_send_another: "Send another message",
        contact_label_name: "Name",
        contact_placeholder_name: "Your Name",
        contact_label_email: "Email",
        contact_placeholder_email: "your@email.com",
        contact_label_subject: "Subject",
        contact_placeholder_subject: "Inquiry about...",
        contact_label_message: "Message",
        contact_placeholder_message: "Tell me what you are looking for...",
        contact_btn_send: "Send Message",
        contact_btn_sending: "Sending...",
        contact_error_general: "Something went wrong. Please try again later.",
        contact_emailjs_error: "Failed to send message via EmailJS. Please check your keys.",

        footer_name: "Ahn Cheol-young Classical Guitar Workshop",
        footer_address: "9-1, Baegun-ro, Nam-gu, Gwangju",
        footer_phone: "010-8606-011",
        footer_rights: "All rights reserved.",
    },
    ko: {
        nav_home: "홈",
        nav_philosophy: "철학",
        nav_collection: "작품",
        nav_process: "제작 공정",
        nav_contact: "문의하기",

        hero_subtitle: "안철영 클래식 기타",
        hero_title_main: "영혼",
        hero_title_connector: " 그리고 ",
        hero_span: "울림",
        hero_desc: "",
        hero_cta_collection: "작품보기",
        hero_cta_philosophy: "철학",

        about_subtitle: "철학",
        about_p2: "전통적인 스페인 제작 방식을 깊이 존중하며 따르되, 더 풍부한 울림과 자연스러운 서스테인을 위해 현대적인 음향학과 구조적 연구를 유연하게 접목합니다. 추구하는 것은 단순히 잘 만들어진 악기가 아닙니다. 연주자의 손에서 살아 숨 쉬며, 시간과 함께 성장해 가는 음악적 동반자입니다.",

        gallery_subtitle: "작품",
        gallery_title: "작품 소개",
        gallery_view_details: "상세 보기",
        gallery_wood_title: "위 모든 모델은 다음의 최상급 목재로 제작 가능합니다:",

        model_spanish_title: "Model Traditional",
        model_spanish_desc: "스페인 전통의 깊고 따뜻한 음색과 우아한 울림. 정통 클래식 연주에 최적화되었습니다.",
        model_lattice_title: "Model Lattice",
        model_lattice_desc: "즉각적인 반응성과 파워풀한 프로젝션으로 섬세한 표현을 극대화합니다.",
        model_doubletop_title: "Model Double Top",
        model_doubletop_desc: "현대 음향학의 정점. 압도적인 성량과 명료한 밸런스. 콩쿠르와 홀 연주를 위한 선택입니다.",

        wood_rosewood_title: "Indian Rosewood",
        wood_rosewood_desc: "깊고 단단한 표준의 미학.",
        wood_maple_title: "Curly Maple",
        wood_maple_desc: "화려한 외관과 투명한 고음.",
        wood_jacaranda_title: "Brazilian Rosewood (Jacaranda)",
        wood_jacaranda_desc: "꿈의 목재. 비교불가한 배음과 울림.",

        process_subtitle: "장인정신",
        process_title: "울림을 향한 과정",
        process_step1_title: "선별",
        process_step1_desc: "완벽한 사운드는 엄격한 목재 선별에서 시작됩니다. 최적의 건조를 거친 마스터 그레이드 음향목만을 사용하여, 시간이 흐를수록 깊어지는 격조 높은 울림을 선사합니다.",
        process_step2_title: "제작",
        process_step2_desc: "나무의 숨결을 손끝으로 느끼며, 장인의 정성어린 수작업으로 깊은 울림을 빚어냅니다.",
        process_step3_title: "마감",
        process_step3_desc: "프렌치 폴리시는\n손으로 완성됩니다.\n\n수백 번의 얇은 터치로 입혀진 쉘락은\n목재의 울림을 막지 않고,\n악기가 숨 쉬며\n시간을 우아하게 받아들이게 합니다.",

        contact_subtitle: "문의하기",
        contact_title: "대화 시작하기",
        contact_desc: "맞춤형 악기를 찾고 계시거나 사용 가능한 기타에 대해 궁금한 점이 있으시다면 언제든 문의해 주세요.",
        contact_success_title: "메시지 전송됨",
        contact_success_desc: "감사합니다. 곧 답변 드리겠습니다.",
        contact_send_another: "다른 메시지 보내기",
        contact_label_name: "이름",
        contact_placeholder_name: "성함",
        contact_label_email: "이메일",
        contact_placeholder_email: "ex@example.com",
        contact_label_subject: "제목",
        contact_placeholder_subject: "문의 내용...",
        contact_label_message: "메시지",
        contact_placeholder_message: "찾으시는 악기에 대해 말씀해 주세요...",
        contact_btn_send: "메시지 보내기",
        contact_btn_sending: "전송 중...",
        contact_error_general: "문제가 발생했습니다. 잠시 후 다시 시도해 주세요.",
        contact_emailjs_error: "이메일 전송에 실패했습니다. 키 설정을 확인해 주세요.",

        footer_name: "안철영 클래식기타 공방",
        footer_address: "광주광역시 남구 백운로 9-1",
        footer_phone: "010-8606-011",
        footer_rights: "All rights reserved.",
    },
};
