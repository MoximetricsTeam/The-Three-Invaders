import React from 'react';
// import { Link } from "gatsby";

import Layout from '../components/layout';
import SEO from '../components/seo';
import BuyOptions from '../components/BuyOptions';
import Quote from '../components/Quote';
import BpSum from '../components/book/BpSum';
import BookImgComp from '../components/book/BookImgComp';
import Video from '../components/Video';

const SecondPage = () => (
  <Layout>
    <SEO title='Book' />
    <BpSum />
    <BookImgComp />
    <BuyOptions />
    <Video />
    <Quote />
  </Layout>
);

export default SecondPage;
