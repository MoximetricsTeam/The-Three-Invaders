import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Title from "../../components/Title";
import Text from "../../components/Text";
import { graphql, useStaticQuery } from "gatsby";

function Article ({ className }) {
  const data = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "noat.jpg" }) {
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
        <div className="artImg">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="textContainer">
          <Title>
            <h1>INTERNATIONAL POLICY DIGEST</h1>
          </Title>
          <Text>
            <b> How Hollywood Embraced the Notion of ‘Arab Terrorist’ and Ran with It</b>
          </Text>
          <Text>
            <strong>Question 1:</strong> <em>Back to the Future</em> a film
            about time travel set in America’s 1950s, is one of the most iconic
            movies of a generation. Why did Steven Spielberg, in this science
            fiction movie, choose to make the bad guy an Arab character? In a
            recent survey, a Pittsburgh-based research firm posed the question
            “Should Americans, as part of their school curriculum, learn Arabic
            Numerals?”; 56% of the 3,200 respondents said no, and 15% had no
            opinion. Perhaps many among the respondents did not know that Arabic
            numerals are the numbers 0 to 9 which we use every day, reflecting a
            deep bias. How is this bias connected to the movie Back to the
            Future?
          </Text>
        </div>
      </div>
    </section>
  );
}

export default styled(Article)`
  .wrapper {
    display: flex;
    justify-content: space-around;
    /* margin-top: 80px; */
    max-width: 1400px;
    margin: 40px auto 0;
  }
  .artImg {
    
   min-width: 50%;
  
    z-index: 1;
    margin: 40px auto;
  
  }
 
  img{
    object-fit:cover !important;
     

    }
  .textContainer {
    width: 40%;
    margin: auto;
  }
  @media (max-width: 1024px) {
    .wrapper {
      display: flow-root;
      margin-top: 40px;
    }
    .mockUp {
      width: 100%;
      margin-bottom: 0;
      padding-right: 40px;
    }
    .textContainer {
      width: 100%;
      padding: 20px;
    }
  }
`;
