import React from 'react'
import ConferenceSchedule from './Content'

export const metadata = {
  title: 'World Conference on Learning and Education Research',
  description: 'Join us at World Conference on Learning and Education Research to learn from some of the best in the field, network with industry experts, attend workshops, and explore innovative solutions for Learning and Education Research. This conference is taking place at Jakarta, Indonesia on October 2025.',
  keywords: [
    'Learning and Education Research Conference',
    'Jakarta',
    'Indonesia',
    'Oct, 2025'
  ],
  openGraph: {
    title: 'World Conference on Learning and Education Research | Oct, 2025',
    description: 'Join us at the World Conference on Learning and Education Research to learn from some of the best in the field. Explore workshops, attend industry talks, and participate in innovative solutions for Learning and Education Research. This conference is taking place at Jakarta, Indonesia.',
    url: 'https://www.wcler.org/schedule',
    siteName: 'World Conference on Learning and Education Research',
    images: [
      {
        url: '/og-images/about-conference.jpg',  // Add appropriate image
        width: 1200,
        height: 630,
        alt: 'World Conference on Learning and Education Research'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About the World Conference on Learning and Education Research | Oct, 2025',
    description: 'Join us at the World Conference on Learning and Education Research to learn from some of the best in the field. Explore workshops, attend industry talks, participate in innovative solutions for Learning and Education Research. This conference is taking place at Jakarta, Indonesia.',
    images: ['/og-images/about-conference.jpg'],
  },
  alternates: {
    canonical: 'https://www.wcler.org/schedule'
  },
  // Structured data for the conference
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'World Conference on Learning and Education Research',
      description: 'Join us at World Conference on Learning and Education Research to learn from some of the best in the field, network with industry experts, attend workshops, and explore innovative solutions for Learning and Education Research.',
      startDate: '2025-10-01', // Adjust this according to your schedule
      endDate: '2025-10-02', // Adjust this according to your schedule
      location: {
        '@type': 'Place',
        name: 'Jakarta, Indonesia'
      },
      organizer: {
        '@type': 'Organization',
        name: 'World Conference on Learning and Education Research',
        url: 'https://www.wcler.org/schedule'
      },
      offers: {
        '@type': 'Offer',
        url: 'https://www.wcler.org/register',
        availability: 'https://schema.org/InStock'
      }
    })
  }
};

function page() {
  return (
    <div>
      <ConferenceSchedule/>
    </div>
  )
}

export default page
