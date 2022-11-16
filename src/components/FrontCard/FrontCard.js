import React from "react";
import { Wrapper, InfoCard, InfoCardTwo, CardImg, LogoImg, Span } from "./FrontCard.styles";
import FrontImage from "assets/images/bg-card-front.png";
import LogoImage from "assets/images/card-logo.svg";

const FrontCard = ({formValues}) => {
    return (
      <Wrapper>
        <CardImg src={FrontImage} alt="Card" />
        <LogoImg src={LogoImage} alt="logo" />
        <InfoCard>
          
          <Span>{formValues.cardNumber.length > 0 ? formValues.cardNumber: "0000 0000 0000 0000"}</Span>
          <InfoCardTwo>
            <Span>{formValues.name.length > 0 ? formValues.name : "Jane Appleseed"}</Span>
            <Span>{formValues.month.length > 0 ? formValues.month : "00"}/{formValues.year.length > 0 ? formValues.year : "00"}</Span>
          </InfoCardTwo>
          </InfoCard>
      </Wrapper>
    );
  };

export default FrontCard;
