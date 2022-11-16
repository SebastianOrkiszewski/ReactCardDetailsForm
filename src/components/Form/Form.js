import FormField from "components/FormField/FormField";
import React from "react";
import { Wrapper, WrapperMini, Label, Button } from "./Form.styles";


const Form = ({ formValues, limitCharacters, handleChange, formErrors, setFormErrors, validate, setIsSubmit, isSubmit}) => {
  
  const navigate = useNavigate();

  const successPage = (formErrors) => {

    if (Object.keys(formErrors).length === 0)  {
      navigate('/success');
      } 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const currentFormErrors = validate(formValues);
    setFormErrors(currentFormErrors);
    successPage(currentFormErrors);
    
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <FormField
        label="Cardholder Name"
        name="name"
        id="name"
        type="text"
        placeholder="e.g. Jane Appleseed"
        value={formValues.name}
        onChange={handleChange}
        onInput={(e) => limitCharacters(e, 35)}
        error={formErrors.name}
      />
      
      <FormField
        label="Card Number"
        name="cardNumber"
        id="name"
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        value={formValues.cardNumber}
        onChange={handleChange}
        error={formErrors.cardNumber}
        />

      <WrapperMini>
        <Label htmlFor="id">
          Exp. Date (MM/YY)
          <WrapperMini>
            <FormField name="month" id="name" type="number" placeholder="MM" value={formValues.month} onChange={handleChange} onInput={(e) => limitCharacters(e, 2) } error={formErrors.month} />
            <FormField name="year" id="name" type="number" placeholder="YY" value={formValues.month} onChange={handleChange} onInput={(e) => limitCharacters(e, 2) } error={formErrors.month} />
          </WrapperMini>
        </Label>
        <FormField
          label="Cvc"
          name="cvc"
          id="number"
          type="number"
          placeholder="e.g. 123"
          value={formValues.cvc}
          onChange={handleChange}
          error={formErrors.cvc}
          
        />
      </WrapperMini>
      
      <Button type="submit" >Confirm</Button>
    </Wrapper>
  );
};

export default Form;
