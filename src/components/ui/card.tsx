import * as React from "react"
import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  variant = "elevated",
  ...props
}: React.ComponentProps<"div"> & {
  size?: "default" | "sm" | "lg"
  variant?: "elevated" | "flat" | "bordered"
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      data-variant={variant}
      className={cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-2xl bg-white text-sm text-foreground transition-all duration-200 [--card-spacing:--spacing(6)] data-[size=sm]:[--card-spacing:--spacing(4)] data-[size=lg]:[--card-spacing:--spacing(8)]",
        // Variants
        variant === "elevated" && "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),0_2px_8px_-2px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_16px_36px_-12px_rgba(38,89,170,0.12),0_4px_12px_-2px_rgba(0,0,0,0.04)]",
        variant === "bordered" && "border border-border shadow-xs",
        variant === "flat" && "bg-slate-50/70 border-none shadow-none",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header flex flex-col gap-1.5 px-(--card-spacing) pt-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-sans text-lg font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing) py-2 flex-1", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-(--card-spacing) pb-(--card-spacing) pt-2",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}
