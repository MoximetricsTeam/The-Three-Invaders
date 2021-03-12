import React from 'react'

import Layout from "../components/layout";
import SEO from "../components/seo";
import BuyOptions from "../components/BuyOptions";
import Quote from "../components/Quote";
import Article from "../components/press/Article";
import BookImgComp from "../components/book/BookImgComp";
import BpSumCon from "../components/book/BpSumCon";
import Audio from "../components/press/Audio";
import Video from "../components/Video";
function press() {
  return (
    <Layout>
    <SEO title="press" /> 
      <Article />
    <Audio />
  
    
    {/* <BpSumCon />
    <BuyOptions />
    <Video />
    <Quote /> */}
  </Layout>
  )
}

export default press
