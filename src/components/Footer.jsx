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
    &>a {
        color: white;
    }
    &:hover>a {
        cursor: pointer;
        color: #0000FF;
      }
`

const Footer = () => {

    return (
        <StyledFooterContainer>
            <h2>
                Get in touch.
            </h2>
            <StyledIconContainer>
                <IconContainer>
                    <a href='https://www.linkedin.com/in/jennyhui93'><FontAwesomeIcon size='2x' icon={['fab', 'linkedin']}/></a>
                </IconContainer>
                <IconContainer>
                <a href='https://www.github.com/jennyhuii'><FontAwesomeIcon size='2x' icon={['fab', 'github-square']}/></a>
                </IconContainer>
            </StyledIconContainer>

        </StyledFooterContainer>
    )
}

export default Footer;