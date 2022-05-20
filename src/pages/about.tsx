import { css } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Hidden, Row, Visible } from "react-grid-system";
import Button from "../components/common/Button";
import Heading from "../components/common/Heading";
import Text from "../components/common/Text";
import Layout from "../components/specific/Layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <header>
        <Container fluid>
          <Row>
            <Col xl={8} offset={{ xl: 2 }}>
              <div
                css={(theme) =>
                  css({
                    maxWidth: theme.bp.sm,
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    [theme.mq.lg]: {
                      maxWidth: "unset",
                      display: "grid",
                      gap: "1rem",
                      gridTemplateColumns: "2fr 2fr 2fr",
                      gridTemplateRows: "auto auto auto 1fr",
                    },
                  })
                }
              >
                <Heading
                  level={1}
                  css={(theme) =>
                    css({
                      marginTop: "4rem",
                      textAlign: "center",
                      marginBottom: "1rem",
                      [theme.mq.lg]: {
                        marginTop: "6rem",
                        marginBottom: 0,
                        gridArea: "1 / 1 / 2 / 2",
                        textAlign: "right",
                      },
                    })
                  }
                >
                  About{" "}
                  <Visible xs sm md>
                    me.
                  </Visible>
                </Heading>
                <Hidden xs sm md>
                  <Heading
                    level={1}
                    css={css({
                      gridArea: "2 / 3 / 3 / 4",
                      transformOrigin: "0 0",
                      transform: "rotate(15deg)",
                    })}
                  >
                    me.
                  </Heading>
                </Hidden>
                <Text
                  size="medium"
                  transform="uppercase"
                  css={(theme) =>
                    css({
                      textAlign: "center",
                      marginBottom: "2rem",
                      [theme.mq.lg]: {
                        marginBottom: 0,
                        gridArea: "3 / 1 / 4 / 2",
                        textAlign: "right",
                      },
                    })
                  }
                >
                  I would love to introduce myself to you, gorgeous person
                </Text>
                <Button
                  size="large"
                  css={(theme) =>
                    css({
                      gridArea: "4 / 3 / 5 / 4",
                      marginBottom: "4rem",
                      [theme.mq.lg]: {
                        marginBottom: 0,
                        alignSelf: "flex-start",
                      },
                    })
                  }
                >
                  Scroll down
                </Button>
                <StaticImage
                  src="../images/about-hero.png"
                  alt=""
                  css={(theme) =>
                    css({
                      maxWidth: "12rem",
                      [theme.mq.lg]: {
                        maxWidth: "unset",
                        gridArea: "1 / 2 / 5 / 3",
                      },
                    })
                  }
                />
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </Layout>
  );
};

export default AboutPage;
