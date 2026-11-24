import type * as React from "react"
import { cn } from "cn"

/**
 * A multi-line text field on cream canvas. Same API as shadcn's Textarea.
 * It grows with its text. Mark an error with aria-invalid="true".
 * The look is in styles/field.css.
 *
 * @example
 * <Textarea placeholder="Where is the tear?" />
 */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn("tx-field field-sizing-content flex min-h-[92px] w-full resize-y px-3.5 py-2.5 text-[15px] leading-[1.4]", className)}
      {...props}
    />
  )
}

export { Textarea }
