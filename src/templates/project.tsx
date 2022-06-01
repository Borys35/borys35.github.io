import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Col, Container, Row } from "react-grid-system";
import { Project } from "../../typings";
import Heading from "../components/common/Heading";
import Layout from "../components/specific/Layout";

interface Props {
  pageContext: {
    project: Project;
  };
}

const ProjectTemplate: FC<Props> = ({ pageContext }) => {
  const { name, cover } = pageContext.project;
  const image = getImage(cover);

  return (
    <Layout pageTitle={name}>
      <Container fluid>
        <Row>
          <Col lg={3}>{image && <GatsbyImage image={image} alt={name} />}</Col>
        </Row>
        <Row>
          <Col lg={3}></Col>
          <Col lg={9}>
            <Heading level={1}>{name}</Heading>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProjectTemplate;
