import React from 'react';
import CreatePost from './components/create-post';
import NavBar from './components/navbar';
import { theme, GlobalStyles } from "ucc-design-system";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme.light}>
        <GlobalStyles />
        <NavBar />
        <CreatePost />
      </ThemeProvider>
    </>
  )
};

export default App;