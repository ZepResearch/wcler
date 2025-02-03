import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

function FAQ() {
  const faqItems = [
    {
      question: "What are the important dates for paper submission?",
      answer: "Abstract submission deadline: June 15, 2025. Full paper submission: July 30, 2025. Notification of acceptance: August 30, 2025. Final paper submission: September 15, 2025. Early bird registration ends: September 30, 2025."
    },
    {
      question: "What are the conference themes and topics?",
      answer: "The conference covers various themes including Educational Technology, Teaching Methodologies, Curriculum Development, Educational Psychology, Distance Learning, Special Education, Educational Leadership, and Assessment & Evaluation. Check our detailed topics list on the conference website."
    },
    {
      question: "Is virtual participation available?",
      answer: "Yes, WCLER 2025 offers hybrid participation options. Virtual attendees can present their papers and participate in all sessions through our interactive online platform. Virtual registration fees are different from in-person attendance."
    },
    {
      question: "What is included in the registration fee?",
      answer: "Registration includes conference materials, access to all sessions, workshops, and keynote speeches, conference proceedings publication, lunch and refreshments during conference days, certificate of participation, and networking events."
    },
    {
      question: "How can I get my paper published in the proceedings?",
      answer: "All accepted and presented papers will be published in the conference proceedings with ISBN. Selected papers will be recommended for publication in partner journals (subject to additional review process)."
    },
    {
      question: "Are there any student discounts available?",
      answer: "Yes, full-time students can receive a 30% discount on registration fees. Valid student ID and proof of enrollment must be provided during registration."
    },
    {
      question: "What is the presentation format?",
      answer: "Oral presentations are allocated 15 minutes plus 5 minutes for Q&A. Poster presentations will have dedicated sessions. Both in-person and virtual presenters must prepare presentation slides."
    },
    {
      question: "Is there accommodation support available?",
      answer: "We have partnered with several hotels near the venue offering special rates for conference attendees. Booking information will be provided in your registration confirmation email."
    }
  ];

  return (
    <div className="w-full py-20 lg:py-40 px-4">
      <div className="container mx-auto justify-center items-center">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">FAQ</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Frequently Asked Questions
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  Find answers to common questions about WCLER 2025. If you need additional 
                  information, please don't hesitate to contact our conference support team.
                </p>
              </div>
              <div className="flex flex-col max-w-sm items-start gap-4">
                <Button className="gap-2" variant="outline">
                   <Mail className="w-4 h-4" /> info@wcler.org
                </Button>
                <Button className="gap-2" variant="outline">
                   <PhoneCall className="w-4 h-4" />91+ 82600 80050
                </Button>
                <Button className="gap-2" variant="outline">
                  <MapPin className="w-4 h-4" /> Jakarta, Indonesia
                </Button>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={"item-" + index}>
                <AccordionTrigger className="sm:text-xl ">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export { FAQ };