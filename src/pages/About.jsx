import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headshot from "../images/headshot.png";
import {
  StyledMainContainer,
  StyledContentContainer,
  StyledMainTextContainer,
  StyledText,
  AlignCenterContainer,
  StyledImage,
} from "../constants/Styles";

const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const IconContainer = styled.div`
  padding: 0.25rem;
  & > a {
    color: 29293D;
  }
  &:hover > a {
    cursor: pointer;
    color: #666699;
  }
`;

const Contact = () => {
  return (
    <StyledMainContainer>
      <StyledMainTextContainer>
        <h1>Get in touch</h1>
      </StyledMainTextContainer>
      <StyledContentContainer>
        <AlignCenterContainer>
          <StyledImage src={Headshot} height={"20rem"} />
        </AlignCenterContainer>
        <div>
          <StyledText>
            I'm a front-end engineer currently working at{" "}
            <a href="https://www.electric.ai" target="_blank" rel="noreferrer">
              Electric AI
            </a>
            . During my free time, I enjoy yoga, ballet, and painting. I'm
            interested in learning more about user experience design and
            research. Currently, I'm looking for civic tech volunteer
            opportunities.
          </StyledText>
          <StyledText>Connect with me:</StyledText>
          <StyledIconContainer>
            <IconContainer>
              <a
                href="https://www.linkedin.com/in/jennyhui108"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} />
              </a>
            </IconContainer>
            <IconContainer>
              <a
                href="https://www.github.com/jennyhuii"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon size="2x" icon={["fab", "github-square"]} />
              </a>
            </IconContainer>
          </StyledIconContainer>
        </div>
      </StyledContentContainer>
    </StyledMainContainer>
  );
};

export default Contact;
