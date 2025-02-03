"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Zap, Users, Globe, Coffee, Book, Calendar } from 'lucide-react';

export default function VenuePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 mt-12"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="https://plus.unsplash.com/premium_photo-1733259891253-cb820ac92adf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Conference Venue"
              width={500}
              height={400}
              className="rounded-2xl bg-black"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 text-gray-600 dark:text-gray-400">
              Conference Venue
            </h1>
            <p className="text-xl mb-6 leading-relaxed">
              Welcome to the World Conference on Learning and Education Research (WCLER). Join us in Jakarta, Indonesia for this prestigious gathering of education researchers, practitioners, and innovators shaping the future of learning.
            </p>
            <div className="flex items-center text-gray-700 dark:text-gray-300 text-lg gap-2">
              <span className="font-bold"><MapPin/></span> Jakarta International Convention Center, Jalan Gatot Subroto, Jakarta, Indonesia
            </div>
            <div className="mt-4 text-gray-700 dark:text-gray-300 text-lg inline-flex gap-2">
              <span className="font-bold"><Calendar/></span> October 2025
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-600 dark:text-gray-400">
          Venue Highlights
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Modern Facilities", description: "State-of-the-art presentation and learning spaces" },
            { icon: Users, title: "Collaboration Areas", description: "Dedicated spaces for research networking" },
            { icon: Globe, title: "International Access", description: "Convenient location for global participants" },
            { icon: Coffee, title: "Break Areas", description: "Comfortable spaces for informal discussions" },
            { icon: Book, title: "Digital Resources", description: "Access to educational databases and materials" },
            { icon: MapPin, title: "Strategic Location", description: "Near major hotels and transportation" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-gray-600 dark:text-gray-400 mb-2" />
                  <CardTitle className="text-xl font-bold text-gray-700 dark:text-gray-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-800 dark:text-gray-200">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-600 dark:text-gray-400">
          Location
        </h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2904255推荐84337!2d106.80231661476877!3d-6.215697695493392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d30079f01%3A0x2e74f2341fff266d!2sJakarta%20Convention%20Center!5e0!3m2!1sen!2sid!4v1645670968645!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="container mx-auto px-4 py-16"
      >
        <h3 className="text-4xl font-bold mb-8 text-center text-gray-600 dark:text-gray-400">
          Nearby Attractions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "National Monument",
              description: "Visit Jakarta's iconic National Monument (MONAS), a 132-meter tower symbolizing Indonesia's independence. The monument features a museum, observation deck, and beautiful surrounding park perfect for morning or evening walks.",
              img: "https://images.unsplash.com/photo-1533260486172-6b26594c3228?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "Old Town Jakarta",
              description: "Explore Kota Tua, Jakarta's historic Dutch colonial district. Visit museums, enjoy street performances, and experience traditional Indonesian culture in this well-preserved area of the city.",
              img: "https://images.unsplash.com/photo-1588420076794-b3dc845f77f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "Istiqlal Mosque",
              description: "Southeast Asia's largest mosque, the Istiqlal Mosque is an architectural marvel showcasing Indonesia's religious diversity and cultural heritage. The mosque can accommodate up to 200,000 worshippers.",
              img: "https://images.unsplash.com/photo-1715741159610-4d19d7eeda06?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "Ancol Dreamland",
              description: "Jakarta's premier recreational area featuring theme parks, beaches, restaurants, and art markets. Perfect for relaxation after conference sessions or family entertainment.",
              img: "https://images.unsplash.com/photo-1704949841592-73aea920b8d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "Grand Indonesia Mall",
              description: "One of Southeast Asia's largest shopping centers, offering international brands, local boutiques, diverse dining options, and entertainment facilities all under one roof.",
              img: "https://images.unsplash.com/photo-1691421123450-7f79538902ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "Taman Mini Indonesia Indah",
              description: "A cultural park showcasing Indonesia's diversity through traditional architecture, costumes, and performances from various provinces. Features museums, gardens, and cultural exhibitions.",
              img: "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          ].map((attraction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-700 dark:text-gray-300">
                    {attraction.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image 
                    src={attraction.img} 
                    alt={attraction.title} 
                    width={500} 
                    height={500} 
                    className="rounded-md drop-shadow-md py-2 mb-4"
                  />
                  <CardDescription className="text-gray-800 dark:text-gray-200">{attraction.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}