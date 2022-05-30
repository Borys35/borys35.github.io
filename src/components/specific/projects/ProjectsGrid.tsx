import styled from "@emotion/styled";
import React, { FC } from "react";
import { Project } from "../../../../typings";
import ProjectItem from "./ProjectItem";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  projects: Project[];
}

const StyledGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
  gap: "2rem",
});

const ProjectsGrid: FC<Props> = ({ projects, ...props }) => {
  return (
    <StyledGrid {...props}>
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </StyledGrid>
  );
};

export default ProjectsGrid;
