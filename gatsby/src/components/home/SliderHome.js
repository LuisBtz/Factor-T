import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SliderHome = ({data}) => {



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



    return(
        <SliderContainer>
            <div className='shape'>
                <div className='texto'>
                    <BlockContent
                        blocks={data.sanityHomePage.homeTexto._rawEn}
                    />
                </div>
                <svg  viewBox="0 0 448 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_342_465)">
                    <path d="M0 243H448.002V31.8851L224.449 0L0.0842938 32.3646C0.0842938 32.3646 0.556718 243 0 243Z" fill="#EBDEC3"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_342_465">
                    <rect width="448" height="243" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>

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

        </SliderContainer>
    )
}

const SliderContainer = styled.section`
.shape {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 190px;
    z-index: 2;
    .texto {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        text-align: center;
        width: 100%;
        p {
            font-size: 1.5rem;
        }
    }
    svg {
        width: 100%;
        position: absolute;
        top: 0;
    }
}
`

const SliderCont = styled(Slider)`
`

const Slide = styled.div`
    height: calc(100vh - 75px);
    @media (max-width: 680px) {
        height: calc(100vh - 120px);
    }
`

export default SliderHome