import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import Projects from "../components/projects/Projects"


export const data = graphql`
  query  {
    allSanityProjectsPage {
    nodes {
      _id
      title
      location {
        en
      }
      event {
        en
      }
      slug {
        current
      }
      thumbnail {
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
        description {
          en
        }
        image {
          asset {
            url
          }
        }
        title {
          en
        }
      }
    }
  }
}
  `

const black = true

const background = '#FFFFFF'

// markup
const ProjectsPage = ({data}) => {
  return (
    <Layout black={black} background={background}>
      <Seo title='Projects' description='Projects' image={data.allSanityProjectsPage.nodes[0].seo.image.asset.url} />
      <Projects data={data} />
    </Layout>
  )
}

export default ProjectsPage