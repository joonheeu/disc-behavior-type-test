"use client"

import { Scatter } from "react-chartjs-2"
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js"
import { Plugin } from "chart.js"
import type { TooltipItem, TooltipModel } from "chart.js"

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

interface QuadrantChartProps {
  currentScores: {
    D: number
    I: number
    S: number
    C: number
  }
  savedResults: Array<{
    id: string
    name: string
    scores: {
      D: number
      I: number
      S: number
      C: number
    }
  }>
  selectedResults: string[]
}

export function QuadrantChart({
  currentScores,
  savedResults,
  selectedResults,
}: QuadrantChartProps) {
  const chartData: ChartData<"scatter"> = {
    datasets: [
      {
        type: "scatter" as const,
        label: "현재 결과",
        data: [
          { x: currentScores.I, y: currentScores.I },
          { x: -currentScores.D, y: currentScores.D },
          { x: -currentScores.C, y: -currentScores.C },
          { x: currentScores.S, y: -currentScores.S },
          { x: currentScores.I, y: currentScores.I },
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        showLine: true,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
      ...selectedResults
        .map((resultId) => {
          const result = savedResults.find((r) => r.id === resultId)
          if (!result) return null
          const color = {
            r: Math.floor(Math.random() * 255),
            g: Math.floor(Math.random() * 255),
            b: Math.floor(Math.random() * 255),
          }
          return {
            type: "scatter" as const,
            label: result.name,
            data: [
              { x: result.scores.I, y: result.scores.I },
              { x: -result.scores.D, y: result.scores.D },
              { x: -result.scores.C, y: -result.scores.C },
              { x: result.scores.S, y: -result.scores.S },
              { x: result.scores.I, y: result.scores.I },
            ],
            borderColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
            backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`,
            showLine: true,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 8,
          }
        })
        .filter(
          (dataset): dataset is NonNullable<typeof dataset> => dataset !== null
        ),
    ],
  }

  const chartOptions: ChartOptions<"scatter"> = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    scales: {
      x: {
        min: -12,
        max: 12,
        grid: {
          color: "rgba(128, 128, 128, 0.1)",
          lineWidth: 1,
        },
        ticks: {
          display: false,
        },
        afterFit: (scale) => {
          scale.paddingRight = 50
          scale.paddingLeft = 50
        },
      },
      y: {
        min: -12,
        max: 12,
        grid: {
          color: "rgba(128, 128, 128, 0.1)",
          lineWidth: 1,
        },
        ticks: {
          display: false,
        },
        afterFit: (scale) => {
          scale.paddingTop = 50
          scale.paddingBottom = 50
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: function (
            this: TooltipModel<"scatter">,
            tooltipItem: TooltipItem<"scatter">
          ) {
            const dataIndex = tooltipItem.dataIndex
            if (dataIndex === 4) return ""

            const value = tooltipItem.raw as { x: number; y: number }
            const label = tooltipItem.dataset.label || ""
            let quadrant = ""

            // 사분면과 점수 정보 설정
            if (dataIndex === 0) quadrant = "I"
            else if (dataIndex === 1) quadrant = "D"
            else if (dataIndex === 2) quadrant = "C"
            else if (dataIndex === 3) quadrant = "S"

            return `${label} - ${quadrant}: ${Math.abs(value.x)}점`
          },
        },
      },
    },
  }

  const quadrantPlugin: Plugin<"scatter"> = {
    id: "quadrantPlugin",
    beforeDraw: (chart) => {
      const { ctx, chartArea } = chart
      const { left, right, top, bottom } = chartArea
      const centerX = (left + right) / 2
      const centerY = (top + bottom) / 2
      const width = right - left
      const height = bottom - top

      // 축 그리기
      ctx.save()
      ctx.beginPath()
      ctx.strokeStyle = "rgba(128, 128, 128, 0.5)"
      ctx.lineWidth = 2
      ctx.moveTo(left, centerY)
      ctx.lineTo(right, centerY)
      ctx.moveTo(centerX, top)
      ctx.lineTo(centerX, bottom)
      ctx.stroke()

      // 사분면 라벨 그리기
      ctx.font = "bold 24px Arial"
      ctx.fillStyle = "rgba(128, 128, 128, 0.3)"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      const offsetX = width * 0.35
      const offsetY = height * 0.35

      ctx.fillText("I", centerX + offsetX, centerY - offsetY)
      ctx.fillText("D", centerX - offsetX, centerY - offsetY)
      ctx.fillText("C", centerX - offsetX, centerY + offsetY)
      ctx.fillText("S", centerX + offsetX, centerY + offsetY)

      ctx.restore()
    },
  }

  return (
    <div className="p-4 w-full">
      <Scatter
        data={chartData}
        options={chartOptions}
        plugins={[quadrantPlugin]}
      />
    </div>
  )
}
