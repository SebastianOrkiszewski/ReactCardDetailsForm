import React from 'react'
import MainTemplate from "./MainTemplate/MainTemplate";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/globalStyles";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from 'components/Form/Form';
import Success from 'components/Success/Success';


const Root = () => {
  const initialValues = {
    name: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: ''
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  

  const handleChange = (e) => {
    if (e.target.name === "cardNumber" && e.target.value) {
			e.target.value = e.target.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
		}
    if (e.target.name === "month" || e.target.name === "year") {
			e.target.value = e.target.value.toString().replace(/[^0-9]/g, '').substring(0, 2);
			if (e.target.name === "month" && e.target.value > 12) e.target.value = "12"
		}
    if (e.target.name === "cvc") {
			e.target.value = e.target.value.substring(0, 4);
    }
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value});

    const resetForm = () => {
      setFormValues(initialValues);
      setIsSubmit(false);
    };
  
    const limitCharacters = (e, limit) => {
      e.target.value = e.target.value.slice(0, limit);
    };

  }
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