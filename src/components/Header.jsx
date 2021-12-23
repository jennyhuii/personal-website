import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 1rem;
`

const StyledLink = styled(Link)`
    text-decoration:none;
    color: white;
    &:hover {
        color: #ADD8E6;
      }
`

const StyledList = styled.ul`
    list-style-type: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
`

const StyledListItem = styled.li`
    float: left;
    padding-right: 1.5rem;
`

const Header = () => {

    return (
        <StyledHeaderContainer>
            <StyledLink to="/"><h1>Jenny Hui</h1></StyledLink>
            <StyledList>
                <StyledListItem><StyledLink to="/art"><h3>Art</h3></StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/design"><h3>Design</h3></StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/code"><h3>Code</h3></StyledLink></StyledListItem>
            </StyledList>
        </StyledHeaderContainer>
    )
}

export default Header;