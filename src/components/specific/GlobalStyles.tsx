import { Global } from "@emotion/react";
import React from "react";
import theme from "../../styles/theme";

const GlobalStyles = () => {
  return (
    <Global
      styles={{
        "*, *::before, *::after": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          fontFamily: theme.fontFamily,
        },
        body: {
          backgroundColor: theme.colors.bg,
          color: theme.colors.text,
          margin: 0,
          padding: 0,
          fontWeight: 300,
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        h1: {
          fontSize: "5rem",
        },
        h2: {
          fontSize: "4rem",
        },
        h3: {
          fontSize: "3.5rem",
        },
        h4: {
          fontSize: "2.75rem",
        },
        h5: {
          fontSize: "2rem",
        },
        h6: {
          fontSize: "1.5rem",
        },
      }}
    />
  );
};

export default GlobalStyles;
