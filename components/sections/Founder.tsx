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

export function Founder() {
  return (
    <Section
      id="founder"
      spacing="spacious"
      background="surface"
    >
      <Container size="wide">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              Founder
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              Engineering Begins
              With Observation.
            </Heading>
          </Reveal>
        </Stagger>

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
                  maxHeight: "600px",
                }}
              >
                <Image
                  src="/images/founder-photo.jpg"
                  alt="Founder of Tirare"
                  width={1200}
                  height={1400}
                  style={{
                    width: "100%",
                    height: "600px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Paragraph>
                  Tirare did not begin with a business plan.
                </Paragraph>

                <Paragraph>
                  It did not begin with venture capital,
                  market reports or electrification trends.
                </Paragraph>

                <Paragraph>
                  It began with a simple observation:
                </Paragraph>

                <Paragraph
                  style={{
                    fontWeight: 600,
                    fontStyle: "italic",
                  }}
                >
                  People continued performing physically
                  demanding work long after their bodies
                  should have forced them to stop.
                </Paragraph>

                <Paragraph>
                  That observation became a question.
                </Paragraph>

                <Paragraph>
                  Why was mobility innovation focused on
                  replacing vehicles while ignoring the
                  people operating them?
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
          <Quote
            variant="engineering"
          >
            The vehicle was not failing.
            The rider was being asked to do more than
            the vehicle.
          </Quote>
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
              <Card>
                <Heading level={3}>
                  Engineering
                </Heading>

                <Paragraph>
                  Tirare emerged through independent
                  engineering research, CAD development,
                  architecture iteration and field
                  observation.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={3}>
                  Validation
                </Heading>

                <Paragraph>
                  The project has received support through
                  innovation and entrepreneurship programs,
                  helping advance the concept beyond an
                  initial idea.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card variant="elevated">
                <Heading level={3}>
                  Mission
                </Heading>

                <Paragraph>
                  Build systems that increase human
                  capability without making existing
                  livelihoods obsolete.
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
          <Card>
            <Heading level={3}>
              Beyond Tirare
            </Heading>

            <Paragraph>
              Tirare is not the destination.
            </Paragraph>

            <Paragraph>
              It is the first exploration of a broader
              belief:
            </Paragraph>

            <Paragraph
              style={{
                fontWeight: 600,
              }}
            >
              Engineering should reduce human limitation
              without reducing human relevance.
            </Paragraph>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export default Founder;