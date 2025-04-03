'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MapPin, Users, Lightbulb, Globe, Award, Check, UserCircle } from 'lucide-react'

export const metadata = {
  title: 'About WCLER 2025 | World Conference on Learning and Education Research',
  description: 'Join WCLER 2025, a premier global conference uniting 400+ education leaders, featuring 15+ workshops, 40+ speakers from 25+ countries, and innovative approaches to learning and education research.',
  keywords: [
    'WCLER 2025',
    'education research conference',
    'learning innovation',
    'education conference',
    'Jakarta conference',
    'education research',
    'teaching methodologies',
    'education professionals',
    'education workshops',
    'learning technology',
    'education innovation',
    'academic networking'
  ],
  openGraph: {
    title: 'About WCLER 2025 | Learning and Education Research Conference',
    description: 'Join 400+ global leaders at WCLER 2025 in Jakarta. Explore educational innovations, network with academic experts, and attend 15+ workshops on emerging trends.',
    url: 'https://www.wcler.org/about-conference',
    siteName: 'WCLER 2025',
    images: [
      {
        url: '/og-images/about-conference.jpg',
        width: 1200,
        height: 630,
        alt: 'WCLER 2025 Conference Overview'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About WCLER 2025 | Education Research Conference',
    description: 'Explore the future of learning and education at WCLER 2025 in Jakarta. Join 400+ leaders, 40+ speakers, and 15+ workshops.',
    images: ['/og-images/about-conference.jpg'],
  },
  alternates: {
    canonical: 'https://www.wcler.org/about-conference'
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'World Conference on Learning and Education Research 2025',
      description: 'A premier global conference bringing together educators, researchers, and innovators to explore the future of learning and education.',
      startDate: '2025-10-15',
      endDate: '2025-10-16',
      location: {
        '@type': 'Place',
        name: 'Jakarta',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Jakarta',
          addressCountry: 'Indonesia'
        }
      },
      organizer: {
        '@type': 'Organization',
        name: 'WCLER',
        url: 'https://www.wcler.com'
      },
      offers: {
        '@type': 'Offer',
        url: 'https://www.wcler.com/register',
        availability: 'https://schema.org/InStock'
      },
      keywords: [
        'Education Conference',
        'Learning Research',
        'Educational Innovation',
        'Teaching Methodology',
        'Education Technology'
      ],
      audience: {
        '@type': 'Audience',
        audienceType: [
          'Education Professionals',
          'Researchers',
          'Academics',
          'Policymakers',
          'Teachers',
          'Students'
        ]
      }
    })
  }
};

export default function ConferenceAboutSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut',
        staggerChildren: 0.1 
      } 
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const conferenceFeatures = [
    { icon: CalendarDays, text: "2-day research-focused event" },
    { icon: MapPin, text: "Located in Jakarta, Indonesia" },
    { icon: Users, text: "Network with 400+ education leaders" },
    { icon: Lightbulb, text: "Over 15+ innovative workshops" },
    { icon: Globe, text: "Speakers from more than 25 countries" },
    { icon: Award, text: "Excellence in Education Awards" },
  ]

  const whyAttendReasons = [
    "Research Excellence: Explore cutting-edge research and methodologies in education, learning technologies, and pedagogical approaches.",
    "Expert Insights: Learn from 40+ renowned speakers who are leading innovation in education and research methodologies.",
    "Global Networking: Connect with 400+ attendees, including researchers, educators, and education technology pioneers.",
    "Evidence-Based Practice: Discover the latest research findings and their practical applications in educational settings.",
    "Interactive Sessions: Engage in workshops, panel discussions, and collaborative research presentations.",
    "Digital Innovation: Explore how technology is transforming education and research practices in the modern era."
  ]

  const attendeeTypes = [
    {
      title: "Education Researchers",
      description: "Present your findings, collaborate with peers, and stay current with educational research trends."
    },
    {
      title: "Teachers & Educators",
      description: "Discover new teaching methodologies and evidence-based practices for improved learning outcomes."
    },
    {
      title: "Education Administrators",
      description: "Learn about innovative policies and strategies to enhance educational institutions."
    },
    {
      title: "Graduate Students",
      description: "Present research, gain valuable feedback, and network with established academics."
    },
    {
      title: "EdTech Innovators",
      description: "Showcase new technologies and connect with potential adopters and collaborators."
    },
    {
      title: "Education Policymakers",
      description: "Explore research-backed approaches to education policy and system improvement."
    }
  ]

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4 "
    >
      <div className="max-w-6xl mx-auto mt-12">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">About the Conference</Badge>
          <h1 className="text-4xl font-bold text-primary mb-4">World Conference on Learning and Education Research</h1>
          <h2 className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uniting global educators, researchers, and innovators to shape the future of education.
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center pb-12">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">About WCLER</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground px-12 text-justify">
                The World Conference on Learning and Education Research is a distinguished global gathering that brings together education researchers, practitioners, and innovators from around the world. This two-day event will explore groundbreaking research, emerging trends, and innovative approaches in education and learning. The conference serves as a vital platform for sharing research findings, discussing methodological advances, and fostering collaboration among education professionals.
              </p>
              <p className="text-muted-foreground px-12 text-justify mt-2">
                Participants will engage in research presentations, interactive workshops, and networking sessions designed to advance our understanding of learning and education. Whether you're a seasoned researcher, practicing educator, or emerging scholar, this conference offers valuable insights and connections to enhance your contribution to the field of education.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advancing educational excellence through research-driven innovation, fostering global collaboration, and promoting evidence-based practices that enhance learning outcomes across all educational contexts.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Conference Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
                  {conferenceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <feature.icon className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Why Attend WCLER 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {whyAttendReasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Who Can Attend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {attendeeTypes.map((type, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <UserCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary">{type.title}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardContent className="p-6">
              <CardDescription className="text-lg font-medium text-primary mb-2">
                Join us in shaping the future of education and learning.
              </CardDescription>
              <p className="text-muted-foreground">
                October 17th - 18th, 2025 • Jakarta, Indonesia
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}