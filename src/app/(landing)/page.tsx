"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Target,
  Users,
  Shield,
  Brain,
  Heart,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="mx-auto px-4 py-12 container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 font-bold text-4xl">DISC 행동 유형 검사</h1>
        <p className="mb-8 text-muted-foreground text-xl">
          자신의 행동 유형을 이해하고 더 나은 관계를 만들어보세요
        </p>
        <Link href="/disc-test">
          <Button size="lg" className="gap-2">
            무료로 검사 시작하기
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </motion.div>

      <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4 mb-12">
        {discTypes.map((type) => (
          <Card key={type.title}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {type.icon}
                <h3 className="font-semibold text-lg">{type.title}</h3>
              </div>
              <p className="text-muted-foreground">{type.description}</p>
              <ul className="space-y-2 mt-4">
                {type.traits.map((trait, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mb-12 text-center">
        <h2 className="mb-6 font-bold text-3xl">DISC 검사가 필요한 이유</h2>
        <div className="gap-6 grid md:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="mb-2 font-semibold text-lg">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 font-bold text-3xl text-center">검사 진행 과정</h2>
        <div className="gap-6 grid md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex justify-center items-center bg-primary mb-4 rounded-full w-12 h-12 text-primary-foreground">
                {index + 1}
              </div>
              <h3 className="mb-2 font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const discTypes = [
  {
    title: "주도형 (D)",
    icon: <Target className="w-6 h-6 text-red-500" />,
    description: "목표 지향적이며 결과를 중시하는 유형입니다.",
    traits: ["결단력", "도전정신", "추진력", "목표 지향"],
  },
  {
    title: "사교형 (I)",
    icon: <Users className="w-6 h-6 text-yellow-500" />,
    description: "사람과의 관계를 중시하며 영향력을 행사하는 유형입니다.",
    traits: ["낙관성", "열정", "사교성", "설득력"],
  },
  {
    title: "안정형 (S)",
    icon: <Shield className="w-6 h-6 text-green-500" />,
    description: "안정성과 협력을 중시하는 유형입니다.",
    traits: ["신뢰성", "인내심", "협조성", "경청력"],
  },
  {
    title: "신중형 (C)",
    icon: <Brain className="w-6 h-6 text-blue-500" />,
    description: "정확성과 분석을 중시하는 유형입니다.",
    traits: ["분석력", "체계성", "신중함", "정확성"],
  },
]

const benefits = [
  {
    title: "자기 이해",
    icon: <Brain className="w-12 h-12 text-primary" />,
    description: "자신의 행동 패턴과 성향을 깊이 이해할 수 있습니다.",
  },
  {
    title: "관계 개선",
    icon: <Heart className="w-12 h-12 text-primary" />,
    description:
      "타인과의 소통 방식을 개선하여 더 나은 관계를 만들 수 있습니다.",
  },
  {
    title: "업무 효율",
    icon: <Briefcase className="w-12 h-12 text-primary" />,
    description: "업무 스타일을 이해하고 효율적인 협업을 할 수 있습니다.",
  },
]

const steps = [
  {
    title: "검사 시작",
    description: "간단한 정보 입력 후 검사를 시작합니다.",
  },
  {
    title: "문항 응답",
    description: "28개의 문항에 대해 솔직하게 응답합니다.",
  },
  {
    title: "결과 분석",
    description: "응답을 바탕으로 DISC 유형을 분석합니다.",
  },
  {
    title: "결과 확인",
    description: "상세한 분석 결과와 조언을 확인합니다.",
  },
]
