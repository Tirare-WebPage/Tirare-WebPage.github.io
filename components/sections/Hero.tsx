"use client";

import { HeroBackground } from "@/components/sections/HeroBackground";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Statistic } from "@/components/ui/Statistic";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Card } from "@/components/ui/Card";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

export function Hero() {
  return (
    <Section
      id="hero"
      spacing="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <HeroBackground />

      <Container size="wide">
        <Grid
          columns={2}
          gap="spacious"
          align="center"
        >
          <Stagger>
            <Reveal>
              <Badge variant="engineering">
                Mobility • Human Amplification • Deep Tech
              </Badge>
            </Reveal>

            <Reveal>
              <Heading
                level={1}
                style={{
                  marginTop: "1.25rem",
                  maxWidth: "12ch",
                }}
              >
                The Human Was
                Never Meant
                To Be The Motor.
              </Heading>
            </Reveal>

            <Reveal>
              <Paragraph
                size="lg"
                style={{
                  maxWidth: "42rem",
                }}
              >
                Millions of utility vehicles already move
                goods across India every day.
              </Paragraph>
            </Reveal>

            <Reveal>
              <Paragraph
                style={{
                  maxWidth: "42rem",
                }}
              >
                The vehicle was never the problem.
                The drivetrain was never the problem.
              </Paragraph>
            </Reveal>

            <Reveal>
              <Paragraph
                style={{
                  maxWidth: "42rem",
                  fontWeight: 600,
                }}
              >
                The human became the weakest component
                in the system.
              </Paragraph>
            </Reveal>

            <Reveal>
              <Paragraph
                style={{
                  maxWidth: "42rem",
                }}
              >
                Tirare is developing a new category of
                human-amplification mobility systems built
                around the Mechanical Rider Intent Interface
                (MRII) ~ an architecture that allows human
                effort and electric assistance to operate as
                one integrated system.
              </Paragraph>
            </Reveal>

            <Reveal>
              <div
                style={{
                  display: "flex",
                  gap: theme.spacing.stack.md,
                  flexWrap: "wrap",
                  marginTop: theme.spacing.stack.lg,
                }}
              >
                <Button>
                  Explore Architecture
                </Button>

                <Button variant="secondary">
                  View Engineering
                </Button>
              </div>
            </Reveal>
          </Stagger>

          <Reveal>
            <Card
              padding="none"
              variant="surface"
              style={{
                overflow: "hidden",
              }}
            >
              <video
                controls
                playsInline
                poster="/images/founder-photo.jpg"
                style={{
                  width: "100%",
                  display: "block",
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                }}
              >
                <source
                  src="/videos/founder-story.mp4"
                  type="video/mp4"
                />
              </video>
            </Card>
          </Reveal>
        </Grid>

        <div
          style={{
            marginTop: theme.spacing.section.default,
          }}
        >
          <Grid
            columns={4}
            gap="comfortable"
          >
            <Statistic
              value="₹1L"
              label="IIIT Delhi Grant"
            />

            <Statistic
              value="96"
              label="Engineering PoC Pages"
            />

            <Statistic
              value="MRII"
              label="Core Innovation"
            />

            <Statistic
              value="Patent"
              label="Filing In Progress"
            />
          </Grid>
        </div>

        <Reveal>
          <div
            style={{
              marginTop: theme.spacing.section.compact,
              textAlign: "center",
              maxWidth: "60rem",
              marginInline: "auto",
            }}
          >
            <Paragraph
              style={{
                fontWeight: 600,
              }}
            >
              Human Torque + Motor Torque = Axle Torque
            </Paragraph>

            <Paragraph
              style={{
                marginTop: "0.75rem",
              }}
            >
              The human should never become unnecessary.
              The motor should never replace the rider.
              The motor becomes another pair of legs.
            </Paragraph>
          </div>
        </Reveal>

        <div
          style={{
            marginTop: theme.spacing.section.compact,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ScrollIndicator />
        </div>
      </Container>
    </Section>
  );
}

export default Hero;