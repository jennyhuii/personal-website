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
`

const Home = () => {
    console.log(window.innerWidth);
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
                    My work includes paintings, product designs and random web apps built in javascript.
                </StyledText>
            </StyledImageContainer>
        </StyledMainContainer>
    )
}

export default Home;