import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import Footer from './components/Footer';

library.add(fab, faLinkedin, faGithubSquare)

const theme = {
  main: "black-and-white"
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 90px [row1-end] auto [third-line] 150px [last-line];
  background-color: black;
  height: 100vh;
`

const HeaderContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: end;
  grid-row-start: row1-start;
  grid-row-end: 1;
  color: white;
  padding: 0.75rem;
`

const MainContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: end;
  grid-row-start: 2;
  grid-row-end: 2;
  color: white;
  justify-self: stretch;
  padding: 0.75rem;
`

const FooterContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: end;
  grid-row-start: 3;
  grid-row-end: 3;
  color: white;
  justify-self: stretch;
  padding: 0.75rem;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <HeaderContainer>
          header
        </HeaderContainer>
        <MainContainer>
          main
        </MainContainer>
        <FooterContainer>
          <Footer/>
        </FooterContainer>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
