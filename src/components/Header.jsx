import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding: 0 1.5rem 0 1.5rem;
`;

const StyledHeaderDiv = styled.div`
  align-content: center;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
    & > h3 {
      color: #666699;
      padding-bottom: 5px;
      border-bottom-style: solid;
    }
  }
  &.active {
    & > h3 {
      padding-bottom: 5px;
      border-bottom-style: solid;
      width: fit-content;
    }
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  overflow: hidden;
  align-content: center;
`;

const StyledListItem = styled.li`
  float: left;
  padding-right: 2.4rem;
  align-content: center;
`;

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderDiv>
        <h1>Jenny Hui | Creative Technologist</h1>
      </StyledHeaderDiv>
      <StyledList>
        <StyledListItem>
          <StyledLink to="/work">
            <h3>My work</h3>
          </StyledLink>
        </StyledListItem>
        {/* <StyledListItem>
          <StyledLink to="/about">
            <h3>About me</h3>
          </StyledLink>
        </StyledListItem> */}
      </StyledList>
    </StyledHeaderContainer>
  );
};

export default Header;
