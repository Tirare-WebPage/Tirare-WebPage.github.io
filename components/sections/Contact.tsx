"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";

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
                <br />
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
                engineering development, validation,
                intellectual property protection and
                deployment planning.
              </Paragraph>

              <Paragraph
                style={{
                  marginTop: "1rem",
                  maxWidth: "50rem",
                  marginInline: "auto",
                }}
              >
                We welcome conversations with engineers,
                manufacturers, researchers, institutions,
                mobility organizations, grant programs and
                potential collaborators interested in
                human-centered transportation systems.
              </Paragraph>

              <div
                style={{
                  marginTop: "3rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <Paragraph
                  style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                  }}
                >
                  Anurag Mishra
                </Paragraph>

                <Paragraph>
                  Founder
                  <br />
                  Tirare Mobility Technologies Pvt. Ltd.
                </Paragraph>

                <Paragraph>
                  📧 anuragfromtirare@gmail.com
                </Paragraph>

                <Paragraph>
                  📞 +91 96506 10688
                </Paragraph>

                <Paragraph>
                  🔗 LinkedIn
                </Paragraph>

                <a
                  href="https://www.linkedin.com/in/anurag-mishra-b25733340/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.colors.accent.primary,
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  linkedin.com/in/anurag-mishra-b25733340
                </a>
              </div>
            </Card>
          </Reveal>
        </Stagger>
      </Container>
    </Section>
  );
}

export default Contact;