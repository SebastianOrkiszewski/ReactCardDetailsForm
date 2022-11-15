import FormField from "components/FormField/FormField";
import React from "react";
import { Wrapper, WrapperMini, Label, Button } from "./Form.styles";


const Form = () => {
  
  

  return (
    <Wrapper onSubmit={handleSubmit}>
      <FormField
        label="Cardholder Name"
        name="name"
        id="name"
        type="text"
        placeholder="e.g. Jane Appleseed"
        
      />
      
      <FormField
        label="Card Number"
        name="cardNumber"
        id="name"
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        />

      <WrapperMini>
        <Label htmlFor="id">
          Exp. Date (MM/YY)
          <WrapperMini>
            <FormField name="month" id="name" type="number" placeholder="MM"  />
            <FormField name="year" id="name" type="number" placeholder="YY"  />
          </WrapperMini>
        </Label>
        <FormField
          label="Cvc"
          name="cvc"
          id="number"
          type="number"
          placeholder="e.g. 123"
          
        />
      </WrapperMini>
      
      <Button type="submit" >Confirm</Button>
    </Wrapper>
  );
};

export default Form;
