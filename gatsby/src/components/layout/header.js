import { useStaticQuery, graphql, Link } from "gatsby";
import React, { useState } from "react";
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const Header = ({black}) => {


const HeaderContainer = styled.header`
position: absolute;
width: 100%;
left: 50%;
transform: translateX(-50%);
z-index: 3;
background-color: none;
nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 100px);
    margin: 0 auto;
    border-bottom: ${black === true ? 'solid 1px var(--black)' : 'solid 1px var(--white)'};
    height: 100px;
    @media (max-width: 680px) {
        width: calc(100% - 50px);
        height: 150px;
    } 
    ul.desk {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 25px;
        padding-right: 25px;
        .logo {
            width: 100px;
            margin-left: 100px;
            margin-right: 100px;
            filter: ${black === true ? 'brightness(0%)' : 'none'};
        }
        li {
            a, span {
                color: ${black === true ? 'var(--black)' : 'var(--white)'};
            }
        }
        ul.lang {
            li {
                display: inline-block;
                a {
                    padding-left: 2px;
                    padding-right: 2px;
                }
                &:first-child {
                    a {
                        font-weight: bold;
                    }
                }
            }
        }
        
        @media (max-width: 680px) {
            display: none;
        }
    }
    .movil {
        display: none;
        @media (max-width: 680px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .ham {
                width: 35px;
                height: 27px;
                position: relative;
                .line {
                    width: 100%;
                    height: 4px;
                    background-color: ${black === true ? 'var(--black)' : 'var(--white)'};
                    margin-bottom: 7px;
                }
            }
            .icono {
                width: 70px;
                filter: ${black === true ? 'brightness(0%)' : 'none'};
            }
        }
    }
}
.overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #D9C394;
    height: 100vh;
    z-index: 3;
    ul.mov {
        width: calc(100% - 50px);
        margin: 0 auto;
        text-align: center;
        margin-top: 20px;
        li {
            border-bottom: solid 1px var(--black);
            padding-bottom: 25px;
            padding-top: 25px;
            a, button {
                color: var(--black);
                font-size: 1.8rem;
            }
            button {
                font-family: var(--serif);
            }
            &:last-child {
                border-bottom: none;
            }
        }
    }
    ul.mov.lang {
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 100px;
            li {
                display: inline-block !important;
                border-bottom: none;
                &:first-child {
                    a {
                        font-weight: bolder;
                    }
                }
            }
    }
}
`



    const data = useStaticQuery(graphql`
    query {
        sanitySettingsPage {
            logoBlanco {
                altEn
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
            }
            iconoBlanco {
                altEn
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
            }
        }
    }
    `);

const bgGetDataImage = getImage(data.sanitySettingsPage.logoBlanco.asset)
const bgGetDataImageAlt = data.sanitySettingsPage.logoBlanco.altEn

const iconGetDataImage = getImage(data.sanitySettingsPage.iconoBlanco.asset)
const iconGetDataImageAlt = data.sanitySettingsPage.iconoBlanco.altEn


const [clickHam, setClickHam] = useState(false);

var pathLink = typeof window !== 'undefined' ? window.location.pathname : ''


const languages = ['en', '/', 'es']

    return(
        <HeaderContainer className={black === true ? 'black' : ''}>
            {clickHam ?
                    <div className="overlay" >
                        <ul className="mov">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/projects'>Projects</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><button onClick={() => setClickHam(!clickHam)}>Close</button></li>
                        </ul>
                        <ul className="lang mov">
                            {languages.map((lng,) => (
                            <li key={lng}>
                                <Link to={lng === 'en' ? pathLink : '/es' + pathLink} language={lng}>
                                {lng === 'es' ? 'ES' : ''}
                                {lng === '/' ? '/' : ''}
                                {lng === 'en' ? 'EN' : ''}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                :
                ''
                }
            <nav>
                <ul className="desk">
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <div className='logo'>
                            <Link to='/'>
                                <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={bgGetDataImage}
                                    alt={bgGetDataImageAlt}
                                />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <ul className="lang">
                        {languages.map((lng,) => (
                        <li key={lng}>
                            <Link to={lng === 'en' ? pathLink : '/es' + pathLink} language={lng}>
                            {lng === 'es' ? 'Es' : ''}
                            {lng === '/' ? '/' : ''}
                            {lng === 'en' ? 'En' : ''}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    
                        
                </ul>
                <div className="movil">
                    <button className="ham" onClick={() => setClickHam(!clickHam)}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </button>
                    <div className="icono">
                        <Link to='/'>
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={iconGetDataImage}
                                alt={iconGetDataImageAlt}
                            />
                        </Link>
                    </div>
                </div>
            </nav>
        </HeaderContainer>
    )
}

export default Header