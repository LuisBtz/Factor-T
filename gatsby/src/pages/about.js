import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import DescriptionAbout from "../components/about/DescriptionAbout"
import ServiciosAbout from "../components/about/ServiciosAbout"


export const data = graphql`
  query  {
    sanityAboutPage {
      descriptionAbout {
        _rawEn
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
      ourServicesText {
        en
      }
      services {
        _key
        name {
          en
        }
        description {
          en
        }
        image {
          altEn
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
      <Seo title={data.sanityAboutPage.seo.title.en} description={data.sanityAboutPage.seo.description.en} image={data.sanityAboutPage.seo.image.asset.url} />
      <DescriptionAbout data={data} />
      <ServiciosAbout data={data} />
    </Layout>
  )
}

export default AboutPage