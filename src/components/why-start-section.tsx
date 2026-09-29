"use client";

import * as React from "react";
import {
  BadgeCheck,
  ScrollText,
  Video,
  Handshake,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

interface WhyStartCardProps {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  badge: string;
  iconBg: string;
  iconColor: string;
  borderHoverColor: string;
  glowColor: string;
}

const whyCards: WhyStartCardProps[] = [
  {
    id: "online-exams",
    icon: BadgeCheck,
    title: "اختبارات إلكترونية",
    subtitle:
      "اختبارات إلكترونية منفصلة وأخرى مع كل درس علشان تدرب أكتر وتضمن تثبيت المعلومة.",
    badge: "تقييم مستمر",
    iconBg: "bg-blue-50 text-blue-600 border border-blue-200/70",
    iconColor: "text-blue-600",
    borderHoverColor: "hover:border-blue-400/60",
    glowColor: "from-blue-500/10 via-primary/5 to-transparent",
  },
  {
    id: "smart-notes",
    icon: ScrollText,
    title: "مذكرات للمواضيع الصعبة",
    subtitle:
      "هتلاقي مذكرات بتبسطلك أصعب نقاط المنهج وتحلها بذكاء وترتيب ذهني يسهل عليك الاستيعاب.",
    badge: "تبسيط شامل",
    iconBg: "bg-amber-50 text-amber-600 border border-amber-200/70",
    iconColor: "text-amber-600",
    borderHoverColor: "hover:border-amber-400/60",
    glowColor: "from-amber-500/10 via-amber-500/5 to-transparent",
  },
  {
    id: "recorded-lessons",
    icon: Video,
    title: "حصص ودورات مسجلة",
    subtitle:
      "مش لازم تشتري المنهج كله، هتدخل تفهم اللي ناقصك بس في أي وقت وبأعلى جودة تصوير وشرح.",
    badge: "مرونة كاملة",
    iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-200/70",
    iconColor: "text-emerald-600",
    borderHoverColor: "hover:border-emerald-400/60",
    glowColor: "from-emerald-500/10 via-emerald-500/5 to-transparent",
  },
  {
    id: "step-by-step",
    icon: Handshake,
    title: "يلا بينا نبدأ",
    subtitle:
      "معاك خطوة بخطوة حتى ليلة الامتحان علشان أنت مش لوحدك، وفريق متابعة دائم يجاوب على استفساراتك.",
    badge: "متابعة مستمرة",
    iconBg: "bg-indigo-50 text-indigo-600 border border-indigo-200/70",
    iconColor: "text-indigo-600",
    borderHoverColor: "hover:border-indigo-400/60",
    glowColor: "from-indigo-500/10 via-indigo-500/5 to-transparent",
  },
];

const AUTH_URL = "https://rewaaedu.com/ar/auth/login";

export function WhyStartSection() {
  return (
    <section
      id="why-rewaa"
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      aria-labelledby="why-start-heading"
    >
      {/* Subtle Background Glows */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-primary/5 via-secondary/10 to-indigo-500/5 blur-3xl -z-10 rounded-full"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4 shadow-xs">
          <Sparkles className="size-3.5 text-primary" />
          <span>طريقك الأسهل للتفوق والدرجات النهائية</span>
        </div>

        <h2
          id="why-start-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4"
        >
          ليه لازم تبدأ معانا؟
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          علشان طريقتنا مختلفة هنوصلك للكلية التي تحلم بها
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {whyCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl ${card.borderHoverColor} transition-all duration-300 hover:-translate-y-1.5 overflow-hidden text-right`}
            >
              {/* Card Ambient Hover Glow Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                aria-hidden="true"
              />

              {/* Top and Content */}
              <div className="relative z-10">
                {/* Header Row: 48x48 icon container & Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div
                    className={`size-12 rounded-2xl flex items-center justify-center shrink-0 ${card.iconBg} shadow-xs transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="size-5" />
                  </div>

                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100/80 border border-slate-200/80 text-slate-600 text-xs font-medium">
                    {card.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-200 mb-3 leading-snug">
                  {card.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {card.subtitle}
                </p>
              </div>

              {/* Bottom Interactive CTA that reveals cleanly on hover / always accessible */}
              <div className="relative z-10 pt-6 mt-4 border-t border-slate-100/80">
                <a
                  href={AUTH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-primary group-hover:text-white text-slate-700 text-xs sm:text-sm font-bold border border-slate-200/80 group-hover:border-transparent transition-all duration-300 shadow-2xs group-hover:shadow-md group-hover:shadow-primary/20 active:scale-[0.98]"
                >
                  <span>سجل مجاناً الآن</span>
                  <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
