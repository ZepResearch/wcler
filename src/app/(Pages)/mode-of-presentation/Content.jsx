"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mic, ImageIcon, Video } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ModePresentation() {
  const [activeMode, setActiveMode] = useState(null)

  const presentationModes = [
    {
      title: "Speak at the Conference",
      description:
        "Give a live talk about your research. Share your ideas face-to-face with other education professionals and researchers. Get instant feedback and engage in meaningful discussions about your work.",
      icon: Mic,
      image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      content:
        "You will have 20 minutes for your presentation. Please send us your slides by email to presentations@wcler.com at least 7 days before the event. If you can't send them early, you can bring them to the registration desk at least 2 hours before your scheduled presentation time.",
    },
    {
      title: "Present a Poster",
      description:
        "Display your work on a poster. Engage in one-on-one discussions about your research in a relaxed setting. Ideal for new projects or ongoing work. Perfect for making connections in the field of education and learning research.",
      icon: ImageIcon,
      image: "https://images.unsplash.com/photo-1493972741200-51d407e0ee33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Each poster will be displayed for the duration of the conference. Please send us your poster as a PDF file. We will make all posters available on our website before the event to maximize exposure and facilitate discussions.",
    },
    {
      title: "Virtual Presentation",
      description:
        "Join us from anywhere in the world. Share your work online and connect with education experts globally. Participate in Q&A sessions and network just as if you were there in person.",
      icon: Video,
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "We will email you the virtual conference link one week before the event. Joining is straightforward - simply click the link we send you. Please ensure you sign up for a virtual presentation slot when registering for the conference.",
    },
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen mt-12 ">
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">
            Presentation Options
          </Badge>
          <h1 className="text-4xl font-bold text-primary mb-4">Share Your Research at WCLER 2025</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your preferred method of presenting your work
          </p>
        </motion.div>

        {presentationModes.map((mode, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-8 overflow-hidden"
          >
            <div className={`flex flex-col items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="md:w-1/3">
                <img
                  src={mode.image || "/placeholder.svg"}
                  alt={mode.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <h2 className="text-3xl font-bold mb-4  bg-gradient-to-r from-purple-500 via-red-400  to-orange-400 text-transparent bg-clip-text flex items-center">
                  <mode.icon className="w-8 h-8 mr-2" />
                  {mode.title}
                </h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">{mode.description}</p>
                <Button
                  className="mb-4  bg-gradient-to-r from-purple-500 via-red-400  to-orange-400   text-white"
                  onClick={() => setActiveMode(activeMode === index ? null : index)}
                >
                  {activeMode === index ? "Hide Details" : "Learn More"}
                </Button>
                {activeMode === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 dark:text-gray-300 mt-4 p-4 bg-gray-100 dark:bg-blue-900 rounded-lg">
                      {mode.content}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

