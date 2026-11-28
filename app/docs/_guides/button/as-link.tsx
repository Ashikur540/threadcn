import { buttonVariants } from "@/registry/threadcn/ui/button"
import { Stitch } from "@/registry/threadcn/ui/stitch"

export default function ButtonAsLink() {
  return (
    <a href="#care" className={buttonVariants({ variant: "secondary" })}>
      <Stitch />
      Read the care guide
    </a>
  )
}
