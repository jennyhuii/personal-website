import React from 'react';
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

const Work = () => {
    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <StyledMainText>My Work</StyledMainText>
            </StyledMainTextContainer>
            <StyledContentContainer flexDirection={'row-reverse'}>
                <StyledImage src={SundayPicnic} height={'22rem'} paddingLeft={'3rem'} />
                <StyledImage src={Sunflowers} height={'28rem'} paddingLeft={'3rem'} />
            </StyledContentContainer>
            <StyledContentContainer flexDirection={'row'}>
                <StyledImage src={WhiteLilies} height={'28rem'} paddingRight={'3rem'} />
                <StyledImage src={RedLily} height={'28rem'} paddingRight={'3rem'} />
            </StyledContentContainer>
        </StyledMainContainer>
    )
}

export default Work;