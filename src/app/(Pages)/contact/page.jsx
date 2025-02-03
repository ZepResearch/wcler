import React from 'react'
import ContactUs from './Content'


export const metadata = {
  title: 'Contact Us | WCLER 2025',
  description: 'Get in touch with the organizers of the World Conference on Learning and Education Research (WCLER) 2025 in Jakarta, Indonesia.',
  alternates: {
    canonical: 'https://www.wcler.org/contact',
  },
  openGraph: {
    title: 'Contact Us | WCLER 2025',
    description: 'Get in touch with the organizers of the World Conference on Learning and Education Research (WCLER) 2025 in Jakarta, Indonesia.',
    url: 'https://www.wcler.org/contact',
    siteName: 'WCLER 2025',
    locale: 'en_US',
    type: 'website',
  },
  keywords: [
    'WCLER',
    'contact',
    'education research',
    'learning',
    'teaching',
    'educational conference',
    'Jakarta',
    'Indonesia',
    'education innovation',
    'academic research'
  ],
}

function page() {
  return (
    <div>
      <ContactUs/>
    </div>
  )
}

export default page
