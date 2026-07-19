"use client";

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

export function PlatformVision() {
  return (
    <Section
      id="platform-vision"
      spacing="spacious"
    >
      <Container size="wide">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              Platform Vision
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              Tirare Was Never About
              A Cargo Tricycle.
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              style={{
                maxWidth: "64rem",
                color: theme.colors.text.secondary,
              }}
            >
              Cargo tricycles were simply where the problem
              became impossible to ignore.
            </Paragraph>
          </Reveal>
        </Stagger>

        <div
          style={{
            marginTop: theme.spacing.section.default,
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
              Human Capability
              <br />
              Should Not Determine
              <br />
              Economic Participation.
            </Heading>
          </Card>
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
                  Today
                </Heading>

                <Paragraph>
                  Tirare begins with manually operated
                  cargo tricycles used for logistics,
                  transportation and urban utility work.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={3}>
                  Tomorrow
                </Heading>

                <Paragraph>
                  The same rider-intent architecture can
                  be adapted to other forms of human-powered
                  utility vehicles where effort limits
                  productivity.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card variant="elevated">
                <Heading level={3}>
                  Eventually
                </Heading>

                <Paragraph>
                  Assistance systems become a layer added
                  to existing mobility ecosystems rather
                  than requiring complete replacement.
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
          <Card>
            <Heading level={3}>
              A Different View Of Electrification
            </Heading>

            <Paragraph>
              Modern mobility often assumes progress means
              replacing what already exists.
            </Paragraph>

            <Paragraph>
              New vehicle.
            </Paragraph>

            <Paragraph>
              New infrastructure.
            </Paragraph>

            <Paragraph>
              New financing.
            </Paragraph>

            <Paragraph>
              New dependencies.
            </Paragraph>

            <Paragraph>
              Tirare explores a different possibility.
            </Paragraph>

            <Paragraph>
              What if progress could be achieved by enhancing
              existing systems rather than discarding them?
            </Paragraph>
          </Card>
        </div>

        <div
          style={{
            marginTop: theme.spacing.section.default,
          }}
        >
          <Card
            variant="elevated"
            style={{
              borderLeft: `4px solid ${theme.colors.accent.primary}`,
            }}
          >
            <Heading level={3}>
              The Long-Term Question
            </Heading>

            <Paragraph>
              If rider intent can be captured mechanically,
              translated intelligently and amplified
              efficiently...
            </Paragraph>

            <Paragraph>
              How many forms of mobility become more
              accessible without becoming more expensive?
            </Paragraph>

            <Paragraph
              style={{
                marginTop: "1rem",
                fontWeight: 600,
              }}
            >
              Tirare exists to explore that question.
            </Paragraph>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export default PlatformVision;