import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  size?: "small" | "medium" | "large";
  to?: string;
  href?: string;
  toNewPage?: boolean;
  target?: string;
}

const StyledButton = styled.button<Props>(
  {
    all: "unset",
    position: "relative",
    fontWeight: "bold",
    wordSpacing: ".5em",
    cursor: "pointer",

    "& svg": {
      position: "absolute",
      left: "100%",
      top: "50%",
      transform: "translate(.75em, -50%)",
    },

    "&:hover svg": {
      transform: "translate(1.25em, -50%)",
    },
  },
  ({ theme, size }) => ({
    color: theme.colors.primary,
    fontSize:
      size === "small" ? "1.5rem" : size === "medium" ? "2.25rem" : "3rem",

    "&, & svg": {
      transition: `0.3s ${theme.timing}`,
    },

    // "&:hover, &:hover svg path": {
    //   color: theme.colors.text,
    //   fill: theme.colors.text,
    // },
  })
);

const SimpleButton: FC<Props> = ({
  children,
  to,
  href,
  toNewPage,
  ...props
}) => {
  const content = (
    <>
      {children}{" "}
      <svg
        width="58"
        height="16"
        viewBox="0 0 58 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        css={css`
          vertical-align: middle;
        `}
      >
        <path
          d="M57.7071 8.70711C58.0976 8.31658 58.0976 7.68342 57.7071 7.29289L51.3431 0.928932C50.9526 0.538408 50.3195 0.538408 49.9289 0.928932C49.5384 1.31946 49.5384 1.95262 49.9289 2.34315L55.5858 8L49.9289 13.6569C49.5384 14.0474 49.5384 14.6805 49.9289 15.0711C50.3195 15.4616 50.9526 15.4616 51.3431 15.0711L57.7071 8.70711ZM0 9H57V7H0V9Z"
          fill="#E74032"
        />
      </svg>
    </>
  );
  if (to)
    return (
      <StyledButton as={Link} to={to} {...props}>
        {content}
      </StyledButton>
    );

  if (href)
    return (
      <StyledButton
        as="a"
        href={href}
        target={toNewPage ? "_blank" : undefined}
        {...props}
      >
        {content}
      </StyledButton>
    );

  return <StyledButton {...props}>{content}</StyledButton>;
};

export default SimpleButton;
