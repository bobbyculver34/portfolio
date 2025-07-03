"use client"
import { Moon, Sun, Contrast } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

const themes = [
  { name: "light", icon: Sun, label: "Light mode" },
  { name: "dark", icon: Moon, label: "Dark mode" },
  { name: "high-contrast", icon: Contrast, label: "High contrast mode" },
]

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const handleToggle = () => {
    const currentIndex = themes.findIndex((t) => t.name === theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex].name)
  }

  const currentTheme = themes.find((t) => t.name === theme) || themes[0]
  const CurrentIcon = currentTheme.icon
  const nextTheme = themes[(themes.findIndex((t) => t.name === theme) + 1) % themes.length]

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 hover:bg-primary/10 hover:text-primary transition-all duration-300"
      onClick={handleToggle}
      title={`Switch to ${nextTheme.label}`}
      aria-label={`Current theme: ${currentTheme.label}. Click to switch to ${nextTheme.label}`}
    >
      <CurrentIcon className="h-[1.2rem] w-[1.2rem] transition-all duration-300 rotate-0 scale-100" />
      <span className="sr-only">Toggle theme - Current: {currentTheme.label}</span>
    </Button>
  )
}
