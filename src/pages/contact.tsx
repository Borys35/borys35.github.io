import { css, keyframes } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-grid-system";
import Heading from "../components/common/Heading";
import SimpleButton from "../components/common/SimpleButton";
import Text from "../components/common/Text";
import Layout from "../components/specific/Layout";
import SocialList from "../components/specific/socials/SocialList";

// animations
const mainImageFadeIn = keyframes`
  from {
    transform: scale(1.2) rotate(5deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  to {
    transform: scale(1) rotate(0);
  }
`;

// data
const email = "boryskac10@gmail.com";

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
      <Container fluid>
        <Row css={css({ minHeight: "80vh", padding: "2rem 0" })}>
          <Col lg={6}>
            <Heading
              level={1}
              css={(theme) =>
                css({
                  marginTop: "4rem",
                  marginBottom: "2rem",
                  animation: `fade-in 1s ${theme.timing} .5s both`,
                })
              }
            >
              Get in touch
            </Heading>
            <Text
              transform="uppercase"
              size="medium"
              css={(theme) =>
                css({
                  marginBottom: "6rem",
                  animation: `fade-in 1s ${theme.timing} .6s both`,
                })
              }
            >
              Waiting for your message.
            </Text>
            <div
              css={(theme) =>
                css({
                  display: "flex",
                  gap: "1rem 4rem",
                  flexWrap: "wrap",
                  marginBottom: "6rem",
                  [theme.mq.lg]: {
                    marginBottom: "0",
                  },
                })
              }
            >
              <div
                css={(theme) =>
                  css({
                    animation: `fade-in 1s ${theme.timing} .7s both`,
                    display: "flex",
                    flexDirection: "column",
                    gap: ".2rem",
                  })
                }
              >
                <Text transform="lowercase">Socials</Text>
                <SocialList />
              </div>
              <div
                css={(theme) =>
                  css({
                    animation: `fade-in 1s ${theme.timing} .8s both`,
                    display: "flex",
                    flexDirection: "column",
                    gap: ".2rem",
                    paddingRight: "5rem",
                  })
                }
              >
                <Text transform="lowercase">E-mail</Text>
                <SimpleButton href={`mailto:${email}`} size="small">
                  {email}
                </SimpleButton>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            css={css({
              position: "relative",
            })}
          >
            <StaticImage
              src="../images/earth.png"
              alt="Earth"
              placeholder="tracedSVG"
              css={(theme) =>
                css({
                  animation: `${mainImageFadeIn} 1.2s ${theme.timing} both`,
                })
              }
            />
            <div
              css={(theme) =>
                css({
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: `translate(${theme.horizontalPadding}, 2.1rem)`,
                  width: "70%",
                  height: "65%",
                  zIndex: -1,
                  backgroundColor: theme.colors.text,
                })
              }
            ></div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ContactPage;
