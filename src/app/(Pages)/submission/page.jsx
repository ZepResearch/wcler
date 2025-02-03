import React from "react";
import SubmitForm from "./components/Form";


export const metadata = {
  title: 'Paper Submission  WCLER 2025 | World Conference on Learning and Education Research',
  description: 'Learn about WCLER 2025, a premier conference uniting global experts in Learning and Education Research. Join us in Indonesia for groundbreaking research and networking.',
  keywords: [
    'WCLER 2025',
    'about WCLER',
    'applied science conference',
    'engineering conference',
    'management conference',
    'Indonesia conference 2025',
    'academic conference',
    'research conference',
    'scientific networking',
    'innovation conference'
  ],
  openGraph: {
    title: 'About WCLER 2025 | World Conference on Learning and Education Research',
    description: 'Join leading experts at WCLER 2025 in Indonesia. Explore cutting-edge research in Learning and Education Research while networking with global innovators.',
    type: 'website',
    
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About WCLER 2025',
    description: 'Join leading experts at WCLER 2025 in Indonesia. Explore cutting-edge research in Learning and Education Research.',
   
  }
}
function page() {
  return (
    <div>
      <SubmitForm />
    </div>
  );
}

export default page;
