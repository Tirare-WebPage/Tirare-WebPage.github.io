"use client";

import Image from "next/image";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Quote } from "@/components/ui/Quote";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

export function MRII() {
  return (
    <Section
      id="mrii"
      spacing="spacious"
      background="surface"
    >
      <Container size="wide">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              Core Innovation
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              Mechanical Rider
              Intent Interface
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              style={{
                maxWidth: "64rem",
              }}
            >
              Most electric assistance systems
              ask a simple question:
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                maxWidth: "64rem",
              }}
            >
              How do we measure rider effort
              electronically?
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                maxWidth: "64rem",
                fontWeight: 600,
              }}
            >
              Tirare asks a different question.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                maxWidth: "64rem",
              }}
            >
              What if rider intent could be
              communicated mechanically before
              it is ever measured electronically?
            </Paragraph>
          </Reveal>
        </Stagger>

        <div
          style={{
            marginTop:
              theme.spacing.section.default,
          }}
        >
          <Reveal>
            <Quote variant="engineering">
              Rider intent should originate in
              mechanics before it is processed
              by electronics.
            </Quote>
          </Reveal>
        </div>

        <div
          style={{
            marginTop:
              theme.spacing.section.spacious,
          }}
        >
          <Grid
            columns={2}
            gap="spacious"
          >
            <Reveal>
              <Card
                padding="none"
                variant="elevated"
                style={{
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/mrii-diagram.png"
                  alt="Mechanical Rider Intent Interface"
                  width={1800}
                  height={1200}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Card>
            </Reveal>

            <Reveal>
              <Card variant="elevated">
                <Heading level={3}>
                  How MRII Works
                </Heading>

                <Paragraph>
                  Conventional systems attempt to infer
                  rider demand electronically through
                  sensors and software.
                </Paragraph>

                <Paragraph>
                  MRII introduces a mechanical layer
                  between the rider and the electronics.
                </Paragraph>

                <Paragraph>
                  Rider intent is physically expressed
                  through the drivetrain before it is
                  interpreted by control systems.
                </Paragraph>

                <Paragraph>
                  This preserves proportional assistance
                  while reducing dependence on expensive
                  torque-sensing architectures.
                </Paragraph>
              </Card>
            </Reveal>
          </Grid>
        </div>

        <div
          style={{
            marginTop:
              theme.spacing.section.spacious,
          }}
        >
          <Grid
            columns={3}
            gap="comfortable"
          >
            <Reveal>
              <Card>
                <Heading level={4}>
                  Rider Intent
                </Heading>

                <Paragraph>
                  Human effort remains the
                  starting point of the system.
                </Paragraph>

                <Paragraph>
                  The rider continues operating
                  the vehicle naturally.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={4}>
                  Mechanical Translation
                </Heading>

                <Paragraph>
                  Rider demand is translated
                  mechanically before electronic
                  assistance is applied.
                </Paragraph>

                <Paragraph>
                  The system responds to intent,
                  not simply motion.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={4}>
                  Proportional Assistance
                </Heading>

                <Paragraph>
                  Electric power supplements
                  human effort instead of
                  replacing it.
                </Paragraph>

                <Paragraph>
                  Assistance remains coupled to
                  rider participation.
                </Paragraph>
              </Card>
            </Reveal>
          </Grid>
        </div>

        <div
          style={{
            marginTop:
              theme.spacing.section.spacious,
          }}
        >
          <Card
            variant="elevated"
            style={{
              padding: "4rem",
              textAlign: "center",
            }}
          >
            <Heading level={3}>
              The Rider Is Not A Problem
              To Be Engineered Away
            </Heading>

            <Paragraph
              style={{
                marginTop: "1.5rem",
                maxWidth: "50rem",
                marginInline: "auto",
              }}
            >
              The objective is to make every
              unit of human effort produce more
              useful work.
            </Paragraph>

            <Paragraph
              style={{
                marginTop: "1rem",
                maxWidth: "50rem",
                marginInline: "auto",
              }}
            >
              MRII exists because the architecture
              begins with human participation,
              not human replacement.
            </Paragraph>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export default MRII;