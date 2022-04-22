import React from "react"
import SliderHome from "../../components/es/home/SliderHome"
import Layout from "../../components/es/layout/layout"
import Seo from "../../components/layout/seo"
import { graphql } from "gatsby"


export const data = graphql`
  query  {
    sanityHomePage {
      homeTexto {
        _rawEs
      }
      homeSlider {
        _key
        altEs
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
        es
      }
      description {
        es
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

const background = '#FFFFFF'

// markup
const IndexPage = ({data}) => {
  return (
    <Layout black={black} background={background} >
      <Seo title={data.sanityHomePage.seo.title.es} description={data.sanityHomePage.seo.description.es} image={data.sanityHomePage.seo.image.asset.url} />
      <SliderHome data={data} />
    </Layout>
  )
}

export default IndexPage