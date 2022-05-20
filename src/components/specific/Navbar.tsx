import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { FC, useEffect, useState } from "react";
import { Hidden } from "react-grid-system";
import Button from "../common/Button";
import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";

// animations
const fadeIn = keyframes`
  from {
    transform: translateY(-3rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const showAnim = keyframes`
  from {
    top: -3rem;
  }
  to {
    top: 1.5rem;
  }
`;

// styles
const StyledNav = styled.nav({
  padding: "1rem 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Navbar = () => {
  const MenuIcon: FC<React.HTMLAttributes<SVGElement>> = ({ ...props }) => (
    <svg
      width="35"
      height="22"
      viewBox="0 0 35 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setOpen(true)}
      css={css({
        cursor: "pointer",
      })}
      {...props}
    >
      <g id="menu">
        <path id="line3" d="M0 21H34.5" stroke="#113BAE" />
        <path id="line2" d="M0 11H34.5" stroke="#113BAE" />
        <path id="line1" d="M0 1H34.5" stroke="#113BAE" />
      </g>
    </svg>
  );

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [hiding, setHiding] = useState(false);
  const seconds = 0.3;

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const y = window.scrollY;
      console.log(y);
      if (y > 300) {
        setShow(true);
        setHiding(false);
      } else {
        setHiding(true);
      }
    });
  }, []);

  return (
    <>
      <StyledNav
        css={(theme) =>
          css({
            animation: `${fadeIn} 1s ${theme.timing}`,
          })
        }
      >
        <Logo />
        <div
          css={css({
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          })}
        >
          <Hidden xs>
            <Button size="small" variant="secondary">
              Get in touch
            </Button>
          </Hidden>
          <MenuIcon />
        </div>
      </StyledNav>

      {show && (
        <span
          key={`menu-icon-${hiding.toString()}`}
          css={(theme) =>
            css({
              position: "fixed",
              right: theme.horizontalPadding,
              top: "1.5rem",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              boxShadow: "0 0 1rem rgba(0, 0, 0, 0.2)",
              backgroundColor: theme.colors.bg,
              zIndex: 1,
              animation: `${showAnim} ${seconds}s ease-in-out both ${
                hiding ? "reverse" : ""
              }`,
            })
          }
        >
          <MenuIcon
            css={css({
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(0.8)",
            })}
          />
        </span>
      )}
      {open && <NavbarMenu onClose={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
