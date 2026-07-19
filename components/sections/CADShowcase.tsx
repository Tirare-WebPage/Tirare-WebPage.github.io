"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

export function CADShowcase() {
  return (
    <Section
      id="cad-showcase"
      spacing="spacious"
      background="surface"
    >
      <Container>
        <Stagger>
          <Reveal>
            <Badge>
              Interactive CAD
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              Explore the Retrofit in Three Dimensions
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              style={{
                maxWidth: "60rem",
                color: theme.colors.text.secondary,
              }}
            >
              Inspect the retrofit assembly from every angle.
              Rotate the model, zoom into critical interfaces and
              understand how each subsystem integrates with the
              existing cargo tricycle.
            </Paragraph>
          </Reveal>
        </Stagger>

        <div
          style={{
            marginTop: theme.spacing.section.default,
          }}
        >
          <Grid
            columns={2}
            gap="spacious"
            align="center"
          >
            {/* Viewer */}

            <Reveal>
              <Card
                style={{
                  minHeight: 620,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderStyle: "dashed",
                }}
              >
                <Paragraph
                  align="center"
                  size="lg"
                >
                  3D CAD Viewer
                  <br />
                  Placeholder
                </Paragraph>
              </Card>
            </Reveal>

            {/* Information */}

            <Reveal>
              <Card>
                <Heading level={3}>
                  Engineering Highlights
                </Heading>

                <Paragraph>
                  The interactive model demonstrates the complete
                  retrofit architecture, including the battery,
                  controller, motor, chain drive, clamp-on axle
                  sprocket and the preserved factory drivetrain.
                </Paragraph>

                <Paragraph>
                  Future versions will support exploded views,
                  guided walkthroughs, hotspot annotations,
                  sectional visibility and predefined camera
                  positions for engineering review.
                </Paragraph>

                <div
                  style={{
                    marginTop: theme.spacing.stack.xl,
                    display: "flex",
                    gap: theme.spacing.stack.md,
                    flexWrap: "wrap",
                  }}
                >
                  <Button>
                    Open Fullscreen
                  </Button>

                  <Button variant="secondary">
                    Exploded View
                  </Button>
                </div>
              </Card>
            </Reveal>
          </Grid>
        </div>
      </Container>
    </Section>
  );
}

export default CADShowcase;