import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import {
    StyledMainContainer,
    StyledContentContainer,
    StyledImageWithHover,
    StyledMainTextContainer,
} from '../constants/Styles';
import Paintings from '../images/paintings/paintings.png';
import MasterCopy from '../images/paintings/mastercopy.png';
import NationalPark from '../images/paintings/national-parks.png';
import DigitalAdManager from '../images/designs/digital-ad-manager.png';

const StyledImageContainer = styled.div`
    padding: 1rem;
    justify-content: center;
    height: ${props => props.height};;
`

const Work = () => {
    const history = useHistory();
    const isSmallScreen = window.screen.width < 800;
    const containerHeight = isSmallScreen ? '13rem' : '21rem';
    const imageHeight = isSmallScreen ? '12rem' : '20rem';
    const hoverHeight = isSmallScreen ? '12.5rem' : '20.5rem';

    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <h1>Hello, I'm Jenny. I'm an artist and an engineer.</h1>
            </StyledMainTextContainer>
            <StyledContentContainer>
                <div>
                    <StyledImageContainer height={containerHeight}>
                        <StyledImageWithHover onClick={() => history.push('/flowers')} src={Paintings} height={imageHeight} hoverHeight={hoverHeight} />
                    </StyledImageContainer>
                    <a href={'/flowers'}>
                        <h3>
                            Abstract Flower Paintings, Acrylic on Canvas
                        </h3>
                    </a>
                </div>
                <div>
                    <StyledImageContainer height={containerHeight}>
                        <StyledImageWithHover onClick={() => history.push('/digital-ad-manager')} src={DigitalAdManager} height={imageHeight} hoverHeight={hoverHeight} />
                    </StyledImageContainer>
                    <a href={'/digital-ad-manager'}>
                        <h3>
                            Digital Ad Manager, Product Design & Engineering
                        </h3>
                    </a>
                </div>
            </StyledContentContainer>
            <br></br>
            <br></br>
            <br></br>
            <StyledContentContainer>
                <div>
                    <StyledImageContainer height={containerHeight}>
                        <StyledImageWithHover onClick={() => history.push('/national-parks')} src={NationalPark} height={imageHeight} hoverHeight={hoverHeight} />
                    </StyledImageContainer>
                    <a href={'/national-parks'}>
                        <h3>
                            National Park Collection, Acrylic on Canvas
                        </h3>
                    </a>
                </div>
                <div>
                    <StyledImageContainer height={containerHeight}>
                        <StyledImageWithHover onClick={() => history.push('/master-copy')} src={MasterCopy} height={imageHeight} hoverHeight={hoverHeight} />
                    </StyledImageContainer>
                    <a href={'/master-copy'}>
                        <h3>
                            A Sunday on La Grande Jatte (Master Copy), Oil on Wood Panel
                        </h3>
                    </a>
                </div>
            </StyledContentContainer>
            <br></br>
            <br></br>
            <br></br>
        </StyledMainContainer>
    )
}

export default Work;