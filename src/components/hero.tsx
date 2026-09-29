"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { BookOpen, FileCheck2, Sparkles, ArrowLeft, Users2 } from "lucide-react"

const AUTH_URL = "https://rewaaedu.com/ar/auth/login"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient gradient glow */}
      <div 
        className="pointer-events-none absolute -top-24 right-1/2 translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-br from-primary/10 via-primary-light/10 to-transparent blur-3xl -z-10 rounded-full"
        aria-hidden="true" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Right Column (RTL text & action side) */}
        <div className="lg:col-span-5 flex flex-col items-start text-right">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6 shadow-xs">
            <Sparkles className="size-3.5 text-primary" />
            <span>منصتك التعليمية الأولى للتفوق والدرجات النهائية</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-5">
            تعلّم مع نخبة المعلمين،{" "}
            <span className="text-primary relative inline-block">
              دروسك واختباراتك
              <span className="absolute bottom-1 right-0 left-0 h-2 bg-secondary/30 -z-10 rounded-xs" />
            </span>{" "}
            في مكان واحد
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg font-normal">
            اشترك في أقوى الكورسات والحصص الفردية، اختبر مستواك مع بنوك الأسئلة التفاعلية، وتتبع تقدمك الدراسي بكل سهولة مع أفضل تجربة تعليمية في مصر.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <a
              href={AUTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "shadow-md hover:shadow-lg transition-all duration-200 gap-2 font-semibold text-base px-6",
              })}
            >
              <span>سجّل مجاناً وابدأ التعلّم</span>
              <ArrowLeft className="size-4" />
            </a>

            <Button
              variant="inverted"
              size="lg"
              className="text-slate-700 hover:text-primary font-medium text-base border border-slate-200 hover:bg-slate-50 transition-colors"
              onClick={() => {
                const element = document.getElementById("teachers") || document.getElementById("features")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              استكشف المدرسين والكورسات
            </Button>
          </div>

          {/* Micro trust indicators aligned with students */}
          <div className="mt-10 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 w-full max-w-lg text-slate-600">
            <div className="flex items-center gap-2">
              <Users2 className="size-4 text-primary shrink-0" />
              <span className="text-xs font-medium text-slate-700">نخبة من كبار المعلمين</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="size-4 text-greenish shrink-0" />
              <span className="text-xs font-medium text-slate-700">شرح وافٍ وبنوك امتحانات</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck2 className="size-4 text-secondary-foreground shrink-0" />
              <span className="text-xs font-medium text-slate-700">تفعيل فوري للاشتراكات</span>
            </div>
          </div>
        </div>

        {/* Left Column (Figma Image filling the available space with only the bottom-right badge) */}
        <div className="lg:col-span-7 w-full flex justify-center items-center">
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] md:aspect-[16/9.2] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-900 group">
            <Image
              src="/images/rewaa_hero.jpg"
              alt="منصة رِواء التعليمية - شريكك في التفوق والإدارة الذكية"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 55vw"
              className="object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
            />
            {/* Subtle bottom vignette to ensure the badge pops cleanly */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

            {/* Figma-matched Bottom Right Badge */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
              <Badge 
                variant="primary" 
                className="bg-primary/95 backdrop-blur-md text-white border-white/20 py-1.5 px-3.5 sm:py-2 sm:px-4 text-xs sm:text-sm font-semibold shadow-lg tracking-wide"
              >
                منصة رِواء التعليمية
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
