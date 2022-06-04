import { css, keyframes } from "@emotion/react";
import React, { FC, useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import ReactStickyBox from "react-sticky-box";
import { Project, Tag } from "../../../../typings";
import { convertTag } from "../../../utils/convertTag";
import Heading from "../../common/Heading";
import Radio from "../../common/Radio";
import ProjectsGrid from "./ProjectsGrid";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  projects: Project[];
}

// animations
const gridFadeIn = keyframes`
  from {
    transform: translateY(-1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// data
const tags: Tag[] = [
  "react",
  "nextjs",
  "gatsby",
  "typescript",
  "vue",
  "svelte",
  "firebase",
  "nodejs",
];

const ProjectsTab: FC<Props> = ({ projects, ...props }) => {
  const [filter, setFilter] = useState<Tag | "all">("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <Container fluid css={css({ padding: "2rem 0" })} {...props}>
      <Row>
        <Col /* xl={2} offset={{ xl: 1 }} */ lg={3}>
          <ReactStickyBox
            offsetTop={40}
            offsetBottom={40}
            css={(theme) =>
              css({
                marginBottom: "3rem",
                [theme.mq.lg]: {
                  marginBottom: "0",
                },
              })
            }
          >
            <Heading level={5} css={css({ marginBottom: "1.25rem" })}>
              Filters
            </Heading>
            <div
              css={(theme) =>
                css({
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem 2rem",
                  [theme.mq.lg]: {
                    flexDirection: "column",
                  },
                })
              }
            >
              <Radio
                label="All"
                checked={"all" === filter}
                onChange={() => {
                  setFilter("all");
                }}
              />
              {tags.map((tag) => (
                <Radio
                  key={`tag-${tag}`}
                  label={convertTag(tag)}
                  checked={tag === filter}
                  onChange={() => {
                    setFilter(tag);
                  }}
                />
              ))}
            </div>
          </ReactStickyBox>
        </Col>
        <Col lg={8}>
          <ProjectsGrid
            key={`projects-${filter}`}
            projects={filteredProjects}
            css={(theme) =>
              css({
                animation: `${gridFadeIn} .7s ${theme.timing} 0.1s both`,
              })
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsTab;
