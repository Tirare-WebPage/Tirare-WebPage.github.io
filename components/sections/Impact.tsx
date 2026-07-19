"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Statistic } from "@/components/ui/Statistic";
import { Icon } from "@/components/ui/Icon";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

const IMPACTS = [
  {
    icon: "gauge",
    title: "Reduced Physical Effort",
    description:
      "Electric torque assistance is intended to reduce rider fatigue during repeated cargo transportation while preserving manual control.",
  },
  {
    icon: "factory",
    title: "Preserved Existing Vehicles",
    description:
      "Rather than replacing working vehicles, the retrofit extends the usefulness of existing cargo tricycles through mechanical enhancement.",
  },
  {
    icon: "package",
    title: "Lower Barrier to Electrification",
    description:
      "Retrofitting existing vehicles has the potential to reduce the financial burden compared with purchasing entirely new electric cargo vehicles.",
  },
  {
    icon: "wrench",
    title: "Compatible with Local Repair",
    description:
      "The architecture is designed to remain understandable and serviceable using existing mechanical repair ecosystems.",
  },
] as const;

export function Impact() {
  return (
    <Section
      id="impact"
      spacing="spacious"
      background="surface"
    >
      <Container>
        <Stagger>
          <Reveal>
            <Badge>
              Expected Impact
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              Engineering Designed Around People
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
              Tirare is intended to improve the everyday experience
              of cargo tricycle operators by reducing physical effort
              while preserving the vehicles, skills and repair
              networks that already exist.
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
            gap="comfortable"
          >
            {IMPACTS.map((impact) => (
              <Reveal key={impact.title}>
                <Card>
                  <Icon
                    name={impact.icon}
                    size="lg"
                  />

                  <Heading
                    level={4}
                    style={{
                      marginTop: theme.spacing.stack.md,
                    }}
                  >
                    {impact.title}
                  </Heading>

                  <Paragraph>
                    {impact.description}
                  </Paragraph>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </div>

        <Reveal>
          <div
            style={{
              marginTop: theme.spacing.section.default,
              display: "flex",
              justifyContent: "center",
            }}
          >
         <Statistic
          value="1 Retrofit"
          label="Designed to preserve an existing cargo tricycle rather than replace it"
         />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Impact;