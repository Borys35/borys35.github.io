import { css } from "@emotion/react";
import React, { FC } from "react";
import Heading from "../common/Heading";
import Label from "../common/Label";
import SimpleButton from "../common/SimpleButton";

interface Props {
  title: string;
  labels: string[];
  permalink: string;
}

const ProjectItem: FC<Props> = ({ title, labels, permalink }) => {
  return (
    <div>
      <Heading level={4} css={css({ marginBottom: ".75rem" })}>
        {title}
      </Heading>
      <div
        css={css({
          display: "flex",
          gap: "1rem",
          marginBottom: "1.25rem",
        })}
      >
        {labels.map((label) => (
          <Label title={label} />
        ))}
      </div>
      <SimpleButton size="small" to={`/projects/${permalink}`}>
        View
      </SimpleButton>
    </div>
  );
};

export default ProjectItem;
