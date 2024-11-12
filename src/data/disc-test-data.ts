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
      { text: "결단력 있는", trait: "D" },
      { text: "사교적인", trait: "I" },
      { text: "안정적인", trait: "S" },
      { text: "체계적인", trait: "C" },
    ],
  },
  {
    options: [
      { text: "주도적인", trait: "D" },
      { text: "설득력 있는", trait: "I" },
      { text: "협력적인", trait: "S" },
      { text: "분석적인", trait: "C" },
    ],
  },
  {
    options: [
      { text: "모험적인", trait: "D" },
      { text: "활기찬", trait: "I" },
      { text: "인내심 있는", trait: "S" },
      { text: "정확한", trait: "C" },
    ],
  },
  {
    options: [
      { text: "독립적인", trait: "D" },
      { text: "창의적인", trait: "I" },
      { text: "신뢰할 수 있는", trait: "S" },
      { text: "논리적인", trait: "C" },
    ],
  },
  {
    options: [
      { text: "목표 지향적인", trait: "D" },
      { text: "낙천적인", trait: "I" },
      { text: "친절한", trait: "S" },
      { text: "세심한", trait: "C" },
    ],
  },
  {
    options: [
      { text: "경쟁적인", trait: "D" },
      { text: "매력적인", trait: "I" },
      { text: "배려하는", trait: "S" },
      { text: "신중한", trait: "C" },
    ],
  },
  {
    options: [
      { text: "도전적인", trait: "D" },
      { text: "표현력 있는", trait: "I" },
      { text: "차분한", trait: "S" },
      { text: "치밀한", trait: "C" },
    ],
  },
  {
    options: [
      { text: "강력한", trait: "D" },
      { text: "열정적인", trait: "I" },
      { text: "헌신적인", trait: "S" },
      { text: "조직적인", trait: "C" },
    ],
  },
  {
    options: [
      { text: "적극적인", trait: "D" },
      { text: "영향력 있는", trait: "I" },
      { text: "온화한", trait: "S" },
      { text: "완벽주의적인", trait: "C" },
    ],
  },
  {
    options: [
      { text: "추진력 있는", trait: "D" },
      { text: "즐거운", trait: "I" },
      { text: "평화로운", trait: "S" },
      { text: "계획적인", trait: "C" },
    ],
  },
  {
    options: [
      { text: "지배적인", trait: "D" },
      { text: "낙관적인", trait: "I" },
      { text: "충실한", trait: "S" },
      { text: "규칙적인", trait: "C" },
    ],
  },
  {
    options: [
      { text: "성과 중심적인", trait: "D" },
      { text: "사람 중심적인", trait: "I" },
      { text: "일관된", trait: "S" },
      { text: "질서정연한", trait: "C" },
    ],
  },
  {
    options: [
      { text: "단호한", trait: "D" },
      { text: "재미있는", trait: "I" },
      { text: "믿음직한", trait: "S" },
      { text: "정교한", trait: "C" },
    ],
  },
  {
    options: [
      { text: "통제력 있는", trait: "D" },
      { text: "자유분방한", trait: "I" },
      { text: "충성스러운", trait: "S" },
      { text: "방법론적인", trait: "C" },
    ],
  },
  {
    options: [
      { text: "권위적인", trait: "D" },
      { text: "표현적인", trait: "I" },
      { text: "지원적인", trait: "S" },
      { text: "객관적인", trait: "C" },
    ],
  },
  {
    options: [
      { text: "성취 지향적인", trait: "D" },
      { text: "격려하는", trait: "I" },
      { text: "조화로운", trait: "S" },
      { text: "철저한", trait: "C" },
    ],
  },
  {
    options: [
      { text: "직설적인", trait: "D" },
      { text: "긍정적인", trait: "I" },
      { text: "참을성 있는", trait: "S" },
      { text: "정밀한", trait: "C" },
    ],
  },
  {
    options: [
      { text: "리더십 있는", trait: "D" },
      { text: "친근한", trait: "I" },
      { text: "수용적인", trait: "S" },
      { text: "체계화하는", trait: "C" },
    ],
  },
  {
    options: [
      { text: "야망 있는", trait: "D" },
      { text: "감정표현이 풍부한", trait: "I" },
      { text: "신중한", trait: "S" },
      { text: "원칙적인", trait: "C" },
    ],
  },
  {
    options: [
      { text: "결과 지향적인", trait: "D" },
      { text: "사람들과 어울리는", trait: "I" },
      { text: "균형 잡힌", trait: "S" },
      { text: "분석적인", trait: "C" },
    ],
  },
]

export default discTestData
