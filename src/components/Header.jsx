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
    color: #000029;
    &:hover {
        text-decoration:none;
        &>h3 {
        color: #899499;
        padding-bottom: 5px;
        border-bottom-style: solid;
        }
    }
    &.active {
        &>h3 {
            padding-bottom: 5px;
            border-bottom-style: solid;
            width: fit-content;
        }
    }
`

const StyledAnchor = styled.a`
    text-decoration:none;
    color: #000029;
    &:hover {
        text-decoration:none;
        &>h3 {
        color: #899499;
        padding-bottom: 5px;
        border-bottom-style: solid;
        }
      }
    &.active {
        &>h3 {
            padding-bottom: 5px;
            border-bottom-style: solid;
            width: fit-content;
        }
    }
`

const StyledHomeLink = styled(NavLink)`
    text-decoration:none;
    color: #000029;
    &:hover {
        text-decoration:none;
        &>h1 {
        color: #899499;
        padding-bottom: 5px;
        border-bottom-style: solid;
        }
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
            <StyledHomeLink to="/"><h1>JENNY HUI</h1></StyledHomeLink>
            <StyledList>
                <StyledListItem><StyledLink to="/my-work"><h3>My Work</h3></StyledLink></StyledListItem>
                <StyledListItem><StyledAnchor href='https://www.linkedin.com/in/jennyhui93'><h3>LinkedIn</h3></StyledAnchor></StyledListItem>
                <StyledListItem><StyledAnchor href='https://www.github.com/jennyhuii'><h3>Github</h3></StyledAnchor></StyledListItem>
            </StyledList>
        </StyledHeaderContainer>
    )
}

export default Header;