import type * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

/**
 * A text field on cream canvas. Same API as shadcn's Input.
 * Mark an error with aria-invalid="true". The look is in styles/field.css,
 * shared with Textarea and the Select trigger.
 *
 * @example
 * <Input type="email" placeholder="you@studio.dev" />
 */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "tx-field min-h-11 w-full min-w-0 px-3.5 py-2.5 text-[15px] leading-[1.4] file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
