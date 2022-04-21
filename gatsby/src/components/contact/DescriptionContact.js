import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';

const DescriptionContact = ({data}) => {


    const tel = data.sanityContactPage.tel
    const onlyNumbers = tel.replace(/\D/g, '');

    return(
        <ContainerDescription>
            <div className='texto'>
                <h1>{data.sanityContactPage.headline.en}</h1>
            </div>
            <div className='description'>
                <div className='top'>
                    <div className='tel'>
                        <span>tel</span>
                        <a href={`tel:${onlyNumbers}`}>{data.sanityContactPage.tel}</a>
                    </div>
                    <div className='mail'>
                        <span>mail</span>
                        <a href={`mailto:${data.sanityContactPage.mail}`}>{data.sanityContactPage.mail}</a>
                    </div>
                </div>
                <div className='bot'>
                    <BlockContent
                        blocks={data.sanityContactPage.address._rawEn}
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
            span {
                justify-self: baseline;
                font-size: 0.8rem;
                padding-right: 5px;
            }
        }
        .top {
            display: flex;
            justify-content: center;
            .tel {
                margin-right: 50px;
            }
        }
        .bot {
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