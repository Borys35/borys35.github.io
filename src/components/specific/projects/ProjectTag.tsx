import styled from "@emotion/styled";
import React, { FC } from "react";
import { Tag } from "../../../../typings";
import { convertTag } from "../../../utils/convertTag";
import Text from "../../common/Text";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tag: Tag;
}

const StyledProjectTag = styled.div(
  {
    padding: "0.2rem 0.8rem",
    borderRadius: "0.5rem",
    fontWeight: "bold",
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.text,
    color: theme.colors.bg,
  })
);

const ProjectTag: FC<Props> = ({ tag, ...props }) => {
  return (
    <StyledProjectTag {...props}>
      <Text size="xsmall" transform="uppercase">
        {convertTag(tag)}
      </Text>
    </StyledProjectTag>
  );
};

export default ProjectTag;
