import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const Projects = ({data}) => {
    return(
        <ProyectosContainer>
            {data.allSanityProjectsPage.nodes.map(({ _id, title, thumbnail, location, event, slug }) => {
                const bgGetDataImage = getImage(thumbnail.asset)
                const bgGetDataImageAlt = thumbnail.altEs                
              return (
                  <div className='project' key={_id} >
                      <Link to={`/es/proyectos/${slug.current}`}>
                        <div className='image' >
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={bgGetDataImage}
                                alt={bgGetDataImageAlt}
                                data-aos="fade-up" 
                    data-aos-delay={data.allSanityProjectsPage.nodes.length * 150} 
                    data-aos-duration="800"
                            />
                        </div>
                        <div className='info'>
                            <div className='text'>
                                <h2 >{title}</h2>
                                <p>{location.es}</p>
                                <p>{event.es}</p>
                            </div>
                        </div>
                      </Link>
                  </div>
              );
            })}
        </ProyectosContainer>
    )
}

const ProyectosContainer = styled.section`
    padding-top: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width:680px) {
        padding-top: 150px;
        grid-template-columns: repeat(1, 1fr);
    }
    .project {
        height: 75vh;
        position: relative;
        @media (max-width:680px) {
            height: 100%;
        }
        &:hover {
            .info {
                display: flex;
            }
        }
        &:nth-child(6n - 5) {
            .info {
                background-color: #D9C394;
            }
        }
        &:nth-child(6n - 4) {
                .info {
                    background-color: #CFA99B;
                }
        }
        &:nth-child(6n - 3) {
                .info {
                    background-color: #E1D0E2;
                }
        }
        &:nth-child(6n - 2) {
                .info {
                    background-color: #A3B6C3;
                }
        }
        &:nth-child(6n - 1) {
                .info {
                    background-color: #D79E6D;
                }
        }
        &:nth-child(6n) {
                .info {
                    background-color: #A9A97F;
                }
        }
        .image {
            height: 100%;
        }
        .info {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: none;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            .text {
                h2 {
                    font-weight: normal;
                    font-size: 2.5rem;
                    font-family: var(--serif);
                    color: var(--black);
                }
                p {
                    font-weight: normal;
                    font-size: 2.5rem;
                    color: var(--black);
                }
            }
        }
    }
`

export default Projects