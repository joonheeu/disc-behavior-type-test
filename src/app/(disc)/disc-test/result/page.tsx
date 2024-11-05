"use client"

import { Suspense } from "react"
import ResultContent from "@/components/ResultContent"

export default function ResultPage() {
  return (
    <Suspense fallback={<ResultSkeleton />}>
      <ResultContent />
    </Suspense>
  )
}

function ResultSkeleton() {
  return (
    <div className="mx-auto px-4 py-8 container">
      <div className="animate-pulse">
        <div className="bg-muted mb-8 rounded w-32 h-10" />
        <div className="space-y-6">
          <div className="bg-muted rounded h-[400px]" />
          <div className="gap-6 grid md:grid-cols-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-muted rounded h-[200px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
