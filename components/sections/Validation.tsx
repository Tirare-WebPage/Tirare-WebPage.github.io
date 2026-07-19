"use client";

import Image from "next/image";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Statistic } from "@/components/ui/Statistic";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

const VALIDATION = [
  {
    title: "IIIT Delhi Grant",
    description:
      "Tirare was awarded ₹1,00,000 in grant funding following technical evaluation and project review.",
  },

  {
    title: "STMicroelectronics Ecosystem",
    description:
      "Development has received exposure to industry and innovation networks connected to STMicroelectronics-supported programs.",
  },

  {
    title: "iHub Anubhuti",
    description:
      "The project has been presented within recognised innovation and entrepreneurship ecosystems focused on deep-technology development.",
  },

  {
    title: "Patent Development",
    description:
      "Core architectural innovations are being documented and prepared for intellectual property protection.",
  },

  {
    title: "Engineering Proof Of Concept",
    description:
      "The platform is supported by extensive engineering documentation covering architecture, constraints, trade-offs and system rationale.",
  },

  {
    title: "Architecture Iteration",
    description:
      "Multiple architectures were modelled, analysed and rejected before arriving at the current platform design.",
  },
] as const;

export function Validation() {
  return (
    <Section
      id="validation"
      spacing="spacious"
      background="surface"
    >
      <Container size="wide">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              Validation
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              Ideas Are Cheap.
              <br />
              Validation Is Not.
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              style={{
                maxWidth: "64rem",
              }}
            >
              Tirare is not a concept created in isolation.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                maxWidth: "64rem",
              }}
            >
              The project has been evaluated through grants,
              engineering reviews, innovation programs and
              external technical discussions.
            </Paragraph>
          </Reveal>
        </Stagger>

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Grid
            columns={3}
            gap="comfortable"
          >
            <Reveal>
              <Statistic
                value="₹1L"
                label="Grant Funding Awarded"
              />
            </Reveal>

            <Reveal>
              <Statistic
                value="96"
                label="Pages Of Engineering Documentation"
              />
            </Reveal>

            <Reveal>
              <Statistic
                value="3+"
                label="Major Architecture Iterations"
              />
            </Reveal>
          </Grid>
        </div>

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Grid
            columns={2}
            gap="comfortable"
          >
            {VALIDATION.map((item) => (
              <Reveal key={item.title}>
                <Card>
                  <Heading level={4}>
                    {item.title}
                  </Heading>

                  <Paragraph>
                    {item.description}
                  </Paragraph>
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
          <Grid
            columns={3}
            gap="comfortable"
          >
            <Reveal>
              <Card
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem",
                  minHeight: "140px",
                }}
              >
                <Image
                  src="/images/iiitd-logo.png"
                  alt="IIIT Delhi"
                  width={220}
                  height={100}
                  style={{
                    width: "100%",
                    maxWidth: "220px",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </Card>
            </Reveal>

            <Reveal>
              <Card
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem",
                  minHeight: "140px",
                }}
              >
                <Image
                  src="/images/sthub-logo.png"
                  alt="ST Hub"
                  width={220}
                  height={100}
                  style={{
                    width: "100%",
                    maxWidth: "220px",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </Card>
            </Reveal>

            <Reveal>
              <Card
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem",
                  minHeight: "140px",
                }}
              >
                <Image
                  src="/images/ihub-logo.png"
                  alt="iHub Anubhuti"
                  width={220}
                  height={100}
                  style={{
                    width: "100%",
                    maxWidth: "220px",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </Card>
            </Reveal>
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
              Validation Does Not Mean Finished.
            </Heading>

            <Paragraph
              style={{
                marginTop: "2rem",
                maxWidth: "54rem",
                marginInline: "auto",
              }}
            >
              Tirare remains an evolving engineering project.
            </Paragraph>

            <Paragraph
              style={{
                maxWidth: "54rem",
                marginInline: "auto",
              }}
            >
              The purpose of validation is not to prove that the
              work is complete.
            </Paragraph>

            <Paragraph
              style={{
                maxWidth: "54rem",
                marginInline: "auto",
              }}
            >
              It is to demonstrate that the underlying problem,
              architecture and engineering direction have been
              serious enough for others to invest time,
              expertise and resources into the journey.
            </Paragraph>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export default Validation;