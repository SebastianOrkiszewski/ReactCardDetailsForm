import React from 'react'
import MainTemplate from "./MainTemplate/MainTemplate";
import Form from "./Form/Form";
import Success from "./Success/Success";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/globalStyles";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate >
          <Routes>
            <Route exact path="/" element={<Form  />} />
            <Route exact path="/success" element={<Success  />} />
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
}

export default Root