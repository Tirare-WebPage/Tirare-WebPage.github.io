import { Hero } from "@/components/sections/Hero";
import { FounderStory } from "@/components/sections/FounderStory";
import { Reality } from "@/components/sections/Reality";
import { Problem } from "@/components/sections/Problem";
import { BigQuestion } from "@/components/sections/BigQuestion";

import { EngineeringPrinciples } from "@/components/sections/EngineeringPrinciples";
import { MRII } from "@/components/sections/MRII";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SystemArchitecture } from "@/components/sections/SystemArchitecture";
import { DesignEvolution } from "@/components/sections/DesignEvolution";

import { Validation } from "@/components/sections/Validation";
import { Roadmap } from "@/components/sections/Roadmap";
import { PlatformVision } from "@/components/sections/PlatformVision";

import { Founder } from "@/components/sections/Founder";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
<Hero />

<FounderStory />

<Reality />

<Problem />

<BigQuestion />

<EngineeringPrinciples />

<MRII />

<SystemArchitecture />

<HowItWorks />

<DesignEvolution />

<Validation />

<Roadmap />

<PlatformVision />

<Founder />

<Contact />
    </>
  );
}