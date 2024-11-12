"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { discResultData } from "@/data/disc-result-data"
import { motion } from "framer-motion"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  ArrowLeft,
  Trophy,
  Lightbulb,
  Target,
  MessageCircle,
} from "lucide-react"
import { QuadrantChart } from "./QuadrantChart"
import { SaveResultDialog } from "./SaveResultDialog"

interface TestResult {
  id: string
  name: string
  date: string
  scores: {
    D: number
    I: number
    S: number
    C: number
  }
}

export default function ResultContent() {
  const [savedResults, setSavedResults] = useState<TestResult[]>([])
  const [selectedResults, setSelectedResults] = useState<string[]>([])
  const [newResultName, setNewResultName] = useState("")
  const [showSaveDialog, setShowSaveDialog] = useState(false)

  const searchParams = useSearchParams()
  const d = Number(searchParams.get("d")) || 0
  const i = Number(searchParams.get("i")) || 0
  const s = Number(searchParams.get("s")) || 0
  const c = Number(searchParams.get("c")) || 0
  const currentScores = { D: d, I: i, S: s, C: c }

  // 가장 높은 점수를 가진 유형 찾기
  const dominantType = Object.entries(currentScores).reduce((a, b) =>
    currentScores[a[0] as keyof typeof currentScores] >
    currentScores[b[0] as keyof typeof currentScores]
      ? a
      : b
  )[0] as "D" | "I" | "S" | "C"

  const result = discResultData[dominantType]

  useEffect(() => {
    const stored = localStorage.getItem("discResults")
    if (stored) {
      setSavedResults(JSON.parse(stored))
    }
  }, [])

  const saveResult = () => {
    if (!newResultName) return

    const newResult: TestResult = {
      id: Date.now().toString(),
      name: newResultName,
      date: new Date().toISOString(),
      scores: currentScores,
    }

    const updatedResults = [...savedResults, newResult]
    localStorage.setItem("discResults", JSON.stringify(updatedResults))
    setSavedResults(updatedResults)
    setSelectedResults([...selectedResults, newResult.id])
    setShowSaveDialog(false)
    setNewResultName("")
  }

  const deleteResult = (id: string) => {
    const updatedResults = savedResults.filter((result) => result.id !== id)
    localStorage.setItem("discResults", JSON.stringify(updatedResults))
    setSavedResults(updatedResults)
    setSelectedResults(selectedResults.filter((resultId) => resultId !== id))
  }

  const clearAllResults = () => {
    localStorage.removeItem("discResults")
    setSavedResults([])
    setSelectedResults([])
  }

  return (
    <div className="mx-auto px-4 py-8 max-w-screen-xl container">
      <div className="flex justify-between items-center mb-8">
        <Link href="/disc-test">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            다시 검사하기
          </Button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
          {/* 왼쪽 컬럼 */}
          <div className="space-y-8">
            {/* DISC 결과 요약 카드 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  당신의 DISC 유형은{" "}
                  <span className="text-primary">{result.title}</span>
                  입니다
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  {result.description}
                </p>
              </CardContent>
            </Card>

            {/* 4사분면 그래프 카드 */}
            <Card className="p-4 md:p-6">
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">DISC 프로파일</h2>
                  <div className="flex gap-2">
                    <SaveResultDialog
                      open={showSaveDialog}
                      onOpenChange={setShowSaveDialog}
                      resultName={newResultName}
                      onResultNameChange={setNewResultName}
                      onSave={saveResult}
                    />
                    {savedResults.length > 0 && (
                      <Button variant="destructive" onClick={clearAllResults}>
                        모든 기록 삭제
                      </Button>
                    )}
                  </div>
                </div>
                {savedResults.length > 0 && (
                  <div className="mt-4">
                    <Select
                      value={selectedResults.join(",")}
                      onValueChange={(value) =>
                        setSelectedResults(value.split(","))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="비교할 결과 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        {savedResults.map((result) => (
                          <SelectItem key={result.id} value={result.id}>
                            {result.name} (
                            {new Date(result.date).toLocaleDateString()})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
              <QuadrantChart
                currentScores={currentScores}
                savedResults={savedResults}
                selectedResults={selectedResults}
              />
            </Card>
          </div>

          {/* 오른쪽 컬럼 */}
          <div className="space-y-8">
            {/* 특성 분석 카드들 */}
            <div className="gap-6 grid grid-cols-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    강점
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {result.strengths.map((strength, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        • {strength}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    개선점
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {result.weaknesses.map((weakness, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        • {weakness}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    업무 스타일
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {result.workStyle.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        • {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    의사소통 방식
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {result.communication.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        • {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* 저장된 결과 목록 */}
        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">저장된 결과 목록</h2>
          <div className="space-y-2">
            {savedResults.map((result) => (
              <div
                key={result.id}
                className="flex flex-col p-3 md:p-4 border rounded"
              >
                <div className="flex md:flex-row flex-col justify-between items-start md:items-center mb-2">
                  <div className="mb-2 md:mb-0">
                    <span className="font-medium">{result.name}</span>
                    <span className="ml-2 text-muted-foreground text-sm">
                      {new Date(result.date).toLocaleDateString()}
                    </span>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteResult(result.id)}
                  >
                    삭제
                  </Button>
                </div>
                <div className="gap-2 grid grid-cols-2 md:grid-cols-4 text-sm">
                  <div className="bg-muted/30 p-1 rounded text-center">
                    <span className="font-semibold">D:</span> {result.scores.D}
                    점
                  </div>
                  <div className="bg-muted/30 p-1 rounded text-center">
                    <span className="font-semibold">I:</span> {result.scores.I}
                    점
                  </div>
                  <div className="bg-muted/30 p-1 rounded text-center">
                    <span className="font-semibold">S:</span> {result.scores.S}
                    점
                  </div>
                  <div className="bg-muted/30 p-1 rounded text-center">
                    <span className="font-semibold">C:</span> {result.scores.C}
                    점
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
