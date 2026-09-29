"use client";

import * as React from "react";
import Image from "next/image";
import {
  BookOpen,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Languages,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Compass,
  Layers,
  GraduationCap,
  History,
  Globe2,
} from "lucide-react";

interface Subject {
  id: string;
  name: string;
  category: string;
  teachersCount: number;
  workshopsCount: number;
  icon: React.ElementType;
  color: string;
  bgLight: string;
  borderColor: string;
  tagColor: string;
  popular?: boolean;
}

const subjectsList: Subject[] = [
  {
    id: "arabic",
    name: "اللغة العربية",
    category: "لغات وإنسانيات",
    teachersCount: 3,
    workshopsCount: 12,
    icon: BookOpen,
    color: "text-blue-600",
    bgLight: "bg-blue-50/80 hover:bg-blue-100/80",
    borderColor: "border-blue-200/80 hover:border-blue-400/80",
    tagColor: "bg-blue-100 text-blue-700",
    popular: true,
  },
  {
    id: "physics",
    name: "الفيزياء",
    category: "العلوم والرياضيات",
    teachersCount: 2,
    workshopsCount: 9,
    icon: Atom,
    color: "text-cyan-600",
    bgLight: "bg-cyan-50/80 hover:bg-cyan-100/80",
    borderColor: "border-cyan-200/80 hover:border-cyan-400/80",
    tagColor: "bg-cyan-100 text-cyan-700",
    popular: true,
  },
  {
    id: "chemistry",
    name: "الكيمياء",
    category: "العلوم والرياضيات",
    teachersCount: 2,
    workshopsCount: 8,
    icon: FlaskConical,
    color: "text-amber-600",
    bgLight: "bg-amber-50/80 hover:bg-amber-100/80",
    borderColor: "border-amber-200/80 hover:border-amber-400/80",
    tagColor: "bg-amber-100 text-amber-800",
    popular: true,
  },
  {
    id: "math",
    name: "الرياضيات البحتة والتطبيقية",
    category: "العلوم والرياضيات",
    teachersCount: 3,
    workshopsCount: 14,
    icon: Calculator,
    color: "text-indigo-600",
    bgLight: "bg-indigo-50/80 hover:bg-indigo-100/80",
    borderColor: "border-indigo-200/80 hover:border-indigo-400/80",
    tagColor: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "biology",
    name: "الأحياء والجيولوجيا",
    category: "العلوم والرياضيات",
    teachersCount: 2,
    workshopsCount: 7,
    icon: Dna,
    color: "text-emerald-600",
    bgLight: "bg-emerald-50/80 hover:bg-emerald-100/80",
    borderColor: "border-emerald-200/80 hover:border-emerald-400/80",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "english",
    name: "اللغة الإنجليزية",
    category: "لغات وإنسانيات",
    teachersCount: 2,
    workshopsCount: 8,
    icon: Languages,
    color: "text-teal-600",
    bgLight: "bg-teal-50/80 hover:bg-teal-100/80",
    borderColor: "border-teal-200/80 hover:border-teal-400/80",
    tagColor: "bg-teal-100 text-teal-700",
    popular: true,
  },
  {
    id: "french",
    name: "اللغة الفرنسية / لغة ثانية",
    category: "لغات وإنسانيات",
    teachersCount: 2,
    workshopsCount: 6,
    icon: Globe2,
    color: "text-purple-600",
    bgLight: "bg-purple-50/80 hover:bg-purple-100/80",
    borderColor: "border-purple-200/80 hover:border-purple-400/80",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    id: "history",
    name: "التاريخ والجغرافيا والفلسفة",
    category: "القسم الأدبي",
    teachersCount: 2,
    workshopsCount: 6,
    icon: History,
    color: "text-rose-600",
    bgLight: "bg-rose-50/80 hover:bg-rose-100/80",
    borderColor: "border-rose-200/80 hover:border-rose-400/80",
    tagColor: "bg-rose-100 text-rose-700",
  },
];

const AUTH_URL = "https://rewaaedu.com/ar/auth/login";

export function SubjectsAndCtaSection() {
  const [selectedSubject, setSelectedSubject] = React.useState<string | null>(
    null
  );

  return (
    <section
      id="subjects"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      aria-labelledby="subjects-heading"
    >
      {/* Subtle Ambient Background Gradients */}
      <div
        className="pointer-events-none absolute top-1/4 right-1/2 translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-br from-primary/5 via-secondary/10 to-indigo-500/5 blur-3xl -z-10 rounded-full"
        aria-hidden="true"
      />

      {/* ----------------- PART 1: Subject Selection Header & Badges ----------------- */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4 shadow-xs">
          <Compass className="size-3.5 text-primary" />
          <span>محتوى منظم ومخصص لكل تخصص</span>
        </div>

        <h2
          id="subjects-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4"
        >
          اختار مادتك وابدأ من اللي محتاجه
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          اختار المادة، وشوف المحتوى المتاح من المدرسين اللي بتثق فيهم.
        </p>
      </div>

      {/* Interactive Subject Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-20 sm:mb-24">
        {subjectsList.map((subject) => {
          const IconComponent = subject.icon;
          const isSelected = selectedSubject === subject.id;

          return (
            <a
              key={subject.id}
              href={AUTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setSelectedSubject(subject.id)}
              onMouseLeave={() => setSelectedSubject(null)}
              className={`group relative flex flex-col justify-between p-5 rounded-2xl bg-white border transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 overflow-hidden text-right ${
                isSelected
                  ? `${subject.borderColor} ring-2 ring-primary/20`
                  : "border-slate-200/90"
              }`}
            >
              {/* Micro gradient backdrop on card hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50/50 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none`}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Top Row: Icon Container & Popular/Badge Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${subject.bgLight} ${subject.color} border ${subject.borderColor} transition-all duration-300 group-hover:scale-110 shadow-2xs`}
                  >
                    <IconComponent className="size-5" />
                  </div>

                  {subject.popular && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary/20 text-[#6E5400] border border-secondary/40 text-[11px] font-bold shadow-2xs">
                      <Sparkles className="size-3 fill-current" />
                      الأكثر طلباً
                    </span>
                  )}
                </div>

                {/* Subject Name */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors duration-200 mb-1 leading-snug">
                  {subject.name}
                </h3>

                {/* Category & Stats Indicator */}
                <p className="text-xs text-slate-500 font-medium mb-4">
                  {subject.category}
                </p>
              </div>

              {/* Bottom Quick Action Footer */}
              <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 group-hover:text-primary transition-colors">
                <span className="inline-flex items-center gap-1.5 text-slate-500 group-hover:text-slate-700">
                  <Layers className="size-3.5" />
                  {subject.workshopsCount} ورشة ومراجعة
                </span>

                <div className="inline-flex items-center gap-1 text-primary">
                  <span>تصفح الآن</span>
                  <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* ----------------- PART 2: High-Converting Master CTA Banner ----------------- */}
      <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#132c57] via-[#1c4482] to-[#2659aa] p-8 sm:p-12 lg:p-16 text-white shadow-[0_25px_60px_-15px_rgba(19,44,87,0.45)] overflow-hidden border border-white/20">
        {/* Subtle dot pattern & luminous glow lighting */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]"
          aria-hidden="true"
        />
        <div className="absolute -top-32 right-10 w-[500px] h-[350px] bg-white/[0.08] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 left-10 w-[450px] h-[450px] bg-[#FFC703]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Brand Logo Container with soft glass glow */}
          <div className="mb-8 p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg inline-flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/rewaa_logo.svg"
              alt="شعار منصة رِواء التعليمية"
              width={160}
              height={50}
              className="h-10 sm:h-12 w-auto brightness-0 invert"
              priority
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.3] mb-6">
            جاهز تبدأ رحلتك؟ سجل دلوقتي
            <br />
            <span className="text-secondary relative inline-block mt-1">
              احنا جنبك
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-medium mb-8 sm:mb-10">
            علشان وقتك غالي هتختار اللي أنت عاوزه وتركز عليه، مافيش حاجة هتقع منك.
          </p>

          {/* CTA Primary Action & Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={AUTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-[#FFD54F] via-[#FFC703] to-[#FFA000] text-[#3d2e00] font-black text-base sm:text-lg shadow-xl hover:shadow-2xl hover:brightness-105 active:scale-[0.98] transition-all duration-200 group"
            >
              <span>إنشاء حساب مجاني</span>
              <ArrowLeft className="size-5 transition-transform duration-200 group-hover:-translate-x-1" />
            </a>
          </div>

          {/* Trust Guarantees Row below button */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/80 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-secondary shrink-0" />
              <span>تسجيل فوري بدون أي رسوم خفية</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="size-4 text-[#73a4ec] shrink-0" />
              <span>متاح لكل مراحل الثانوية العامة</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-secondary shrink-0" />
              <span>دعم ومتابعة مستمرة خطوة بخطوة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
