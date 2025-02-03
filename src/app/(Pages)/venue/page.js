import React from 'react'
import VenuePage from './Content'

export const metadata = {
  title: 'Venue | WCLER 2025',
  description: 'Explore the venue for the World Conference on Learning and Education Research (WCLER) 2025 in Jakarta, Indonesia.',
  // Adding canonical URL
  alternates: {
    canonical: 'https://www.wcler.org/venue',
  },
  openGraph: {
    title: 'Venue | WCLER 2025',
    description: 'Explore the venue for the World Conference on Learning and Education Research (WCLER) 2025 in Jakarta, Indonesia.',
    url: 'https://www.wcler.org/venue',
    siteName: 'WCLER 2025',
    locale: 'en_US',
    type: 'website',
  },
  keywords: [
    'WCLER',
    'venue',
    'Jakarta',
    'Indonesia',
    'conference',
    'education',
    'learning',
    'research',
    'educational research',
    'teaching methodology'
  ],
}
function page() {
  
  return (
    <div>
      <VenuePage/>
    </div>
  )
}

export default page
