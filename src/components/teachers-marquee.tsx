import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface Teacher {
  id: string
  name: string
  subject: string
  avatar: string
  badgeVariant: "primary" | "secondary" | "greenish"
  experience?: string
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
]

export function TeachersMarquee() {
  // Repeating list twice for infinite loop
  const loopTeachers = [...teachers, ...teachers]

  return (
    <section
      id="teachers"
      className="bg-offwhite py-20 md:py-28 px-4 sm:px-6 border-y border-slate-200/70 overflow-hidden relative"
    >
      {/* Subtle Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <Badge variant="primary" className="mb-3.5 px-3.5 py-1 text-xs font-semibold">
            نخبة المعلمين في بنها
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
            مدرسين بنها اللي بتثق فيهم
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            هيحلوا ويراجعوا معاك خطوة بخطوة حتى ليلة الامتحان
          </p>
        </div>

        {/* Marquee Container with Gradient Edge Masks */}
        <div className="relative w-full overflow-hidden pause-on-hover py-4">
          {/* Edge Blur / Fades (RTL aware) */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-offwhite to-transparent z-20" />
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-offwhite to-transparent z-20" />

          {/* Marquee Track */}
          <div className="flex w-max gap-6 animate-marquee">
            {loopTeachers.map((teacher, index) => (
              <div
                key={`${teacher.id}-${index}`}
                className="w-[250px] sm:w-[270px] shrink-0 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_10px_25px_-5px_rgba(38,89,170,0.05),0_2px_6px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_35px_-10px_rgba(38,89,170,0.14),0_6px_12px_-3px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Avatar with dynamic ring on hover */}
                <div className="relative mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-slate-100 group-hover:ring-primary/30 transition-all duration-300 shadow-sm">
                    <Image
                      src={teacher.avatar}
                      alt={teacher.name}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Small verified / certified badge icon */}
                  <div className="absolute -bottom-1 -left-1 bg-primary text-white p-1 rounded-full shadow-xs border-2 border-white">
                    <svg
                      className="w-3.5 h-3.5"
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
                <h3 className="font-bold text-base md:text-lg text-slate-900 group-hover:text-primary transition-colors duration-200 mb-2">
                  {teacher.name}
                </h3>

                {/* Subject Badge */}
                <Badge
                  variant={teacher.badgeVariant}
                  className="mb-3 text-xs font-semibold px-3 py-0.5"
                >
                  {teacher.subject}
                </Badge>

                {/* Micro info / trust proof */}
                {teacher.experience && (
                  <p className="text-xs text-slate-500 font-normal leading-relaxed mt-auto pt-2 border-t border-slate-100 w-full">
                    {teacher.experience}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
