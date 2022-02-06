import React from 'react';
import styled from 'styled-components';

const StyledFooterContainer = styled.div`
    padding-top: 1rem;
    text-align: center;
`

const Footer = () => {

    return (
        <StyledFooterContainer>
            <h4>
                Designed & Built by Jenny using React
            </h4>
        </StyledFooterContainer>
    )
}

export default Footer;