"use client";

import * as React from "react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft, PlayCircle } from "lucide-react";

const AUTH_URL = "https://rewaaedu.com/ar/auth/login";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center bg-background">
      {/* Full-width Background Cover Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rewaa_hero.webp"
          alt="منصة رِواء التعليمية - شريكك في التفوق والإدارة الذكية"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[center_30%]"
        />

        {/* Subtle light/white/offwhite gradient fade for crisp readability without darkening the image */}
        <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/80 to-transparent sm:w-3/4 lg:w-3/5" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl text-right flex flex-col items-start">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight leading-[1.2] sm:leading-[1.18] mb-5">
            انت مش لوحدك..{" "}
            <span className="relative inline-block text-secondary-foreground font-black">
              احنا جنبك
            </span>
          </h1>

          {/* Subtitle & Value Props */}
          <div className="text-base sm:text-lg text-slate-800 leading-relaxed mb-8 max-w-xl">
            <p className="font-bold text-primary mb-3">
              رِواء بتركز معاك على احتياجات كل طالب بيدور عليها:
            </p>
            <ul className="space-y-2.5 text-slate-700 text-sm sm:text-base font-medium">
              <li className="flex items-center gap-2.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                <span>ورش وتطبيقات تثبت المعلومة</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                <span>الوحدات الصعبة والمهمة في كل مادة</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                <span>مراجعات شهرية تلم المنهج أول بأول</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <a
              href={AUTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className:
                  "shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 gap-2 font-bold text-base px-8 py-6 justify-center",
              })}
            >
              <span>سجّل مجاناً وابدأ التعلّم</span>
              <ArrowLeft className="size-5" />
            </a>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/90 hover:bg-white text-primary hover:text-primary border-primary/20 backdrop-blur-sm font-bold text-base px-7 py-6 transition-all justify-center shadow-sm"
              onClick={() => {
                const element =
                  document.getElementById("teachers") ||
                  document.getElementById("workshops");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <PlayCircle className="size-5 ml-2 text-primary" />
              <span>استكشف المدرسين والكورسات</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
