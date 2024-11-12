"use client"

import { Suspense } from "react"

import ResultContent from "@/components/ResultContent"

export default function ResultPage() {
  return (
    <Suspense>
      <ResultContent />
    </Suspense>
  )
}
