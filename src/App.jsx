import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Art from './pages/Art';
import Design from './pages/Design';
import Code from './pages/Code';


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
        <Router>
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          <MainContainer>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/art">
              <Art />
            </Route>
            <Route path="/design">
              <Design />
            </Route>
            <Route path="/code">
              <Code />
            </Route>
          </MainContainer>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </Router>

      </Grid>
    </ThemeProvider>
  );
}

export default App;
