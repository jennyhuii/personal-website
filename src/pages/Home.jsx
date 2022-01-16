import React from 'react';
import styled from 'styled-components';
import Headshot from '../images/headshot.png';
import { 
    StyledMainContainer, 
    StyledContentContainer,
    StyledMainTextContainer,
    StyledText,
    StyledMainText,
 } from '../constants/Styles';

export const StyledImage = styled.img`
    height: 20rem;
`

const Home = () => {
    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <StyledMainText>Artist & Engineer</StyledMainText>
            </StyledMainTextContainer>
            <StyledContentContainer>
                <StyledImage src={Headshot} />
                <StyledText>
                    Based in New York City, I am a frontend engineer currently working for a startup.
                    I am also a painter who loves painting landscape and plants.
                    A few years ago, I taught myself how to code. 
                    My work includes paintings and web apps built in javascript.
                    During my free time, I enjoy practicing yoga and going on long walks.
                </StyledText>
            </StyledContentContainer>
        </StyledMainContainer>
    )
}

export default Home;