import styled from 'styled-components';

export const StyledMainContainer = styled.div`
    align-content: center;
    justify-content: center;
    text-align: center;
`;

export const StyledMainTextContainer = styled.div`
    align-content: center;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

export const StyledMainText = styled.h3`
    font-size: 2.4rem;
`

export const StyledContentContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
`

export const StyledText = styled.p`
    font-size: 1.2rem;
    text-align: justify;
    margin-top: 0;
`

export const StyledImage = styled.img`
    height: ${props => props.height};
    padding-left: ${props => props.paddingLeft};
    padding-right: ${props => props.paddingRight};
`