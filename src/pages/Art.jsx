import React from 'react';
import styled from 'styled-components';
import { 
    StyledMainContainer, 
    StyledImageContainer,
    StyledText
} from '../constants/Styles';
import RedLily from '../images/red-lily.png';
import SundayPicnic from '../images/sunday-picnic.png';
import WhiteLilies from '../images/white-lilies.png';
import Sunflowers from '../images/sunflowers.png';

export const StyledImage = styled.img`
    height: ${props => props.height};
`

const Art = () => {
    return (
        <StyledMainContainer>
            <StyledImageContainer flexDirection={'row-reverse'}>
                <StyledImage src={SundayPicnic} height={'22rem'} />
                <StyledText>
                My interest in art began at a very young age. I started drawing with color pencils and watercolor. 
                In high school, I took my first painting class. One of my first paintings was a master copy of 
                George Seurat’s “A Sunday on La Grande Jatte”. I picked up painting again during the beginning of 
                the COVID-19 pandemic. My recent pieces were inspired by Georgia O’Keeffe and Van Gogh. 
                </StyledText>
            </StyledImageContainer>
            <StyledImageContainer flexDirection={'row'}>
                <StyledImage src={RedLily} height={'24rem'} />
                <StyledImage src={Sunflowers} height={'24rem'}/>
                <StyledImage src={WhiteLilies} height={'24rem'}/>
            </StyledImageContainer>
        </StyledMainContainer>
    )
}

export default Art;