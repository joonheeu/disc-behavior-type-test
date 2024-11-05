"use client"

import React, { useState } from "react"
import Questionnaire from "@/components/Questionnaire"
import Result from "@/components/Result"
import { Answer } from "@/components/Questionnaire"
import { Button } from "@/components/ui/button"

const App: React.FC = () => {
  const [startTest, setStartTest] = useState(false)
  const [answers, setAnswers] = useState<Answer[] | null>(null)

  const handleStart = () => {
    setStartTest(true)
  }

  const handleComplete = (answers: Answer[]) => {
    setAnswers(answers)
  }

  const handleRetry = () => {
    setAnswers(null)
    setStartTest(false)
  }

  return (
    <div className="mx-auto p-4 container">
      {!startTest ? (
        <div className="text-center">
          <h1 className="mb-4 font-bold text-4xl">DISC 행동 유형 검사</h1>
          <p className="mb-6">
            DISC 행동 유형 검사를 통해 자신과 타인의 행동 유형을 이해하고
            효과적인 커뮤니케이션을 만들어보세요.
          </p>
          <Button onClick={handleStart}>검사 시작하기</Button>
        </div>
      ) : answers ? (
        <Result answers={answers} onRetry={handleRetry} />
      ) : (
        <Questionnaire onComplete={handleComplete} />
      )}
    </div>
  )
}

export default App
