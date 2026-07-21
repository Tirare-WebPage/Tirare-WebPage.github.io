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
          {/* LEFT SIDE */}
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
                (MRII) an architecture that allows human
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

<a
  href="/documents/tirare-pitch-deck.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    textDecoration: "none",
  }}
>
  <Button variant="secondary">
    View Pitch Deck
  </Button>
</a>
              </div>
            </Reveal>
          </Stagger>

          {/* RIGHT SIDE */}
          <Reveal>
            <div>
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
                  preload="metadata"
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

              <Paragraph
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                }}
              >
                ▶ Watch the 3-minute founder story behind Tirare.
              </Paragraph>

              <div
                style={{
                  marginTop: "1rem",
                }}
              >
<a
  href="/documents/tirare-pitch-deck.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "block",
    textDecoration: "none",
  }}
>
  <Button
    variant="secondary"
    style={{
      width: "100%",
    }}
  >
    Open Pitch Deck
  </Button>
</a>
              </div>
            </div>
          </Reveal>
        </Grid>

        {/* METRICS */}
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
              value="Prototype"
              label="Functional Prototype"
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

        {/* PHILOSOPHY */}
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