import React from 'react';
import styled from 'styled-components';
import {
    StyledMainContainer,
    StyledContentContainer,
    StyledImage,
    StyledMainTextContainer,
    StyledMainText,
} from '../constants/Styles';
import RedLily from '../images/red-lily.png';
import SundayPicnic from '../images/sunday-picnic.png';
import WhiteLilies from '../images/white-lilies.png';
import Sunflowers from '../images/sunflowers.png';

const StyledImageContainer = styled.div`
    padding: 1rem 1rem 2rem 1rem;
    justify-content: center;
`

const Work = () => {
    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <StyledMainText>My Work</StyledMainText>
            </StyledMainTextContainer>
            <StyledContentContainer>
                <StyledImageContainer>
                    <StyledImage src={WhiteLilies} height={'28rem'} />
                </StyledImageContainer>
                <StyledImageContainer>
                    <StyledImage src={RedLily} height={'28rem'} />
                </StyledImageContainer>
                <StyledImageContainer>
                    <StyledImage src={SundayPicnic} height={'22rem'} />
                </StyledImageContainer>
                <StyledImageContainer>
                    <StyledImage src={Sunflowers} height={'28rem'} />
                </StyledImageContainer>
            </StyledContentContainer>
        </StyledMainContainer>
    )
}

export default Work;