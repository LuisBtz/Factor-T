import React from "react"
import Layout from "../../components/es/layout/layout"
import Seo from "../../components/layout/seo"
import { graphql } from "gatsby"
import Projects from "../../components/es/projects/Projects"


export const data = graphql`
  query  {
    allSanityProjectsPage {
    nodes {
      _id
      title
      location {
        es
      }
      event {
        es
      }
      slug {
        current
      }
      thumbnail {
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
        description {
          es
        }
        image {
          asset {
            url
          }
        }
        title {
          es
        }
      }
    }
  }
}
  `

const black = true

const background = 'transparent'

// markup
const ProjectsPage = ({data}) => {
  return (
    <Layout black={black} background={background}>
      <Seo title='Proyectos' description='Proyectos' image={data.allSanityProjectsPage.nodes[0].seo.image.asset.url} />
      <Projects data={data} />
    </Layout>
  )
}

export default ProjectsPage