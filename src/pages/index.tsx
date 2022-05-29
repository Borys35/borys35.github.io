import { css, keyframes } from "@emotion/react";
import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Col, Container, Row } from "react-grid-system";
import ContactSection from "../components/blocks/ContactSection";
import Button from "../components/common/Button";
import ButtonGroup from "../components/common/ButtonGroup";
import Heading from "../components/common/Heading";
import Text from "../components/common/Text";
import Layout from "../components/specific/Layout";
import ProjectsGrid from "../components/specific/projects/ProjectsGrid";
import SocialList from "../components/specific/socials/SocialList";
import theme from "../styles/theme";

// query
export const pageQuery = graphql`
  query HomeQuery {
    allProject(filter: { featured: { eq: true } }) {
      nodes {
        id
        name
        permalink
        tags
        cover {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

// animations
const mainImageFadeIn = keyframes`
  from {
    transform: rotate(5deg) scale(1.5);
    opacity: 0;
  }
  to {
    transform: scale(1.1);
    opacity: 1;
  }
`;

// markup
const IndexPage = ({ data }: PageProps<any>) => {
  return (
    <Layout pageTitle="Home">
      <div
        css={css({
          display: "grid",
          gap: "20rem",
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
                    paddingRight: ".5rem",
                    animation: `fade-in 1s ${theme.timing} .5s both`,
                    [theme.mq.lg]: {
                      textAlign: "left",
                    },
                    [theme.mq.xl]: {
                      marginTop: "0",
                    },
                  })
                }
              >
                Crisp, Unique Web Things*
              </Heading>
              <ButtonGroup
                css={(theme) =>
                  css({
                    justifyContent: "center",

                    [theme.mq.lg]: {
                      justifyContent: "flex-start",
                    },
                  })
                }
              >
                <Button
                  size="large"
                  to="/projects"
                  css={(theme) =>
                    css({
                      animation: `fade-in 1s ${theme.timing} .8s both`,
                    })
                  }
                >
                  Projects
                </Button>
                <Button
                  size="large"
                  variant="secondary"
                  to="/contact"
                  css={(theme) =>
                    css({
                      animation: `fade-in 1s ${theme.timing} .9s both`,
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
                  pointerEvents: "none",
                  animation: `${mainImageFadeIn} 1s ${theme.timing} both`,
                })}
              />
            </Col>
            <Col
              lg={2}
              css={(theme) =>
                css({
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",

                  [theme.mq.lg]: {
                    alignItems: "flex-end",
                  },
                })
              }
            >
              <Text
                size="medium"
                transform="uppercase"
                css={(theme) =>
                  css({
                    textAlign: "center",
                    marginTop: "4rem",
                    marginBottom: "2rem",
                    animation: `fade-in 1s ${theme.timing} .6s both`,
                    [theme.mq.lg]: { marginTop: "0", textAlign: "right" },
                  })
                }
              >
                *Fast, reliable and user-friendly apps. Web experience with
                technologies you want on your website.
              </Text>
              <SocialList
                css={(theme) =>
                  css({ animation: `fade-in 1s ${theme.timing} .7s both` })
                }
              />
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
              {/* <SimpleButton size="large" to="/about">
                About
              </SimpleButton> */}
              <Button size="large" to="/about">
                About
              </Button>
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
            <Col md={5}>
              <Heading level={2} css={css({ marginBottom: "4rem" })}>
                Featured
                <br />
                projects
              </Heading>
              {/* <div
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
              </div> */}
              <ProjectsGrid projects={data.allProject.nodes} />
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
        <ContactSection />
      </div>
    </Layout>
  );
};

export default IndexPage;
