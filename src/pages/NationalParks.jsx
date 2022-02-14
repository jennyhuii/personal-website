import React from 'react';
import styled from 'styled-components';
import {
    StyledMainContainer,
    StyledImage,
    StyledMainTextContainer,
} from '../constants/Styles';
import JoshuaTree from '../images/paintings/joshua-tree.png';

const StyledImageContainer = styled.div`
    padding: 1rem 1rem 1rem 1rem;
    justify-content: center;
`

const StyledContentContainer = styled.div`
    align-content: center;
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

const NationalParks = () => {
    const isSmallScreen = window.screen.width < 800;
    const imageHeight = isSmallScreen ? '13rem' : '35rem';
    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <h2>National Park Collection</h2>
            </StyledMainTextContainer>
            <StyledContentContainer>
                <StyledImageContainer>
                    <StyledImage src={JoshuaTree} height={imageHeight} />
                </StyledImageContainer>
            </StyledContentContainer>
            <StyledText>
                I am currently working on paintings of US National Parks that I have visited. 
                Above is Joshua Tree in California. More to come...
            </StyledText>
        </StyledMainContainer>
    )
}

export default NationalParks;