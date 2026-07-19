"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

const ROADMAP = [
  {
    stage: "01",
    title: "Functional Prototype",
    description:
      "Construct and validate the first fully integrated MRII-equipped Tirare system.",
  },
  {
    stage: "02",
    title: "Field Deployment",
    description:
      "Install prototypes on working cargo tricycles and observe operation under real commercial conditions.",
  },
  {
    stage: "03",
    title: "Data & Optimization",
    description:
      "Measure rider effort reduction, energy consumption, durability and maintenance requirements.",
  },
  {
    stage: "04",
    title: "Pilot Manufacturing",
    description:
      "Develop repeatable production processes and supplier relationships for low-volume deployment.",
  },
  {
    stage: "05",
    title: "Platform Expansion",
    description:
      "Extend the architecture beyond cargo tricycles into broader utility mobility applications.",
  },
] as const;

export function Roadmap() {
  return (
    <Section
      id="roadmap"
      spacing="spacious"
      background="surface"
    >
      <Container size="wide">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              Next Steps
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              The Road Ahead
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              style={{
                maxWidth: "64rem",
              }}
            >
              The architecture exists.
              The engineering philosophy exists.
              The next phase is proving the system
              in the physical world.
            </Paragraph>
          </Reveal>
        </Stagger>

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Grid
            columns={1}
            gap="comfortable"
          >
            {ROADMAP.map((item) => (
              <Reveal key={item.stage}>
                <Card>
                  <div
                    style={{
                      display: "flex",
                      gap: "2rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        minWidth: "5rem",
                        fontWeight: 700,
                        color: theme.colors.accent.primary,
                        fontSize:
                          theme.typography.heading.h2.fontSize,
                      }}
                    >
                      {item.stage}
                    </div>

                    <div>
                      <Heading level={3}>
                        {item.title}
                      </Heading>

                      <Paragraph
                        style={{
                          marginTop: "1rem",
                        }}
                      >
                        {item.description}
                      </Paragraph>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </div>

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Card variant="elevated">
            <Heading level={3}>
              Long-Term Objective
            </Heading>

            <Paragraph>
              Tirare is not attempting to build
              another electric vehicle.
            </Paragraph>

            <Paragraph>
              The long-term objective is creating
              a new category of human-amplification
              mobility systems where human effort
              and electric assistance operate as a
              single integrated architecture.
            </Paragraph>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export default Roadmap;