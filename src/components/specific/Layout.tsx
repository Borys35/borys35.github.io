import { css, ThemeProvider } from "@emotion/react";
import React, { FC } from "react";
import Helmet from "react-helmet";
import theme from "../../styles/theme";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./Navbar";

interface Props {
  pageTitle: string;
}

const Layout: FC<Props> = ({ children, pageTitle }) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          padding: `0 ${theme.horizontalPadding}`,
        })}
      >
        <Helmet>
          <title>{pageTitle} - Borys Kaczmarek</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Navbar />
        <main
          css={css({
            flex: 1,
          })}
        >
          {children}
        </main>
        <Footer />
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
