import React from 'react';
import styled from 'styled-components';
import {
    StyledMainContainer,
    StyledMainTextContainer,
    StyledContentContainer,
    StyledImage,
} from '../constants/Styles';
import AllCampaign from '../images/designs/dam-all-campaign.png';

const StyledText = styled.p`
    text-align:left;
`

const StyledImageContainer = styled.div`
    padding: 0rem 1rem 2rem 1rem;
    justify-content: center;
`

const Designs = () => {
    return (
        <StyledMainContainer>
            <StyledMainTextContainer>
                <h2>Digital Ad Manager</h2>
            </StyledMainTextContainer>
            <StyledContentContainer>
                <StyledImage src={AllCampaign} height={'20rem'} />
                <div>
                    <StyledText>
                        The founder of Cambrya developed an algorithm to optimize progressive political campaign outreach to constituents.
                        Political campaigns run ads on social media to persuade and reach voters in their district. Traditional advertisements
                        include TV commercials, mail, etc. Voter outreach methods include cold calling and texting. Those persuasion and
                        outreach techniques are not scalable. Cambrya's ad budget distribution algorithm fits the needs of modern campaigns.
                    </StyledText>
                    <StyledText>
                        I was a consultant for Cambrya and I designed and developed the Digital Ad Manager. After meetings with the founder
                        and staff who run the algorithm daily via a computer terminal, I learned that the algorithm requires 3 different
                        sets of data: campaigns, budget silo, and ad. This method is a barrier to users who are not familiar with using a
                        computer terminal. Before the Digital Ad Manager, the data entry alone took many hours for each ad because the users
                        often have to relearn how to use a terminal. The IDs of the campaigns, budget silos, and ads are manually recorded on
                        Google Sheets. Errors were made easily if you input the incorrect ID. An ad can be launched that didn't belong to
                        the intended campaign.
                    </StyledText>
                </div>
            </StyledContentContainer>
            <StyledContentContainer>
            <StyledImage src={AllCampaign} height={'20rem'} />
                <div>
                    <StyledText>
                        Data integrity, transparency, and ease of use were the main goals when designing Digital Ad Manager. When the user
                        first logs into the app, all the campaigns are visible. When the user clicks on a campaign, they are in the campaign's
                        "space", and the budget silos and ads are in the context of that selected campaign. This information architecture
                        tells the user that the budget silos and ads belong to the campaign they selected.
                    </StyledText>
                    <StyledText>
                        Entering data was tricky because each object requires many fields. There is a lot of information a user has to
                        enter for each campaign, its budget silos, and its ads. I organized the fields into more intuitive groups. With this
                        user interface, data entry becomes user-friendly.
                    </StyledText>
                    <StyledText>
                        Selecting the ads and then launching them executes the budget distribution algorithm. The ads then get posted
                        automatically to Facebook or Instagram. With each audience interaction, each budget then gets reallocated. Digital
                        Ad Manager also shows the most updated data. Before, only one person was able to access the database to query those data.
                    </StyledText>
                </div>
            </StyledContentContainer>
        </StyledMainContainer>
    )
}

export default Designs;