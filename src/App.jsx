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
import Contact from './pages/Contact';
import Work from './pages/Work';
import Designs from './pages/Designs';
import Flowers from './pages/Flowers';
import MasterCopy from './pages/MasterCopy';
import NationalParks from './pages/NationalParks';


library.add(fab, faLinkedin, faGithubSquare)

const theme = {
  main: "black-and-white"
};

const HeaderContainer = styled.div`
  padding: 0.75rem;
  height: 90px;
`

const MainContainer = styled.div`
  justify-self: stretch;
  padding: 1rem;
  min-height: 30rem;
`

const FooterContainer = styled.div`
  justify-self: stretch;
  padding-bottom: 1rem;
  height: 70px;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          <MainContainer>
            <Route exact path="/">
              <Work />
            </Route>
            <Route exact path="/my-work">
              <Work />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/designs">
              <Designs />
            </Route>
            <Route exact path="/flowers">
              <Flowers />
            </Route>
            <Route exact path="/master-copy">
              <MasterCopy />
            </Route>
            <Route exact path="/national-parks">
              <NationalParks />
            </Route>
          </MainContainer>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
