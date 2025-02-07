"use client"

import { Textarea } from "./ui/textarea"
import type { ComponentProps } from "react"

export function ClientTextarea(props: ComponentProps<typeof Textarea>) {
  return <Textarea {...props} />
}
