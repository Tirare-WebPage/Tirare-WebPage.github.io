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

export function RetrofitArchitecture() {
  return (
    <Section
      id="retrofit-architecture"
      spacing="spacious"
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
              The Final Architecture
              Was Not The First Idea.
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
              Tirare was developed through a process of
              elimination.
              Every concept was evaluated against the same
              question:
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                maxWidth: "64rem",
                fontStyle: "italic",
                fontWeight: 600,
              }}
            >
              Can this realistically work on the vehicles,
              economics and operating conditions that already
              exist?
            </Paragraph>
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
                }}
              >
                <Image
                  src="/images/rejected-concept-1.png"
                  alt="Rejected concept one"
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
                <Badge>
                  Rejected Concept 01
                </Badge>

                <Heading
                  level={3}
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  Technically Possible.
                  Practically Fragile.
                </Heading>

                <Paragraph>
                  Early architectures focused heavily on
                  drivetrain integration and direct electrical
                  substitution.
                </Paragraph>

                <Paragraph>
                  Performance was achievable.
                </Paragraph>

                <Paragraph>
                  Simplicity was not.
                </Paragraph>

                <Paragraph>
                  Installation complexity,
                  alignment sensitivity,
                  maintenance burden and retrofit difficulty
                  created significant adoption risk.
                </Paragraph>

                <Paragraph>
                  The concept solved propulsion.
                  It did not solve reality.
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
              <Card>
                <Badge>
                  Rejected Concept 02
                </Badge>

                <Heading
                  level={3}
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  Electrically Powerful.
                  Economically Wrong.
                </Heading>

                <Paragraph>
                  Another pathway increased electrical
                  contribution dramatically.
                </Paragraph>

                <Paragraph>
                  Larger motors.
                </Paragraph>

                <Paragraph>
                  Larger batteries.
                </Paragraph>

                <Paragraph>
                  Greater independence from rider input.
                </Paragraph>

                <Paragraph>
                  The result was higher performance,
                  but also higher cost,
                  greater weight and lower accessibility.
                </Paragraph>

                <Paragraph>
                  The system began drifting toward becoming
                  another electric vehicle rather than a
                  practical retrofit platform.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
              <Card
                padding="none"
                style={{
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/rejected-concept-2.png"
                  alt="Rejected concept two"
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
          <Card
            variant="elevated"
            style={{
              textAlign: "center",
              padding: "4rem",
            }}
          >
            <Heading level={2}>
              Both Concepts Failed For
              The Same Reason.
            </Heading>

            <Paragraph
              style={{
                marginTop: "1.5rem",
                maxWidth: "60rem",
                marginInline: "auto",
              }}
            >
              They treated electrification as a propulsion
              problem.
            </Paragraph>

            <Paragraph
              style={{
                maxWidth: "60rem",
                marginInline: "auto",
              }}
            >
              Tirare eventually realized that the challenge
              was not generating torque.
            </Paragraph>

            <Paragraph
              style={{
                maxWidth: "60rem",
                marginInline: "auto",
                fontWeight: 600,
              }}
            >
              The challenge was generating useful torque
              without violating the constraints that made
              existing vehicles successful in the first place.
            </Paragraph>
          </Card>
        </div>

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Card
            variant="surface"
            style={{
              textAlign: "center",
              padding: "4rem",
            }}
          >
            <Heading level={2}>
              That Realization Led To
              A Different Question.
            </Heading>

            <Paragraph
              style={{
                marginTop: "1rem",
                fontSize: "1.2rem",
              }}
            >
              What if the rider remained part of the propulsion
              system?
            </Paragraph>

            <Paragraph>
              What if electric power amplified effort
              instead of replacing it?
            </Paragraph>

            <Paragraph>
              What if affordability could be engineered
              directly into the drivetrain architecture?
            </Paragraph>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export default RetrofitArchitecture;