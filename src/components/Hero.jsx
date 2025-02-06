"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CalendarIcon, MapPinIcon, UsersIcon, Ticket, FileText, Download, Info, MapPin, Headphones } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover bg-fixed"
      >
        <source 
          src="/bgvideo.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Container */}
      <div className="relative w-full max-w-screen-2xl mx-auto grid grid-cols-1  px-6 py-16 lg:grid-cols-2 lg:px-8">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center text-white"
        >
          <h1 className="mb-1 text-7xl font-semibold text-pretty ">World Conference on Learning and Education Research</h1>
          <p className="mb-4 ml-2 max-w-2xl text-xl text-white/90 leading-relaxed">
          Advancing Global Knowledge in Learning and Education Research
          </p>
          <div className="my-3   gap-3 px-4 max-w-2xl  backdrop-blur-sm bg-slate-50/20 py-4 rounded-3xl">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-red-400  to-orange-400  text-transparent bg-clip-text ">Hybrid conference</h1>
          <p className="font-medium text-xl">Take your time at the Conference. Attend in person in Philippines <br /> or Participate virtually from any location.</p>
        </div>
          <div className="flex sm:flex-row flex-col-reverse  items-start sm:items-center justify-center gap-3 px-4 max-w-2xl  backdrop-blur-sm bg-gray-50/30 py-4 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1728043047/yqhbu4xrrwcab48qtpfw.png"
            alt=""
            className="h-12 drop-shadow-lg"
          />
          <img
            src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1728043732/dpwtq9cenauyctsvd9vg.png"
            alt=""
            className="h-12 drop-shadow-lg"
          />
          <img
            src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1729260387/erph7fml9unxiowlmrmg.png"
            alt=""
            className="h-12 drop-shadow-lg"
          />
        </div>
          <div className="flex flex-row mt-8  max-w-md gap-5">
            <Link href={'/submission'}>
            <Button className="bg-gradient-to-r from-purple-500 via-red-400  to-orange-400 text-white hover:bg-white/90 text-lg px-8 py-6" size="lg">
              <FileText className="mr-2 h-6 w-6" />
              Submit your paper
            </Button>
            </Link>
            {/* <Link> */}
            <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-lg px-8 py-6" size="lg">
              <Download className="mr-2 h-6 w-6" />
               Brochure
            </Button>
            {/* </Link> */}
            <Link href={'/about-conference'}>
            <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-lg px-8 py-6" size="lg">
              <Info className="mr-2 h-6 w-6" />
              About Conference
            </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Column - Registration Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center my-6"
        >
          <Card className="w-full max-w-lg mx-auto">
            <CardContent className="p-8">
              <h2 className="mb-8 text-2xl font-semibold">Conference Details</h2>

              <div className="space-y-6">
                {/* Location Input */}
                <div>
                  <label className="text-base text-muted-foreground mb-2 block">Venue</label>
                  <div className="relative">
                    <MapPinIcon className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                    <Input value="Jakarta, Indonesia" readOnly className="pl-12 bg-gray-50 text-lg py-6 font-mono   " />
                  </div>
                </div>

                {/* Date and Duration */}
                <div className=" flex md:flex-row flex-col gap-6">
                  <div className="w-full">
                    <label className="text-base text-muted-foreground mb-2 block">Date</label>
                    <div className="relative ">
                      <CalendarIcon className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                      <Input value="18th - 19th Oct, 2025" readOnly className="pl-12 bg-gray-50 text-lg py-6 font-mono" />
                    </div>
                  </div>
                  <div className="w-2/3">
                    <label className="text-base text-muted-foreground mb-2 block">Duration</label>
                    <Input value="2 Days" readOnly className="bg-gray-50 text-lg py-6 font-mono" />
                  </div>
                </div>

                {/* Attendees */}
                <div>
                  <label className="text-base text-muted-foreground mb-2 block">Expected Attendees</label>
                  <div className="relative">
                    <UsersIcon className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                    <Input value="5000+ Tech Professionals" readOnly className="pl-12 bg-gray-50 text-lg py-6 font-mono" />
                  </div>
                </div>

                {/* Register Button */}
                <Link href={'/registration'}>
                <Button className="w-full text-lg py-6 bg-gradient-to-r from-purple-500 via-red-400  to-orange-400 mt-2" size="lg">
                  <Ticket className="mr-2 h-6 w-6" />
                  Register for Wcler 2025
                </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}