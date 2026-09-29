"use client";

import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Atom,
  BookOpen,
  Calculator,
  Clock,
  Dna,
  FlaskConical,
  Languages,
  Zap,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";

interface CourseCard {
  id: string;
  title: string;
  subtitle: string;
  subject: string;
  subjectCategory: "math" | "science" | "languages" | "humanities";
  featureType: "ورشة وتطبيق" | "مراجعة شهرية" | "تفكيك صعوبات";
  duration: string;
  coverImage: string;
  teacher: {
    name: string;
    avatar: string;
    subject: string;
  };
  price: number;
  originalPrice?: number;
  icon: React.ElementType;
}

const courses: CourseCard[] = [
  {
    id: "physics-workshop",
    title: "ورشة وحل أفكار الفيزياء الكهربائية",
    subtitle:
      "تدريب مكثف على أصعب قوانين كيرشوف وتطبيقات الدوائر المعقدة بطريقة عملية وسلسة.",
    subject: "الفيزياء",
    subjectCategory: "science",
    featureType: "ورشة وتطبيق",
    duration: "٤ ساعات مكثفة",
    coverImage: "/images/courses/physics.jpg",
    teacher: {
      name: "أ. أحمد شريف",
      avatar: "/images/avatars/3.jpg",
      subject: "معلم الفيزياء",
    },
    price: 250,
    originalPrice: 350,
    icon: Atom,
  },
  {
    id: "arabic-grammar-revision",
    title: "المراجعة الشهرية الشاملة للنحو والبلاغة",
    subtitle:
      "تثبيت وتلخيص لأهم قواعد النحو واستخراج الصور البلاغية مع حل تدريبات شاملة تحاكي الامتحان.",
    subject: "اللغة العربية",
    subjectCategory: "languages",
    featureType: "مراجعة شهرية",
    duration: "٥ ساعات مكثفة",
    coverImage: "/images/courses/arabic.jpg",
    teacher: {
      name: "أ. باسم بدر",
      avatar: "/images/avatars/1.jpg",
      subject: "معلم اللغة العربية",
    },
    price: 280,
    originalPrice: 400,
    icon: BookOpen,
  },
  {
    id: "chemistry-organic",
    title: "تفكيك الكيمياء العضوية ومعادلاتها",
    subtitle:
      "شرح مبسط ومخططات بصرية لتسهيل تفاعلات وتحويلات المركبات العضوية في وقت قياسي.",
    subject: "الكيمياء",
    subjectCategory: "science",
    featureType: "تفكيك صعوبات",
    duration: "٤.٥ ساعات",
    coverImage: "/images/courses/chemistry.jpg",
    teacher: {
      name: "أ. طارق عبد الرازق",
      avatar: "/images/avatars/4.jpg",
      subject: "معلم الكيمياء",
    },
    price: 260,
    originalPrice: 360,
    icon: FlaskConical,
  },
  {
    id: "math-calculus",
    title: "ورشة التفاضل والتكامل ونواتج التعلم",
    subtitle:
      "حل نماذج مستويات التفكير العليا وتطبيق مباشر على مسائل المعدلات الزمنية ورسم المنحنيات.",
    subject: "الرياضيات",
    subjectCategory: "math",
    featureType: "ورشة وتطبيق",
    duration: "٥ ساعات مكثفة",
    coverImage: "/images/courses/math.jpg",
    teacher: {
      name: "أ. محمود عبد الله",
      avatar: "/images/avatars/2.jpg",
      subject: "معلم الرياضيات",
    },
    price: 270,
    originalPrice: 380,
    icon: Calculator,
  },
  {
    id: "biology-genetics",
    title: "مراجعة الهندسة الوراثية وتطبيقات DNA",
    subtitle:
      "تثبيت شامل لآليات تضاعف الحمض النووي وتخليق البروتين مع بنك أسئلة متدرج الصعوبة.",
    subject: "الأحياء",
    subjectCategory: "science",
    featureType: "مراجعة شهرية",
    duration: "٤ ساعات مكثفة",
    coverImage: "/images/courses/biology.webp",
    teacher: {
      name: "أ. سامح النجار",
      avatar: "/images/avatars/2.jpg",
      subject: "معلم الأحياء",
    },
    price: 250,
    originalPrice: 350,
    icon: Dna,
  },
  {
    id: "english-skills",
    title: "ورشة مهارات الإنجليزي: الترجمة والمقال",
    subtitle:
      "استراتيجيات سريعة للتعامل مع أسئلة المقال، وحل قطع الفهم والترجمة المتقدمة بسهولة.",
    subject: "اللغة الإنجليزية",
    subjectCategory: "languages",
    featureType: "ورشة وتطبيق",
    duration: "٣.٥ ساعات",
    coverImage: "/images/courses/english.png",
    teacher: {
      name: "أ. محمد صبري",
      avatar: "/images/avatars/4.jpg",
      subject: "معلم اللغة الإنجليزية",
    },
    price: 240,
    originalPrice: 320,
    icon: Languages,
  },
];

const AUTH_URL = "https://rewaaedu.com/ar/auth/login";

export function CoursesSection() {
  return (
    <section
      id="workshops"
      className="relative w-full py-10 sm:py-14 bg-[#F0F3FF] border-y border-slate-200/60 overflow-hidden"
      aria-labelledby="courses-heading"
    >
      {/* Background Subtle Ambient Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-primary/5 via-secondary/10 to-primary/5 blur-3xl -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          {/* Top Zap Badge */}
          <Badge
            variant="secondary"
            className="gap-1.5 px-3 py-1 text-xs font-bold mb-2.5 shadow-xs"
          >
            <Zap className="size-3 fill-current" />
            <span>محتوى تعليمي مكثف</span>
          </Badge>

          <h2
            id="courses-heading"
            className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2"
          >
            أحدث الورش والمراجعات
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
            اختار اللي محتاجه دلوقتي: ورشة، شرح لموضوع صعب، أو مراجعة شهرية.
          </p>
        </div>

        {/* 3-Column Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {courses.map((course) => {
            const SubjectIcon = course.icon;
            return (
              <article
                key={course.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden text-right"
              >
                {/* Top Half: Cover Image & Floating Visual Badges */}
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    {/* Course Cover Image with Zoom Effect */}
                    <Image
                      src={course.coverImage}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-95"
                    />

                    {/* Top-to-bottom dark gradient scrim for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 pointer-events-none" />

                    {/* Top Overlay Row: Badges on Right, Subject Icon on Left */}
                    <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between gap-2 z-10">
                      {/* Right Side: Subject Badge & Feature Type Badge */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold shadow-xs">
                          {course.subject}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-secondary/90 backdrop-blur-md text-[#4A3900] text-[11px] font-extrabold shadow-xs">
                          {course.featureType}
                        </span>
                      </div>

                      {/* Left Side: Subject Category Icon (Top Left) */}
                      <div className="size-7 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300">
                        <SubjectIcon className="size-3.5" />
                      </div>
                    </div>

                    {/* Bottom of Image: Duration Pill */}
                    <div className="absolute bottom-2.5 right-2.5 z-10">
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium shadow-xs">
                        <Clock className="size-3 text-secondary" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Body: Title & Subtitle */}
                  <div className="p-4 pb-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-snug mb-1.5">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-normal">
                      {course.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Footer: Teacher Info (Right) & Price + Action (Left) */}
                <div className="p-4 pt-0 mt-auto">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    {/* Right side: Teacher Avatar & Name */}
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="relative size-8 rounded-full overflow-hidden border border-primary/20 bg-slate-100 shrink-0">
                        <Image
                          src={course.teacher.avatar}
                          alt={course.teacher.name}
                          fill
                          sizes="32px"
                          className="object-cover object-top scale-125"
                        />
                      </div>
                      <div className="min-w-0 text-right">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          {course.teacher.name}
                        </p>
                        <p className="text-[10px] text-slate-500 truncate">
                          {course.teacher.subject}
                        </p>
                      </div>
                    </div>

                    {/* Left side: Course Price */}
                    <div className="text-left shrink-0">
                      <div className="flex items-baseline gap-1 justify-end">
                        <span className="text-lg sm:text-xl font-black text-primary">
                          {course.price}
                        </span>
                        <span className="text-[11px] font-bold text-slate-600">
                          ج.م
                        </span>
                      </div>
                      {course.originalPrice && (
                        <span className="text-[10px] text-slate-400 line-through block -mt-0.5 text-left">
                          {course.originalPrice} ج.م
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Seamless Interactive Button */}
                  <a
                    href={AUTH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-slate-50 hover:bg-primary hover:text-white text-slate-700 text-xs font-bold border border-slate-200/80 hover:border-transparent transition-all duration-200 active:scale-[0.98] group/btn"
                  >
                    <span>سجل في الكورس</span>
                    <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover/btn:-translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
