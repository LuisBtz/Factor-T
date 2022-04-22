import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ServiciosAbout = ({data}) => {





    return(
        <ServiciosContainer data-aos="fade-up" data-aos-delay="600" data-aos-duration="800" >
            {data.sanityAboutPage.services.map(({ _key, name, description, image }) => {
                const bgGetDataImage = getImage(image.asset)
                const bgGetDataImageAlt = image.altEs
                
              return (
                  <div className='servicio'>
                    <button
                        key={_key}
                        onClick={e=> e.target.classList.toggle('active')}
                    >
                        {name.es}
                    </button>
                    <div className='description'>
                        <p>{description.es}</p>
                        <div className='image'>
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={bgGetDataImage}
                                alt={bgGetDataImageAlt}
                            />
                        </div>
                    </div>
                  </div>
              );
            })}
        </ServiciosContainer>
    )
}

const ServiciosContainer = styled.section`
border-top: solid 1px var(--black);
 .servicio {
     width: 100%;
     display: flex;
     flex-direction: column;
     text-align: center;
     border-bottom: solid 1px var(--black);
     align-items: center;
     overflow: hidden;
     button {
         display: block;
         text-align: center;
         width: 100%;
         padding-top: 25px;
        padding-bottom: 25px;
        
        @media (max-width: 680px) {
            &:hover {
                background-color: none;
            }
        }
     }
     .description {
        width: 50%;
        margin: 0 auto;
        max-height: 0;
        overflow-y: hidden;
        transition: max-height 350ms ease-in-out;
        @media (max-width: 680px) {
            width: 90%;
        }
        p {
            padding-top: 25px;
        }
     }
     .image {
         margin-top: 50px;
         padding-bottom: 50px;
     }
     .active  + div {
        max-height: 1500px !important;
    }
 }

`

export default ServiciosAbout