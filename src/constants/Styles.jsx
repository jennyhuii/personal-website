import styled from 'styled-components';

export const StyledMainContainer = styled.div`
    align-content: center;
    justify-content: center;
    text-align: center;
`;

export const StyledMainTextContainer = styled.div`
    align-content: center;
    text-align: center;
    padding: 0.25rem;
`

export const AlignCenterContainer = styled.div`
    align-content: center;
`

export const StyledMainText = styled.h3`
    font-size: 2.4rem;
`

export const StyledContentContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
`

export const StyledText = styled.p`
    font-size: 1.2rem;
    text-align: justify;
    margin-top: 0;
    padding: 0 1.25rem 0 0.25rem;
`

export const StyledImage = styled.img`
    height: ${props => props.height};
`