import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Title from "../../components/title";
import Text from "../../components/text";
import { graphql, useStaticQuery } from "gatsby";

function BpSum({ className }) {
  const data = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "book-mockup.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <section className={className}>
      <div className="wrapper">
        <div className="mockUp">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="textContainer">
          <Title>
            <h1>The Three Invader</h1>
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text>
            Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </Text>
        </div>
      </div>
    </section>
  );
}

export default styled(BpSum)`
  .wrapper {
    display: flex;
    justify-content: space-around;
  }
  .mockUp {
    width: 50%;
    z-index: 1;
    margin-bottom: -70px;
  }
  .textContainer {
    width: 40%;
    margin: auto;
  }
`;
