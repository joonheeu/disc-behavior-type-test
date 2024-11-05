import React from "react"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

ChartJS.register(CategoryScale, LinearScale, BarElement)

type Trait = "D" | "I" | "S" | "C"

interface ResultProps {
  answers: {
    questionIndex: number
    trait: Trait
  }[]
  onRetry: () => void
}

const Result: React.FC<ResultProps> = ({ answers, onRetry }) => {
  const traitCounts = answers.reduce(
    (counts: Record<Trait, number>, answer) => {
      counts[answer.trait]++
      return counts
    },
    { D: 0, I: 0, S: 0, C: 0 }
  )

  const traits: Trait[] = ["D", "I", "S", "C"]

  const dominantTrait = traits.reduce((a, b) =>
    traitCounts[a] > traitCounts[b] ? a : b
  ) as Trait

  const traitDescriptions: Record<Trait, string> = {
    D: `주도형(Dominance)

주도형은 목표 지향적이며 결단력이 강한 성향을 가지고 있습니다. 도전적이고 경쟁을 즐기며, 빠른 의사 결정과 문제 해결 능력이 뛰어납니다. 높은 자신감으로 어떤 상황에서도 주도권을 잡으려 하지만, 때로는 타인의 의견을 무시할 수 있으므로 배려심을 기를 필요가 있습니다.`,

    I: `사교형(Influence)

사교형은 낙천적이고 열정적이며, 사람들과의 상호작용을 즐깁니다. 의사소통 능력이 뛰어나고 분위기를 밝게 만들지만, 세부 사항에 소홀할 수 있습니다. 책임감을 높이고 계획성을 갖추면 더 큰 성장을 이룰 수 있습니다.`,

    S: `안정형(Steadiness)

안정형은 협력적이고 인내심이 강한 성향을 가지고 있습니다. 타인의 감정을 잘 이해하고, 팀 내에서 조화를 이루는 것을 중시합니다. 하지만 변화에 대한 두려움이 있을 수 있으므로 유연성을 키우는 것이 중요합니다.`,

    C: `신중형(Conscientiousness)

신중형은 분석적이고 체계적인 성향을 가지고 있습니다. 높은 기준과 정확성을 추구하며, 세부사항에 주의를 기울입니다. 그러나 지나친 완벽주의로 인해 의사 결정이 느려질 수 있으므로, 때로는 전체 그림을 보는 시각이 필요합니다.`,
  }

  const data = {
    labels: traits,
    datasets: [
      {
        label: "점수",
        data: traits.map((trait) => traitCounts[trait]),
        backgroundColor: ["#F87171", "#60A5FA", "#34D399", "#FBBF24"],
      },
    ],
  }

  return (
    <div className="mx-auto my-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>당신의 DISC 유형은 {dominantTrait}입니다.</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 whitespace-pre-wrap">
            {traitDescriptions[dominantTrait]}
          </p>
          <Bar data={data} />
          <Button onClick={onRetry} className="mt-6">
            다시하기
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Result
