import styled from 'styled-components';

export const StyledMainContainer = styled.div`
    align-content: center;
    justify-content: center;
    text-align: center;
`;

export const StyledImageContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: space-between;
    padding: 0 10rem 2rem 10rem;
`

export const StyledImageTitle = styled.h3`
    margin-top: 0;
`

export const StyledText = styled.p`
    font-size: 1.2rem;
    text-align: justify;
    margin-top: 0;
`

export const StyledSecondaryText = styled.p`
    text-align: justify;
`

export const StyledImage = styled.img`
    height: ${props => props.height};
    padding-left: ${props => props.paddingLeft};
    padding-right: ${props => props.paddingRight};
`