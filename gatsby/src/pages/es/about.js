import React from "react"
import Layout from "../../components/es/layout/layout"
import Seo from "../../components/layout/seo"
import { graphql } from "gatsby"
import DescriptionAbout from "../../components/es/about/DescriptionAbout"
import ServiciosAbout from "../../components/es/about/ServiciosAbout"


export const data = graphql`
  query  {
    sanityAboutPage {
      descriptionAbout {
        _rawEs
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
      ourServicesText {
        es
      }
      services {
        _key
        name {
          es
        }
        description {
          es
        }
        image {
          altEs
          asset {
            gatsbyImageData(
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
}
  `

const black = true

const background = '#EDE2DF'

// markup
const AboutPage = ({data}) => {
  return (
    <Layout black={black} background={background}>
      <Seo title={data.sanityAboutPage.seo.title.es} description={data.sanityAboutPage.seo.description.es} image={data.sanityAboutPage.seo.image.asset.url} />
      <DescriptionAbout data={data} />
      <ServiciosAbout data={data} />
    </Layout>
  )
}

export default AboutPage