import styled from "@emotion/styled";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "small" | "medium" | "large";
  transform?: "uppercase" | "lowercase";
}

const StyledText = styled.p<Props>(
  { lineHeight: 1.5 },
  ({ theme, size, transform }) => ({
    color: theme.colors.text,
    fontSize:
      size === "small" ? "1.2rem" : size === "medium" ? "1.5rem" : "2rem",
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
