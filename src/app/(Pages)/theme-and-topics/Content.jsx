'use client'

import { useEffect, useRef,useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, FileText, UserPlus, BirdIcon, File } from 'lucide-react'
import Link from 'next/link'
import PocketBase from 'pocketbase'


export default function ThemeAndTopics() {
  const [dates, setDates] = useState([])
  const [loading, setLoading] = useState(true)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const pb = new PocketBase('https://wcler.pockethost.io')
        const records = await pb.collection('dates').getFullList({
          sort: '-created',
        
        })
        setDates(records)
      } catch (error) {
        console.error('Error fetching dates:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDates()
  }, [])

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

  const topics = [
    {
      title: "Educational Innovation & Technology",
      content: [
        "Artificial Intelligence in education",
        "Virtual and augmented reality learning",
        "Adaptive learning technologies",
        "Mobile learning solutions",
        "Learning analytics and data-driven education"
      ]
    },
    {
      title: "Teaching Methodologies",
      content: [
        "Student-centered learning approaches",
        "Project-based learning strategies",
        "Blended learning implementation",
        "Flipped classroom techniques",
        "Collaborative learning frameworks"
      ]
    },
    {
      title: "Assessment & Evaluation",
      content: [
        "Innovative assessment methods",
        "Performance measurement techniques",
        "Formative assessment strategies",
        "Digital assessment tools",
        "Learning outcome evaluation"
      ]
    },
    {
      title: "Inclusive Education",
      content: [
        "Special education strategies",
        "Cultural diversity in learning",
        "Accessibility in education",
        "Differentiated instruction methods",
        "Supporting diverse learning needs"
      ]
    },
    {
      title: "Educational Psychology & Development",
      content: [
        "Cognitive development research",
        "Social-emotional learning",
        "Student motivation studies",
        "Learning behavior analysis",
        "Mental health in education"
      ]
    },
    {
      title: "Education Policy & Leadership",
      content: [
        "Educational policy research",
        "School leadership strategies",
        "Quality assurance in education",
        "Educational reform studies",
        "International education systems"
      ]
    },
    {
      title: "Research Methodology",
      content: [
        "Educational research methods",
        "Data collection in education",
        "Research design approaches",
        "Statistical analysis techniques",
        "Qualitative research in education"
      ]
    },
    {
      title: "Future of Education",
      content: [
        "Post-pandemic education trends",
        "Emerging learning technologies",
        "Sustainable education practices",
        "Global education challenges",
        "Future skills development"
      ]
    }
  ]
  const getIconForEventType = (eventType) => {
    switch (eventType) {
      case 'early bird':
        return <BirdIcon className="h-6 w-6" />
      case 'abstract':
        return <UserPlus className="h-6 w-6" />
      case 'full paper':
        return <File className="h-6 w-6" />
      case 'registration':
        return <Calendar className="h-6 w-6" />
      default:
        return <Calendar className="h-6 w-6" />
    }
  }
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 mt-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">Conference Themes</Badge>
          <h1 className="text-4xl font-bold text-primary mb-4">Making Learning and Education Research Better for Everyone</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us to discover new ways to make Learning and Education Research more sustainable.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-purple-500 via-red-400  to-orange-400 text-primary-foreground p-6">
              <CardTitle className="text-3xl ">About the Conference</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-muted-foreground">
                We bring together experts who want to make Learning and Education Research better. Share your ideas with researchers, industry leaders, and policymakers. Learn about what works in sustainable Learning and Education Research.
              </p>
              <p className="leading-relaxed text-lg text-muted-foreground mt-4">
                All submissions are carefully reviewed to ensure they bring new and valuable insights to the field.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-slate-100 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-white text-secondary-foreground p-6">
              <CardTitle className="text-3xl underline underline-offset-2 decoration-primary">What We&apos;ll Cover</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <h2 className="mb-6 text-lg text-black">
                Share your work in these areas or suggest other relevant topics:
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {topics.map((topic, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">{topic.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6">
                        {topic.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-800 text-base leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-muted  p-6 border-b-2 border-purple-400 rounded-md">
              <CardTitle className="text-3xl bg-gradient-to-r from-purple-500 via-red-400  to-orange-400 text-transparent bg-clip-text">How to Submit Your Work</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-muted-foreground">
                Our team will review your work to make sure it fits the conference goals. Your research should be new and not published elsewhere. We&apos;ll send you guidelines for formatting after we accept your work.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 mt-12 justify-center items-center mx-auto">
          <Link href={'/submission'}>
            <Button className="flex-1 text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-purple-500 via-red-400  to-orange-400" variant="default">
              <FileText className="mr-2 h-6 w-6" />
              Send Us Your Paper
            </Button>
          </Link>
          <Link href={'/registration'}>
            <Button className="flex-1 text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" variant="secondary">
              <UserPlus className="mr-2 h-6 w-6" />
              Register Now
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
        <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
          <CardHeader className="bg-primary text-primary-foreground p-6 bg-gradient-to-r from-purple-500 via-red-400  to-orange-400">
            <CardTitle className="text-3xl flex items-center ">
              <Calendar className="mr-2 h-8 w-8" />
              Key Dates
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {loading ? (
              <p className="text-lg text-muted-foreground">Loading dates...</p>
            ) : (
              <ul className=" flex flex-col-reverse">
                {dates.map((item, index) => (
                  <li key={index} className="flex items-center py-2">
                    {/* <div className="mr-2 text-primary">
                      {getIconForEventType(item.eventType)}
                    </div> */}
                    <span className="text-lg text-muted-foreground">
                      <strong>{item.date}:</strong> {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </motion.div>
      </div>
    </motion.section>
  )
}