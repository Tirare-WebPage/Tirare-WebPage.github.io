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

export function Reality() {
  return (
    <Section
      id="reality"
      spacing="spacious"
      background="surface"
    >
      <Container size="wide">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              Field Reality
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              Before Technology,
              There Is Reality.
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              style={{
                maxWidth: "64rem",
              }}
            >
              Across India, cargo tricycles,
              cycle-rickshaws and utility
              vehicles continue moving goods
              every day.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                maxWidth: "64rem",
              }}
            >
              Most discussions about
              electrification begin with
              vehicles.
              Tirare began with operators.
            </Paragraph>
          </Reveal>
        </Stagger>

        <div
          style={{
            marginTop:
              theme.spacing.section.default,
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
                  alt="Elderly utility vehicle operator"
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
              <Card variant="elevated">
                <Heading level={3}>
                  Work Does Not Stop
                  When The Body Does
                </Heading>

                <Paragraph>
                  Many operators continue
                  working well into old age.
                </Paragraph>

                <Paragraph>
                  Years of repetitive effort
                  accumulate in the knees,
                  back, shoulders and hands.
                </Paragraph>

                <Paragraph>
                  Strength decreases.
                </Paragraph>

                <Paragraph>
                  Demand does not.
                </Paragraph>

                <Paragraph>
                  Income remains tied to
                  movement.
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
          <Reveal>
            <Quote
              variant="observation"
            >
              When a vehicle becomes
              difficult to pedal, the work
              rarely disappears.
              The operator simply absorbs
              more of the burden.
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
            columns={3}
            gap="comfortable"
          >
            <Reveal>
              <Card>
                <Heading level={4}>
                  Existing Vehicles
                </Heading>

                <Paragraph>
                  Millions of vehicles already
                  exist and already serve a
                  purpose.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={4}>
                  Existing Skills
                </Heading>

                <Paragraph>
                  Operators understand these
                  vehicles and local mechanics
                  already know how to repair
                  them.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={4}>
                  Existing Economics
                </Heading>

                <Paragraph>
                  Daily income depends on
                  keeping vehicles in service,
                  not replacing them.
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
              textAlign: "center",
              padding: "4rem",
            }}
          >
            <Heading level={2}>
              The Question Was Never
              "How Do We Electrify
              A Vehicle?"
            </Heading>

            <Paragraph
              style={{
                marginTop: "1.5rem",
                maxWidth: "52rem",
                marginInline: "auto",
              }}
            >
              The more important question
              was whether electrification
              could work without disrupting
              the people who already depend
              on these vehicles today.
            </Paragraph>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export default Reality;