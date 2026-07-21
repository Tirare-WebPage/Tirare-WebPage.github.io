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

const PRINCIPLES = [
  {
    title: "Human Remains Necessary",
    description:
      "The rider is never removed from the propulsion system. Tirare is designed around partnership rather than automation.",
  },

  {
    title: "Mechanical Before Electronic",
    description:
      "Rider intent should be communicated through physical behaviour before being interpreted by electronics.",
  },

  {
    title: "Amplification Over Replacement",
    description:
      "The objective is not replacing labour with electricity. The objective is multiplying useful human effort.",
  },

  {
    title: "Retrofit Reality",
    description:
      "Architecture must respect the vehicles, repair networks and operating conditions that already exist.",
  },

  {
    title: "Entropy Tolerance",
    description:
      "Systems deployed in the real world encounter dust, overload, misalignment, abuse and imperfect maintenance. The architecture must tolerate all of them.",
  },

  {
    title: "Platform Scalability",
    description:
      "The solution must extend across vehicle variations without requiring complete redesign for every deployment.",
  },
] as const;

export function SystemArchitecture() {
  return (
    <Section
      id="system-architecture"
      spacing="spacious"
      background="surface"
    >
      <Container size="wide">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              System Architecture
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              The Architecture Is Not The Motor
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              style={{
                maxWidth: "64rem",
              }}
            >
              Most electrification projects begin with hardware.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                maxWidth: "64rem",
              }}
            >
              Motor selection. Battery sizing. Controller tuning.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                maxWidth: "64rem",
                fontWeight: 600,
              }}
            >
              Tirare begins one layer higher.
            </Paragraph>
          </Reveal>

          <Reveal>
            <Paragraph
              style={{
                maxWidth: "64rem",
              }}
            >
              Before deciding how power should be delivered, the
              architecture first defines how human effort,
              machine assistance and vehicle behaviour should
              relate to one another.
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
          >
<Reveal>
  <div>
    <Card
      padding="none"
      variant="elevated"
      style={{
        overflow: "hidden",
      }}
    >
      <video
        controls
        playsInline
        loop
        muted
        style={{
          width: "100%",
          display: "block",
          aspectRatio: "16 / 9",
          objectFit: "contain",
          background: "#050505",
        }}
      >
        <source
          src="/videos/mechanism-animation.mp4"
          type="video/mp4"
        />
      </video>
    </Card>

    <Paragraph
      style={{
        textAlign: "center",
        marginTop: "1rem",
        fontSize: "0.95rem",
        color: theme.colors.text.secondary,
      }}
    >
      ▶ Animation showing Tirare's assistive drivetrain
      architecture, where human effort and electric
      assistance contribute torque simultaneously.
    </Paragraph>
  </div>
</Reveal>

            <Reveal>
              <Card variant="elevated">
                <Heading level={3}>
                  Architecture First
                </Heading>

                <Paragraph>
                  Most electrification projects start by
                  selecting components.
                </Paragraph>

                <Paragraph>
                  Tirare starts by defining the relationship
                  between rider, machine and vehicle.
                </Paragraph>

                <Paragraph>
                  Components are replaceable.
                </Paragraph>

                <Paragraph>
                  Architecture is not.
                </Paragraph>

                <Paragraph>
                  Every subsystem exists to preserve
                  human participation while increasing
                  useful output.
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
          <Card
            variant="elevated"
            style={{
              textAlign: "center",
              padding: "4rem",
            }}
          >
            <Heading level={2}>
              Human Torque
              <br />
              +
              <br />
              Motor Torque
              <br />
              =
              <br />
              Axle Torque
            </Heading>

            <Paragraph
              style={{
                marginTop: "2rem",
                maxWidth: "50rem",
                marginInline: "auto",
              }}
            >
              The rider remains part of the system.
            </Paragraph>

            <Paragraph>
              The motor becomes another pair of legs.
            </Paragraph>
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
            {PRINCIPLES.map((principle) => (
              <Reveal key={principle.title}>
                <Card>
                  <Heading level={4}>
                    {principle.title}
                  </Heading>

                  <Paragraph>
                    {principle.description}
                  </Paragraph>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </div>

        <div
          style={{
            marginTop: theme.spacing.section.spacious,
          }}
        >
          <Card variant="elevated">
            <Heading level={3}>
              Architecture Before Components
            </Heading>

            <Paragraph>
              Motors can change.
            </Paragraph>

            <Paragraph>
              Batteries can change.
            </Paragraph>

            <Paragraph>
              Controllers can change.
            </Paragraph>

            <Paragraph>
              Manufacturing methods can change.
            </Paragraph>

            <Paragraph
              style={{
                fontWeight: 600,
              }}
            >
              The philosophy cannot.
            </Paragraph>

            <Paragraph>
              Tirare's architecture is ultimately a framework for
              distributing work between humans and machines in a
              way that improves productivity without removing the
              rider from the system.
            </Paragraph>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export default SystemArchitecture;