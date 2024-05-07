import React from "react";
import styled from "styled-components";
import {
  StyledMainContainer,
  StyledMainTextContainer,
  StyledImage,
} from "../constants/Styles";
import Together from "../images/designs/together.png";
import OneHundredDays from "../images/designs/100days.png";

const StyledImageContainer = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  justify-content: center;
`;

const StyledText = styled.p`
  @media (min-width: 800px) {
    padding-left: 15rem;
    padding-right: 15rem;
    text-align: left;
  }
  @media (max-width: 800px) {
    text-align: left;
  }
`;

const NYUMastersThesis = () => {
  const isSmallScreen = window.screen.width < 800;
  const imageHeight = isSmallScreen ? "10rem" : "15rem";
  return (
    <StyledMainContainer>
      <StyledMainTextContainer>
        <h1>Asian Family's Love Language</h1>
      </StyledMainTextContainer>
      <StyledText>
        <b>Goal...</b>
      </StyledText>
      <StyledText>
        My parents and most of my friend’s parents who are of Asian descent
        rarely show affection the way parents of Western cultures do. For my NYU
        Master's thesis, I want to tell an Asian family love language story
        through an interactive installation. This installation went through many
        iterations...
      </StyledText>
      <StyledText>
        <b>Literary Review...</b>
      </StyledText>
      <StyledText>
        When ideals and perceptions of love don't match, intergenerational
        cultural conflict can occur. In Eastern cultures, Confucius influences
        are everywhere. Parental love should be implicitly understood and not
        openly expressed. As Confucius said, "Actions over words, the words mean
        nothing."
      </StyledText>
      <StyledText>
        <b>Inspirations...</b>
      </StyledText>
      <StyledImageContainer>
        <StyledImage src={OneHundredDays} height={imageHeight} />
      </StyledImageContainer>
      <StyledText>
        Together, let’s be outside of San Francisco City Hall. The installation
        features a a mural that is interactive to gather collective memory on
        the Asian American experience.
      </StyledText>

      <StyledImageContainer>
        <StyledImage src={Together} height={imageHeight} />
      </StyledImageContainer>
      <StyledText>
        #100DaysAsians is a collection of sketches that examined food,
        stereotypes, and Asian American history.
      </StyledText>
      <StyledText>
        <b>Iterations...</b>
      </StyledText>
      <StyledText>1. Love language dictionary</StyledText>
      <StyledText>2. Card game with your Asian parents</StyledText>
      <StyledText>3. Cut fruits using cardboard paper</StyledText>
      <StyledText>4. Hand pose tracking for cut fruits interaction</StyledText>
      <StyledText>
        5. Show the cut fruit process with soundbites of my mother asking me
        questions and telling me to do things 😑
      </StyledText>
      <StyledText>
        <b>Final work...</b>
      </StyledText>
      <StyledText>
        An interactive installation that combines the love/breakup letter design
        research method. The centerpiece short film features me peeling,
        removing seeds, and cutting fruits and my mother's voice pestering in
        the background. The fruits themselves tell a story of our relationship
        over the years, relying heavily on symbols and metaphors. The audience
        is encouraged to write a love letter to the love gestures this
        installation reminds them of.
      </StyledText>
      <StyledText>
        Pictures coming soon...
      </StyledText>
    </StyledMainContainer>
  );
};

export default NYUMastersThesis;
