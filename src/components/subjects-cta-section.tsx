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
      className="relative w-full bg-[#F0F3FF]/70 border-y border-slate-200/60 py-10 sm:py-14 overflow-hidden"
      aria-labelledby="subjects-heading"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Ambient Background Gradients */}
        <div
          className="pointer-events-none absolute top-1/4 right-1/2 translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-br from-primary/5 via-secondary/10 to-indigo-500/5 blur-3xl -z-10 rounded-full"
          aria-hidden="true"
        />

        {/* ----------------- PART 1: Subject Selection Header & Badges ----------------- */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2
            id="subjects-heading"
            className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2"
          >
            اختار مادتك وابدأ من اللي محتاجه
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
            اختار المادة، وشوف المحتوى المتاح من المدرسين اللي بتثق فيهم.
          </p>
        </div>

        {/* Interactive Subject Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-10 sm:mb-14">
          {subjectsList.map((subject) => {
            const isSelected = selectedSubject === subject.id;

            return (
              <a
                key={subject.id}
                href={AUTH_URL}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setSelectedSubject(subject.id)}
                onMouseLeave={() => setSelectedSubject(null)}
                className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 text-slate-700 shadow-2xs text-xs sm:text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-primary hover:bg-primary hover:text-white ${
                  isSelected
                    ? "border-primary bg-primary text-white shadow-md ring-2 ring-primary/25"
                    : ""
                }`}
              >
                <span>{subject.name}</span>
              </a>
            );
          })}
        </div>

        {/* ----------------- PART 2: High-Converting Master CTA Banner ----------------- */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#132c57] via-[#1c4482] to-[#2659aa] p-6 sm:p-10 lg:p-12 text-white shadow-[0_20px_50px_-15px_rgba(19,44,87,0.45)] overflow-hidden border border-white/20">
          {/* Subtle dot pattern & luminous glow lighting */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]"
            aria-hidden="true"
          />
          <div className="absolute -top-32 right-10 w-[500px] h-[350px] bg-white/[0.08] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 left-10 w-[450px] h-[450px] bg-[#FFC703]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
            {/* Brand Logo Container with soft glass glow */}
            <div className="mb-5 sm:mb-6 p-2.5 sm:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md inline-flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/rewaa_logo.svg"
                alt="شعار منصة رِواء التعليمية"
                width={130}
                height={40}
                className="h-8 sm:h-9 w-auto brightness-0 invert"
                priority
              />
            </div>

            {/* Heading */}
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.3] mb-3 sm:mb-4">
              جاهز تبدأ رحلتك؟ سجل دلوقتي
              <br />
              <span className="text-secondary relative inline-block mt-0.5">
                احنا جنبك
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xl mx-auto font-medium mb-6 sm:mb-8">
              علشان وقتك غالي هتختار اللي أنت عاوزه وتركز عليه، مافيش حاجة هتقع
              منك.
            </p>

            {/* CTA Primary Action & Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href={AUTH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 sm:px-9 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#FFD54F] via-[#FFC703] to-[#FFA000] text-[#3d2e00] font-black text-sm sm:text-base shadow-lg hover:shadow-xl hover:brightness-105 active:scale-[0.98] transition-all duration-200 group"
              >
                <span>إنشاء حساب مجاني</span>
                <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
