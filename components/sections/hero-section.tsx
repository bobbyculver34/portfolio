import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-17 hero-gradient-bg relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-transparent before:border-t-[100px] before:border-t-transparent before:border-l-[100px] before:border-l-background/10 before:border-r-[100px] before:border-r-transparent before:border-b-[100px] before:border-b-background/10 before:pointer-events-none after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 after:border-t-[150px] after:border-t-transparent after:border-l-[150px] after:border-l-background/5 after:pointer-events-none">
      <div className="w-full max-w-7xl mx-auto bg-card/50 backdrop-blur-sm rounded-3xl border border-border/20 shadow-2xl p-8 sm:p-12 lg:p-16">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fadeInLeft">
              <div className="mb-6">
                <p className="text-primary font-medium mb-2 animate-fadeInUp">👋 Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fadeInUp animate-delay-100">
                  Gregory Jones Mazda
                </h1>
                <h2 className="text-2xl sm:text-3xl text-muted-foreground mb-6 animate-fadeInUp animate-delay-200">
                  Senior AI/ML Engineer
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg animate-fadeInUp animate-delay-300">
                  Specialized in AI-driven healthcare solutions, machine learning systems, and large language models.
                  Building intelligent systems that transform how we interact with data and technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fadeInUp animate-delay-400">
                <Button
                  size="lg"
                  asChild
                  className="hover:scale-105 transition-transform purple-gradient text-white border-0 high-contrast:bg-primary high-contrast:text-primary-foreground high-contrast:border-2 high-contrast:border-primary"
                >
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="hover:scale-105 transition-transform bg-transparent border-primary hover:bg-primary hover:text-white high-contrast:border-2 high-contrast:border-primary high-contrast:bg-background high-contrast:text-foreground high-contrast:hover:bg-primary high-contrast:hover:text-primary-foreground"
                >
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 animate-fadeInUp animate-delay-400">
                <Link
                  href="https://github.com"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110 high-contrast:text-foreground high-contrast:hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
                  aria-label="Visit Gregory Jones' GitHub profile to view code repositories and open source contributions"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub Profile</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110 high-contrast:text-foreground high-contrast:hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
                  aria-label="Connect with Gregory Jones on LinkedIn for professional networking"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn Profile</span>
                </Link>
                <Link
                  href="mailto:jonesgregory.winter@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110 high-contrast:text-foreground high-contrast:hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
                  aria-label="Send an email to Gregory Jones at jonesgregory.winter@gmail.com"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email Contact</span>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-fadeInRight">
              <div className="relative">
                <div
                  className="w-80 h-80 purple-gradient-subtle rounded-full flex items-center justify-center animate-float p-4 high-contrast:bg-muted high-contrast:border-2 high-contrast:border-border"
                  role="img"
                  aria-label="Professional profile photo of Gregory Jones"
                >
                  <div className="w-64 h-64 rounded-full overflow-hidden animate-scaleIn border-4 border-primary/20 shadow-2xl high-contrast:border-primary high-contrast:border-2">
                    <Image
                      src="/images/jacob-s.jfif"
                      alt="Gregory Jones, Senior AI/ML Engineer, professional headshot showing a smiling man with a beard wearing a dark business suit jacket against a softly lit background"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2G7Qjm0/8AkBOmvKoA5PT4/wByBezwCNNKjmhnyVvqvlqUjHzw=="
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
