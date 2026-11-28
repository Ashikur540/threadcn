"use client"

import * as React from "react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/threadcn/ui/alert-dialog"
import { Button } from "@/registry/threadcn/ui/button"

function Scissors() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
    </svg>
  )
}

export default function AlertDialogDestructive() {
  const [open, setOpen] = React.useState(false)
  const [cancelled, setCancelled] = React.useState(false)

  return (
    <div className="grid justify-items-center gap-3">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger render={<Button variant="destructive" />}>
          Cancel repair
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <Scissors />
            </AlertDialogMedia>
            <AlertDialogTitle>Cancel the repair?</AlertDialogTitle>
            <AlertDialogDescription>
              We will stop work on your Model 08 jeans and send them back as they are. The prepaid label will no longer work.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep the repair</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={() => {
                setCancelled(true)
                setOpen(false)
              }}
            >
              Cancel repair
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <p className="text-sm" aria-live="polite">
        {cancelled ? "Repair #2041 cancelled. Your jeans are on the way back." : "Repair #2041 · knee patch · in progress"}
      </p>
    </div>
  )
}
