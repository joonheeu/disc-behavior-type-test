"use client"

import React, { useState } from "react"
import discTestData from "@/data/disc-test-data"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export interface Answer {
  questionIndex: number
  trait: "D" | "I" | "S" | "C"
}

interface QuestionnaireProps {
  onComplete: (answers: Answer[]) => void
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<Answer[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleOptionSelect = (trait: "D" | "I" | "S" | "C") => {
    const updatedAnswers = [
      ...answers,
      { questionIndex: currentQuestionIndex, trait },
    ]
    setAnswers(updatedAnswers)
    if (currentQuestionIndex < discTestData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      onComplete(updatedAnswers)
    }
  }

  const currentQuestion = discTestData[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / discTestData.length) * 100

  return (
    <div className="mx-auto my-8 max-w-xl">
      <Progress value={progress} className="mb-4" />
      <h2 className="mb-6 font-semibold text-xl">{currentQuestion.question}</h2>
      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleOptionSelect(option.trait)}
            variant="outline"
            className="w-full"
          >
            {option.text}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Questionnaire
