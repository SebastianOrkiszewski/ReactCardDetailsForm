import React from "react";
import { Wrapper, InfoCard, InfoCardTwo, CardImg, LogoImg, Span } from "./FrontCard.styles";
import FrontImage from "assets/images/bg-card-front.png";
import LogoImage from "assets/images/card-logo.svg";

const FrontCard = () => {
  return (
    <Wrapper>
      <CardImg src={FrontImage} alt="Card" />
      <LogoImg src={LogoImage} alt="logo" />
      <InfoCard>
        
        <Span></Span>
        <InfoCardTwo>
          <Span></Span>
          <Span></Span>
        </InfoCardTwo>
        </InfoCard>
    </Wrapper>
  );
};

export default FrontCard;
