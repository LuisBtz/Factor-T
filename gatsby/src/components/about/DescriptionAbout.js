import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';

const DescriptionAbout = ({data}) => {
    return(
        <ContainerDescription>
            <div className='texto'>
                <BlockContent
                    blocks={data.sanityAboutPage.descriptionAbout._rawEn}
                />
            </div>
            <div className='services'>
                <strong>{data.sanityAboutPage.ourServicesText.en}</strong>
            </div>
        </ContainerDescription>
    )
}

const ContainerDescription = styled.section`
    padding-top: 200px;
    max-width: 750px;
    margin: 0 auto 50px;
    text-align: center;
    .texto {
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 100px;
        p {
            font-size: 2rem;
        }
    }
`

export default DescriptionAbout