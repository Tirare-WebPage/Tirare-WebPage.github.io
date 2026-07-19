"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Quote } from "@/components/ui/Quote";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

export function BigQuestion() {
  return (
    <Section
      id="big-question"
      spacing="spacious"
    >
      <Container size="content">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              The Turning Point
            </Badge>
          </Reveal>

          <Reveal>
            <Heading
              level={2}
              align="center"
            >
              What If Everyone Is
              Starting In The Wrong Place?
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              align="center"
              style={{
                maxWidth: "48rem",
                marginInline: "auto",
              }}
            >
              Most electrification projects begin
              with a new vehicle.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              align="center"
              style={{
                maxWidth: "48rem",
                marginInline: "auto",
              }}
            >
              New chassis.
              New systems.
              New financing.
              New maintenance.
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
            <Quote
              variant="engineering"
            >
              What if the vehicle is not
              the thing that needs replacing?
            </Quote>
          </Reveal>
        </div>

        <div
          style={{
            marginTop:
              theme.spacing.section.default,
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
              <Heading level={3}>
                Existing Vehicles Already Work.
              </Heading>

              <Paragraph
                style={{
                  marginTop: "1.5rem",
                  maxWidth: "44rem",
                  marginInline: "auto",
                }}
              >
                They already move goods.
                They already generate income.
                They already have operators,
                repair networks and years of
                accumulated trust.
              </Paragraph>

              <Paragraph
                style={{
                  marginTop: "1rem",
                  maxWidth: "44rem",
                  marginInline: "auto",
                  fontWeight: 600,
                }}
              >
                If replacement is the barrier,
                perhaps replacement is the wrong
                starting point.
              </Paragraph>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default BigQuestion;