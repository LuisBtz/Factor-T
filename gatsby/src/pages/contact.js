import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import DescriptionContact from "../components/contact/DescriptionContact"
import FormContact from "../components/contact/FormContact"

export const data = graphql`
  query  {
    sanityContactPage {
      headline {
        en
      }
      tel
      mail
      address {
        _rawEn
      }
      mailText {
        en
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
      <Seo title={data.sanityContactPage.seo.title.en} description={data.sanityContactPage.seo.description.en} image={data.sanityContactPage.seo.image.asset.url} />
      <DescriptionContact data={data} />
      <FormContact data={data} />
    </Layout>
  )
}

export default ContactPage