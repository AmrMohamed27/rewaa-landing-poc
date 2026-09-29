"use client";

import * as React from "react";
import {
  CircleCheckBig,
  ShieldQuestion,
  CalendarClock,
  Clock,
  Sparkles,
} from "lucide-react";

interface SmartStudyCardProps {
  icon: React.ElementType;
  badge: string;
  heading: string;
  subtitle: string;
  highlightTag?: string;
  gradientFrom: string;
  iconBg: string;
  iconColor: string;
  badgeBorder: string;
}

const studyFeatures: SmartStudyCardProps[] = [
  {
    icon: CircleCheckBig,
    badge: "تطبيق مكثف",
    heading: "ورش وتطبيقات",
    subtitle:
      "ثبّت المعلومة وافهمها صح من خلال ورش مكثفة، وتطبيقات تساعدك على إتقانها أولاً بأول.",
    gradientFrom: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    iconBg:
      "bg-emerald-50 text-emerald-600 border border-emerald-200/60 shadow-xs",
    iconColor: "text-emerald-600",
    badgeBorder: "border-emerald-200 bg-emerald-50/80 text-emerald-700",
  },
  {
    icon: ShieldQuestion,
    badge: "تفكيك الصعوبات",
    heading: "الوحدات الصعبة والمهمة",
    subtitle:
      "شرح مستقل لأهم وأصعب الوحدات، علشان تصاحبها طول السنة وترجعلها في أي وقت.",
    gradientFrom: "from-primary/10 via-primary/5 to-transparent",
    iconBg: "bg-primary/10 text-primary border border-primary/20 shadow-xs",
    iconColor: "text-primary",
    badgeBorder: "border-primary/20 bg-primary/5 text-primary",
  },
  {
    icon: CalendarClock,
    badge: "تثبيت دوري",
    heading: "مراجعات شهرية",
    subtitle:
      "لِمّ المنهج أول بأول من خلال كورس مكثف يجمعلك كل اللي درسته خلال الشهر و ترجعله تاني علشان تثبت المعلومة.",
    gradientFrom: "from-amber-500/10 via-amber-500/5 to-transparent",
    iconBg: "bg-amber-50 text-amber-600 border border-amber-200/60 shadow-xs",
    iconColor: "text-amber-600",
    badgeBorder: "border-amber-200 bg-amber-50/80 text-amber-800",
  },
];

export function SmartStudySection() {
  return (
    <section
      id="smart-study"
      className="relative pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      aria-labelledby="smart-study-heading"
    >
      {/* Background subtle radial ambient glows */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-primary/5 via-secondary/5 to-emerald-500/5 blur-3xl -z-10 rounded-full"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4 shadow-xs">
          <Sparkles className="size-3.5 text-primary" />
          <span>أسلوب تعليمي متوازن ومبتكر</span>
        </div>

        <h2
          id="smart-study-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4"
        >
          مذاكرة أذكى، مش أطول بس ازاي ؟
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          هنثبت المعلومة بالورش، وهنركز على الوحدات المهمة بالشرح، مع مراجعات
          شهرية تلم منها المنهج
        </p>
      </div>

      {/* 3 Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {studyFeatures.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 overflow-hidden text-right"
            >
              <div>
                {/* Top Row: Right Icon (48x48 rounded) & Left Badge (Duration) */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  {/* Right side: 48x48 rounded container with 20x20 icon */}
                  <div
                    className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <IconComponent className="size-5" />
                  </div>

                  {/* Left side: Clock badge duration pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-medium shadow-2xs">
                    <Clock className="size-3.5 text-slate-500" />
                    <span>الكورس ≤ ٥ ساعات</span>
                  </div>
                </div>

                {/* Category / Goal Badge */}
                <div className="mb-3.5">
                  <span
                    className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-md border ${item.badgeBorder}`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Card Heading */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-200 mb-3 leading-snug">
                  {item.heading}
                </h3>

                {/* Card Subtitle */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
