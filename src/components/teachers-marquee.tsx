import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface Teacher {
  id: string;
  name: string;
  subject: string;
  avatar: string;
  badgeVariant: "primary" | "secondary" | "greenish";
  experience?: string;
}

const teachers: Teacher[] = [
  {
    id: "1",
    name: "أ. باسم بدر",
    subject: "اللغة العربية",
    avatar: "/images/avatars/1.jpg",
    badgeVariant: "primary",
    experience: "خبير الثانوية العامة",
  },
  {
    id: "2",
    name: "أ. محمد عبد الله",
    subject: "الرياضيات البحتة",
    avatar: "/images/avatars/2.jpg",
    badgeVariant: "secondary",
    experience: "كبير معلمي الرياضيات",
  },
  {
    id: "3",
    name: "أ. أحمد شريف",
    subject: "الفيزياء والعلوم",
    avatar: "/images/avatars/3.jpg",
    badgeVariant: "greenish",
    experience: "مُعد البرامج التعليمية",
  },
  {
    id: "4",
    name: "أ. محمود صبري",
    subject: "اللغة الإنجليزية",
    avatar: "/images/avatars/4.jpg",
    badgeVariant: "primary",
    experience: "متخصص مناهج اللغات",
  },
  {
    id: "5",
    name: "أ. طارق عبد الرازق",
    subject: "الكيمياء",
    avatar: "/images/avatars/1.jpg",
    badgeVariant: "secondary",
    experience: "تبسيط المفاهيم المعقدة",
  },
  {
    id: "6",
    name: "أ. سامح النجار",
    subject: "الأحياء والجيولوجيا",
    avatar: "/images/avatars/2.jpg",
    badgeVariant: "greenish",
    experience: "أفضل مراجعات ليلة الامتحان",
  },
];

export function TeachersMarquee() {
  // Repeating list twice for infinite loop
  const loopTeachers = [...teachers, ...teachers];

  return (
    <section
      id="teachers"
      className="bg-offwhite/80 py-8 md:py-10 px-4 sm:px-6 border-b border-slate-200/70 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 tracking-tight mb-2">
            مدرسين بنها الي بتثق فيهم
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            هيحلوا ويراجعوا معاك خطوة بخطوة حتى ليلة الامتحان
          </p>
        </div>

        {/* Marquee Container with Gradient Edge Masks */}
        <div className="relative w-full overflow-hidden pause-on-hover py-2">
          {/* Edge Blur / Fades (RTL aware) */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-offwhite to-transparent z-20" />
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-offwhite to-transparent z-20" />

          {/* Marquee Track */}
          <div className="flex w-max gap-4 animate-marquee items-stretch">
            {loopTeachers.map((teacher, index) => (
              <div
                key={`${teacher.id}-${index}`}
                className="w-[160px] sm:w-[175px] shrink-0 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/80 shadow-[0_4px_12px_-2px_rgba(38,89,170,0.04)] hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Avatar */}
                <div className="relative mb-2.5">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-3 ring-slate-100 group-hover:ring-primary/30 transition-all duration-300 shadow-xs">
                    <Image
                      src={teacher.avatar}
                      alt={teacher.name}
                      fill
                      sizes="56px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Micro verified checkmark */}
                  <div className="absolute -bottom-0.5 -left-0.5 bg-primary text-white p-0.5 rounded-full shadow-xs border-2 border-white">
                    <svg
                      className="w-2.5 h-2.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Teacher Name */}
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-primary transition-colors duration-150 mb-1.5 truncate max-w-full">
                  {teacher.name}
                </h3>

                {/* Subject Badge */}
                <Badge
                  variant={teacher.badgeVariant}
                  className="mb-2 text-[11px] font-medium px-2 py-0.5 leading-tight"
                >
                  {teacher.subject}
                </Badge>

                {/* Micro info */}
                {teacher.experience && (
                  <p className="text-[11px] text-slate-500 font-normal leading-tight mt-auto pt-2 border-t border-slate-100 w-full truncate">
                    {teacher.experience}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
