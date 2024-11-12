export interface Option {
  text: string
  trait: "D" | "I" | "S" | "C"
}

export interface Question {
  options: Option[]
}

const discTestData: Question[] = [
  {
    options: [
      { text: "절제하는", trait: "S" },
      { text: "강력한", trait: "D" },
      { text: "꼼꼼한", trait: "C" },
      { text: "표현력 있는", trait: "I" },
    ],
  },
  {
    options: [
      { text: "개척적인", trait: "D" },
      { text: "정확한", trait: "C" },
      { text: "흥미진진한", trait: "I" },
      { text: "만족스러운", trait: "S" },
    ],
  },
  {
    options: [
      { text: "기꺼이 하는", trait: "S" },
      { text: "활기 있는", trait: "I" },
      { text: "대담한", trait: "D" },
      { text: "정교한", trait: "C" },
    ],
  },
  {
    options: [
      { text: "논쟁을 좋아하는", trait: "D" },
      { text: "회의적인", trait: "C" },
      { text: "주저하는", trait: "S" },
      { text: "예측할 수 없는", trait: "I" },
    ],
  },
  {
    options: [
      { text: "공손한", trait: "C" },
      { text: "사교적인", trait: "I" },
      { text: "참을성이 있는", trait: "S" },
      { text: "무서움을 모르는", trait: "D" },
    ],
  },
  {
    options: [
      { text: "설득력 있는", trait: "I" },
      { text: "독립심이 강한", trait: "D" },
      { text: "논리적인", trait: "C" },
      { text: "온화한", trait: "S" },
    ],
  },
  {
    options: [
      { text: "신중한", trait: "C" },
      { text: "차분한", trait: "S" },
      { text: "과감한 결단력", trait: "D" },
      { text: "파티를 좋아하는", trait: "I" },
    ],
  },
  {
    options: [
      { text: "인기 있는", trait: "I" },
      { text: "고집이 있는", trait: "D" },
      { text: "완벽주의자", trait: "C" },
      { text: "인심 좋은", trait: "S" },
    ],
  },
  {
    options: [
      { text: "변화가 많은", trait: "I" },
      { text: "수줍음을 타는", trait: "C" },
      { text: "느긋한", trait: "S" },
      { text: "완고한", trait: "D" },
    ],
  },
  {
    options: [
      { text: "체계적인", trait: "C" },
      { text: "낙관적인", trait: "I" },
      { text: "의지가 강한", trait: "D" },
      { text: "친절한", trait: "S" },
    ],
  },
  {
    options: [
      { text: "엄격한", trait: "D" },
      { text: "겸손한", trait: "C" },
      { text: "상냥한", trait: "S" },
      { text: "말주변이 좋은", trait: "I" },
    ],
  },
  {
    options: [
      { text: "호의적인", trait: "S" },
      { text: "빈틈없는", trait: "C" },
      { text: "놀기 좋아하는", trait: "I" },
      { text: "의지가 강한", trait: "D" },
    ],
  },
  {
    options: [
      { text: "참신한", trait: "I" },
      { text: "모험적인", trait: "D" },
      { text: "절제된", trait: "C" },
      { text: "신중한", trait: "S" },
    ],
  },
  {
    options: [
      { text: "참는", trait: "C" },
      { text: "성실한", trait: "S" },
      { text: "공격적인", trait: "D" },
      { text: "매력 있는", trait: "I" },
    ],
  },
  {
    options: [
      { text: "열정적인", trait: "I" },
      { text: "분석적인", trait: "C" },
      { text: "동정심이 많은", trait: "S" },
      { text: "단호한", trait: "D" },
    ],
  },
  {
    options: [
      { text: "지도력 있는", trait: "D" },
      { text: "충동적인", trait: "I" },
      { text: "느린", trait: "S" },
      { text: "비판적인", trait: "C" },
    ],
  },
  {
    options: [
      { text: "일관성 있는", trait: "C" },
      { text: "영향력 있는", trait: "D" },
      { text: "생기 있는", trait: "I" },
      { text: "느긋한", trait: "S" },
    ],
  },
  {
    options: [
      { text: "유력한", trait: "I" },
      { text: "친절한", trait: "S" },
      { text: "독립적인", trait: "D" },
      { text: "정돈된", trait: "C" },
    ],
  },
  {
    options: [
      { text: "이상주의적인", trait: "C" },
      { text: "평판이 좋은", trait: "I" },
      { text: "쾌활한", trait: "S" },
      { text: "솔직한", trait: "D" },
    ],
  },
  {
    options: [
      { text: "참을성 없는", trait: "D" },
      { text: "진지한", trait: "C" },
      { text: "미루는", trait: "S" },
      { text: "감성적인", trait: "I" },
    ],
  },
  {
    options: [
      { text: "경쟁심이 있는", trait: "D" },
      { text: "자발적인", trait: "I" },
      { text: "충성스러운", trait: "S" },
      { text: "사려 깊은", trait: "C" },
    ],
  },
  {
    options: [
      { text: "희생적인", trait: "C" },
      { text: "이해심 많은", trait: "S" },
      { text: "설득력 있는", trait: "I" },
      { text: "용기 있는", trait: "D" },
    ],
  },
  {
    options: [
      { text: "의존적인", trait: "S" },
      { text: "변덕스러운", trait: "I" },
      { text: "절제력 있는", trait: "C" },
      { text: "밀어붙이는", trait: "D" },
    ],
  },
  {
    options: [
      { text: "표용력 있는", trait: "S" },
      { text: "전통적인", trait: "C" },
      { text: "사람을 부추기는", trait: "I" },
      { text: "이끌어가는", trait: "D" },
    ],
  },
]

export default discTestData
