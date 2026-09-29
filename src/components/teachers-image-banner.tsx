import Image from "next/image";

export function TeachersImageBanner() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex justify-center items-center">
      <div className="relative w-full rounded-3xl overflow-hidden shadow-sm border border-border/40 bg-card">
        {/* Mobile image (< md) */}
        <Image
          src="/images/teachers_mobile.webp"
          alt="نخبة من معلمي منصة رِواء"
          width={1808}
          height={1000}
          className="w-full h-auto object-cover block md:hidden"
          priority
        />
        {/* Desktop image (>= md) */}
        <Image
          src="/images/teachers.webp"
          alt="نخبة من معلمي منصة رِواء"
          width={1920}
          height={800}
          className="w-full h-auto object-cover hidden md:block"
          priority
        />
      </div>
    </section>
  );
}
