import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import HeroHome from "../components/home/HeroHome";
import SEO from "../components/seo";
import NavbarHome from "../components/home/NavbarHome";
import BookSummery from "../components/home/BookSummery";
import BuyOptions from "../components/BuyOptions";
import Author from "../components/home/Author";
import Quote from "../components/Quote";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroHome />
    <NavbarHome />
    <BookSummery />
    <BuyOptions />
    <Author />
    <Quote />
  </Layout>
);

export default IndexPage;
