"use client";

import Image from "next/image";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";

import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Card } from "@/components/ui/Card";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

export function Problem() {
  return (
    <Section
      id="problem"
      spacing="spacious"
      background="surface"
    >
      <Container size="wide">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              Where Tirare Began
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              The Vehicle Was Never
              The Problem.
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              style={{
                maxWidth: "60rem",
                color: theme.colors.text.secondary,
              }}
            >
              One afternoon, a cargo tricycle was still moving
              goods despite a broken pedal.
              The rider was not working because the vehicle was
              reliable.
              He was working because stopping was not an option.
            </Paragraph>
          </Reveal>
        </Stagger>

        <div
          style={{
            marginTop: theme.spacing.section.default,
          }}
        >
          <Grid
            columns={2}
            gap="spacious"
            align="center"
          >
            <Reveal>
              <Card
                padding="none"
                style={{
                  overflow: "hidden",
                  maxHeight: "500px",
                }}
              >
                <Image
                  src="/images/laborer-current-cart.jpg"
                  alt="Cargo tricycle operator"
                  width={1200}
                  height={900}
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={3}>
                  A Broken Pedal.
                  <br />
                  A Working Driver.
                </Heading>

                <Paragraph>
                  The pedal no longer completed a full rotation.
                  The vehicle should have been repaired.
                </Paragraph>

                <Paragraph>
                  Instead, it remained in daily service.
                </Paragraph>

                <Paragraph>
                  The obvious engineering question was:
                </Paragraph>

                <Paragraph
                  style={{
                    fontStyle: "italic",
                    fontWeight: 600,
                  }}
                >
                  Why continue using a partially broken vehicle?
                </Paragraph>

                <Paragraph>
                  Because the vehicle was still generating
                  income.
                </Paragraph>

                <Paragraph>
                  Replacing it required money.
                  Repair required downtime.
                  Both created risk.
                </Paragraph>

                <Paragraph>
                  Work could not stop.
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
            gap="spacious"
            align="center"
          >
            <Reveal>
              <Card
                padding="none"
                style={{
                  overflow: "hidden",
                }}
              >
                <video
                  controls
                  playsInline
                  style={{
                    width: "100%",
                    display: "block",
                  }}
                >
                  <source
                    src="/videos/worker-reality.mp4"
                    type="video/mp4"
                  />
                </video>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={3}>
                  Observation Before Engineering
                </Heading>

                <Paragraph>
                  This was not a laboratory problem.
                </Paragraph>

                <Paragraph>
                  It was visible in daily operation.
                </Paragraph>

                <Paragraph>
                  Operators continued moving cargo
                  despite worn components, declining
                  physical strength and vehicles that
                  would normally be considered overdue
                  for replacement.
                </Paragraph>

                <Paragraph>
                  The challenge was not mobility.
                </Paragraph>

                <Paragraph
                  style={{
                    fontWeight: 600,
                  }}
                >
                  The challenge was preserving
                  livelihoods while reducing effort.
                </Paragraph>
              </Card>
            </Reveal>
          </Grid>
        </div>

        <div
          style={{
            marginTop: theme.spacing.section.default,
          }}
        >
          <Reveal>
            <Card
              variant="elevated"
              style={{
                borderLeft: `4px solid ${theme.colors.accent.primary}`,
              }}
            >
              <Heading level={3}>
                The People Electrification Leaves Behind
              </Heading>

              <Paragraph
                style={{
                  marginTop: theme.spacing.stack.md,
                }}
              >
                In Indian cities, elderly cargo and cycle-rickshaw
                operators continue working into their seventies
                and eighties.
              </Paragraph>

              <Paragraph>
                Not because they want to.
              </Paragraph>

              <Paragraph>
                Because they have to.
              </Paragraph>

              <Paragraph>
                Some struggle with chronic health conditions.
                Some suffer from declining strength.
                Some carry years of physical wear in their backs,
                knees, shoulders and hands.
              </Paragraph>

              <Paragraph
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                }}
              >
                When strength fails, they do not stop.
                They step down and pull.
              </Paragraph>
            </Card>
          </Reveal>
        </div>

        <div
          style={{
            marginTop: theme.spacing.section.default,
          }}
        >
          <Grid
            columns={2}
            gap="spacious"
            align="center"
          >
            <Reveal>
              <Card
                padding="none"
                style={{
                  overflow: "hidden",
                  maxHeight: "500px",
                }}
              >
                <Image
                  src="/images/old-driver.jpg"
                  alt="Elderly tricycle operator"
                  width={1200}
                  height={900}
                  style={{
                    width: "100%",
                    height: "500px",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={3}>
                  The Market Assumes Replacement
                </Heading>

                <Paragraph>
                  Most electric mobility solutions begin with
                  the same assumption:
                </Paragraph>

                <Paragraph>
                  Buy a new vehicle.
                </Paragraph>

                <Paragraph>
                  Accept a large upfront cost.
                </Paragraph>

                <Paragraph>
                  Stop working during transition.
                </Paragraph>

                <Paragraph>
                  Learn a new platform.
                </Paragraph>

                <Paragraph>
                  Qualify for financing.
                </Paragraph>

                <Paragraph>
                  For many operators, every one of those
                  assumptions fails.
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
          <Reveal>
            <Card
              variant="elevated"
              style={{
                textAlign: "center",
                padding: "4rem",
              }}
            >
              <Heading level={2}>
                If Replacement Is The Barrier,
                <br />
                Perhaps Replacement Is
                <br />
                The Wrong Starting Point.
              </Heading>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Problem;