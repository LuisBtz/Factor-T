import React from "react"
import Layout from "../../components/es/layout/layout"
import Seo from "../../components/layout/seo"
import { graphql } from "gatsby"
import DescriptionContact from "../../components/es/contact/DescriptionContact"
import FormContact from "../../components/es/contact/FormContact"

export const data = graphql`
  query  {
    sanityContactPage {
      headline {
        es
      }
      tel
      mail
      address {
        _rawEs
      }
      mailText {
        es
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
    sanitySettingsPage {
      _rawInstaIcon
      insta
    }
}
  `

const black = true

const background = '#E6E5D9'

// markup
const ContactPage = ({data}) => {
  return (
    <Layout black={black} background={background}>
      <Seo title={data.sanityContactPage.seo.title.es} description={data.sanityContactPage.seo.description.es} image={data.sanityContactPage.seo.image.asset.url} />
      <DescriptionContact data={data} />
      <FormContact data={data} />
    </Layout>
  )
}

export default ContactPage