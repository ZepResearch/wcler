import { Check, BookOpen, Users, Lightbulb, GraduationCap, Globe, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full ">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex justify-center  gap-4 py-20 flex-col items-center">
          {/* <div>
            <Badge>Objectives</Badge>
          </div> */}
            <h2 className="text-4xl md:text-5xl tracking-tighter  text-center">Conference Objectives</h2>
          <div className="flex gap-2  justify-center flex-col">
            <p className="text-lg max-w-3xl lg:max-w-5xl leading-relaxed tracking-tight text-muted-foreground">
              The World Conference on Learning and Education Research aims to advance global understanding and
              innovation in education.
            </p>
          </div>
          <div className="flex gap-10 pt-7 flex-col w-full">
            <div className="grid grid-cols-1 items-start lg:grid-cols-3 gap-x-10 gap-y-12">
              <div className="flex flex-row gap-6 w-full items-start">
                <BookOpen className="w-6 h-6 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Knowledge Exchange</p>
                  <p className="text-muted-foreground text-sm">
                    Facilitate the exchange of cutting-edge research and best practices in learning and education.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Users className="w-6 h-6 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Interdisciplinary Collaboration</p>
                  <p className="text-muted-foreground text-sm">
                    Foster collaboration across diverse disciplines to address complex educational challenges.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Lightbulb className="w-6 h-6 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Innovation Showcase</p>
                  <p className="text-muted-foreground text-sm">
                    Showcase innovative teaching methods, technologies, and research methodologies in education.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <GraduationCap className="w-6 h-6 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Policy Impact</p>
                  <p className="text-muted-foreground text-sm">
                    Influence education policy by bridging research findings with practical implications.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Globe className="w-6 h-6 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Global Networking</p>
                  <p className="text-muted-foreground text-sm">
                    Create networking opportunities for educators, researchers, and policymakers from around the world.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <TrendingUp className="w-6 h-6 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Future-Focused Insights</p>
                  <p className="text-muted-foreground text-sm">
                    Explore emerging trends and future directions in learning and education research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }

