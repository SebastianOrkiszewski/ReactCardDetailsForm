import React from "react";
import { Wrapper, NumberCard } from "./BackCard.styles";
import BackImage from "assets/images/bg-card-back.png";

const BackCard = ({ formValues }) => {
  return (
    <Wrapper>
      <img src={BackImage} alt="Card" />
      <NumberCard>
        {formValues.cvc.length > 0 ? formValues.cvc : "000"}
      </NumberCard>
    </Wrapper>
  );
};

export default BackCard;
