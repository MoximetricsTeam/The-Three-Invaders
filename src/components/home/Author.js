import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Title from "../../components/title";
import Text from "../../components/text";

function Author({ className }) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "author-bio.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className={className}>
      <div className="container">
        <Title center>
          <h2>About Dr. Saleem I. Abdulrauf</h2>
        </Title>
        <div className="innerContainer">
          <div className="imgContainer">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
          <div className="textContainer">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}

export default styled(Author)`
  .container {
    max-width: 1100px;
    margin: 90px auto;
    padding-bottom: 25px;
    border-bottom: 1px solid #c5c5c5;
  }
  .innerContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 980px;
    margin: auto;
    padding: 20px;
  }
  .imgContainer {
    width: 30%;
  }
  .textContainer {
    width: 60%;
  }
`;
