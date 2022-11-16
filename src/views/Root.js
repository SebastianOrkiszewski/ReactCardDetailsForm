import React from 'react'
import MainTemplate from "./MainTemplate/MainTemplate";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/globalStyles";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from 'components/Form/Form';
import Success from 'components/Success/Success';


const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate >
          <Routes>
            <Route exact path="/" element={<Form />} />
            <Route exact path="/success" element={<Success />} />
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
}

export default Root