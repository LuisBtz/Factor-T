import React from "react"
import SliderHome from "../components/home/SliderHome"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"


export const data = graphql`
  query  {
    sanityHomePage {
      homeTexto {
        _rawEn
      }
      homeSlider {
        _key
        altEn
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
    }
    seo {
      title {
        en
      }
      description {
        en
      }
      image {
        asset {
          url
        }
      }
    }
  }
}
  `

const black = false

const background = '#EBDEC3'

// markup
const IndexPage = ({data}) => {
  return (
    <Layout black={black} background={background} >
      <Seo title={data.sanityHomePage.seo.title.en} description={data.sanityHomePage.seo.description.en} image={data.sanityHomePage.seo.image.asset.url} />
      <SliderHome data={data} />
    </Layout>
  )
}

export default IndexPage