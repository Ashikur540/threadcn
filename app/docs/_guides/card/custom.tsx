import { Card, CardContent, CardHeader, CardTitle } from "@/registry/threadcn/ui/card"

export default function CardCustom() {
  return (
    <div className="flex w-full flex-wrap items-start justify-center gap-4">
      <Card className="w-full max-w-56 [--_stitch:white]">
        <CardHeader>
          <CardTitle>White thread</CardTitle>
        </CardHeader>
        <CardContent>Only this card changes.</CardContent>
      </Card>
      <Card className="w-full max-w-56 [--_inset:12px] [--_thread:2.5px]">
        <CardHeader>
          <CardTitle>Thick, deep stitch</CardTitle>
        </CardHeader>
        <CardContent>The thread sits further in.</CardContent>
      </Card>
      <Card className="w-full max-w-56 [--_radius:6px]">
        <CardHeader>
          <CardTitle>Square corners</CardTitle>
        </CardHeader>
        <CardContent>The stitch follows the corner.</CardContent>
      </Card>
    </div>
  )
}
