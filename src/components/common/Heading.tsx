import styled from "@emotion/styled";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const StyledHeading = styled.h1({
  lineHeight: 1,
});

const Heading: FC<Props> = ({ children, level, ...props }) => {
  const LevelHeading = `h${level}` as const;

  return (
    <StyledHeading as={LevelHeading} {...props}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
