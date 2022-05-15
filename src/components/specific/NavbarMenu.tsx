import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { FC } from "react";
import Heading from "../common/Heading";
import Text from "../common/Text";

interface Props {
  onClose: () => void;
}

const StyledMenu = styled.div(
  {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.text,
    color: theme.colors.bg,
    padding: `1.5rem ${theme.horizontalPadding}`,
  })
);

const StyledList = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  textAlign: "center",
  flex: 1,
});

// data
const links = [
  { title: "Home", to: "/" },
  { title: "Projects", to: "/" },
  { title: "About", to: "/" },
  { title: "Get in touch", to: "/", colored: true },
];

const NavbarMenu: FC<Props> = ({ onClose }) => {
  const hours = new Date().getHours();

  return (
    <StyledMenu>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClose}
        css={(theme) =>
          css({
            position: "absolute",
            right: theme.horizontalPadding,
            top: "1rem",
            cursor: "pointer",
          })
        }
      >
        <g id="x">
          <path id="lin2" d="M1 1L29.2843 29.2843" stroke="#FDFFFF" />
          <path id="line2" d="M1 29.2843L29.2843 1" stroke="#FDFFFF" />
        </g>
      </svg>
      <StyledList>
        <Text
          size="small"
          css={(theme) =>
            css({
              color: theme.colors.bg,
            })
          }
        >
          Good{" "}
          {hours > 6 && hours < 12
            ? "morning"
            : hours < 18
            ? "afternoon"
            : "evening"}
          ! 👋
        </Text>
        {links.map(({ title, to, colored }) => (
          <Heading
            level={2}
            css={(theme) =>
              css({
                color: colored ? theme.colors.primary : theme.colors.bg,
                "&:hover": {
                  textDecoration: "line-through",
                },
              })
            }
          >
            <Link to={to}>{title}</Link>
          </Heading>
        ))}
      </StyledList>
    </StyledMenu>
  );
};

export default NavbarMenu;
