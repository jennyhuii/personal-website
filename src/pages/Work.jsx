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
                <h1>Under construction. More to come...</h1>
            </StyledMainTextContainer>
        </StyledMainContainer>
    )
}

export default Work;