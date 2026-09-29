"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ArrowLeft } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "المعلمون", href: "/#teachers" },
  { label: "الورش والمراجعات", href: "/#workshops" },
  { label: "المواد الدراسية", href: "/#subjects" },
  { label: "عن المنصة", href: "/#about" },
]

const AUTH_URL = "https://rewaaedu.com/ar/auth/login"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Right side (in RTL): Brand Logo */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-3 transition-transform duration-150 hover:opacity-90 active:scale-95"
              aria-label="رِواء التعليمية - الصفحة الرئيسية"
            >
              <Image
                src="/images/rewaa_logo.svg"
                alt="شعار منصة رِواء التعليمية"
                width={130}
                height={42}
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="التنقل الرئيسي">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-2 text-sm font-medium text-slate-600 rounded-lg hover:text-primary hover:bg-primary/5 transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Left side (in RTL): Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={AUTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "inverted",
                size: "sm",
                className: "font-medium text-slate-700 hover:text-primary",
              })}
            >
              تسجيل الدخول
            </a>

            <a
              href={AUTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "secondary",
                size: "sm",
                className: "shadow-sm hover:shadow-md transition-all duration-150",
              })}
            >
              إنشاء حساب مجاني
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة الرئيسية"}
              className="text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-3 animate-in fade-in-50 slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-700 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={AUTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className={buttonVariants({
                variant: "inverted",
                size: "default",
                className: "w-full justify-center",
              })}
            >
              تسجيل الدخول
            </a>
            <a
              href={AUTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className={buttonVariants({
                variant: "secondary",
                size: "default",
                className: "w-full justify-center gap-2",
              })}
            >
              <span>إنشاء حساب مجاني</span>
              <ArrowLeft className="size-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
