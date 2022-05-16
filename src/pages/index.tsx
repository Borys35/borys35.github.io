import { css, keyframes } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Col, Container, Row } from "react-grid-system";
import ProjectItem from "../components/blocks/ProjectItem";
import Button from "../components/common/Button";
import ButtonGroup from "../components/common/ButtonGroup";
import Heading from "../components/common/Heading";
import SimpleButton from "../components/common/SimpleButton";
import Text from "../components/common/Text";
import Layout from "../components/specific/Layout";
import theme from "../styles/theme";

// animations
const mainImageFadeIn = keyframes`
  from {
    transform: rotate(5deg) scale(1.6);
    opacity: 0;
  }
  to {
    transform: scale(1.3);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
    transform: translateY(3rem);
  }
  60% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div
        css={css({
          display: "grid",
          gap: "16rem",
          marginBottom: "8rem",
        })}
      >
        {/* Hero */}
        <Container fluid>
          <Row>
            <Col
              lg={4}
              css={css({
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              })}
            >
              <Heading
                level={1}
                css={(theme) =>
                  css({
                    textAlign: "center",
                    marginBottom: "3rem",
                    marginTop: "4rem",
                    paddingBottom: "1rem",
                    animation: `${fadeIn} 1.5s ${theme.timing} .8s both`,
                    [theme.mq.xl]: {
                      marginTop: "0",
                    },
                  })
                }
              >
                Crisp, Unique Web Things*
              </Heading>
              <ButtonGroup css={css({ justifyContent: "center" })}>
                <Button
                  size="large"
                  css={(theme) =>
                    css({
                      animation: `${fadeIn} 1.5s ${theme.timing} 1.2s both`,
                    })
                  }
                >
                  Projects
                </Button>
                <Button
                  size="large"
                  variant="secondary"
                  css={(theme) =>
                    css({
                      animation: `${fadeIn} 1.5s ${theme.timing} 1.4s both`,
                    })
                  }
                >
                  Get in touch
                </Button>
              </ButtonGroup>
            </Col>
            <Col lg={6}>
              <StaticImage
                src="../images/programmer.png"
                alt="Programmer"
                placeholder="tracedSVG"
                css={css({
                  transform: "scale(1.3)",
                  pointerEvents: "none",
                  animation: `${mainImageFadeIn} 1.5s ${theme.timing} .6s both`,
                })}
              />
            </Col>
            <Col
              lg={2}
              css={css({
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              })}
            >
              <Text
                size="medium"
                transform="uppercase"
                css={(theme) =>
                  css({
                    textAlign: "center",
                    marginTop: "4rem",
                    animation: `${fadeIn} 1.5s ${theme.timing} 1s both`,
                    [theme.mq.lg]: { marginTop: "0" },
                  })
                }
              >
                *Fast, reliable and user-friendly apps. Web experience with
                technologies you want on your website.
              </Text>
            </Col>
          </Row>
        </Container>

        {/* About */}
        <Container fluid>
          <Row>
            <Col offset={{ md: 3 }}>
              <div
                css={css({
                  position: "relative",
                })}
              >
                <Text
                  transform="uppercase"
                  size="large"
                  css={css({
                    textAlign: "right",
                    backgroundColor: theme.colors.bg,
                    marginBottom: "2rem",
                  })}
                >
                  Creating next technology web apps, spas and pwas. designing
                  mockups and coding them to work as intended and much more.
                </Text>
                <div
                  css={css({
                    position: "absolute",
                    width: "26rem",
                    height: "26rem",
                    border: `1px solid ${theme.colors.primary}`,
                    borderRadius: "50%",
                    top: "50%",
                    left: 0,
                    transform: `translate(-30%, -50%)`,
                    zIndex: -1,
                  })}
                ></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col offset={{ xs: 3, sm: 7 }}>
              <SimpleButton size="large">About</SimpleButton>
            </Col>
          </Row>
        </Container>

        {/* Featured projects */}
        <Container fluid css={css({ width: "100%" })}>
          <Row>
            <Col md={3}>
              <div
                css={css({
                  position: "relative",
                })}
              >
                <StaticImage
                  src="../images/planet.png"
                  alt=""
                  placeholder="tracedSVG"
                  css={(theme) =>
                    css({
                      position: "absolute",
                      left: "-80%",
                      transform: "translate(0, -40%) rotate(20deg)",
                      pointerEvents: "none",
                      display: "none",
                      [theme.mq.md]: {
                        display: "block",
                      },
                    })
                  }
                />
              </div>
            </Col>
            <Col>
              <Heading level={2}>
                Featured
                <br />
                projects
              </Heading>
              <div
                css={css({
                  marginTop: "6rem",
                  display: "flex",
                  gap: "4rem",
                })}
              >
                <ProjectItem
                  title="Chat App"
                  labels={["React"]}
                  permalink="chat-app"
                />
              </div>
            </Col>
          </Row>
          <Row
            css={css({
              marginTop: "4rem",
            })}
          >
            <Col offset={{ md: 4 }}>
              <Button to="/projects" size="medium" variant="secondary">
                More projects
              </Button>
            </Col>
          </Row>
        </Container>

        {/* Contact */}
        <Container fluid>
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
                <Text size="small" css={css({ marginBottom: "1.5rem" })}>
                  I would love to hear from you and see your projects and ideas.
                </Text>
                <Button size="large">Get in touch</Button>
              </Col>
            </Col>
            <Col xl={5} md={6}>
              <StaticImage
                src="../images/earth.png"
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
      </div>
    </Layout>
  );
};

export default IndexPage;
