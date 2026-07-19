"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";

import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Badge } from "@/components/ui/Badge";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

export function EngineeringPrinciples() {
  return (
    <Section
      id="engineering-principles"
      spacing="spacious"
      background="surface"
    >
      <Container size="wide">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              Engineering Constraints
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              Good Engineering Begins With
              What Cannot Be Changed.
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
              Tirare was not designed by selecting a motor,
              battery or drivetrain.
              It was designed by identifying the realities
              that any practical solution would have to obey.
            </Paragraph>
          </Reveal>
        </Stagger>

        <div
          style={{
            marginTop: theme.spacing.section.default,
          }}
        >
          <Card variant="elevated">
            <Heading level={3}>
              Engineering Reality
            </Heading>

            <Paragraph>
              Millions of cargo tricycles already exist.
            </Paragraph>

            <Paragraph>
              They already transport goods.
            </Paragraph>

            <Paragraph>
              They already generate income.
            </Paragraph>

            <Paragraph>
              They already have repair networks.
            </Paragraph>

            <Paragraph>
              Any solution that ignores these systems is not
              solving a transportation problem.
              It is creating an adoption problem.
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
              <Card>
                <Heading level={4}>
                  Retrofit Constraint
                </Heading>

                <Paragraph>
                  Existing vehicles cannot be redesigned.
                </Paragraph>

                <Paragraph>
                  Rear axles cannot be replaced.
                </Paragraph>

                <Paragraph>
                  Chassis geometry cannot be assumed.
                </Paragraph>

                <Paragraph>
                  The solution must attach to vehicles that
                  already exist in the field.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={4}>
                  Economic Constraint
                </Heading>

                <Paragraph>
                  Operators cannot justify replacing an
                  income-generating asset.
                </Paragraph>

                <Paragraph>
                  Even technically superior systems fail if
                  adoption cost exceeds practical reality.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={4}>
                  Entropy Constraint
                </Heading>

                <Paragraph>
                  Dust.
                </Paragraph>

                <Paragraph>
                  Shock loading.
                </Paragraph>

                <Paragraph>
                  Misalignment.
                </Paragraph>

                <Paragraph>
                  Variable maintenance.
                </Paragraph>

                <Paragraph>
                  Real-world vehicles do not operate under
                  laboratory conditions.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={4}>
                  Repairability Constraint
                </Heading>

                <Paragraph>
                  Local workshops already maintain these
                  vehicles.
                </Paragraph>

                <Paragraph>
                  New technology must cooperate with existing
                  repair ecosystems rather than replace them.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={4}>
                  Human Constraint
                </Heading>

                <Paragraph>
                  The rider remains part of the propulsion
                  system.
                </Paragraph>

                <Paragraph>
                  Removing the rider from the equation
                  increases power requirements,
                  battery requirements,
                  weight and cost.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <Heading level={4}>
                  Scalability Constraint
                </Heading>

                <Paragraph>
                  A solution designed around a single vehicle
                  configuration cannot scale across India's
                  diverse cargo tricycle fleet.
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
          <Card
            variant="elevated"
            style={{
              textAlign: "center",
              padding: "4rem",
            }}
          >
            <Heading level={2}>
              Constraints Did Not Limit
              The Solution.
            </Heading>

            <Paragraph
              style={{
                marginTop: "1.5rem",
                maxWidth: "50rem",
                marginInline: "auto",
              }}
            >
              They defined it.
            </Paragraph>

            <Paragraph
              style={{
                maxWidth: "50rem",
                marginInline: "auto",
              }}
            >
              Once these realities were accepted,
              the objective was no longer building the
              best electric vehicle.
            </Paragraph>

            <Paragraph
              style={{
                maxWidth: "50rem",
                marginInline: "auto",
              }}
            >
              The objective became enabling existing
              vehicles to benefit from electrification
              while remaining familiar,
              repairable,
              affordable and useful.
            </Paragraph>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export default EngineeringPrinciples;