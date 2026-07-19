"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Card } from "@/components/ui/Card";
import { Quote } from "@/components/ui/Quote";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

export function FounderStory() {
  return (
    <Section
      id="founder-story"
      spacing="spacious"
      background="surface"
    >
      <Container size="content">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              Where It Started
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              Tirare Did Not Begin
              With A Business Plan.
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              style={{
                maxWidth: "56rem",
              }}
            >
              It began with a question.
            </Paragraph>
          </Reveal>
        </Stagger>

        <div
          style={{
            marginTop: theme.spacing.section.default,
          }}
        >
          <Reveal>
            <Card variant="elevated">
              <Quote>
                Why are people still pulling hundreds of
                kilograms with their bodies in the age of
                electric mobility?
              </Quote>
            </Card>
          </Reveal>
        </div>

        <div
          style={{
            marginTop: theme.spacing.section.default,
          }}
        >
          <Reveal>
            <Paragraph>
              Across Indian cities, cargo tricycles move
              vegetables, water containers, construction
              materials, gas cylinders and countless other
              essentials.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                marginTop: theme.spacing.stack.md,
              }}
            >
              Most people see the vehicle.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                marginTop: theme.spacing.stack.sm,
              }}
            >
              Very few notice the person pulling it.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                marginTop: theme.spacing.stack.lg,
              }}
            >
              The mobility industry has spent years building
              faster vehicles, larger batteries and more
              sophisticated electronics.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                marginTop: theme.spacing.stack.md,
              }}
            >
              Yet millions of existing utility vehicles remain
              dependent on physical labour for propulsion.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                marginTop: theme.spacing.stack.lg,
              }}
            >
              Tirare began as an attempt to understand why.
            </Paragraph>
          </Reveal>
        </div>

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Reveal>
            <Card>
              <Heading level={3}>
                The Unexpected Discovery
              </Heading>

              <Paragraph
                style={{
                  marginTop: theme.spacing.stack.md,
                }}
              >
                The problem was not technological.
              </Paragraph>

              <Paragraph>
                Electric motors already existed.
              </Paragraph>

              <Paragraph>
                Batteries already existed.
              </Paragraph>

              <Paragraph>
                Electric cargo vehicles already existed.
              </Paragraph>

              <Paragraph>
                The real challenge was that existing operators
                could not simply abandon the vehicles they
                already depended upon.
              </Paragraph>

              <Paragraph
                style={{
                  marginTop: theme.spacing.stack.lg,
                  fontWeight: 600,
                }}
              >
                The barrier was not electrification.
              </Paragraph>

              <Paragraph
                style={{
                  fontWeight: 600,
                }}
              >
                The barrier was replacement.
              </Paragraph>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default FounderStory;