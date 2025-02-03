import { CalendarIcon, TrophyIcon, PersonIcon, HeartIcon, MapPinIcon } from "@radix-ui/react-icons"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

const features = [
  {
    Icon: CalendarIcon,
    name: "Schedule",
    description: "View and plan your conference agenda.",
    href: "/schedule",
    cta: "View Schedule",
    background: (
      <img
        src="https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Schedule background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: TrophyIcon,
    name: "Awards",
    description: "Discover the prestigious awards and recognition opportunities.",
    href: "/awards",
    cta: "Learn More",
    background: (
      <img
        src="https://plus.unsplash.com/premium_photo-1677572452964-91e968d02d6a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Awards background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: PersonIcon,
    name: "Committee",
    description: "Meet the organizing committee behind the conference.",
    href: "/committee",
    cta: "Meet the Team",
    background: (
      <img
        src="https://plus.unsplash.com/premium_photo-1661746107725-5eec7679731c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Committee background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: HeartIcon,
    name: "Sponsorship",
    description: "Explore sponsorship opportunities for the conference.",
    href: "/sponsorship",
    cta: "Become a Sponsor",
    background: (
      <img
        src="https://images.unsplash.com/photo-1632383380175-812d44ec112b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
        alt="Sponsorship background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: MapPinIcon,
    name: "Venue",
    description: "Get information about the conference venue and accommodations.",
    href: "/venue",
    cta: "Explore Venue",
    background: (
      <img
        src="https://images.unsplash.com/photo-1565791381266-8047707de6bc?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Venue background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
]

export function CTA() {
  return (
    <BentoGrid className="lg:grid-rows-3 max-w-screen-2xl mx-auto py-12">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  )
}

