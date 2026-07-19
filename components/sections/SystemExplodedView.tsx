"use client";

import Image from "next/image";

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

export function SystemExplodedView() {
  return (
    <Section
      id="engineering-evolution"
      spacing="spacious"
      background="surface"
    >
      <Container size="wide">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              Engineering Evolution
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              Good Engineering Is The Result
              Of Rejected Ideas
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              style={{
                maxWidth: "64rem",
              }}
            >
              Tirare's current architecture was not the first
              concept.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                maxWidth: "64rem",
              }}
            >
              Multiple drivetrain layouts, power delivery
              systems and assistance strategies were explored,
              modelled and evaluated before arriving at the
              current platform architecture.
            </Paragraph>
          </Reveal>
        </Stagger>

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Card>
            <Heading level={3}>
              Engineering Progression
            </Heading>

            <Paragraph
              style={{
                marginTop: theme.spacing.stack.md,
              }}
            >
              Observation → Concept Generation →
              Rejected Architectures →
              MRII Development →
              Current Retrofit Platform
            </Paragraph>
          </Card>
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
            <Reveal>
              <Card padding="none">
                <Image
                  src="/images/rejected-concepts.png"
                  alt="Rejected Tirare concepts"
                  width={1600}
                  height={1200}
                  style={{
                    width: "100%",
                    display: "block",
                  }}
                />
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={3}>
                  Rejected Concepts
                </Heading>

                <Paragraph>
                  Several architectures appeared promising
                  during early development.
                </Paragraph>

                <Paragraph>
                  Some increased complexity.
                </Paragraph>

                <Paragraph>
                  Some reduced serviceability.
                </Paragraph>

                <Paragraph>
                  Some conflicted with retrofit
                  requirements.
                </Paragraph>

                <Paragraph>
                  Others failed affordability targets.
                </Paragraph>

                <Paragraph>
                  None satisfied every engineering
                  constraint simultaneously.
                </Paragraph>
              </Card>
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
            <Reveal>
              <Card>
                <Heading level={3}>
                  Mechanical Rider
                  Intent Interface
                </Heading>

                <Paragraph>
                  Most electric assistance systems begin
                  with electronics.
                </Paragraph>

                <Paragraph>
                  Tirare explored whether rider demand
                  could first be communicated through a
                  mechanical system before electronic
                  interpretation.
                </Paragraph>

                <Paragraph>
                  This led to the development of the
                  Mechanical Rider Intent Interface.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card padding="none">
                <Image
                  src="/images/mrii-cad.png"
                  alt="MRII CAD"
                  width={1600}
                  height={1200}
                  style={{
                    width: "100%",
                    display: "block",
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
          <Reveal>
            <Card
              padding="none"
              variant="elevated"
            >
              <Image
                src="/images/mrii-exploded.png"
                alt="MRII exploded assembly"
                width={1800}
                height={1200}
                style={{
                  width: "100%",
                  display: "block",
                }}
              />
            </Card>
          </Reveal>
        </div>

        <div
          style={{
            marginTop: theme.spacing.section.default,
          }}
        >
          <Card
            variant="elevated"
            style={{
              textAlign: "center",
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
              align="center"
              style={{
                marginTop: theme.spacing.stack.lg,
              }}
            >
              The motor does not replace the rider.
            </Paragraph>

            <Paragraph align="center">
              The rider does not fight the motor.
            </Paragraph>

            <Paragraph align="center">
              Both contribute to propulsion.
            </Paragraph>
          </Card>
        </div>

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Reveal>
            <Card padding="none">
              <Image
                src="/images/current-retrofit-platform.png"
                alt="Current Tirare retrofit architecture"
                width={1800}
                height={1200}
                style={{
                  width: "100%",
                  display: "block",
                }}
              />
            </Card>
          </Reveal>
        </div>

        <div
          style={{
            marginTop: theme.spacing.section.default,
          }}
        >
          <Card>
            <Heading level={3}>
              Current Platform Architecture
            </Heading>

            <Paragraph>
              The current retrofit architecture is the
              result of engineering constraints rather
              than engineering preference.
            </Paragraph>

            <Paragraph>
              Existing vehicles remain intact.
            </Paragraph>

            <Paragraph>
              Manual operation remains possible.
            </Paragraph>

            <Paragraph>
              Local repair ecosystems remain relevant.
            </Paragraph>

            <Paragraph>
              Electric assistance is added without
              requiring permanent vehicle modification.
            </Paragraph>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export default SystemExplodedView;