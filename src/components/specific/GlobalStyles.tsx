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
          WebkitTapHighlightColor: "transparent",
        },
        body: {
          backgroundColor: theme.colors.bg,
          color: theme.colors.text,
          margin: 0,
          padding: 0,
          fontWeight: 300,
          overflowX: "hidden",
          fontSize: "12px",
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

        [theme.mq.lg]: {
          body: {
            fontSize: "14px",
          },
        },

        [theme.mq.xl]: {
          body: {
            fontSize: "16px",
          },
        },

        "@keyframes fade-in": {
          from: {
            opacity: 0,
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            transform: "translateY(3rem)",
          },
          "60%": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    />
  );
};

export default GlobalStyles;
