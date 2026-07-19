"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Icon } from "@/components/ui/Icon";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

const STEPS = [
  {
    number: "01",
    title: "Rider Applies Effort",
    description:
      "The operator pedals normally. No special controls, sensors or new driving behaviour are required.",
    icon: "users",
  },
  {
    number: "02",
    title: "Intent Is Communicated",
    description:
      "The Mechanical Rider Intent Interface captures rider demand before assistance is generated.",
    icon: "lightbulb",
  },
  {
    number: "03",
    title: "Assistance Is Calculated",
    description:
      "The system determines how much support should be provided based on rider intent rather than replacing rider participation.",
    icon: "cpu",
  },
  {
    number: "04",
    title: "Motor Produces Torque",
    description:
      "Electrical energy is converted into supplemental mechanical torque.",
    icon: "gauge",
  },
  {
    number: "05",
    title: "Torque Joins The Rider",
    description:
      "Motor torque is combined with human torque rather than competing against it.",
    icon: "moveRight",
  },
  {
    number: "06",
    title: "The Vehicle Moves",
    description:
      "The axle receives both human and electric contribution, reducing effort while preserving human participation.",
    icon: "arrowRight",
  },
] as const;

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      spacing="spacious"
    >
      <Container size="wide">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              Operational Sequence
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              How Tirare Works
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              style={{
                maxWidth: "64rem",
              }}
            >
              Conventional electrification attempts to replace
              human effort.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                maxWidth: "64rem",
              }}
            >
              Tirare amplifies it.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                maxWidth: "64rem",
              }}
            >
              The system begins with the rider,
              not the motor.
            </Paragraph>
          </Reveal>
        </Stagger>

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Grid
            columns={2}
            gap="comfortable"
          >
            {STEPS.map((step) => (
              <Reveal key={step.number}>
                <Card>
                  <div
                    style={{
                      display: "flex",
                      gap: "1.5rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        minWidth: "4rem",
                        color: theme.colors.accent.primary,
                        fontWeight: 700,
                        fontSize:
                          theme.typography.heading.h2.fontSize,
                      }}
                    >
                      {step.number}
                    </div>

                    <div>
                      <Icon
                        name={step.icon}
                        size="lg"
                      />

                      <Heading
                        level={4}
                        style={{
                          marginTop: "0.75rem",
                        }}
                      >
                        {step.title}
                      </Heading>

                      <Paragraph>
                        {step.description}
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
          <Card
            variant="elevated"
            style={{
              textAlign: "center",
              padding: "4rem",
            }}
          >
            <Heading level={2}>
              Human Torque
              <br />
              +
              <br />
              Motor Torque
              <br />
              =
              <br />
              Axle Torque
            </Heading>

            <Paragraph
              style={{
                marginTop: "2rem",
                maxWidth: "50rem",
                marginInline: "auto",
              }}
            >
              This is the core equation behind Tirare.
            </Paragraph>

            <Paragraph>
              The rider remains part of the propulsion system.
            </Paragraph>

            <Paragraph>
              Assistance exists to amplify human capability,
              not eliminate it.
            </Paragraph>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export default HowItWorks;