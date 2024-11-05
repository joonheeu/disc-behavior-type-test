"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { discResultData } from "@/data/disc-result-data"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  Trophy,
  Lightbulb,
  Target,
  MessageCircle,
} from "lucide-react"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function ResultContent() {
  const searchParams = useSearchParams()
  const scores = {
    D: Number(searchParams.get("d")) || 0,
    I: Number(searchParams.get("i")) || 0,
    S: Number(searchParams.get("s")) || 0,
    C: Number(searchParams.get("c")) || 0,
  }

  // 가장 높은 점수를 가진 유형 찾기
  const dominantType = Object.entries(scores).reduce((a, b) =>
    scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores]
      ? a
      : b
  )[0] as "D" | "I" | "S" | "C"

  const result = discResultData[dominantType]

  const chartData = {
    labels: ["주도성 (D)", "사교성 (I)", "안정성 (S)", "신중성 (C)"],
    datasets: [
      {
        label: "DISC 점수",
        data: [scores.D, scores.I, scores.S, scores.C],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(54, 162, 235, 0.8)",
        ],
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
      },
    },
  }

  return (
    <div className="mx-auto px-4 py-8 container">
      <Link href="/disc-test" className="inline-flex items-center mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          다시 검사하기
        </Button>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              당신의 DISC 유형은{" "}
              <span className="text-primary">{result.title}</span>
              입니다
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <Bar data={chartData} options={chartOptions} />
            </div>
            <p className="text-lg text-muted-foreground">
              {result.description}
            </p>
          </CardContent>
        </Card>

        <div className="gap-6 grid md:grid-cols-2">
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
      </motion.div>
    </div>
  )
}
