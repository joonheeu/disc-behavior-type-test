"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { ChevronRight, HelpCircle } from "lucide-react"
import discTestData from "@/data/disc-test-data"

export default function DiscTestPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])

  const handleAnswer = (trait: "D" | "I" | "S" | "C") => {
    const newAnswers = [
      ...answers,
      { questionIndex: currentQuestionIndex, trait },
    ]
    setAnswers(newAnswers)

    if (currentQuestionIndex < discTestData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // 결과를 URL 파라미터로 인코딩하여 결과 페이지로 이동
      const counts = newAnswers.reduce(
        (acc, curr) => {
          acc[curr.trait]++
          return acc
        },
        { D: 0, I: 0, S: 0, C: 0 }
      )

      const queryParams = new URLSearchParams()
      Object.entries(counts).forEach(([trait, count]) => {
        queryParams.append(trait.toLowerCase(), count.toString())
      })

      router.push(`/disc-test/result?${queryParams.toString()}`)
    }
  }

  const progress = ((currentQuestionIndex + 1) / discTestData.length) * 100

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="flex items-center gap-2 mb-4 font-bold text-2xl">
          DISC 행동 유형 검사
          <HelpCircle className="w-5 h-5 text-muted-foreground" />
        </h1>
        <Progress value={progress} className="w-full" />
        <p className="mt-2 text-muted-foreground text-sm">
          {currentQuestionIndex + 1} / {discTestData.length}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6">
            <h2 className="mb-6 text-xl">
              {discTestData[currentQuestionIndex].question}
            </h2>
            <div className="space-y-4">
              {discTestData[currentQuestionIndex].options.map(
                (option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-between px-6 py-4 w-full h-auto text-left"
                    onClick={() => handleAnswer(option.trait)}
                  >
                    <span>{option.text}</span>
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                )
              )}
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

interface Answer {
  questionIndex: number
  trait: "D" | "I" | "S" | "C"
}
