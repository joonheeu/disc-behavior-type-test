"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="flex justify-between items-center mx-auto p-4 container">
        <Link href="/">
          <span className="font-bold text-xl">DISC TEST</span>
        </Link>
        <div className="flex items-center space-x-2">
          <span className="text-sm">다크 모드</span>
          <Switch checked={theme === "dark"} onCheckedChange={handleToggle} />
        </div>
      </div>
    </header>
  )
}

export default Header
