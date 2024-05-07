import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TimeCapsulePhotoEssay from "./pages/TimeCapsulePhotoEssay";
import Work from "./pages/Work";
import NYUMastersThesis from "./pages/NYUMastersThesis";

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
          <MainContainer>
            <Route exact path="/">
              <Work />
            </Route>
            <Route exact path="/nyu-thesis">
              <NYUMastersThesis />
            </Route>
            <Route exact path="/time-capsule">
              <TimeCapsulePhotoEssay />
            </Route>
          </MainContainer>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
