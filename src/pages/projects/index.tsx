import { css, keyframes } from "@emotion/react";
import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-grid-system";
import ContactSection from "../../components/blocks/ContactSection";
import Button from "../../components/common/Button";
import Heading from "../../components/common/Heading";
import Text from "../../components/common/Text";
import Layout from "../../components/specific/Layout";
import ProjectsTab from "../../components/specific/projects/ProjectsTab";

// query
export const pageQuery = graphql`
  query ProjectsQuery {
    allProject {
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
    opacity: 0;
    transform: translateY(-10rem) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const ProjectPage = ({ data }: PageProps<any>) => {
  return (
    <Layout pageTitle="Projects">
      <div
        css={(theme) =>
          css({
            display: "flex",
            flexDirection: "column",
            gap: "10rem",
            marginBottom: "8rem",
            [theme.mq.lg]: {
              gap: "16rem",
            },
          })
        }
      >
        <header>
          <Container fluid>
            <Row>
              <Col>
                <div
                  css={(theme) =>
                    css({
                      [theme.mq.lg]: {
                        position: "relative",
                        display: "grid",
                        gridTemplateColumns: "1fr 2fr 1fr",
                        gridTemplateRows: "3fr 1fr",
                        height: "80vh",
                      },
                    })
                  }
                >
                  <StaticImage
                    src="../../images/projects-hero.png"
                    alt=""
                    placeholder="tracedSVG"
                    css={(theme) =>
                      css({
                        pointerEvents: "none",
                        marginTop: "-5rem",
                        zIndex: -1,
                        animation: `${mainImageFadeIn} 1s ${theme.timing} both`,

                        [theme.mq.lg]: {
                          gridArea: "1 / 1 / 3 / 4",
                        },
                        [theme.mq.xl]: {
                          gridArea: "1 / 2 / 3 / 3",
                        },
                      })
                    }
                  />
                  <div
                    css={(theme) =>
                      css({
                        maxWidth: "max(60%, 360px)",
                        [theme.mq.lg]: {
                          gridArea: "2 / 1 / 3 / 2",
                          maxWidth: "unset",
                        },
                      })
                    }
                  >
                    <Heading
                      level={1}
                      css={(theme) =>
                        css({
                          paddingBottom: "0.15em",
                          animation: `fade-in 1s ${theme.timing} .5s both`,
                        })
                      }
                    >
                      Projects
                    </Heading>
                    <Text
                      transform="uppercase"
                      size="small"
                      css={(theme) =>
                        css({
                          marginTop: "1.5rem",
                          animation: `fade-in 1s ${theme.timing} .6s both`,
                        })
                      }
                    >
                      Projects from 2019 to 2022. You can filter and view all of
                      them.
                    </Text>
                  </div>
                  <div
                    css={(theme) =>
                      css({
                        marginTop: "3rem",
                        [theme.mq.lg]: {
                          marginTop: "0",
                          gridArea: "2 / 3 / 3 / 4",
                          display: "grid",
                          placeContent: "flex-end",
                        },
                      })
                    }
                  >
                    <Button
                      size="large"
                      onClick={() => {
                        const el = document.getElementById("projects");
                        el?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                      css={(theme) =>
                        css({
                          animation: `fade-in 1s ${theme.timing} .7s both`,
                        })
                      }
                    >
                      Dive into
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
            {/* <Row>
              <Col xl={4} lg={5} offset={{ xl: 1 }}>
                <Heading
                  level={1}
                  css={(theme) =>
                    css({
                      marginTop: "6rem",
                      paddingBottom: "0.15em",
                      animation: `fade-in 1s ${theme.timing} .5s both`,
                    })
                  }
                >
                  Projects
                </Heading>
                <Text
                  transform="uppercase"
                  size="medium"
                  css={(theme) =>
                    css({
                      marginTop: "1.5rem",
                      animation: `fade-in 1s ${theme.timing} .6s both`,
                    })
                  }
                >
                  Projects from 2019 to 2022. You can filter and view all of
                  them.
                </Text>
              </Col>
              <Col lg={6} offset={{ lg: 1 }}>
                <StaticImage
                  src="../../images/projects-hero.png"
                  alt=""
                  placeholder="tracedSVG"
                  css={(theme) =>
                    css({
                      display: "none",
                      position: "absolute",
                      top: "-5rem",
                      userSelect: "none",
                      zIndex: -1,
                      animation: `${mainImageFadeIn} 1s ${theme.timing} both`,

                      [theme.mq.lg]: {
                        display: "block",
                      },
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg={3} offset={{ lg: 3 }}>
                <div
                  css={(theme) =>
                    css({
                      marginTop: "3.5rem",
                      [theme.mq.lg]: { marginBottom: "8rem" },
                    })
                  }
                >
                  <Button
                    size="large"
                    onClick={() => {
                      const el = document.getElementById("projects");
                      el?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    css={(theme) =>
                      css({
                        animation: `fade-in 1s ${theme.timing} .7s both`,
                      })
                    }
                  >
                    Dive into
                  </Button>
                </div>
              </Col>
            </Row> */}
          </Container>
        </header>

        <ProjectsTab
          id="projects"
          projects={data.allProject.nodes}
          css={css({
            width: "100%",
          })}
        />

        <ContactSection />
      </div>
    </Layout>
  );
};

export default ProjectPage;
