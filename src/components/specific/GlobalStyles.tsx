import { Global, useTheme } from "@emotion/react";
import React from "react";

const GlobalStyles = () => {
  const theme = useTheme();

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
          position: "relative",
          backgroundColor: theme.colors.bg,
          color: theme.colors.text,
          margin: "0 auto",
          padding: 0,
          fontWeight: 300,
          fontSize: "12px",
          maxWidth: theme.bp.xxl,
          overscrollBehaviorY: "contain",
          overflowX: "hidden",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        h1: {
          fontSize: "4.75rem",
        },
        h2: {
          fontSize: "3.75rem",
        },
        h3: {
          fontSize: "3.25rem",
        },
        h4: {
          fontSize: "2.5rem",
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
