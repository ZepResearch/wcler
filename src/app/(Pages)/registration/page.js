import React from 'react'
import Ticket from './components/TIcket'
import Process from './components/Proccse'
import CTACancle from './components/Cta-Cancle-Policy'
export const metadata = {
  title: 'Registration  ICASEM 2025 | International Conference on Applied Science, Engineering & Management',
  description: 'Learn about ICASEM 2025, a premier conference uniting global experts in applied science, engineering, and management. Join us in Vietnam for groundbreaking research and networking.',
  keywords: [
    'ICASEM 2025',
    'about ICASEM',
    'applied science conference',
    'engineering conference',
    'management conference',
    'Vietnam conference 2025',
    'academic conference',
    'research conference',
    'scientific networking',
    'innovation conference'
  ],
  openGraph: {
    title: 'About ICASEM 2025 | International Conference on Applied Science, Engineering & Management',
    description: 'Join leading experts at ICASEM 2025 in Vietnam. Explore cutting-edge research in applied science, engineering, and management while networking with global innovators.',
    type: 'website',
    
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ICASEM 2025',
    description: 'Join leading experts at ICASEM 2025 in Vietnam. Explore cutting-edge research in applied science, engineering, and management.',
   
  }
}
function page() {
  return (
    <div>
        <Ticket/>
        <Process/>
        <CTACancle/>
    </div>
  )
}

export default page