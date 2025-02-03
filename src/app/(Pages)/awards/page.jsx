import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Users } from 'lucide-react'

export const metadata = {
  title: 'Awards WCLER 2025 | World Conference on Learning and Education Research',
  description: 'Learn about WCLER 2025, a premier conference uniting global experts in learning and education research. Join us in Jakarta, Indonesia for innovative research and networking.',
  keywords: [
    'WCLER 2025',
    'about WCLER',
    'education research conference',
    'learning innovation',
    'teaching methodology',
    'Indonesia conference 2025',
    'academic conference',
    'education research',
    'educational networking',
    'learning conference'
  ],
  openGraph: {
    title: 'About WCLER 2025 | World Conference on Learning and Education Research',
    description: 'Join leading experts at WCLER 2025 in Jakarta, Indonesia. Explore cutting-edge research in learning and education while networking with global innovators.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About WCLER 2025',
    description: 'Join leading experts at WCLER 2025 in Jakarta, Indonesia. Explore cutting-edge research in learning and education.',
  }
}

export default function AwardsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl mt-12">
      <h1 className="text-5xl mx-auto font-bold text-center mb-2 pb-2">
        Educational Excellence
      </h1>
      <p className="text-xl text-gray-500 mb-6 text-center drop-shadow-sm">
        in Learning and Education Research
      </p>
      <p className="text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
        At the World Conference on Learning and Education Research (WCLER), 
        we recognize outstanding contributions that advance our understanding of 
        learning and education. Our awards celebrate scholarly excellence and 
        innovative approaches that transform educational practices globally.
      </p>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <AwardCard
          icon={<Award className="w-10 h-10 text-purple-600" />}
          title="Excellence in Education Research"
          description="Recognizes exceptional research that demonstrates innovation in educational methodology, rigorous study design, and significant impact on learning outcomes."
          highlights={[
            "Celebrates groundbreaking educational research methodologies",
            "Honors work that bridges theory and classroom practice"
          ]}
        />

        <AwardCard
          icon={<BookOpen className="w-10 h-10 text-purple-600" />}
          title="Best Paper Award"
          description="Presented to research that exemplifies excellence in educational scholarship, analytical depth, and potential for improving teaching and learning practices."
          highlights={[
            "Recognizes outstanding contributions to education literature",
            "Rewards research with significant classroom applications"
          ]}
        />

        <AwardCard
          icon={<Users className="w-10 h-10 text-purple-600" />}
          title="Emerging Scholar Award"
          description="Celebrates rising educators and researchers who demonstrate exceptional promise in advancing educational theory and practice."
          highlights={[
            "Supports early-career education researchers",
            "Promotes innovative approaches to teaching and learning"
          ]}
        />
      </div>

      <Card className="bg-white shadow-lg">
        <CardHeader className="bg-gradient-to-br from-[#c967e1] to-[#d8a4b5] text-white rounded-md">
          <CardTitle className="text-2xl">Submit Your Research</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Present your educational research at WCLER and join a global community of 
            distinguished scholars and practitioners. Share your innovations in teaching 
            and learning, receive valuable feedback, and contribute to advancing 
            educational practices worldwide.
          </p>
          <p className=" leading-relaxed font-semibold text-center mt-6">
            Submit your paper for the World Conference on Learning and Education Research 
            and compete for these prestigious awards.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function AwardCard({ icon, title, description, highlights }) {
  return (
    <Card className="bg-white shadow-lg h-full flex flex-col">
      <CardHeader className="flex flex-col items-center pt-6 pb-2">
        {icon}
        <CardTitle className="text-xl text-center mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <Badge variant="outline" className="mr-2 mt-1 flex-shrink-0">•</Badge>
              <span className="text-gray-700 leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}