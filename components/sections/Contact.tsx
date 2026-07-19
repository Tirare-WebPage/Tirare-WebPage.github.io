"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Button } from "@/components/ui/Button";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

import { theme } from "@/lib/theme";

export function Contact() {
  return (
    <Section
      id="contact"
      spacing="spacious"
      background="surface"
    >
      <Container size="content">
        <Stagger>
          <Reveal>
            <Badge variant="engineering">
              Contact
            </Badge>
          </Reveal>

          <Reveal>
            <Card
              variant="elevated"
              style={{
                textAlign: "center",
                padding: "4rem",
              }}
            >
              <Heading level={2}>
                The Work Has Only
                Just Begun.
              </Heading>

              <Paragraph
                size="lg"
                style={{
                  marginTop: "1.5rem",
                  maxWidth: "50rem",
                  marginInline: "auto",
                  color: theme.colors.text.secondary,
                }}
              >
                Tirare is currently advancing through
                engineering development, validation and
                deployment planning.
              </Paragraph>

              <Paragraph
                style={{
                  marginTop: "1rem",
                }}
              >
                We welcome conversations with engineers,
                researchers, manufacturers, institutions
                and organizations interested in mobility,
                accessibility and human-centered engineering.
              </Paragraph>

              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button>
                  Contact Tirare
                </Button>
              </div>
            </Card>
          </Reveal>
        </Stagger>
      </Container>
    </Section>
  );
}

export default Contact;