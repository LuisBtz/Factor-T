import { graphql } from "gatsby";
import React from "react";
import Seo from "../components/layout/seo"
import Layout from "../components/layout/layout";
import styled from "styled-components";




// markup
export default function SingleMezcalPage({ data: { project } }) {

    const black = true

    const background = '#FFFFFF'
    
    

    
    const settings = {
        centerPadding: "0",
        arrows: false,
        dots: false,
        fade: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        speed: 500,
      };

      

  return (
    <Layout black={black} background={background}>
        <Seo title={project.seo.title.en} description={project.seo.description.en} image={project.seo.image.asset.url} />
        <ProjectContainer>
            <div className="iz">
                <ul className="text">
                    <li>
                        <span>Project</span>
                        <span>{project.title}</span>
                    </li>
                    <li>
                        <span>Location</span>
                        <span>{project.location.en}</span>
                    </li>
                    <li>
                        <span>Event</span>
                        <span>{project.event.en}</span>
                    </li>
                </ul>
            </div>
            <div className="de">
                <SliderCont  {...settings}>
                {data.sanityHomePage.homeSlider.map(({ _key, asset, altEn }) => {
                        const bgGetDataImage = getImage(asset)
                        const bgGetDataImageAlt = altEn
                return (
                    <Slide
                        key={_key}
                        className='slide'
                    >
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={bgGetDataImage}
                            alt={bgGetDataImageAlt}
                        />
                    </Slide>
                );
                })}
                </SliderCont>
            </div>
        </ProjectContainer>
    </Layout>
  );
}


const ProjectContainer = styled.section`
padding-top: 150px;
padding-left: 50px;
padding-right: 50px;
`

const SliderCont = styled(Slider)`
`

const Slide = styled.div`
    height: calc(100vh - 75px);
    @media (max-width: 680px) {
        height: calc(100vh - 120px);
    }
`

export const query = graphql`
  query($slug: String!) {
    project: sanityProjectsPage(slug: { current: { eq: $slug } }) {
        title
        slug {
            current
        }
        location {
            en
        }
        event {
            en
        }
        projectSlider {
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
`;