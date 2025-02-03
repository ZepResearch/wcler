import React from 'react'
import IACommitte from './components/IACommitte'
import ScientificCommittee from './components/ScientificCommittee'
import OrganizingCommittee from './components/OrganizingCommittee'
export const metadata = {
  title: 'World Conference on Learning and Education Research',
  description: 'Join us at World Conference on Learning and Education Research to learn from some of the best in the field, network with industry experts, attend workshops, and explore innovative solutions for Learning and Education Research. This conference is taking place at Jakarta, Indonesia on October 2025.',
  alternates: {
    canonical: 'https://www.wcler.org/committee'
  },
  keywords: [
    'Learning and Education Research Conference',
    'Jakarta',
    'Indonesia',
    'Oct, 2025'
  ],
  openGraph: {
    title: 'World Conference on Learning and Education Research',
    description: 'Join us at World Conference on Learning and Education Research to learn from some of the best in the field, network with industry experts, attend workshops, and explore innovative solutions for Learning and Education Research. This conference is taking place at Jakarta, Indonesia on October 2<｜begin▁of▁sentence｜>5.',
    url: 'https://www.wcler.org',
    siteName: 'World Conference on Learning and Education Research',
    locale: 'en_US',
    type: 'website',
  },
};

function page() {
  return (
    <div><h1></h1>
         <OrganizingCommittee/>
        {/*
        <ScientificCommittee/>   */}
        <IACommitte/>
    </div>
  )
}

export default page