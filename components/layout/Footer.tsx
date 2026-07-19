import type { HTMLAttributes } from "react";

import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { Paragraph } from "@/components/ui/Paragraph";
import { Heading } from "@/components/ui/Heading";
import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  companyName?: string;
  year?: number;
}

export function Footer({
  companyName = "Tirare Mobility Technologies",
  year = new Date().getFullYear(),
  className,
  style,
  ...props
}: FooterProps) {
  return (
    <footer
      className={cn(className)}
      style={{
        borderTop: `1px solid ${theme.colors.border.subtle}`,
        background: theme.colors.background.primary,
        paddingBlock: theme.spacing.footer.top,
        ...style,
      }}
      {...props}
    >
      <Container>
        <Grid columns={2}>
          <div>
            <Heading level={4}>
              {companyName}
            </Heading>

            <Paragraph
              variant="sm"
              color="secondary"
              style={{
                marginTop: theme.spacing.stack.sm,
                maxWidth: "36rem",
              }}
            >
              Engineering retrofit platforms for dignified mobility.
            </Paragraph>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: theme.spacing.stack.sm,
            }}
          >
            <Paragraph variant="sm" color="tertiary">
              © {year} {companyName}
            </Paragraph>

            <Paragraph variant="sm" color="tertiary">
              Built with engineering discipline.
            </Paragraph>
          </div>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;