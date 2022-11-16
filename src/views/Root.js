import React from "react";
import MainTemplate from "./MainTemplate/MainTemplate";
import Form from "components/Form/Form";
import Success from "components/Success/Success";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/globalStyles";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const Root = () => {
  const initialValues = {
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "cardNumber" && e.target.value) {
      e.target.value = e.target.value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    }
    if (e.target.name === "month" || e.target.name === "year") {
      e.target.value = e.target.value
        .toString()
        .replace(/[^0-9]/g, "")
        .substring(0, 2);
      if (e.target.name === "month" && e.target.value > 12)
        e.target.value = "12";
    }
    if (e.target.name === "cvc") {
      e.target.value = e.target.value.substring(0, 4);
    }
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Can't be blank";
    }
    if (!values.cardNumber) {
      errors.cardNumber = "Can't be blank";
    } else if (values.cardNumber.length < 19) {
      errors.cardNumber = "Number is too short";
    }
    if (!values.month) {
      errors.month = "Can't be blank";
    }
    if (!values.year) {
      errors.year = "Can't be blank";
    }
    if (!values.cvc) {
      errors.cvc = "Can't be blank";
    } else if (values.cvc.length < 3) {
      errors.cvc = "CVC is too short";
    }
    return errors;
  };

  const resetForm = () => {
    setFormValues(initialValues);
    setIsSubmit(false);
  };

  const limitCharacters = (e, limit) => {
    e.target.value = e.target.value.slice(0, limit);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate formValues={formValues}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Form
                  formValues={formValues}
                  limitCharacters={limitCharacters}
                  handleChange={handleChange}
                  formErrors={formErrors}
                  setIsSubmit={setIsSubmit}
                  validate={validate}
                  setFormErrors={setFormErrors}
                  isSubmit={isSubmit}
                />
              }
            />
            <Route
              exact
              path="/success"
              element={<Success resetForm={resetForm} />}
            />
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
