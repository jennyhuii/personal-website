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
//import DigitalAdManager from '../images/designs/digital-ad-manager.png';

const StyledImageContainer = styled.div`
    padding: 1rem;
    justify-content: center;
    height: ${props => props.height};;
`

const Work = () => {
    const history = useHistory();

    console.log(window.screen.width)

    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <h1>Hello, I'm Jenny. I'm an artist and an engineer.</h1>
            </StyledMainTextContainer>
            <StyledContentContainer>
                <div>
                    <StyledImageContainer height={'21rem'}>
                        <StyledImageWithHover onClick={() => history.push('/flowers')} src={Paintings} height={'20rem'} hoverHeight={'20.5rem'} />
                    </StyledImageContainer>
                    <a href={'/flowers'}>
                        <h3>
                            Abstract Flower Paintings, Acrylic on Canvas
                        </h3>
                    </a>
                </div>
                <div>
                    <StyledImageContainer height={'21rem'}>
                        <StyledImageWithHover onClick={() => history.push('/master-copy')} src={MasterCopy} height={'20rem'} hoverHeight={'20.5rem'} />
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
            <StyledContentContainer>
                <div>
                    <StyledImageContainer height={'21rem'}>
                        <StyledImageWithHover onClick={() => history.push('/national-parks')} src={NationalPark} height={'20rem'} hoverHeight={'20.5rem'} />
                    </StyledImageContainer>
                    <a href={'/national-parks'}>
                        <h3>
                            National Park Collection, Acrylic on Canvas
                        </h3>
                    </a>
                </div>
                </StyledContentContainer>
            <br></br>
            <br></br>
            <br></br>
            {/* <StyledContentContainer>
                <div>
                    <StyledImageContainer height={'22rem'}>
                        <StyledImageWithHover onClick={() => history.push('/designs')} src={DigitalAdManager} height={'21rem'} hoverHeight={'21.5rem'} />
                    </StyledImageContainer>
                    <h3>
                        Digital Ad Manager, Product Design
                    </h3>
                </div>
            </StyledContentContainer> */}
        </StyledMainContainer>
    )
}

export default Work;