import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    padding-left: 1rem;
`

const StyledLink = styled(NavLink)`
    text-decoration:none;
    color: white;
    &:hover {
        color: #0000FF;
      }
    &.active {
        &>h3{
            padding-bottom: 5px;
            border-bottom-style: solid;
            width: fit-content;
        }
    }
`

const StyledHomeLink = styled(NavLink)`
    text-decoration:none;
    color: white;
    &:hover {
        color: #0000FF;
      }
`

const StyledList = styled.ul`
    list-style-type: none;
    overflow: hidden;
    align-content: center;
`

const StyledListItem = styled.li`
    float: left;
    padding-right: 2.4rem;
    align-content: center;
`

const Header = () => {

    return (
        <StyledHeaderContainer>
            <StyledHomeLink to="/"><h1>Jenny Hui</h1></StyledHomeLink>
            <StyledList>
                <StyledListItem><StyledLink to="/art"><h3>Art</h3></StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/design"><h3>Design</h3></StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/code"><h3>Code</h3></StyledLink></StyledListItem>
            </StyledList>
        </StyledHeaderContainer>
    )
}

export default Header;