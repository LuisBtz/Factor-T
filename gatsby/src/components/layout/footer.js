import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby";

const Footer = ({background}) => {

    const data = useStaticQuery(graphql`
    query {
        sanitySettingsPage {
            copyright {
                en
            }
            instaIcon {
                altEn
                asset {
                    url
                }
            }
        }
    }
    `);



const FooterContainer = styled.footer`
height: 75px;
padding-left: 25px;
padding-right: 25px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: var(--white);
@media (max-width: 680px) {
    flex-direction: column;
    justify-content: flex-end;
    height: 120px;
    padding-bottom: 20px;
}
p {
    padding: 0;
    margin: 0;
    font-size: 0.85rem;
}
.icon {
    position: fixed;
    bottom: 20px;
    right: 25px;
    padding: 5px 40px;
    border-radius: 20px;
    border: solid 1px var(--black);
    background-color: ${background};
    @media (max-width: 680px) {
        left: 50% !important;
        transform: translateX(-50%) !important;
        text-align: center;
        width: 110px;
        padding: 10px;
        border-radius: 25px;
        bottom: 55px;
        z-index: 4;
    }
    img {
        width: 20px;
        margin: 0;
        padding: 0;
    }
}
`


    return(
        <FooterContainer>
            <div className='copy'>
                <p>{data.sanitySettingsPage.copyright.en}</p>
            </div>
            <Link to='/'>
                <div className='icon'>
                        <img src={data.sanitySettingsPage.instaIcon.asset.url} alt={data.sanitySettingsPage.instaIcon.altEn} />
                </div>
            </Link>
        </FooterContainer>
    )
}


export default Footer