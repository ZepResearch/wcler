import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Users, Lightbulb, Award } from 'lucide-react'
import { SponsorshipPackages } from "./components/SponsorshipPackages"
import Link from "next/link"
export const metadata = {
  title: 'Sponsorship | WCLER 2025',
  description: 'Explore sponsorship opportunities for the World Conference on Learning and Education Research (WCLER) 2025 in Jakarta, Indonesia.',
  alternates: {
    canonical: 'https://www.wcler.org/sponsorship',
  },
  openGraph: {
    title: 'Sponsorship | WCLER 2025',
    description: 'Explore sponsorship opportunities for the World Conference on Learning and Education Research (WCLER) 2025 in Jakarta, Indonesia.',
    url: 'https://www.wcler.org/sponsorship',
    siteName: 'WCLER 2025',
    locale: 'en_US',
    type: 'website',
  },
  keywords: [
    'WCLER',
    'sponsorship',
    'education research',
    'learning',
    'education technology',
    'academic conference',
    'Jakarta',
    'Indonesia',
    'education innovation',
    'research sponsorship'
  ],
 }  
export default function SponsorshipContact() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto">   
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1734175975/samples/qxwj713rkbhcllw5jcvt.jpg"
              alt="Conference sponsorship"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                <span className="">
                  Become a Sponsor
                </span>
              </h1>
              <p className="text-lg text-gray-700">
                Join us in shaping the future of World Conference on Learning and Education Research. Explore our sponsorship opportunities and connect with industry leaders and innovators.
              </p>
            </div>

            <Card className="bg-white shadow-lg border-2 border-gray-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold ">Why Sponsor?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 flex-shrink-0 text-purple-600" />
                  <span>Network with 1000+ professionals and academics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-5 w-5 flex-shrink-0 text-purple-600" />
                  <span>Showcase your innovative solutions and research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 flex-shrink-0 text-purple-600" />
                  <span>Gain recognition as a leader in interdisciplinary innovation</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold ">Contact Our Sponsorship Team</h2>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span>+91 7358737843</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span>info@wcler.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span>DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-red-400  to-orange-400">
              Sponsorship Packages
            </span>
          </h3>
          <SponsorshipPackages />
        </div>

        <div className="bg-gradient-to-l from-purple-500/60 via-red-400/60  to-orange-400/60 rounded-lg shadow-xl p-8 text-center">
          <h4 className="text-3xl font-bold text-white mb-4 drop-shadow-md">Ready to Drive Innovation?</h4>
          <p className="text-xl text-white mb-6 drop-shadow-lg">
            Don&apos;t miss this opportunity to showcase your brand at the World Conference on Learning and Education Research.
          </p>
          <Button className="bg-white text-gray-700 hover:bg-gray-100 text-lg px-8 py-3 rounded-full font-semibold transition-colors duration-300">
            <Link href={'/contact'}>Request Sponsorship Information</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

