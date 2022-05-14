import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";
import { Hidden } from "react-grid-system";
import Button from "../common/Button";
import Text from "../common/Text";

const StyledNav = styled.nav({
  padding: "1rem 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Navbar = () => {
  return (
    <StyledNav>
      <Text size="medium" transform="uppercase">
        <Link to="/">Borys Kaczmarek</Link>
      </Text>
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
        <svg
          width="35"
          height="22"
          viewBox="0 0 35 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="menu">
            <path id="line3" d="M0 21H34.5" stroke="#113BAE" />
            <path id="line2" d="M0 11H34.5" stroke="#113BAE" />
            <path id="line1" d="M0 1H34.5" stroke="#113BAE" />
          </g>
        </svg>
      </div>
    </StyledNav>
  );
};

export default Navbar;
