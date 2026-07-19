"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

export function CallToAction() {
  return (
    <Section
      id="contact"
      spacing="spacious"
      background="surface"
    >
      <Container>
        <Stagger>
          <Reveal>
            <Badge>
              Continue Exploring
            </Badge>
          </Reveal>

          <Reveal>
            <Heading level={2}>
              Engineering Designed for Real-World Mobility
            </Heading>
          </Reveal>

          <Reveal>
            <Paragraph
              size="lg"
              align="center"
              style={{
                maxWidth: "48rem",
                marginInline: "auto",
                color: theme.colors.text.secondary,
              }}
            >
              Tirare is an ongoing engineering effort focused on
              improving cargo mobility through practical retrofit
              design. Explore the proof-of-concept, examine the
              mechanical architecture and follow the project's
              continued development.
            </Paragraph>
          </Reveal>

          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: theme.spacing.stack.md,
                marginTop: theme.spacing.stack.xl,
              }}
            >
              <Button>
                Read Engineering Report
              </Button>

              <Button variant="secondary">
                Explore CAD Model
              </Button>

              <Button variant="ghost">
                Contact Tirare
              </Button>
            </div>
          </Reveal>
        </Stagger>
      </Container>
    </Section>
  );
}

export default CallToAction;