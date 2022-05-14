import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Button from "../components/common/Button";
import Heading from "../components/common/Heading";
import SimpleButton from "../components/common/SimpleButton";
import Text from "../components/common/Text";
import Layout from "../components/specific/Layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Heading level={1}>
        Two lines
        <br />
        heading
      </Heading>
      <Button size="large">Hi</Button>
      <Button variant="secondary">Hi</Button>
      <SimpleButton>About</SimpleButton>
      <StaticImage
        src="../images/programmer.png"
        alt="Programmer"
        placeholder="tracedSVG"
      />
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
        Aliquam facere sapiente quibusdam aut repudiandae perspiciatis! Corrupti
        incidunt expedita amet libero?
      </Text>
      <Text size="medium" transform="uppercase">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
        Aliquam facere sapiente quibusdam aut repudiandae perspiciatis! Corrupti
        incidunt expedita amet libero?
      </Text>
    </Layout>
  );
};

export default IndexPage;
