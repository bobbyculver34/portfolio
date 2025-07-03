import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior AI/ML Engineer",
    company: "Natera",
    period: "Nov 2023 - Present",
    description:
      "Design AI-driven clinical decision support systems using LLMs for genetic testing interpretation. Implement RAG pipelines and multi-agent workflows for healthcare applications.",
    technologies: ["LangChain", "LlamaIndex", "PyTorch", "AWS", "Healthcare AI"],
  },
  {
    title: "ML Engineer",
    company: "Onspring",
    period: "Jun 2021 - Oct 2023",
    description:
      "Developed AI-driven automation for GRC workflows, built NLP models for risk assessment, and created anomaly detection algorithms for compliance monitoring.",
    technologies: ["NLP", "Anomaly Detection", "Python", "Cloud Infrastructure"],
  },
  {
    title: "AI Software Engineer",
    company: "Bloomreach",
    period: "Mar 2015 - May 2021",
    description:
      "Built and deployed ML models for recommender systems using matrix factorization, RNNs, and LSTMs. Implemented Bayesian optimization and A/B testing frameworks.",
    technologies: ["PyTorch", "XGBoost", "Apache Spark", "Azure ML", "Kubernetes"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50 scroll-mt-17">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{experience.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {experience.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
