export interface Option {
  text: string
  trait: "D" | "I" | "S" | "C"
}

export interface Question {
  question: string
  options: Option[]
}

const discTestData: Question[] = [
  {
    question: "팀 프로젝트에서 나는 보통 어떻게 행동하나요?",
    options: [
      { text: "주도적으로 이끌고 방향을 제시한다.", trait: "D" },
      { text: "팀원들을 격려하고 분위기를 띄운다.", trait: "I" },
      { text: "조용히 지원하고 협력한다.", trait: "S" },
      { text: "세부사항을 꼼꼼히 체크하고 정리한다.", trait: "C" },
    ],
  },
  {
    question: "결정을 내릴 때 나는 어떻게 하나요?",
    options: [
      { text: "빠르고 단호하게 결정한다.", trait: "D" },
      { text: "다른 사람들의 의견을 듣고 고려한다.", trait: "I" },
      { text: "모두의 합의를 구하고자 한다.", trait: "S" },
      { text: "모든 정보를 분석한 후 신중하게 결정한다.", trait: "C" },
    ],
  },
  {
    question: "스트레스를 받을 때 나는 어떻게 반응하나요?",
    options: [
      { text: "더 강하게 밀어붙인다.", trait: "D" },
      { text: "사교 활동으로 스트레스를 푼다.", trait: "I" },
      { text: "내성적으로 되고 조용해진다.", trait: "S" },
      { text: "세부사항에 집착하며 완벽을 추구한다.", trait: "C" },
    ],
  },
  {
    question: "새로운 아이디어가 떠올랐을 때 나는 어떻게 하나요?",
    options: [
      { text: "즉시 실행에 옮긴다.", trait: "D" },
      { text: "주변 사람들과 아이디어를 공유한다.", trait: "I" },
      { text: "아이디어의 안정성과 실용성을 검토한다.", trait: "S" },
      { text: "철저한 조사와 분석을 통해 검증한다.", trait: "C" },
    ],
  },
  {
    question: "시간 압박이 있을 때 나는 어떻게 대처하나요?",
    options: [
      { text: "빠르게 결정을 내리고 진행한다.", trait: "D" },
      { text: "팀원들과 상의하여 해결책을 찾는다.", trait: "I" },
      { text: "일정에 맞추기 위해 추가 시간을 확보한다.", trait: "S" },
      { text: "우선순위를 재조정하고 계획을 수정한다.", trait: "C" },
    ],
  },
  {
    question: "갈등 상황에서 나는 어떻게 반응하나요?",
    options: [
      { text: "직접적으로 문제를 제기하고 해결한다.", trait: "D" },
      { text: "중재자가 되어 모두를 조율한다.", trait: "I" },
      { text: "갈등을 피하고 조용히 상황을 지켜본다.", trait: "S" },
      { text: "사실과 근거를 토대로 논의한다.", trait: "C" },
    ],
  },
  {
    question: "변화가 있을 때 나는 어떻게 대처하나요?",
    options: [
      { text: "변화를 주도하고 앞장선다.", trait: "D" },
      { text: "변화를 긍정적으로 받아들이고 주변에 알린다.", trait: "I" },
      { text: "변화에 시간을 가지고 적응한다.", trait: "S" },
      { text: "변화의 영향과 세부사항을 분석한다.", trait: "C" },
    ],
  },
  {
    question: "의사소통할 때 나는 어떤 방식을 선호하나요?",
    options: [
      { text: "명확하고 직접적인 소통을 선호한다.", trait: "D" },
      { text: "개인적인 이야기와 감정을 공유한다.", trait: "I" },
      { text: "경청하고 공감하며 소통한다.", trait: "S" },
      { text: "객관적이고 사실에 기반한 소통을 한다.", trait: "C" },
    ],
  },
  {
    question: "목표를 설정할 때 나는 어떻게 하나요?",
    options: [
      { text: "도전적인 목표를 설정하고 추진한다.", trait: "D" },
      { text: "동기부여가 되는 목표를 공유한다.", trait: "I" },
      { text: "실현 가능하고 안정적인 목표를 설정한다.", trait: "S" },
      { text: "구체적이고 측정 가능한 목표를 세운다.", trait: "C" },
    ],
  },
  {
    question: "위험을 감수해야 할 때 나는 어떻게 하나요?",
    options: [
      { text: "과감하게 위험을 감수한다.", trait: "D" },
      { text: "사람들의 지지를 얻어 위험을 감수한다.", trait: "I" },
      { text: "위험을 최소화하기 위해 신중하게 접근한다.", trait: "S" },
      { text: "위험 요소를 분석하고 대비책을 마련한다.", trait: "C" },
    ],
  },
  {
    question: "팀 내에서의 역할은 무엇인가요?",
    options: [
      { text: "리더로서 팀을 이끈다.", trait: "D" },
      { text: "팀의 분위기를 활성화한다.", trait: "I" },
      { text: "팀원들을 지원하고 조화롭게 만든다.", trait: "S" },
      { text: "팀의 계획과 프로세스를 관리한다.", trait: "C" },
    ],
  },
  {
    question: "실수를 했을 때 나는 어떻게 반응하나요?",
    options: [
      { text: "즉시 인정하고 해결책을 찾는다.", trait: "D" },
      { text: "주변에 상황을 설명하고 이해를 구한다.", trait: "I" },
      { text: "조용히 반성하고 재발 방지를 노력한다.", trait: "S" },
      { text: "실수의 원인을 분석하고 문서화한다.", trait: "C" },
    ],
  },
  {
    question: "일할 때 가장 중요하게 생각하는 것은?",
    options: [
      { text: "성과와 결과를 내는 것", trait: "D" },
      { text: "사람들과의 관계와 협력", trait: "I" },
      { text: "안정성과 팀워크", trait: "S" },
      { text: "정확성과 품질", trait: "C" },
    ],
  },
  {
    question: "정보를 처리할 때 나는 어떻게 하나요?",
    options: [
      { text: "핵심만 빠르게 파악한다.", trait: "D" },
      { text: "다른 사람들과 공유하며 이해한다.", trait: "I" },
      { text: "차분하게 전체를 이해하려 한다.", trait: "S" },
      { text: "세부사항까지 꼼꼼히 검토한다.", trait: "C" },
    ],
  },
  {
    question: "피드백을 받을 때 나는 어떻게 반응하나요?",
    options: [
      { text: "개선점을 바로 적용한다.", trait: "D" },
      { text: "긍정적인 부분에 집중한다.", trait: "I" },
      { text: "겸손하게 받아들이고 노력한다.", trait: "S" },
      { text: "구체적인 피드백을 요청한다.", trait: "C" },
    ],
  },
  {
    question: "내가 가장 두려워하는 것은?",
    options: [
      { text: "통제력을 잃는 것", trait: "D" },
      { text: "인정받지 못하는 것", trait: "I" },
      { text: "갈등이 발생하는 것", trait: "S" },
      { text: "실수하거나 틀리는 것", trait: "C" },
    ],
  },
  {
    question: "동기부여가 될 때는 어떤 상황인가요?",
    options: [
      { text: "도전적인 목표가 있을 때", trait: "D" },
      { text: "주변의 인정과 칭찬을 받을 때", trait: "I" },
      { text: "안정적인 환경에서 일할 때", trait: "S" },
      { text: "명확한 지침과 기대치가 있을 때", trait: "C" },
    ],
  },
  {
    question: "문제를 해결할 때 나는 어떤 접근을 하나요?",
    options: [
      { text: "신속하게 결정을 내린다.", trait: "D" },
      { text: "브레인스토밍으로 아이디어를 모은다.", trait: "I" },
      { text: "팀원들과 협력하여 해결한다.", trait: "S" },
      { text: "자료를 수집하고 분석하여 해결한다.", trait: "C" },
    ],
  },
  {
    question: "스트레스를 관리하는 나만의 방법은?",
    options: [
      { text: "운동이나 활동적인 취미를 즐긴다.", trait: "D" },
      { text: "친구들과 시간을 보낸다.", trait: "I" },
      { text: "휴식과 명상을 통해 안정한다.", trait: "S" },
      { text: "책이나 자료를 읽으며 지식을 쌓는다.", trait: "C" },
    ],
  },
  {
    question: "팀원이 실수했을 때 나는 어떻게 하나요?",
    options: [
      { text: "즉시 지적하고 수정한다.", trait: "D" },
      { text: "격려하고 다시 시도하도록 한다.", trait: "I" },
      { text: "조용히 도와주며 개선을 유도한다.", trait: "S" },
      { text: "실수의 원인을 분석하고 피드백한다.", trait: "C" },
    ],
  },
]

export default discTestData
