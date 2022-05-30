import styled from "@emotion/styled";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "xsmall" | "small" | "medium" | "large";
  transform?: "uppercase" | "lowercase";
}

const StyledText = styled.p<Props>(
  { lineHeight: 1.5 },
  ({ size, transform }) => ({
    fontSize:
      size === "xsmall"
        ? "1rem"
        : size === "small"
        ? "1.2rem"
        : size === "medium"
        ? "1.45rem"
        : "1.7rem",
    textTransform:
      transform === "uppercase"
        ? "uppercase"
        : transform === "lowercase"
        ? "lowercase"
        : "none",
  })
);

const Text: FC<Props> = ({ children, size = "small", ...props }) => {
  return (
    <StyledText size={size} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
