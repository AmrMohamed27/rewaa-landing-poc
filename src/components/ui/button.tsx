import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent font-medium whitespace-nowrap transition-all duration-150 outline-none select-none cursor-pointer focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        inverted:
          "bg-white text-primary border-border/80 shadow-sm hover:bg-slate-50 hover:border-border hover:shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:brightness-95 hover:shadow-md font-semibold",
        outline:
          "border-border bg-transparent text-foreground hover:bg-muted hover:text-foreground",
        ghost:
          "text-foreground hover:bg-muted hover:text-foreground",
        link:
          "text-primary underline-offset-4 hover:underline p-0 h-auto font-normal",
      },
      size: {
        default: "h-11 px-5 py-2.5 text-sm gap-2 rounded-xl",
        sm: "h-9 px-3.5 py-1.5 text-xs gap-1.5 rounded-lg",
        lg: "h-12 px-6 py-3 text-base gap-2.5 rounded-xl font-semibold",
        icon: "size-10 rounded-xl",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
