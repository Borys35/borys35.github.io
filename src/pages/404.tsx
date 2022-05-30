import { css } from "@emotion/react";
import * as React from "react";
import { Col, Container, Row } from "react-grid-system";
import Button from "../components/common/Button";
import ButtonGroup from "../components/common/ButtonGroup";
import Heading from "../components/common/Heading";
import Text from "../components/common/Text";
import Layout from "../components/specific/Layout";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 :(">
      <Container fluid>
        <Row css={css({ margin: "4rem 0" })}>
          <Col lg={10}>
            <Heading level={1} css={css({ marginBottom: "2rem" })}>
              It looks like we can't find the page :(
            </Heading>
            <Text css={css({ marginBottom: "2rem" })}>
              If you believe this page should exist, let me now!
            </Text>
            <ButtonGroup>
              <Button to="/" size="large" variant="primary">
                Go home
              </Button>
              <Button to="/contact" size="large" variant="secondary">
                Contact
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
