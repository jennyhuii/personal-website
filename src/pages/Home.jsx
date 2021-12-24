import React from 'react';
import styled from 'styled-components';
import Headshot from '../images/headshot.png';


const StyledMainContainer = styled.div`
    align-content: center;
    justify-content: center;
`

const StyledMainTextContainer = styled.div`
    align-content: center;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

const StyledIntroContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10rem 2rem 10rem;
`

const StyledMainText = styled.h3`
    font-size: 2.8rem;
`

const StyledImage = styled.img`
    height: 20rem;
`

const StyledText = styled.p`
    padding-left: 1.5rem;
    font-size: 1.2rem;
`

const Home = () => {
    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <StyledMainText>Artist. Designer. Engineer.</StyledMainText>
            </StyledMainTextContainer>
            <StyledIntroContainer>
                <StyledImage src={Headshot} />
                <StyledText>
                    Based in New York City, I am a frontend engineer currently working for a startup.

                </StyledText>
            </StyledIntroContainer>
        </StyledMainContainer>
    )
}

export default Home;