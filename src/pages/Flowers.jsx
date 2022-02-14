import React from 'react';
import styled from 'styled-components';
import {
    StyledMainContainer,
    StyledImage,
    StyledMainTextContainer,
} from '../constants/Styles';
import RedLily from '../images/paintings/red-lily.png';
import WhiteLilies from '../images/paintings/white-lilies.png';
import BlueIris from '../images/paintings/blue-iris.png';

const StyledImageContainer = styled.div`
    padding: 0rem 1rem 2rem 1rem;
    justify-content: center;
`

const StyledContentContainer = styled.div`
@media (min-width: 800px){
    display: grid;
    grid-gap: 0rem;
    grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 800px) {
    display: grid;
    grid-gap: 0rem;
    grid-template-columns: repeat(1, 1fr);
}
`

const StyledText = styled.p`
@media (min-width: 800px){
    padding-left: 15rem;
    padding-right: 15rem;
    text-align: left;
}
@media (max-width: 800px) {
    text-align: left;
}
`

const Flowers = () => {
    const isSmallScreen = window.screen.width < 800;
    const imageHeight = isSmallScreen ? '20rem' : '28rem';

    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <h2>Abstract Flowers</h2>
            </StyledMainTextContainer>
            <StyledContentContainer>
                <StyledImageContainer>
                    <StyledImage src={WhiteLilies} height={imageHeight} />
                </StyledImageContainer>
                <StyledImageContainer>
                    <StyledImage src={RedLily} height={imageHeight} />
                </StyledImageContainer>
                <StyledImageContainer>
                    <StyledImage src={BlueIris} height={imageHeight} />
                </StyledImageContainer>
            </StyledContentContainer>
            <StyledText>
                    This collection features close-up views of one or two flowers.
                    My early pieces were more intricate and colorful.
                    These paintings are very different in terms of style and composition.
                    For each painting, I wanted to showcase one prominent color.
                    Each petal has its details and uniqueness, not one taking another's attention.
                </StyledText>
        </StyledMainContainer>
    )
}

export default Flowers;