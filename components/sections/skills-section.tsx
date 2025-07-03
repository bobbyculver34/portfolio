import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "AI/ML Technologies",
    skills: [
      { name: "PyTorch", level: 95 },
      { name: "LangChain", level: 90 },
      { name: "LlamaIndex", level: 85 },
      { name: "Hugging Face", level: 88 },
      { name: "Large Language Models", level: 92 },
      { name: "NLP", level: 90 },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "R", level: 80 },
      { name: "SQL", level: 88 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "C/C++", level: 72 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Azure", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Docker", level: 85 },
      { name: "MLOps", level: 88 },
      { name: "Apache Spark", level: 82 },
    ],
  },
  {
    title: "Specialized Skills",
    skills: [
      { name: "RAG Pipelines", level: 92 },
      { name: "Multi-Agent Systems", level: 88 },
      { name: "Clinical AI", level: 90 },
      { name: "Genomic Analysis", level: 85 },
      { name: "A/B Testing", level: 80 },
      { name: "Bayesian Optimization", level: 78 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50 scroll-mt-17">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent AI/ML systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="h-full skills-card transition-all duration-300"
              role="region"
              aria-labelledby={`skill-category-${index}`}
            >
              <CardHeader>
                <CardTitle id={`skill-category-${index}`} className="text-xl text-primary flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true"></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="space-y-2"
                    role="group"
                    aria-labelledby={`skill-${index}-${skillIndex}`}
                  >
                    <div className="flex justify-between items-center">
                      <span id={`skill-${index}-${skillIndex}`} className="text-sm font-medium">
                        {skill.name}
                      </span>
                      <span
                        className="text-xs text-primary font-semibold"
                        aria-label={`Proficiency level: ${skill.level} percent`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress
                        value={skill.level}
                        className="h-2 bg-muted"
                        aria-labelledby={`skill-${index}-${skillIndex}`}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuetext={`${skill.level} percent proficiency in ${skill.name}`}
                        role="progressbar"
                        style={
                          {
                            "--progress-background":
                              "linear-gradient(90deg, hsl(271 81% 56%) 0%, hsl(280 100% 70%) 100%)",
                          } as React.CSSProperties
                        }
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
