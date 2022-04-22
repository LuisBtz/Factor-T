import { graphql } from "gatsby";
import React from "react";
import Seo from "../../components/layout/seo"
import Layout from "../../components/es/layout/layout";
import styled from "styled-components";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"





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
        <Seo title={project.seo.title.es} description={project.seo.description.es} image={project.seo.image.asset.url} />
        <ProjectContainer>
            <div className="iz">
                <ul className="text">
                    <li data-aos="fade-up"  data-aos-delay="500" data-aos-duration="800">
                        <span>Project</span>
                        <span>{project.title}</span>
                    </li>
                    <li data-aos="fade-up"  data-aos-delay="700" data-aos-duration="800">
                        <span>Location</span>
                        <span>{project.location.es}</span>
                    </li>
                    <li data-aos="fade-up"  data-aos-delay="900" data-aos-duration="800">
                        <span>Event</span>
                        <span>{project.event.es}</span>
                    </li>
                </ul>
            </div>
            <div className="de" data-aos="fade-up"  data-aos-delay="1200" data-aos-duration="800" >
                <SliderCont  {...settings}>
                {project.projectSlider.map(({ _key, asset, altEs }) => {
                        const bgGetDataImage = getImage(asset)
                        const bgGetDataImageAlt = altEs
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
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    
    .iz {
        grid-column: 1/3;
        grid-row: 1/2;
        @media (max-width: 680px) {
            padding-top: 20px;
            padding-bottom: 20px;
            grid-column: 1/7;
            grid-row: 1/2;
            li {
                margin-bottom: 5px;
            }
    }
        ul {
            li {
                span {
                    &:nth-child(1) {
                        display: inline-block;
                        width: 150px;
                    }
                }
            }
        }
    }
    .de {
        grid-column: 3/6;
        grid-row: 1/2;
        @media (max-width: 680px) {
            grid-column: 1/7;
            grid-row: 2/3;
    }
    }
`

const SliderCont = styled(Slider)`
`

const Slide = styled.div`
`

export const query = graphql`
  query($slug: String!) {
    project: sanityProjectsPage(slug: { current: { eq: $slug } }) {
        title
        slug {
            current
        }
        location {
            es
        }
        event {
            es
        }
        projectSlider {
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
`;