import React from 'react';
import styled from 'styled-components';
import {
    StyledMainContainer,
    StyledImage,
    StyledMainTextContainer,
} from '../constants/Styles';
import SundayPicnic from '../images/paintings/sunday-picnic.png';

const StyledImageContainer = styled.div`
    padding: 1rem 1rem 1rem 1rem;
    justify-content: center;
`

const StyledContentContainer = styled.div`
    align-content: center;
`

const StyledText = styled.h4`
    padding-left: 15rem;
    padding-right: 15rem;
`

const MasterCopy = () => {
    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <h2>Master Copy of "A Sunday on La Grande Jatte"</h2>
            </StyledMainTextContainer>
            <StyledContentContainer>
                <StyledImageContainer>
                    <StyledImage src={SundayPicnic} height={'35rem'} />
                </StyledImageContainer>
            </StyledContentContainer>
            <StyledText>
                I spent 4 years painting this master
                copy: <a href='https://www.artic.edu/artworks/27992/a-sunday-on-la-grande-jatte-1884' target='_blank' rel="noreferrer">
                    A Sunday on La Grande Jatte by George Seurat
                </a>.
                I was intrigued by the painting when I saw it at the Art Institute of Chicago.
                The colors are vibrant and the painting looks like it is composed of tiny dots.
                I did some research on the piece. Seurat is the pioneer of Pointillism, a Neo-Impressionism technique.
                I learned to mimic that technique by using a very small paintbrush and dotting a wood panel with tiny dots.
                The dimensions of the wood panel were 4 feet and 6 feet.
            </StyledText>
        </StyledMainContainer>
    )
}

export default MasterCopy;