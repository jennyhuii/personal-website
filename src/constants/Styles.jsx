import styled from 'styled-components';

export const StyledMainContainer = styled.div`
    align-content: center;
    justify-content: center;
    text-align: center;
`;

export const StyledMainTextContainer = styled.div`
    align-content: center;
    text-align: center;
    padding: 1rem 0rem 3rem 0rem;
`

export const AlignCenterContainer = styled.div`
    align-content: center;
`

export const StyledContentContainer = styled.div`
@media (min-width: 800px) {
    display: grid;
    grid-gap: 0rem;
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 800px) {
    display: grid;
    grid-gap: 0rem;
    grid-template-columns: repeat(1, 1fr);
}
`

export const StyledText = styled.p`
@media (min-width: 800px){
    font-size: 1.2rem;
    margin-top: 0;
    padding: 0 7rem 0 0.25rem;
    text-align: left;
}
@media (max-width: 800px) {
    text-align: left;
}    
`

export const StyledImage = styled.img`
    height: ${props => props.height};
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.5);
`

export const StyledImageWithHover = styled(StyledImage)`
&:hover {
    height: ${props => props.hoverHeight};
    cursor: pointer;
    }
}
`