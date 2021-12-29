import React from 'react';
import {
    StyledMainContainer,
    StyledImageContainer,
    StyledImage,
    StyledSecondaryText,
    StyledImageTitle
} from '../constants/Styles';
import RedLily from '../images/red-lily.png';
import SundayPicnic from '../images/sunday-picnic.png';
import WhiteLilies from '../images/white-lilies.png';
import Sunflowers from '../images/sunflowers.png';

const Art = () => {
    return (
        <StyledMainContainer>
            <br />
            <br/>
            <StyledImageContainer flexDirection={'row-reverse'}>
                <StyledImage src={SundayPicnic} height={'22rem'} paddingLeft={'3rem'} />
                <div>
                    <StyledImageTitle>“A Sunday on La Grande Jatte”</StyledImageTitle>
                    <StyledSecondaryText>
                        My interest in art began at a very young age. I started drawing with color pencils and watercolor.
                        In high school, I took my first painting class. One of my first paintings was a master copy of
                        George Seurat’s iconic piece using pointillism.
                    </StyledSecondaryText>
                </div>
            </StyledImageContainer>
            <StyledImageContainer flexDirection={'row'}>
                <StyledImage src={WhiteLilies} height={'28rem'} paddingRight={'3rem'} />
                <div>
                    <StyledImageTitle>"White Calla Lilies”</StyledImageTitle>
                    <StyledSecondaryText>
                        I picked up painting again during the beginning of the COVID-19 pandemic.
                        This painting is inspired by Georgia O'Keeffe's work. I painted this piece for 
                        a friend whose wife is a huge fan of O'Keeffe.
                    </StyledSecondaryText>
                </div>
            </StyledImageContainer>
            <StyledImageContainer flexDirection={'row-reverse'}>
                <StyledImage src={Sunflowers} height={'28rem'} paddingLeft={'3rem'} />
                <div>
                    <StyledImageTitle>“Sunflowers”</StyledImageTitle>
                    <StyledSecondaryText>
                        This is another (almost) master copy, originally painted by Van Gogh. I signed 
                        my name on the vase instead of signing "Vincent".
                    </StyledSecondaryText>
                </div>
            </StyledImageContainer>
            <StyledImageContainer flexDirection={'row'}>
                <StyledImage src={RedLily} height={'28rem'} paddingRight={'3rem'} />
                <div>
                    <StyledImageTitle>“Red Lily from Top”</StyledImageTitle>
                    <StyledSecondaryText>
                        I wanted to portray a flower from another perspectives. I love abstract paintings.
                        This is my favorite piece because this is not just a lily. I love the different shades of red too. 
                    </StyledSecondaryText>
                </div>
            </StyledImageContainer>
        </StyledMainContainer>
    )
}

export default Art;