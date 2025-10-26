import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledImage } from '../constants/Styles';
import RedMap from '../images/time-capsule/redmap.png';
import Drought from '../images/time-capsule/drought.png';
import Trash from '../images/time-capsule/trash.png';
import Bookshelf from '../images/time-capsule/bookshelf.png';
import TCContent from '../images/time-capsule/content.png';
import Protest1 from '../images/time-capsule/protest1.png';
import Protest2 from '../images/time-capsule/protest2.png';
import Protest3 from '../images/time-capsule/protest3.png';

const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto [col-start]);
    padding: 2rem 0 2rem 0;
    & > span {
        font-size: 2.4rem;
        letter-spacing: .2rem;
        font-weight: bold;
        text-align: center;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

const SelectedSpan = styled.span`
    text-decoration: underline;
`

const Divider = styled.div`
    margin: 0 1rem 5rem 1rem;
    padding:1rem;
    width: auto;
    border-bottom: 2px solid grey;
`
const Content = styled.div`
    text-align: center;
    padding: 1rem 3rem 3rem 3rem;
`

const TextContent = styled.div`
    padding: 1rem 6rem 1rem 6rem;
    font-size: 1.2rem;
`

const Header = ({ selected, setSelected }) => {
    return (<>
        <StyledHeader>
            {selected === 'statusquo' ? <SelectedSpan>
                Status Quo
            </SelectedSpan> : <span onClick={() => setSelected('statusquo')}>
                Status Quo
            </span>}
            {selected === 'discovery' ? <SelectedSpan>
                Discovery
            </SelectedSpan> : <span onClick={() => setSelected('discovery')}>
                Discovery
            </span>}
            {selected === 'aftermath' ? <SelectedSpan>
                Aftermath
            </SelectedSpan> : <span onClick={() => setSelected('aftermath')}>
                Aftermath
            </span>}
        </StyledHeader>
        <Divider />
    </>);
}

const StatusQuo = () => {
    return (
        <>
            <TextContent>
                <p>
                    Voter turnout has hit an all-time low (again) in America. With the Supreme Court,
                    with 8 conservative justices, recently declaring birth control to be illegal, political
                    experts expected a record turnout. But due to voter suppression and gerrymandering, Republicans
                    won over 90% of the races in the House and all the Senate races this cycle.
                </p>
            </TextContent>
            <Content>
                <StyledImage src={RedMap} height={'30rem'} />
                <p>The electoral map hasn't changed much in the past 80 years
                    due to very low voter turnout and gerrymandering.
                </p>
            </Content>
            <TextContent>
                <p>
                    Climate change continues to be the top concern of voters. Congress hasn’t passed a meaningful
                    environmental bill in over 80 years. More climate deniers were elected in the most recent
                    election than ever before.
                </p>
            </TextContent>
            <Content>
                <StyledImage src={Drought} height={'30rem'} />
                <p>The Great Lakes are drying up at the fastest rate in decades.</p>
            </Content>
            <TextContent>
                <p>
                    Since the repeal of the 14th amendment, some states have been deporting
                    citizens back to the country of their origin. Most of the deported citizens were people of color.
                    The Supreme Court has twice upheld the repeal and will be hearing cases regarding the 15th and 16
                    amendments. Due to the lack of workers, many businesses shut down. President Ron DeSantis, who
                    was elected in 2024, banned most of the “woke” books in school. School is no longer required due
                    to lack of funding.
                </p>
            </TextContent>
            <Content>
                <StyledImage src={Trash} height={'30rem'} />
                <p>New York City's trash problem grows as earth runs out of space for landfill.</p>
            </Content>
            <TextContent>
                <p>
                    “The problem isn’t that we don’t have the votes. The problem is that
                    most people don’t believe voting works. So they don’t even vote!” an activist said.
                    “Our elected officials aren’t interested in solving real problems that people are facing.
                    New York City’s trash problem has been untouched for over a century!”
                </p>
            </TextContent>
        </>
    );
}

const Discovery = () => {
    return (
        <>
            <Content>
                <StyledImage src={Bookshelf} height={'30rem'} />
                <p>Originally thought to be a copy of President Ron DeSantis's book, the box turns out to be a time capsule.</p>
            </Content>
            <TextContent>
                <p>
                    A recent discovery of a time capsule changed things. 95% of the public tuned into the news coverage.
                    The box was long thought to be former Ron DeSantis’s book, as the cover suggests. The owners never really
                    touched the book because they assumed the book contained no real substance. One day, someone dropped the book
                    while moving and the box opened and revealed that it contained 4 objects. Experts suggest that the items in
                    this time capsule are warnings from people who lived in the last century.
                    The cloth mask is a callback to the coronavirus pandemic that happened in 2019. We learned that cloth masks
                    are not effective against viruses that can be inhaled. At the start of every pandemic, the government releases
                    a national stockpile of N95 masks. Since then, we’ve had 4 pandemics due to lack of funding for medical research
                    and enforcement on virus producing mechanisms. Experts did not agree to what the strap and tube with red
                    substance mean. Historians suggest that our ancestors used the red substance as face paint. The strap feels
                    sturdier than anything we make today. This highlights the lack of technological progress in this century.
                    The most revealing object is the book called Feminist Manifesto. Judging by the content, people a century ago
                    generally had more rights than we do currently.

                </p>
            </TextContent>
            <Content>
                <StyledImage src={TCContent} height={'30rem'} />
                <p>A cloth mask, a strap, a lipstick, and feminist manifesto are found inside this time capsule.</p>
            </Content>
        </>
    );
}

const Aftermath = () => {
    return (
        <>
            <TextContent>
                <p>
                    The discovery of the time capsule sparked many protests across the country.
                    People realized our country has been regressing for the past century. Voter registration
                    continues to increase over the last month. People are actively demanding more progress in general.
                    Many women are throwing the hat in the upcoming
                    Presidential race after the discovery of the time capsule.
                </p>
            </TextContent>
            <Content>
                <StyledImage src={Protest1} height={'30rem'} />
                <p>Protest for abortion rights in New York City.</p>
            </Content>
            <Content>
                <StyledImage src={Protest2} height={'30rem'} />
                <p>Bay Area residents gathered in front of City Hall this weekend to
                    urge state government to pass major climate bill.
                </p>
            </Content>
            <Content>
                <StyledImage src={Protest3} height={'30rem'} />
                <p>First woman announcing her run for President in 80 years.</p>
            </Content>
        </>
    );
}

const TimeCapsulePhotoEssay = () => {
    const [selected, setSelected] = useState('statusquo')
    let content = <></>;
    switch (selected) {
        case 'statusquo':
            content = <StatusQuo />;
            break;
        case 'discovery':
            content = <Discovery />;
            break;
        default:
            content = <Aftermath />;
    }

    return (
        <div style={{ fontFamily: 'Times New Roman' }}>
            <Header selected={selected} setSelected={setSelected} />
            {content}
        </div>
    )
}

export default TimeCapsulePhotoEssay;