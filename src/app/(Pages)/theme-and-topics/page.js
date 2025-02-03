import React from 'react'
import ThemeAndTopics from './Content'

export const metadata = {
  title: "Theme & Topics WCLER 2025",
  description:
    "Join 500+ education leaders at WCLER 2025. Experience 20+ workshops & 50+ speakers from 30+ countries exploring innovative learning and education research.",
  keywords: [
    "WCLER 2025",
    "learning research conference",
    "education research conference",
    "education innovation",
    "Jakarta conference",
    "education sustainability",
    "learning research",
    "education professionals",
    "education workshops",
    "innovative learning",
    "education innovation",
    "education networking",
  ],
  openGraph: {
    title: "About WCLER 2025 | World Conference on Learning and Education Research",
    description:
      "Join 500+ global leaders at WCLER 2025 in Jakarta. Explore innovative learning methods, network with education experts, and attend 20+ workshops on emerging trends.",
    url: "https://www.wcler.com/theme-and-topics",
    siteName: "WCLER 2025",
    images: [
      {
        url: "/og-images/about-conference.jpg", // Add appropriate image
        width: 1200,
        height: 630,
        alt: "WCLER 2025 Conference Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About WCLER 2025 | Learning and Education Research Conference",
    description:
      "Explore the future of learning and education research at WCLER 2025 in Jakarta. Join 500+ leaders, 50+ speakers, and 20+ workshops.",
    images: ["/og-images/about-conference.jpg"],
  },
  alternates: {
    canonical: "https://www.wcler.com/theme-and-topics",
  },
  // Structured data for the conference
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "World Conference on Learning and Education Research 2025",
      description:
        "A premier global conference bringing together thought leaders, education professionals, researchers, and innovators to explore learning and education research.",
      startDate: "2025-10-01",
      endDate: "2025-10-03",
      location: {
        "@type": "Place",
        name: "Jakarta",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jakarta",
          addressCountry: "Indonesia",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "WCLER",
        url: "https://www.wcler.com",
      },
      offers: {
        "@type": "Offer",
        url: "https://www.wcler.com/register",
        availability: "https://schema.org/InStock",
      },
      keywords: [
        "Education Conference",
        "Learning Research",
        "Education Innovation",
        "Education Technology",
        "Educational Research",
      ],
      audience: {
        "@type": "Audience",
        audienceType: [
          "Education Professionals",
          "Researchers",
          "Academics",
          "Policymakers",
          "Students",
          "EdTech Innovators",
        ],
      },
    }),
  },
}


function page() {
  return (
    <div>
      <ThemeAndTopics/>
    </div>
  )
}

export default page
