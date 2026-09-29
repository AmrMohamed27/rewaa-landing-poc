"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Clock,
  Mail,
  ArrowUpLeft,
  Sparkles,
  ShieldCheck,
  HelpCircle,
  FileText,
} from "lucide-react";

// Crisp SVG social icons for authentic brand representation
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 12 5 12 5s6.255 0 7.812.418zM15.194 12 10 15V9l5.194 3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .36z" />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.944.556 3.76 1.523 5.302L2.3 21.704l4.544-1.192a9.96 9.96 0 0 0 5.16 1.496C17.528 22.008 22 17.528 22 12.004 22 6.48 17.528 2 12.004 2zm5.72 13.916c-.236.664-1.372 1.28-1.904 1.348-.508.064-1.144.092-3.32-.812-2.316-.96-3.804-3.32-3.92-3.476-.116-.156-.94-1.252-.94-2.388s.592-1.696.804-1.928c.212-.232.464-.292.62-.292.156 0 .312.004.448.012.144.008.336-.056.524.396.196.472.672 1.636.732 1.756.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.252.312-.36.42-.12.12-.244.252-.104.492.14.24.624 1.028 1.34 1.664.92.82 1.696 1.072 1.936 1.192.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.6-.176 1.264z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const scienceSubjects = [
  { name: "الفيزياء للثانوية العامة", href: "https://rewaaedu.com" },
  { name: "الكيمياء العامة واللغات", href: "https://rewaaedu.com" },
  { name: "الرياضيات البحتة والتطبيقية", href: "https://rewaaedu.com" },
  { name: "الأحياء والجيولوجيا", href: "https://rewaaedu.com" },
  { name: "ورش ومراجعات العلوم", href: "https://rewaaedu.com" },
];

const literarySubjects = [
  { name: "اللغة العربية والبلاغة", href: "https://rewaaedu.com" },
  { name: "اللغة الإنجليزية الشاملة", href: "https://rewaaedu.com" },
  { name: "اللغة الفرنسية / لغة ثانية", href: "https://rewaaedu.com" },
  { name: "التاريخ والجغرافيا", href: "https://rewaaedu.com" },
  { name: "الفلسفة وعلم النفس", href: "https://rewaaedu.com" },
];

const socialLinks = [
  {
    name: "فيسبوك",
    href: "https://facebook.com",
    icon: FacebookIcon,
    color: "hover:bg-[#1877F2] hover:border-[#1877F2]",
  },
  {
    name: "يوتيوب",
    href: "https://youtube.com",
    icon: YoutubeIcon,
    color: "hover:bg-[#FF0000] hover:border-[#FF0000]",
  },
  {
    name: "تيليجرام",
    href: "https://telegram.org",
    icon: TelegramIcon,
    color: "hover:bg-[#229ED9] hover:border-[#229ED9]",
  },
  {
    name: "واتساب",
    href: "https://whatsapp.com",
    icon: WhatsappIcon,
    color: "hover:bg-[#25D366] hover:border-[#25D366]",
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#2659aa] text-white pt-10 sm:pt-14 pb-8 overflow-hidden">
      {/* Background Decorative Mesh & Ambient Lighting */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-96 h-96 bg-primary-light/15 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-8 sm:pb-10 border-b border-white/15">
          {/* Column 1: Brand & Bio (Span 4 cols on large screens) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {/* Logo & Platform Name */}
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 shrink-0 bg-white/10 backdrop-blur-md rounded-lg p-1.5 border border-white/20 shadow-inner flex items-center justify-center">
                <Image
                  src="/images/rewaa_logo_white.svg"
                  alt="شعار منصة رِواء"
                  width={30}
                  height={30}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-heading">
                  منصة رِواء
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                </span>
                <span className="text-[11px] text-white/70 block font-medium">
                  بيتك التعليمي للتفوق في بنها ومصر
                </span>
              </div>
            </div>

            {/* Slogan Banner */}
            <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs text-[11px] font-semibold text-secondary">
              <Sparkles className="w-3 h-3 text-secondary animate-spin-slow" />
              <span>أنت مش لوحدك، إحنا جنبك</span>
            </div>

            {/* Paragraph Bio */}
            <p className="text-xs sm:text-sm leading-relaxed text-white/80 font-normal">
              منصة رواء التعليمية تساعدك على الاستعداد للامتحانات مع نخبة من أكفأ
              المدرسين في بنها عبر ورش مكثفة وشروحات ومراجعات مركزة.
            </p>

            {/* Social Links */}
            <div>
              <p className="text-[11px] font-semibold text-white/70 mb-2">
                تابعنا وتواصل معنا:
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs ${social.color}`}
                      aria-label={`حساب منصة رواء على ${social.name}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: العلوم الأساسية (Span 3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 pb-1.5 border-b border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
              العلوم الأساسية
            </h3>
            <ul className="space-y-1.5">
              {scienceSubjects.map((sub, idx) => (
                <li key={idx}>
                  <a
                    href={sub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/80 hover:text-white transition-colors duration-150"
                  >
                    <ArrowUpLeft className="w-3 h-3 text-white/40 group-hover:text-secondary group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
                    <span className="group-hover:underline underline-offset-4">
                      {sub.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: اللغات والعلوم الأدبية (Span 2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 pb-1.5 border-b border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
              اللغات والعلوم الأدبية
            </h3>
            <ul className="space-y-1.5">
              {literarySubjects.map((sub, idx) => (
                <li key={idx}>
                  <a
                    href={sub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/80 hover:text-white transition-colors duration-150"
                  >
                    <ArrowUpLeft className="w-3 h-3 text-white/40 group-hover:text-secondary group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
                    <span className="group-hover:underline underline-offset-4">
                      {sub.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: الدعم والمساعدة (Span 3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 pb-1.5 border-b border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
              الدعم والمساعدة
            </h3>
            <div className="space-y-2.5">
              {/* Phone Entry */}
              <a
                href="tel:01000000000"
                className="group flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-150"
              >
                <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center shrink-0 text-secondary group-hover:scale-105 transition-transform duration-150">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-white/60 block font-medium">
                    خدمة الطلاب والدعم
                  </span>
                  <span
                    dir="ltr"
                    className="text-xs sm:text-sm font-bold text-white tracking-wide block group-hover:text-secondary transition-colors"
                  >
                    +20 10 0000 0000
                  </span>
                </div>
              </a>

              {/* Working Hours Entry */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10">
                <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center shrink-0 text-secondary">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-white/60 block font-medium">
                    ساعات العمل الرسمية
                  </span>
                  <p className="text-[11px] font-semibold text-white/90 leading-snug">
                    متاح يومياً من 9 ص حتى 11 م
                  </p>
                </div>
              </div>

              {/* Email Entry */}
              <a
                href="mailto:support@rewaaedu.com"
                className="group flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-150"
              >
                <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center shrink-0 text-secondary group-hover:scale-105 transition-transform duration-150">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 truncate">
                  <span className="text-[10px] text-white/60 block font-medium">
                    البريد الإلكتروني
                  </span>
                  <span className="text-[11px] font-bold text-white block truncate group-hover:text-secondary transition-colors">
                    support@rewaaedu.com
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Rights on Right (in RTL), Links on Left */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-white/70">
          {/* Rights Notice */}
          <div className="text-center md:text-right">
            <p className="leading-relaxed">
              جميع الحقوق محفوظة © 2026 - رَواء بنها. صُمم لدعم مسيرة تفوق طلابنا
              في مصر.
            </p>
          </div>

          {/* Legal / Secondary Navigation */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center md:justify-start">
            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-1 text-white/75 hover:text-white transition-colors duration-150 underline-offset-4 hover:underline"
            >
              <ShieldCheck className="w-3 h-3 text-secondary/80" />
              <span>سياسة الخصوصية</span>
            </Link>
            <span className="text-white/20 hidden sm:inline">•</span>
            <Link
              href="/terms"
              className="inline-flex items-center gap-1 text-white/75 hover:text-white transition-colors duration-150 underline-offset-4 hover:underline"
            >
              <FileText className="w-3 h-3 text-secondary/80" />
              <span>الشروط والأحكام</span>
            </Link>
            <span className="text-white/20 hidden sm:inline">•</span>
            <Link
              href="/faq"
              className="inline-flex items-center gap-1 text-white/75 hover:text-white transition-colors duration-150 underline-offset-4 hover:underline"
            >
              <HelpCircle className="w-3 h-3 text-secondary/80" />
              <span>الأسئلة الشائعة</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
