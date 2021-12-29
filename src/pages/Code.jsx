import React from 'react';
import styled from 'styled-components';
import {
    StyledMainContainer,
    StyledImageContainer,
    StyledSecondaryText,
    StyledImage,
    StyledImageTitle
} from '../constants/Styles';
import DailyDriver from '../images/daily-driver-website.png';


const StyledLink = styled.a`
    color: white;
    &:hover {
        cursor: pointer;
        color: #4f4fff;
    }
`

const Code = () => {
    return (
        <StyledMainContainer>
            <br />
            <br />
            <StyledImageContainer flexDirection={'row-reverse'}>
                <StyledImage src={DailyDriver} height={'22rem'} paddingLeft={'3rem'} />
                <div>
                    <StyledImageTitle>“Daily Driver”</StyledImageTitle>
                    <StyledSecondaryText>
                        I love Adam Driver. One night, I thought it would be funny to make a corny website
                        that shows a random picture of Adam Driver with a motivational quote. This app is currently hosted
                        on <b><StyledLink href='https://wizardly-bartik-f9a0d2.netlify.app/'>Netlify</StyledLink></b> since I haven't decided on a domain yet.
                        Checkout the code on the <b><StyledLink href='https://www.github.com/jennyhuii/adam-driver-fever'>Github page</StyledLink></b>.
                    </StyledSecondaryText>
                </div>
            </StyledImageContainer>
        </StyledMainContainer>
    )
}

export default Code;