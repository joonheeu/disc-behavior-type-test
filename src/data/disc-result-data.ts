export interface DiscResult {
  type: "D" | "I" | "S" | "C"
  title: string
  description: string
  strengths: string[]
  weaknesses: string[]
  workStyle: {
    title: string
    points: string[]
  }
  communication: {
    title: string
    points: string[]
  }
  improvement: string[]
}

export const discResultData: Record<"D" | "I" | "S" | "C", DiscResult> = {
  D: {
    type: "D",
    title: "주도형 (Dominance)",
    description:
      "목표 지향적이며 결과를 중시하는 유형입니다. 도전적이고 진취적인 성향을 가지고 있으며, 빠른 의사결정과 행동력이 특징입니다.",
    strengths: [
      "강한 추진력과 결단력",
      "목표 지향적인 사고",
      "리더십과 영향력",
      "빠른 의사결정",
      "도전정신",
    ],
    weaknesses: [
      "타인의 감정을 간과할 수 있음",
      "인내심 부족",
      "지나친 독단적 결정",
      "세부사항 놓침",
    ],
    workStyle: {
      title: "업무 스타일",
      points: [
        "결과 중심적 업무 처리",
        "도전적인 목표 설정",
        "빠른 의사결정과 실행",
        "직접적인 의사소통",
        "권한과 책임 중시",
      ],
    },
    communication: {
      title: "의사소통 방식",
      points: [
        "직접적이고 명확한 소통",
        "핵심 위주의 대화",
        "결과 중심적 논의",
        "빠른 피드백 선호",
      ],
    },
    improvement: [
      "타인의 감정에 더 주의를 기울이기",
      "인내심 기르기",
      "세부사항에 대한 관심 높이기",
      "팀원들의 의견 경청하기",
    ],
  },
  I: {
    type: "I",
    title: "사교형 (Influence)",
    description:
      "사람과의 관계를 중시하며 열정적이고 낙관적인 성향을 가진 유형입니다. 의사소통 능력이 뛰어나며 사교적인 특징을 보입니다.",
    strengths: [
      "뛰어난 의사소통 능력",
      "긍정적이고 열정적인 태도",
      "창의적인 문제해결",
      "네트워킹 능력",
      "높은 적응력",
    ],
    weaknesses: [
      "감정적 의사결정",
      "시간 관리 부족",
      "세부사항 놓침",
      "일관성 부족",
    ],
    workStyle: {
      title: "업무 스타일",
      points: [
        "관계 중심적 업��� 처리",
        "창의적인 아이디어 제시",
        "유연한 업무 대처",
        "팀 분위기 향상",
        "적극적인 의견 개진",
      ],
    },
    communication: {
      title: "의사소통 방식",
      points: [
        "친근하고 개방적인 소통",
        "감정과 경험 공유",
        "적극적인 경청",
        "긍정적인 피드백",
      ],
    },
    improvement: [
      "감정적 판단 조절하기",
      "시간 관리 능력 향상",
      "체계적인 업무 처리",
      "약속과 책임 준수하기",
    ],
  },
  S: {
    type: "S",
    title: "안정형 (Steadiness)",
    description:
      "안정성과 협력을 중시하는 유형입니다. 신중하고 인내심이 강하며, 팀워크와 조화를 중요시합니다.",
    strengths: [
      "뛰어난 팀워크",
      "높은 신뢰성",
      "인내심과 성실성",
      "경청 능력",
      "안정적인 업무 처리",
    ],
    weaknesses: [
      "변화에 대한 저항",
      "우유부단함",
      "거절하기 어려움",
      "과도한 신중함",
    ],
    workStyle: {
      title: "업무 스타일",
      points: [
        "안정적이고 일관된 업무 처리",
        "체계적인 접근",
        "신중한 의사결정",
        "협력적 업무 수행",
        "꾸준한 노력",
      ],
    },
    communication: {
      title: "의사소통 방식",
      points: [
        "차분하고 신중한 소통",
        "경청과 공감",
        "비공격적 표현",
        "일관된 메시지",
      ],
    },
    improvement: [
      "변화에 대한 적응력 키우기",
      "의사결정 속도 높이기",
      "자신의 의견 적극 표현하기",
      "새로운 도전 시도하기",
    ],
  },
  C: {
    type: "C",
    title: "신중형 (Conscientiousness)",
    description:
      "정확성과 분석을 중시하는 유형입니다. 논리적이고 체계적인 사고를 하며, 완벽주의적 성향을 보입니다.",
    strengths: [
      "뛰어난 분석력",
      "높은 정확성",
      "체계적인 사고",
      "문제해결 능력",
      "품질 중시",
    ],
    weaknesses: [
      "과도한 완벽주의",
      "느린 의사결정",
      "비판적 성향",
      "융통성 부족",
    ],
    workStyle: {
      title: "업무 스타일",
      points: [
        "철저한 분석과 검토",
        "체계적인 업무 처리",
        "높은 품질 기준",
        "문서화와 기록 중시",
        "규칙과 절차 준수",
      ],
    },
    communication: {
      title: "의사소통 방식",
      points: [
        "논리적이고 체계적인 소통",
        "사실 기반 대화",
        "정확한 정보 전달",
        "객관적 피드백",
      ],
    },
    improvement: [
      "유연성 키우기",
      "의사결정 속도 높이기",
      "감정적 교류 늘리기",
      "완벽주의 조절하기",
    ],
  },
}
