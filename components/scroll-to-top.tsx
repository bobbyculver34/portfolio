"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full transition-all duration-300",
        "bg-background/95 backdrop-blur-md border-border/60",
        "shadow-[0_4px_12px_rgba(0,0,0,0.15)] shadow-black/10",
        "hover:bg-primary hover:text-primary-foreground hover:border-primary",
        "hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:shadow-primary/30",
        "active:scale-95 active:shadow-[0_2px_8px_rgba(0,0,0,0.2)]",
        "group",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ChevronUp 
        className="h-5 w-5 transition-transform duration-300 group-hover:animate-bounce drop-shadow-sm" 
      />
    </Button>
  )
} 