import { graphql } from "gatsby";
import React, { useState } from "react";
import Seo from "../components/layout/seo"
import Layout from "../components/layout/layout";
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
        beforeChange: function (currentSlide, nextSlide) {
            console.log('before change', currentSlide, nextSlide);
            setActiveSlideIndex(nextSlide);
          },
      };




      const [activeSlideIndex, setActiveSlideIndex] = useState(0);    

      

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
                {project.projectSlider.map(({ _key, asset, altEn }) => {
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
                <div className='counter'>
                    <p>{activeSlideIndex + 1} / {project.projectSlider.length}</p>
                </div>
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
            en
        }
        event {
            en
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