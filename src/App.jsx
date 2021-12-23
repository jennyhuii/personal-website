import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  main: "black-and-white"
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          Artist. Designer. Engineer.
        </header>
      </div>
    </ThemeProvider>

  );
}

export default App;
