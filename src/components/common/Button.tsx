import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  to?: string;
  href?: string;
  toNewPage?: boolean;
  target?: string;
}

const StyledButton = styled.button<Props>`
  all: unset;
  padding: 0.5em 2em;
  border-radius: 3em;
  font-weight: bold;
  cursor: pointer;
  transition: ${({ theme }) => `0.3s ${theme.timing}`};

  font-size: ${({ size }) =>
    size === "small" ? "1rem" : size === "medium" ? "1.25rem" : "1.5rem"};
  color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.bg : theme.colors.primary};
  background-color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.primary : theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.bg};
  }
`;

const Button: FC<Props> = ({
  children,
  variant = "primary",
  size = "small",
  to,
  href,
  toNewPage,
  ...props
}) => {
  const genericProps = { variant, size, ...props };

  if (to)
    return (
      <StyledButton as={Link} to={to} {...genericProps}>
        {children}
      </StyledButton>
    );
  if (href)
    return (
      <StyledButton
        as="a"
        href={href}
        target={toNewPage ? "_blank" : undefined}
        {...genericProps}
      >
        {children}
      </StyledButton>
    );
  return <StyledButton {...genericProps}>{children}</StyledButton>;
};

export default Button;
