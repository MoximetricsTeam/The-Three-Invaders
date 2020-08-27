import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

function Video() {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "video.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <section>
      <Img fluid={data.file.childImageSharp.fluid} />
    </section>
  );
}

export default Video;
