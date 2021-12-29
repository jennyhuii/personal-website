import React from 'react';
import styled from 'styled-components';
import Headshot from '../images/headshot.png';
import { 
    StyledMainContainer, 
    StyledImageContainer,
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

export const StyledImage = styled.img`
    height: 20rem;
    padding-right: 3rem;
`

const Home = () => {
    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <StyledMainText>Artist. Designer. Engineer.</StyledMainText>
            </StyledMainTextContainer>
            <StyledImageContainer flexDirection={'row'}>
                <StyledImage src={Headshot} />
                <StyledText>
                    Based in New York City, I am a frontend engineer currently working for a startup.
                    A few years ago, I taught myself how to code. I love art and technology. 
                    My work includes paintings, product design and web apps built in javascript.
                    During my free time, I enjoy doing yoga and going on long walks.
                </StyledText>
            </StyledImageContainer>
        </StyledMainContainer>
    )
}

export default Home;