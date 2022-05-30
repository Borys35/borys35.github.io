import { css } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Col, Container, Row } from "react-grid-system";
import Button from "../common/Button";
import Heading from "../common/Heading";
import Text from "../common/Text";
import SocialList from "../specific/socials/SocialList";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ContactSection: FC<Props> = ({ ...props }) => {
  return (
    <Container fluid {...props}>
      <Row>
        <Col offset={{ xl: 2, lg: 1 }} xl={4} lg={5} md={6}>
          <Heading
            level={2}
            css={(theme) =>
              css({
                marginBottom: "2.5rem",
                [theme.mq.lg]: { marginBottom: "4rem" },
              })
            }
          >
            Let's work together
          </Heading>
          <Col offset={{ lg: 3 }} lg={9}>
            <SocialList css={css({ marginBottom: "1rem" })} />
            <Text size="small" css={css({ marginBottom: "2rem" })}>
              I would love to hear from you and see your projects and ideas.
            </Text>
            <Button size="large" to="/contact">
              Get in touch
            </Button>
          </Col>
        </Col>
        <Col xl={5} md={6}>
          <StaticImage
            src="../../images/earth.png"
            alt="Earth"
            placeholder="tracedSVG"
            css={(theme) =>
              css({
                pointerEvents: "none",
                [theme.mq.lg]: {
                  marginTop: "-6rem",
                },
              })
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
