import React from "react";
import { Wrapper, NumberCard } from "./BackCard.styles";
import BackImage from "assets/images/bg-card-back.png";

const BackCard = () => {
  return (
    <Wrapper>
    <img src={BackImage} alt="Card" />
    <NumberCard></NumberCard>
    </Wrapper> 
  );
};

export default BackCard;
