"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Tag } from "@/components/ui/Tag";
import { Icon } from "@/components/ui/Icon";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

const INNOVATIONS = [
  {
    icon: "gauge",
    title: "Axle-Based Torque Injection",
    description:
      "Instead of replacing the original drivetrain, Tirare injects electric torque into the existing axle through a dedicated mechanical interface.",
  },
  {
    icon: "wrench",
    title: "Clamp-On Sprocket Concept",
    description:
      "A clamp-mounted sprocket enables power transmission without removing or permanently modifying the factory axle assembly.",
  },
  {
    icon: "shield",
    title: "Preservation-First Architecture",
    description:
      "The retrofit is designed around retaining the original vehicle, manual drivetrain and service ecosystem rather than replacing them.",
  },
  {
    icon: "wrench",
    title: "Field-Serviceable Design",
    description:
      "Component selection and mechanical layout prioritize maintenance using commonly available tools and repair practices.",
  },
] as const;

const TAGS = [
  "Retrofit Engineering",
  "Mechanical Innovation",
  "Axle Architecture",
  "Human-Centred Design",
  "Serviceability",
  "Scalable Mobility",
] as const;

export function PatentInnovation() {
  return (
    <Section 
      id="innovation"
      spacing="spacious">
      <Container>
        <Stagger>
          <Reveal>
            <Badge>
              Innovation
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              Engineering Innovation Behind Tirare
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
              Tirare is built around a preservation-first
              engineering philosophy. Rather than redesigning the
              vehicle, the system introduces new mechanical
              capabilities while respecting the existing drivetrain,
              maintenance ecosystem and working practices.
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
            {INNOVATIONS.map((innovation) => (
              <Reveal key={innovation.title}>
                <Card>
                  <Icon
                    name={innovation.icon}
                    size="lg"
                  />

                  <Heading
                    level={4}
                    style={{
                      marginTop: theme.spacing.stack.md,
                    }}
                  >
                    {innovation.title}
                  </Heading>

                  <Paragraph>
                    {innovation.description}
                  </Paragraph>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </div>

        <Reveal>
          <Card
            style={{
              marginTop: theme.spacing.section.default,
            }}
          >
            <Heading level={4}>
              Core Design Themes
            </Heading>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: theme.spacing.stack.sm,
                marginTop: theme.spacing.stack.lg,
              }}
            >
              {TAGS.map((tag) => (
                <Tag key={tag}>
                  {tag}
                </Tag>
              ))}
            </div>

            <Paragraph
              style={{
                marginTop: theme.spacing.stack.lg,
              }}
            >
              The innovation lies not in a single component, but in
              the integration of mechanical simplicity, retrofit
              compatibility and practical engineering constraints
              into a cohesive architecture.
            </Paragraph>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}

export default PatentInnovation;