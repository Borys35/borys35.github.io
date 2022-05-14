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
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.bgDarker,
  })
);

const Label: FC<Props> = ({ title }) => {
  return <StyledLabel>{title}</StyledLabel>;
};

export default Label;
