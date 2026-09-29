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
      className="relative pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      aria-labelledby="smart-study-heading"
    >
      {/* Background subtle radial ambient glows */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-primary/5 via-secondary/5 to-emerald-500/5 blur-3xl -z-10 rounded-full"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <h2
          id="smart-study-heading"
          className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug mb-2"
        >
          مذاكرة أذكى، مش أطول بس ازاي ؟
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
          هنثبت المعلومة بالورش، وهنركز على الوحدات المهمة بالشرح، مع مراجعات
          شهرية تلم منها المنهج
        </p>
      </div>

      {/* 3 Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
        {studyFeatures.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-[0_4px_12px_-2px_rgba(38,89,170,0.04)] hover:shadow-md hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5 overflow-hidden text-right"
            >
              <div>
                {/* Top Row: Right Icon & Left Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {/* Right side: Icon container */}
                  <div
                    className={`size-9 rounded-lg flex items-center justify-center shrink-0 ${item.iconBg} transition-transform duration-200 group-hover:scale-105`}
                  >
                    <IconComponent className="size-4" />
                  </div>

                  {/* Left side: Clock badge duration pill */}
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-600 text-[11px] font-medium">
                    <Clock className="size-3 text-slate-500" />
                    <span>الكورس ≤ ٥ ساعات</span>
                  </div>
                </div>

                {/* Category / Goal Badge */}
                <div className="mb-2.5">
                  <span
                    className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-md border ${item.badgeBorder}`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Card Heading */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors duration-150 mb-1.5 leading-snug">
                  {item.heading}
                </h3>

                {/* Card Subtitle */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
