import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "AI Clinical Decision Support System",
    description:
      "Designed AI-driven system using LLMs to assist healthcare professionals in interpreting genetic testing results, improving diagnostic accuracy by 35%.",
    image: "/images/ai.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA",
    technologies: ["LangChain", "LlamaIndex", "PyTorch", "AWS", "RAG"],
    liveUrl: "https://natera.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Multi-Agent AI Workflow System",
    description:
      "Built specialized AI agents for genetic data analysis, clinical report generation, and regulatory compliance using LangGraph and LangChain.",
    image: "/images/agent.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA",
    technologies: ["LangGraph", "Multi-Agent Systems", "Python", "Healthcare AI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "GRC Automation Platform",
    description:
      "Developed AI-driven automation for Governance, Risk & Compliance workflows, reducing manual effort by 40% through intelligent data processing.",
    image: "/images/grc.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA",
    technologies: ["NLP", "Anomaly Detection", "Python", "Enterprise AI"],
    liveUrl: "https://onspring.com",
    githubUrl: "https://github.com",
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-17">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my AI/ML expertise and real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`project-card overflow-hidden group relative ${project.featured ? "featured-project" : ""}`}
              role="article"
              aria-labelledby={`project-title-${index}`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground" aria-label="Featured project">
                    Featured
                  </Badge>
                </div>
              )}

              <div
                className="aspect-video relative overflow-hidden bg-muted"
                role="img"
                aria-labelledby={`project-image-${index}`}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`Screenshot of ${project.title}: ${project.description.substring(0, 100)}...`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  crossOrigin="anonymous"
                  placeholder="blur"
                  blurDataURL={project.blurDataURL}
                  loading={index < 2 ? "eager" : "lazy"}
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                />
                <span id={`project-image-${index}`} className="sr-only">
                  Project screenshot showing the user interface and key features of {project.title}
                </span>
              </div>

              <CardHeader className="relative">
                <CardTitle
                  id={`project-title-${index}`}
                  className="text-xl group-hover:text-primary transition-colors duration-300"
                >
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2" role="list" aria-label={`Technologies used in ${project.title}`}>
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      role="listitem"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2 pt-4">
                <Button size="sm" asChild className="flex-1 hover:shadow-lg transition-all duration-300">
                  <Link href={project.liveUrl} aria-label={`View live demo of ${project.title} project`}>
                    <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                    Live Demo
                  </Link>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                >
                  <Link href={project.githubUrl} aria-label={`View source code for ${project.title} on GitHub`}>
                    <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
