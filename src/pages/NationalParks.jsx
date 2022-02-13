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

const StyledText = styled.h4`
    padding-left: 15rem;
    padding-right: 15rem;
`

const NationalParks = () => {
    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <h2>National Park Collection</h2>
            </StyledMainTextContainer>
            <StyledContentContainer>
                <StyledImageContainer>
                    <StyledImage src={JoshuaTree} height={'35rem'} />
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