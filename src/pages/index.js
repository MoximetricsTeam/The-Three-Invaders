import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import HeroHome from "../components/home/HeroHome";
import SEO from "../components/seo";
import NavbarHome from "../components/home/NavbarHome";
import BookSummery from "../components/home/BookSummery";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroHome />
    <NavbarHome />
    <BookSummery />
  </Layout>
);

export default IndexPage;
