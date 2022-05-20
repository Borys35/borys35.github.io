import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { FC, useState } from "react";
import Heading from "../common/Heading";
import Text from "../common/Text";
import SocialList from "./socials/SocialList";

interface Props {
  onClose: () => void;
}

const pop = keyframes`
  0% {
    clip-path: circle(0% at 50% 50%);
  }
  30%, 50% {
    clip-path: circle(10% at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
  }
`;

const show = keyframes`
  from {
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  }
  to {
    clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
  }
`;

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
    animation: `${pop} 1s ${theme.timing}`,
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
  padding: "0 1rem",
});

// data
const links = [
  { title: "Home", to: "/" },
  { title: "Projects", to: "/projects" },
  { title: "About", to: "/about" },
  { title: "Get in touch", to: "/contact", colored: true },
];

const NavbarMenu: FC<Props> = ({ onClose }) => {
  const [closing, setClosing] = useState(false);
  const hours = new Date().getHours();

  function handleClose() {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 1000);
  }

  return (
    <StyledMenu
      key={closing.toString()}
      css={
        closing &&
        css({
          animation: `${pop} 1s ease-in-out reverse`,
          pointerEvents: "none",
        })
      }
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClose}
        css={(theme) =>
          css({
            position: "absolute",
            right: theme.horizontalPadding,
            top: "1.5rem",
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
              animation: closed
                ? `${show} 0.4s ease-in-out 0.9s both`
                : undefined,
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
        {links.map(({ title, to, colored }, i) => (
          <Heading
            level={2}
            css={(theme) =>
              css({
                color: colored ? theme.colors.primary : theme.colors.bg,
                animation: closed
                  ? `${show} 0.4s ease-in-out ${1.3 + (i + 1) * 0.2}s both`
                  : undefined,
                "&:hover": {
                  textDecoration: "line-through",
                },
              })
            }
          >
            <Link to={to}>{title}</Link>
          </Heading>
        ))}
        <SocialList
          css={(theme) =>
            css({
              color: theme.colors.bg,
            })
          }
        />
      </StyledList>
      <Global
        styles={{
          body: {
            overflow: "hidden",
          },
        }}
      />
    </StyledMenu>
  );
};

export default NavbarMenu;
