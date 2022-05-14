import { css } from "@emotion/react";
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

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div
        css={css({
          display: "grid",
          gap: "16rem",
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
                css={css({
                  textAlign: "center",
                  marginBottom: "4rem",
                })}
              >
                Crisp, Unique Web Things*
              </Heading>
              <ButtonGroup css={css({ justifyContent: "center" })}>
                <Button size="large">Projects</Button>
                <Button size="large" variant="secondary">
                  Get in touch
                </Button>
              </ButtonGroup>
            </Col>
            <Col lg={6}>
              <StaticImage
                src="../images/programmer.png"
                alt="Programmer"
                placeholder="tracedSVG"
                css={css({ transform: "scale(1.3)", pointerEvents: "none" })}
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
                css={css({ textAlign: "center" })}
              >
                *Web experience with technology you want on your site
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
                  css={css({
                    position: "absolute",
                    left: "-80%",
                    transform: "translate(0, -40%) rotate(20deg)",
                    pointerEvents: "none",
                  })}
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
        <Container fluid>
          <Row>
            <Col offset={{ md: 2 }} md={4}>
              <Heading level={2} css={css({ marginBottom: "3rem" })}>
                Let's work together
              </Heading>
              <Col offset={{ md: 3 }} md={8}>
                <Text size="small" css={css({ marginBottom: "1rem" })}>
                  I would love to hear from you and see your projects and ideas.
                </Text>
                <Button size="large" css={css({ marginTop: "auto" })}>
                  Get in touch
                </Button>
              </Col>
            </Col>
            <Col md={4}>
              <StaticImage
                src="../images/earth.png"
                alt="Earth"
                placeholder="tracedSVG"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;
