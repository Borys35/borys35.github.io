import { css, ThemeProvider } from "@emotion/react";
import React, { FC } from "react";
import { Col, Container, Row, setConfiguration } from "react-grid-system";
import Helmet from "react-helmet";
import theme from "../../styles/theme";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./Navbar";

setConfiguration({ gutterWidth: 0 });

interface Props {
  pageTitle: string;
}

const line = css({
  display: "block",
  width: "1px",
  height: "100vh",
  background: theme.colors.black,
  opacity: 0.1,
  marginLeft: "auto",
});

const Layout: FC<Props> = ({ children, pageTitle }) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        css={css({
          position: "relative",
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
        <div
          css={css({
            position: "fixed",
            top: 0,
            left: theme.horizontalPadding,
            right: theme.horizontalPadding,
            bottom: 0,
            zIndex: -5,
          })}
        >
          <Container fluid>
            <Row>
              <Col xs={3}>
                <span css={line}></span>
              </Col>
              <Col xs={4}>
                <span css={line}></span>
              </Col>
              <Col xs={5}>
                <span css={line}></span>
              </Col>
            </Row>
          </Container>
        </div>
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
