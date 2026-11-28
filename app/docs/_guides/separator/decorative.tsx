import { Separator } from "@/registry/threadcn/ui/separator"

export default function SeparatorDecorative() {
  return (
    <div className="grid w-full max-w-xs gap-3 text-center text-sm">
      <p className="font-semibold">Free repairs, forever</p>
      <Separator role="none" className="mx-auto w-16" />
      <p>Send them back any time.</p>
    </div>
  )
}
