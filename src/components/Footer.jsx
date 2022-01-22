import React from 'react';
import styled from 'styled-components';

const StyledFooterContainer = styled.div`
    padding-top: 1rem;
    text-align: center;
`

const Footer = () => {

    return (
        <StyledFooterContainer>
            <h3>
                Built with React
            </h3>
        </StyledFooterContainer>
    )
}

export default Footer;