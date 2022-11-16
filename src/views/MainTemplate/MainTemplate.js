import React from "react";
import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
} from "./MainTemplate.styles";
import FrontCard from "components/FrontCard/FrontCard";
import BackCard from "components/BackCard/BackCard";

const MainTemplate = ({children, formValues}) => {
  
  return (
    <Wrapper>
      <LeftWrapper>
      
          <FrontCard formValues={formValues} />
          <BackCard formValues={formValues} />
        
      </LeftWrapper>
      <RightWrapper>{children}</RightWrapper>
    </Wrapper>
  );
};

export default MainTemplate;
