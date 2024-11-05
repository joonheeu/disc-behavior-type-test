import "@/styles/globals.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DISC 행동 유형 검사",
  description: "UDIT에서 제공하는 DISC 행동 유형 검사 서비스입니다.",
  openGraph: {
    title: "DISC 행동 유형 검사",
    description: "UDIT에서 제공하는 DISC 행동 유형 검사 서비스입니다.",
    images: [
      {
        url: "/disc-og.png",
        width: 800,
        height: 600,
        alt: "DISC 행동 유형 검사",
      },
    ],
    siteName: "UDIT",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
