import { css } from "@emotion/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Col, Container, Row } from "react-grid-system";
import ReactStickyBox from "react-sticky-box";
import { Project } from "../../typings";
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

const ProjectTemplate: FC<Props> = ({ pageContext }) => {
  const { project, otherProjects } = pageContext;
  const { name, cover, tags, year, blocks, sourceCode, demo } = project;

  return (
    <Layout pageTitle={name}>
      <Container fluid>
        <Row>
          <Col>
            <div
              css={(theme) =>
                css({
                  marginTop: "4rem",
                  marginBottom: "6rem",
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
              <Heading level={1}>{name}</Heading>
              <div
                css={css({
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                })}
              >
                {tags.map((tag, i) => (
                  <ProjectTag key={`tag-${tag}-${i}`} tag={tag} />
                ))}
              </div>
              <Text
                css={(theme) =>
                  css({
                    fontStyle: "italic",
                    color: theme.colors.primary,
                  })
                }
                size="medium"
              >
                {year}
              </Text>
            </div>
          </Col>
        </Row>
        <Row>
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
                    size="large"
                    variant="secondary"
                    href={sourceCode}
                    toNewPage
                  >
                    Source code
                  </Button>
                )}
                {demo && (
                  <Button size="large" href={demo} toNewPage>
                    Open demo
                  </Button>
                )}
              </div>
            </ReactStickyBox>
          </Col>
          <Col offset={{ xl: 1 }} lg={8}>
            <div
              css={(theme) =>
                css({
                  marginTop: "10rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4rem",
                  [theme.mq.lg]: {
                    gap: "6rem",
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
                    {text && <Text>{text}</Text>}
                  </section>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={9}>
            <div
              css={css({
                marginTop: "16rem",
                marginBottom: "4rem",
              })}
            >
              <div
                css={(theme) =>
                  css({
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "1rem 4rem",
                    marginBottom: "3rem",
                    [theme.mq.lg]: {
                      flexDirection: "row",
                      alignItems: "center",
                    },
                  })
                }
              >
                <Heading level={2}>Other projects</Heading>
                <SimpleButton to="/projects#projects" size="small">
                  More projects
                </SimpleButton>
              </div>
              <ProjectsGrid projects={otherProjects} />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProjectTemplate;
