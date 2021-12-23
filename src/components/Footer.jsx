import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledFooterContainer = styled.div`
    text-align: center;
`

const StyledIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const IconContainer = styled.div`
    padding: 0.25rem;
    &:hover>svg {
        cursor: pointer;
        color: #ADD8E6;
      }
`

const Footer = () => {

    const openLink = (url) => window.open(url);

    return (
        <StyledFooterContainer>
            <h2>
                Get in touch :)
            </h2>
            <StyledIconContainer>
                <IconContainer>
                    <FontAwesomeIcon size='2x' icon={['fab', 'linkedin']} onClick={() => openLink('https://www.linkedin.com/in/jennyhui93')}/>
                </IconContainer>
                <IconContainer>
                    <FontAwesomeIcon size='2x' icon={['fab', 'github-square']} onClick={() => openLink('https://www.github.com/jennyhuii')}/>
                </IconContainer>
            </StyledIconContainer>

        </StyledFooterContainer>
    )
}

export default Footer;