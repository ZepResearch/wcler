import About from "@/components/About";
import CoOrganizationLogos from "@/components/Co-OrganiztionLogo";
import { CTA } from "@/components/CTA";

import { Feature } from "@/components/Objective";
import { Feedback } from "@/components/Feedback";
import HeroSection from "@/components/Hero";
import SDGSection from "@/components/SDGS";
import { FAQ } from "@/components/FAQ";
import { Dates } from "@/components/Dates";


export default function Home() {
  return (
  <main>
    <HeroSection/>
    <CoOrganizationLogos/>
    <About/>
    <Feature/>
    <SDGSection/>
    <Dates/>
    <CTA/>
    <Feedback/>
    <FAQ/>
  </main>
  );
}
