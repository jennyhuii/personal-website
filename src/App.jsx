import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TimeCapsulePhotoEssay from "./archived/TimeCapsulePhotoEssay";
import Work from "./pages/Work";
import About from "./pages/About";
import NYUMastersThesis from "./archived/NYUMastersThesis";
import Header from "./components/Header";
import Footer from "./components/Footer";

library.add(fab, faLinkedin, faGithubSquare);

const theme = {
  main: "black-and-white",
};

const MainContainer = styled.div`
  justify-self: stretch;
  padding: 1rem;
  min-height: 30rem;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Header />
          <MainContainer>
            <Route exact path="/work">
              <Work />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/nyu-thesis">
              <NYUMastersThesis />
            </Route>
            <Route exact path="/time-capsule">
              <TimeCapsulePhotoEssay />
            </Route>
            <Route exact path="/">
              <Work />
            </Route>
          </MainContainer>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
