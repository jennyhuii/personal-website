import React from 'react';
import Headshot from '../images/headshot.png';
import { 
    StyledMainContainer, 
    StyledContentContainer,
    StyledMainTextContainer,
    StyledText,
    StyledMainText,
    AlignCenterContainer,
    StyledImage
 } from '../constants/Styles';


const Home = () => {
    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <StyledMainText>Artist & Engineer</StyledMainText>
            </StyledMainTextContainer>
            <StyledContentContainer>
                <AlignCenterContainer><StyledImage src={Headshot} height={'20rem'} /></AlignCenterContainer>
                <StyledText>
                    Based in New York City, I am a front-end engineer currently working for a startup.
                    I am also a painter who loves painting landscapes and plants.
                    My work includes paintings and web apps built in javascript.
                    During my free time, I enjoy practicing yoga and going on long walks.
                </StyledText>
            </StyledContentContainer>
        </StyledMainContainer>
    )
}

export default Home;