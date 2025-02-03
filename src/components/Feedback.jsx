import { Testimonial } from "./ui/testomonial-card"

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Professor of Educational Technology",
    company: "Stanford University",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah",
    testimonial: "WCLER has consistently been the premier conference for education research. The quality of presentations and networking opportunities with fellow researchers made it an invaluable experience for advancing my research in adaptive learning technologies."
  },
  {
     name: "Dr. Maria Rodriguez",
    role: "Head of Education Department",
    company: "National University of Singapore",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=james",
    testimonial: "As a regular attendee of WCLER, I'm always impressed by the diverse range of research topics and the rigorous academic standards. The conference provides an excellent platform for international collaboration in education research."
  },
  {
    name: "Prof. James Chen",
    role: "Education Policy Researcher",
    company: "UNESCO",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=maria",
    testimonial: "The conference's focus on both theoretical frameworks and practical applications makes it unique. The insights gained from WCLER 2024 significantly influenced our policy recommendations for educational reform in developing countries."
  }
]

function Feedback() {
  return (
    <div className="container py-10 mx-auto">
      <h1 className="md:text-5xl text-3xl  text-center mb-12">What Previous Attendees Say</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export { Feedback }