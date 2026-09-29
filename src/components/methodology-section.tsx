"use client";

import * as React from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Sparkles,
  Clock,
  CheckCircle2,
  Award,
  Zap,
  ShieldCheck,
} from "lucide-react";

interface Teacher {
  id: string;
  name: string;
  subject: string;
  image: string;
  badgeBg: string;
  borderAccent: string;
  glowColor: string;
}

const teachers: Teacher[] = [
  {
    id: "1",
    name: "أ. باسم بدر",
    subject: "اللغة العربية",
    image: "/images/teachers/1.png",
    badgeBg: "bg-blue-500/20 text-blue-200 border-blue-400/30",
    borderAccent: "group-hover:border-blue-400/60",
    glowColor: "from-blue-600/30",
  },
  {
    id: "2",
    name: "أ. ندى عبد الله",
    subject: "الرياضيات",
    image: "/images/teachers/2.png",
    badgeBg: "bg-amber-500/20 text-amber-200 border-amber-400/30",
    borderAccent: "group-hover:border-amber-400/60",
    glowColor: "from-amber-600/30",
  },
  {
    id: "3",
    name: "أ. أحمد شريف",
    subject: "الفيزياء",
    image: "/images/teachers/3.png",
    badgeBg: "bg-teal-500/20 text-teal-200 border-teal-400/30",
    borderAccent: "group-hover:border-teal-400/60",
    glowColor: "from-teal-600/30",
  },
  {
    id: "4",
    name: "أ. مريم صبري",
    subject: "اللغة الإنجليزية",
    image: "/images/teachers/4.png",
    badgeBg: "bg-emerald-500/20 text-emerald-200 border-emerald-400/30",
    borderAccent: "group-hover:border-emerald-400/60",
    glowColor: "from-emerald-600/30",
  },
  {
    id: "5",
    name: "أ. طارق عبد الرازق",
    subject: "الكيمياء",
    image: "/images/teachers/5.png",
    badgeBg: "bg-orange-500/20 text-orange-200 border-orange-400/30",
    borderAccent: "group-hover:border-orange-400/60",
    glowColor: "from-orange-600/30",
  },
  {
    id: "6",
    name: "أ. سارة النجار",
    subject: "الأحياء",
    image: "/images/teachers/6.png",
    badgeBg: "bg-rose-500/20 text-rose-200 border-rose-400/30",
    borderAccent: "group-hover:border-rose-400/60",
    glowColor: "from-rose-600/30",
  },
];

const AUTH_URL = "https://rewaaedu.com/ar/auth/login";

export function MethodologySection() {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Container Card */}
      <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#132c57] via-[#1b3d75] to-[#2659aa] p-6 sm:p-10 lg:p-12 text-white shadow-[0_25px_60px_-15px_rgba(19,44,87,0.45)] overflow-hidden border border-white/15">
        {/* Subtle dot pattern & ambient lighting */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]"
          aria-hidden="true"
        />
        <div className="absolute -top-32 right-1/4 w-[600px] h-[350px] bg-white/[0.07] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#FFC703]/15 rounded-full blur-3xl pointer-events-none" />

        {/* --- Top Header & Equation Bar --- */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Main Title & Pill */}
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFD54F] text-xs font-bold mb-3 shadow-xs">
              <Sparkles className="size-3.5" />
              <span>طريقتنا مختلفة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              هتراجع + هتحل = هتقفل
            </h2>
          </div>

          {/* Time Value Promise Pill */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 px-4 sm:px-5 py-2.5 rounded-2xl self-start lg:self-auto shadow-inner">
            <div className="size-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary border border-secondary/30 shrink-0">
              <Clock className="size-4" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-white leading-relaxed">
              علشان ما تكسلش ..كل كورس ≤ ٥ ساعات بس
            </span>
          </div>
        </div>

        {/* --- Main 2-Column Showcase --- */}
        <div className="relative z-10 pt-8 sm:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Right Copy & CTA Area (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-right order-2 lg:order-1 space-y-6">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-secondary/15 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wide w-fit">
                <Award className="size-4" />
                <span>لكل طلاب الثانوية العامة</span>
              </div>

              <div>
                <div className="flex items-center gap-3.5">
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-b from-[#FFF275] via-[#FFC703] to-[#FFA000] bg-clip-text text-transparent leading-none drop-shadow-sm">
                    6
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                    احنا الـ ٦ هنذاكر معاك
                  </h3>
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mt-4 font-normal">
                  فريق متكامل من أقوى معلمي المواد الأساسية وضعوا خلاصة خبراتهم
                  ونماذج الامتحانات الشاملة لتصل لأعلى الدرجات دون إهدار للوقت.
                </p>
              </div>

              {/* Feature Value Cards for Content Balance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-3.5 flex items-start gap-3">
                  <div className="size-8 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <Zap className="size-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs sm:text-sm">
                      مراجعات مكثفة
                    </h5>
                    <p className="text-[11px] text-white/70 mt-0.5">
                      شرح وافٍ بدون تطويل ممل
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-3.5 flex items-start gap-3">
                  <div className="size-8 rounded-xl bg-primary-light/20 flex items-center justify-center text-[#73a4ec] shrink-0 mt-0.5">
                    <ShieldCheck className="size-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs sm:text-sm">
                      بنوك أسئلة ذكية
                    </h5>
                    <p className="text-[11px] text-white/70 mt-0.5">
                      تدريب على نماذج الامتحانات
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button at Bottom of Column */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={AUTH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#FFD54F] via-[#FFC703] to-[#FFA000] text-[#3d2e00] font-extrabold text-base shadow-lg hover:shadow-xl hover:brightness-105 active:scale-[0.98] transition-all duration-200"
              >
                <span>ابدأ المذاكرة الآن</span>
                <ArrowLeft className="size-4.5" />
              </a>
            </div>
          </div>

          {/* Left Visual Poster Grid (lg:col-span-7) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className={`group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.12] to-white/[0.04] border border-white/15 p-2 sm:p-2.5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${teacher.borderAccent}`}
                >
                  {/* Aspect Ratio Box with Perfect Head-to-Chest Framing */}
                  <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#1c417d] via-[#173668] to-[#0f2447] flex flex-col justify-between p-2.5">
                    {/* Atmospheric Glow behind teacher */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${teacher.glowColor} to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none`}
                    />

                    {/* Top Subject Pill */}
                    <div className="relative z-20 flex justify-start">
                      <span
                        className={`text-[10px] sm:text-[11px] font-extrabold px-2.5 py-0.5 rounded-md backdrop-blur-md border shadow-xs ${teacher.badgeBg}`}
                      >
                        {teacher.subject}
                      </span>
                    </div>

                    {/* 
                      Teacher Head/Chest Portrait Shot:
                      Using inset-0 with object-cover, object-top, and a larger scale
                      zooms in specifically on the head and neck, cropping the lower body.
                    */}
                    <div className="absolute inset-0 top-8 z-10 pointer-events-none">
                      <Image
                        src={teacher.image}
                        alt={teacher.name}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 15vw"
                        className="object-cover object-top scale-[2.45] origin-top transition-transform duration-500 ease-out group-hover:scale-[2.55]"
                        priority
                      />
                    </div>

                    {/* Bottom Vignette & Typographic Name Overlay */}
                    <div className="relative z-20 mt-auto pt-12 bg-gradient-to-t from-[#0f2447] via-[#0f2447]/80 to-transparent -mx-2.5 -mb-2.5 px-2.5 pb-2 text-right">
                      <h4 className="text-xs sm:text-sm font-black text-white tracking-wide truncate group-hover:text-secondary transition-colors">
                        {teacher.name}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
