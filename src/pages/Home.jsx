import React from 'react';
import Headshot from '../images/headshot.png';
import { 
    StyledMainContainer, 
    StyledContentContainer,
    StyledMainTextContainer,
    StyledText,
    AlignCenterContainer,
    StyledImage
 } from '../constants/Styles';


const Home = () => {
    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <h4>Artist & Engineer</h4>
            </StyledMainTextContainer>
            <StyledContentContainer>
                <AlignCenterContainer><StyledImage src={Headshot} height={'20rem'} /></AlignCenterContainer>
                <StyledText>
                    Based in New York City, I am a front-end engineer currently working for a startup.
                </StyledText>
            </StyledContentContainer>
        </StyledMainContainer>
    )
}

export default Home;