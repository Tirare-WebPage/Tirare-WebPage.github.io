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
import CADViewer from "@/components/cad/CADViewer";
export function DesignEvolution() {
  return (
    <Section
      id="design-evolution"
      spacing="spacious"
      background="surface"
    >
      <Container size="wide">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              Architecture Evolution
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              Every Architecture
              Solves A Different Problem
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              style={{
                maxWidth: "64rem",
              }}
            >
              The current Tirare platform did not emerge from a
              single idea.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                maxWidth: "64rem",
              }}
            >
              It emerged through a process of discovering which
              constraints actually mattered and rejecting designs
              that optimized for the wrong ones.
            </Paragraph>
          </Reveal>
        </Stagger>

        {/* Reality */}

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Grid columns={2} gap="spacious">
            <Reveal>
<Card
  padding="none"
  style={{
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "320px",
  }}
>
                <Image
                  src="/images/cad-exploded.png"
                  alt="Existing cargo tricycle"
                  width={1600}
                  height={1200}
style={{
  width: "100%",
  height: "auto",
  display: "block",
  objectFit: "contain",
}}
                />
              </Card>
            </Reveal>

            <Reveal>
              <Card variant="elevated">
                <Heading level={3}>
                  Reality
                </Heading>

                <Paragraph>
                  The project did not begin with a motor.
                </Paragraph>

                <Paragraph>
                  It began with an existing vehicle already
                  operating in the field.
                </Paragraph>

                <Paragraph>
                  The vehicle already transported goods.
                </Paragraph>

                <Paragraph>
                  The vehicle already generated income.
                </Paragraph>

                <Paragraph>
                  The vehicle already had a repair ecosystem.
                </Paragraph>

                <Paragraph>
                  Any solution that required replacing these
                  advantages created a new problem instead of
                  solving one.
                </Paragraph>
              </Card>
            </Reveal>
          </Grid>
        </div>

        {/* Rejected 1 */}

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Grid columns={2} gap="spacious">
            <Reveal>
              <Card variant="elevated">
                <Heading level={3}>
                  First Attempt
                </Heading>

                <Paragraph>
                  Early architectures focused on power delivery.
                </Paragraph>

                <Paragraph>
                  The objective was achieving efficient torque
                  transfer and strong electrical assistance.
                </Paragraph>

                <Paragraph>
                  On paper these concepts worked.
                </Paragraph>

                <Paragraph>
                  In deployment they introduced new complexity,
                  increased manufacturing demands and reduced
                  retrofit flexibility.
                </Paragraph>

                <Paragraph>
                  Technical viability alone was not enough.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
<Card
  padding="none"
  style={{
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "320px",
  }}
>
<CADViewer
  modelPath="/cad/evolution/precision-drive.glb"
/>
              </Card>
            </Reveal>
          </Grid>
        </div>

        {/* Rejected 2 */}

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Grid columns={2} gap="spacious">
            <Reveal>
<Card
  padding="none"
  style={{
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "320px",
  }}
>
<CADViewer
  modelPath="/cad/evolution/direct-motor-drive.glb"
/>
              </Card>
            </Reveal>

            <Reveal>
              <Card variant="elevated">
                <Heading level={3}>
                  Constraint Collision
                </Heading>

                <Paragraph>
                  Eventually the challenge stopped being torque.
                </Paragraph>

                <Paragraph>
                  The challenge became reality.
                </Paragraph>

                <Paragraph>
                  Dust.
                </Paragraph>

                <Paragraph>
                  Misalignment.
                </Paragraph>

                <Paragraph>
                  Overloading.
                </Paragraph>

                <Paragraph>
                  Repair quality.
                </Paragraph>

                <Paragraph>
                  Vehicle-to-vehicle variation.
                </Paragraph>

                <Paragraph>
                  Several otherwise successful concepts failed
                  at this stage.
                </Paragraph>
              </Card>
            </Reveal>
          </Grid>
        </div>

        {/* Current */}

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Grid columns={2} gap="spacious">
            <Reveal>
              <Card variant="elevated">
                <Heading level={3}>
                  Current Platform
                </Heading>

                <Paragraph>
                  The final architecture emerged only after
                  retrofit compatibility, serviceability and
                  entropy tolerance became primary engineering
                  requirements.
                </Paragraph>

                <Paragraph>
                  The result is not the most technically
                  impressive mechanism possible.
                </Paragraph>

                <Paragraph>
                  It is the mechanism most likely to survive
                  deployment.
                </Paragraph>

                <Paragraph>
                  Every major component exists because an
                  alternative failed under a real-world
                  constraint.
                </Paragraph>
              </Card>
            </Reveal>

            <Reveal>
<Card
  padding="none"
  style={{
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "320px",
  }}
>
                <Image
                  src="/images/cad-main.png"
                  alt="Current Tirare architecture"
                  width={1600}
                  height={1200}
style={{
  width: "100%",
  height: "auto",
  display: "block",
  objectFit: "contain",
}}
                />
              </Card>
            </Reveal>
          </Grid>
        </div>

        {/* Closing */}

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
              Engineering Is Mostly Rejection
            </Heading>

            <Paragraph
              style={{
                maxWidth: "54rem",
                marginInline: "auto",
                marginTop: "2rem",
              }}
            >
              A successful design is rarely the first idea.
            </Paragraph>

            <Paragraph
              style={{
                maxWidth: "54rem",
                marginInline: "auto",
              }}
            >
              It is usually the last surviving idea.
            </Paragraph>

            <Paragraph
              style={{
                maxWidth: "54rem",
                marginInline: "auto",
              }}
            >
              The current Tirare platform exists because other
              architectures failed when confronted with reality.
            </Paragraph>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export default DesignEvolution;