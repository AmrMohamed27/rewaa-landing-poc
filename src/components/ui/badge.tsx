import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-transparent px-3 py-1 text-xs font-semibold whitespace-nowrap transition-all select-none [&>svg]:pointer-events-none [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground",
        primary:
          "bg-[#73a4ec]/20 text-[#2659aa] border-[#73a4ec]/30 font-medium",
        greenish:
          "bg-[#E0F2F5] text-[#004B59] border-[#004B59]/20 font-medium",
        secondary:
          "bg-[#FFC703]/20 text-[#6E5400] border-[#FFC703]/40 font-semibold",
        outline:
          "border-border text-foreground bg-white/80 backdrop-blur-sm",
        ghost:
          "bg-transparent text-muted-foreground hover:bg-muted",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

function Badge({
  className,
  variant = "primary",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
