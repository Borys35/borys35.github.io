import { css, keyframes } from "@emotion/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Col, Container, Row } from "react-grid-system";
import ReactStickyBox from "react-sticky-box";
import { Project } from "../../typings";
import ContactSection from "../components/blocks/ContactSection";
import Button from "../components/common/Button";
import Heading from "../components/common/Heading";
import SimpleButton from "../components/common/SimpleButton";
import Text from "../components/common/Text";
import Layout from "../components/specific/Layout";
import ProjectsGrid from "../components/specific/projects/ProjectsGrid";
import ProjectTag from "../components/specific/projects/ProjectTag";

interface Props {
  pageContext: {
    project: Project;
    otherProjects: Project[];
  };
}

// animations
const contentFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProjectTemplate: FC<Props> = ({ pageContext }) => {
  const { project, otherProjects } = pageContext;
  const { name, cover, tags, year, blocks, sourceCode, demo } = project;

  return (
    <Layout pageTitle={name}>
      <Container fluid>
        <Row
          css={css({
            marginTop: "5rem",
            marginBottom: "9rem",
          })}
        >
          <Col>
            <div
              css={(theme) =>
                css({
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem 1rem",
                  [theme.mq.lg]: {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  },
                })
              }
            >
              <Heading
                level={1}
                css={(theme) =>
                  css({
                    animation: `fade-in 1s ${theme.timing} 0.5s both`,
                  })
                }
              >
                {name}
              </Heading>
              <div
                css={css({
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                })}
              >
                {tags.map((tag, i) => (
                  <ProjectTag
                    key={`tag-${tag}-${i}`}
                    tag={tag}
                    css={(theme) =>
                      css({
                        animation: `fade-in 1s ${theme.timing} ${
                          0.7 + i * 0.1
                        }s both`,
                      })
                    }
                  />
                ))}
              </div>
              <Text
                css={(theme) =>
                  css({
                    fontStyle: "italic",
                    color: theme.colors.primary,
                    paddingRight: ".15em",
                    animation: `fade-in 1s ${theme.timing} 0.6s both`,
                  })
                }
                size="medium"
              >
                {year}
              </Text>
            </div>
          </Col>
        </Row>
        <Row
          css={(theme) =>
            css({
              marginBottom: "16rem",
              animation: `${contentFadeIn} 1.5s ${theme.timing} 1.5s both`,
            })
          }
        >
          <Col lg={4} xl={3}>
            <ReactStickyBox offsetTop={40} offsetBottom={40}>
              <div
                css={(theme) =>
                  css({
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    [theme.mq.lg]: {
                      paddingRight: theme.horizontalPadding,
                    },
                  })
                }
              >
                {sourceCode && (
                  <Button
                    size="medium"
                    variant="secondary"
                    href={sourceCode}
                    toNewPage
                  >
                    Source code
                  </Button>
                )}
                {demo && (
                  <Button size="medium" href={demo} toNewPage>
                    Open demo
                  </Button>
                )}
              </div>
            </ReactStickyBox>
          </Col>
          <Col offset={{ lg: 1, xl: 2 }} lg={7}>
            <div
              css={(theme) =>
                css({
                  display: "flex",
                  flexDirection: "column",
                  gap: "4rem",
                  marginTop: "6rem",
                  [theme.mq.lg]: {
                    gap: "6rem",
                    marginTop: "0",
                  },
                })
              }
            >
              {blocks.map(({ heading, image, text }) => {
                const img = image && getImage(image);
                return (
                  <section
                    css={css({
                      textAlign: "right",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    })}
                  >
                    {img && (
                      <GatsbyImage image={img} alt={heading || "Image"} />
                    )}
                    {heading && <Heading level={3}>{heading}</Heading>}
                    {text && <Text size="medium">{text}</Text>}
                  </section>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row css={css({ marginBottom: "12rem" })}>
          <Col xl={9}>
            <div>
              <div
                css={(theme) =>
                  css({
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "1rem 4rem",
                    marginBottom: "2rem",
                    [theme.mq.lg]: {
                      flexDirection: "row",
                      alignItems: "center",
                    },
                  })
                }
              >
                <Heading level={3}>Next projects</Heading>
                <SimpleButton to="/projects#projects" size="small">
                  More projects
                </SimpleButton>
              </div>
              <ProjectsGrid projects={otherProjects} />
            </div>
          </Col>
        </Row>
        <ContactSection />
      </Container>
    </Layout>
  );
};

export default ProjectTemplate;
