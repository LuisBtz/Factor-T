import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';

const DescriptionContact = ({data}) => {


    const tel = data.sanityContactPage.tel
    const onlyNumbers = tel.replace(/\D/g, '');

    return(
        <ContainerDescription>
            <div className='texto' data-aos="fade-up"  data-aos-delay="500" data-aos-duration="800">
                <h1>{data.sanityContactPage.headline.es}</h1>
            </div>
            <div className='description'>
                <div className='top' data-aos="fade-up"  data-aos-delay="700" data-aos-duration="800">
                    <div className='tel'>
                        <span>tel</span>
                        <a href={`tel:${onlyNumbers}`}>{data.sanityContactPage.tel}</a>
                    </div>
                    <div className='mail'>
                        <span>mail</span>
                        <a href={`mailto:${data.sanityContactPage.mail}`}>{data.sanityContactPage.mail}</a>
                    </div>
                </div>
                <div className='bot' data-aos="fade-up"  data-aos-delay="900" data-aos-duration="800">
                    <BlockContent
                        blocks={data.sanityContactPage.address._rawEs}
                    />
                    <div className='insta'>
                        <a href={data.sanitySettingsPage.insta}>Instagram</a>
                    </div>
                </div>
            </div>
        </ContainerDescription>
    )
}

const ContainerDescription = styled.section`
    padding-top: 200px;
    padding-bottom: 100px;
    margin: 0 auto 50px;
    text-align: center;
    border-bottom: solid 1px var(--black);
    .texto {
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 100px;
        h1 {
            font-size: 2.5rem;
            font-weight: normal;
            text-align: center;
        }
    }
    .description {
        p, a {
            font-size: 1.5rem;
            color: var(--black);
        }
        .tel, .mail {
            display: flex;
            @media (max-width: 680px) {
                margin: 0 0 10px 0 !important;
                span {
                    display: none;
                }
                }
            span {
                justify-self: baseline;
                font-size: 0.8rem;
                padding-right: 5px;
            }
        }
        .top {
            display: flex;
            justify-content: center;
            @media (max-width: 680px) {
                flex-direction: column;
                text-align: center;
                justify-content: center;
                align-items: center;
                margin-bottom: 10px;
                .tel {
                    margin-bottom: 10px;
                }
            }
            .tel {
                margin-right: 50px;
            }
        }
        .bot {
            @media (max-width: 680px) {
                padding: 0 15px;
            }
            .insta {
                margin-top: 50px;
                a {
                    font-family: var(--serif);
                }
            }
        }
    }
`

export default DescriptionContact