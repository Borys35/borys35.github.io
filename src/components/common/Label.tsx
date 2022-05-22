import styled from "@emotion/styled";
import React, { FC } from "react";

interface Props {
  title: string;
}

const StyledLabel = styled.div(
  {
    fontSize: "1.1rem",
    padding: ".4rem 1rem",
    borderRadius: ".25rem",
    userSelect: "none",
    "&:hover": {
      transform: "scale(1.15)",
    },
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.bgDarker,
    transition: `0.2s ${theme.timing}`,
  })
);

const Label: FC<Props> = ({ title }) => {
  return <StyledLabel>{title}</StyledLabel>;
};

export default Label;
