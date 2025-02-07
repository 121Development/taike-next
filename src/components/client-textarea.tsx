"use client"

import { Textarea } from "./ui/textarea"
import type { ComponentProps } from "react"
import { useEffect, useState } from "react"
import { getRandomQuote } from "~/lib/quotes"

type ClientTextareaProps = ComponentProps<typeof Textarea> & {
  randomPlaceholder?: boolean
}

export function ClientTextarea({ randomPlaceholder = false, ...props }: ClientTextareaProps) {
  const [placeholder, setPlaceholder] = useState(props.placeholder)

  useEffect(() => {
    if (randomPlaceholder) {
      setPlaceholder(getRandomQuote())
    }
  }, [randomPlaceholder])

  return <Textarea {...props} placeholder={placeholder} />
}
