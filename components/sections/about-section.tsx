import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-17" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeInLeft">
            <div className="w-full h-96 bg-muted rounded-lg mb-6 overflow-hidden hover:scale-105 transition-transform duration-300 relative shadow-xl">
              <Image
                src="/images/jacob.jpg"
                alt="Gregory Jones in a professional office setting, wearing glasses and a dark polo shirt, smiling warmly at the camera with a modern office environment in the background"
                fill
                className="object-cover"
                crossOrigin="anonymous"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2G7Qjm0/8AkBOmvKoA5PT4/wByBezwCNNKjmhnyVvqvlqUjHzw=="
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
          </div>

          <div className="space-y-6 animate-fadeInRight">
            <p className="text-lg leading-relaxed animate-fadeInUp">
              I'm a Senior AI/ML Engineer with over 8 years of experience building intelligent systems across
              healthcare, e-commerce, and enterprise solutions. Currently at Natera, I design AI-driven clinical
              decision support systems using large language models to assist healthcare professionals in genetic testing
              interpretation.
            </p>

            <p className="text-lg leading-relaxed animate-fadeInUp animate-delay-100">
              My expertise spans from developing RAG pipelines with LangChain to implementing multi-agent AI workflows.
              I'm passionate about creating AI solutions that have real-world impact, particularly in healthcare and
              data-driven decision making.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card
                className="hover:scale-105 transition-transform duration-300 animate-scaleIn"
                role="region"
                aria-label="Years of experience statistic"
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1" aria-label="8 plus">
                    8+
                  </div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card
                className="hover:scale-105 transition-transform duration-300 animate-scaleIn animate-delay-100"
                role="region"
                aria-label="AI models deployed statistic"
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1" aria-label="100 plus">
                    100+
                  </div>
                  <div className="text-sm text-muted-foreground">AI Models Deployed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
