import React from 'react'
import ModePresentation from './Content'
export const metadata = {
  title: 'Mode of Presentation WCLER 2025',
  description: 'Join 400+ education leaders at WCLER 2025. Experience 15+ workshops & 40+ speakers from 25+ countries exploring innovative education solutions.',
  keywords: [
    'WCLER 2025',
    'education research conference',
    'learning innovation conference',
    'educational technology',
    'Jakarta conference',
    'education research',
    'learning methodologies',
    'education professionals',
    'education workshops',
    'learning innovation',
    'teaching methods',
    'academic networking'
  ],
  openGraph: {
    title: 'Mode of Presentation WCLER 2025 | Learning and Education Research Conference',
    description: 'Join 400+ global leaders at WCLER 2025 in Jakarta. Explore education innovations, network with academic experts, and attend 15+ workshops on emerging trends.',
    url: 'https://www.wcler.org/mode-of-presentation',
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
    title: 'Mode of Presentation WCLER 2025 | Education Research Conference',
    description: 'Explore the future of learning and education at WCLER 2025 in Jakarta. Join 400+ leaders, 40+ speakers, and 15+ workshops.',
    images: ['/og-images/about-conference.jpg'],
  },
  alternates: {
    canonical: 'https://www.wcler.org/mode-of-presentation'
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
        url: 'https://www.wcler.org'
      },
      offers: {
        '@type': 'Offer',
        url: 'https://www.wcler.org/register',
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
          'Teachers',
          'Policymakers',
          'Students'
        ]
      }
    })
  }
};
function page() {
  return (
    <div>
      <ModePresentation/>
    </div>
  )
}

export default page
