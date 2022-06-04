import { css, keyframes } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Hidden, Row, Visible } from "react-grid-system";
import AboutSkillItem from "../components/blocks/AboutSkillItem";
import ContactSection from "../components/blocks/ContactSection";
import Button from "../components/common/Button";
import Heading from "../components/common/Heading";
import Text from "../components/common/Text";
import Layout from "../components/specific/Layout";
// @ts-ignore
import dots from "../images/dots.svg";

// animations
const mainImageFadeIn = keyframes`
  from {
    transform: scale(1.2);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const breakOff = keyframes`
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(45deg);
  }
  75% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(40deg);
  }
`;

// data
const skills = [
  {
    title: "Frontend development",
    labels: [
      "HTML",
      "CSS",
      "SASS",
      "CSS-in-JS",
      "JavaScript",
      "TypeScript",
      "Redux",
    ],
  },
  {
    title: "Frameworks & libraries",
    labels: ["React", "Next.js", "Gatsby", "Vue", "Svelte", "React Native"],
  },
  {
    title: "Backend & databases",
    labels: [
      "Node.js",
      "Express",
      "REST API",
      "GraphQL",
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
  },
  {
    title: "Designing",
    labels: ["Figma", "Inkscape", "Design fundamentals & concepts"],
  },
  {
    title: "CMS & e-commerce",
    labels: ["Strapi", "Commerce.js"],
  },
];

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <div
        css={css({
          display: "grid",
          gap: "16rem",
          marginBottom: "8rem",
          alignItems: "stretch",
        })}
      >
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
                        gridTemplateColumns: "3fr 2fr 3fr",
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
                        animation: `fade-in 1s ${theme.timing} .5s both`,
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
                      css={(theme) =>
                        css({
                          gridArea: "2 / 3 / 3 / 4",
                          transformOrigin: "0 0",
                          transform: "rotate(0deg)",
                          animation: `${breakOff} 1s ease-in-out 2.6s both, fade-in 1s ${theme.timing} .6s backwards`,
                        })
                      }
                    >
                      me.
                    </Heading>
                  </Hidden>
                  <Text
                    size="small"
                    transform="uppercase"
                    css={(theme) =>
                      css({
                        textAlign: "center",
                        marginBottom: "2rem",
                        animation: `fade-in 1s ${theme.timing} 0.7s both`,
                        [theme.mq.lg]: {
                          marginBottom: 0,
                          gridArea: "3 / 1 / 4 / 2",
                          textAlign: "right",
                        },
                      })
                    }
                  >
                    I would love to introduce myself to you, gorgeous person.
                  </Text>
                  <Button
                    size="large"
                    onClick={() => {
                      const el = document.getElementById("more");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    css={(theme) =>
                      css({
                        gridArea: "4 / 3 / 5 / 4",
                        animation: `fade-in 1s ${theme.timing} 0.8s both`,
                        [theme.mq.lg]: {
                          placeSelf: "start",
                        },
                      })
                    }
                  >
                    Scroll down
                  </Button>
                  <StaticImage
                    src="../images/about-hero.png"
                    alt=""
                    placeholder="tracedSVG"
                    css={(theme) =>
                      css({
                        maxWidth: "12rem",
                        animation: `${mainImageFadeIn} 1s ${theme.timing} both`,
                        marginTop: "4rem",
                        [theme.mq.lg]: {
                          maxWidth: "unset",
                          marginTop: 0,
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

        {/* Note about me */}
        <Container
          fluid
          id="more"
          css={css({
            paddingTop: "6rem",
          })}
        >
          <Row>
            <Col offset={{ lg: 2 }} lg={3} md={5}>
              <div
                css={(theme) =>
                  css({
                    maxWidth: "16rem",
                    marginBottom: "3rem",
                    [theme.mq.md]: {
                      marginBottom: "0rem",
                      maxWidth: "unset",
                    },
                  })
                }
              >
                <div
                  css={css({
                    position: "relative",
                  })}
                >
                  <StaticImage
                    src="../images/me1.png"
                    alt="photo of me"
                    placeholder="blurred"
                  />
                  <img
                    src={dots}
                    css={css({
                      position: "absolute",
                      top: 0,
                      right: 0,
                      transform: "translate(50%, -25%)",
                    })}
                  />
                </div>
              </div>
            </Col>
            <Col lg={5} md={6} offset={{ lg: 2, md: 1 }}>
              <div
                css={css({
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                })}
              >
                <Text
                  size="medium"
                  css={(theme) =>
                    css({
                      marginLeft: "4rem",
                      textAlign: "right",
                      [theme.mq.md]: {
                        marginLeft: "0rem",
                      },
                    })
                  }
                >
                  Born in 2004. When I was 13 I coded my first “Hello World!”
                  program in C++. Since then I've been more and more excited to
                  learn new technologies and bind my future with programming.
                  <br />
                  <br />
                  Currently, I can call myself a self-taught web developer who
                  loves what he does and makes high-level web apps.
                </Text>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Skills */}
        <Container fluid css={css({ width: "100%" })}>
          <Row>
            <Col md={9} offset={{ md: 3 }}>
              <Heading level={2}>Skills</Heading>
            </Col>
          </Row>
          <Row>
            <Col xl={10} offset={{ xl: 1 }}>
              <div
                css={(theme) =>
                  css({
                    display: "grid",
                    gap: "4rem",
                    marginTop: "6rem",
                    [theme.mq.sm]: {
                      gridTemplateColumns: "1fr 1fr",
                    },
                  })
                }
              >
                {skills.map((skill, i) => (
                  <AboutSkillItem key={`${skill}-${i}`} {...skill} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>

        {/* Contact */}
        <ContactSection />
      </div>
    </Layout>
  );
};

export default AboutPage;
