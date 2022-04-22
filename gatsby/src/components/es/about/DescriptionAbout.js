import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';

const DescriptionAbout = ({data}) => {
    return(
        <ContainerDescription>
            <div className='texto' data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                <BlockContent
                    blocks={data.sanityAboutPage.descriptionAbout._rawEs}
                />
            </div>
            <div className='services' data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                <strong>{data.sanityAboutPage.ourServicesText.es}</strong>
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