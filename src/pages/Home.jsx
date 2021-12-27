import React from 'react';
import styled from 'styled-components';
import Headshot from '../images/headshot.png';
import { 
    StyledMainContainer, 
    StyledImageContainer,
    StyledImage,
    StyledText,
 } from '../constants/Styles';


const StyledMainTextContainer = styled.div`
    align-content: center;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

const StyledMainText = styled.h3`
    font-size: 2.8rem;
`

const Home = () => {
    console.log(window.innerWidth);
    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <StyledMainText>Artist. Designer. Engineer.</StyledMainText>
            </StyledMainTextContainer>
            <StyledImageContainer>
                <StyledImage src={Headshot} />
                <StyledText>
                    Based in New York City, I am a frontend engineer currently working for a startup.
                    During my free time, I work on web design for nonprofits and build random web apps.
                </StyledText>
            </StyledImageContainer>
        </StyledMainContainer>
    )
}

export default Home;