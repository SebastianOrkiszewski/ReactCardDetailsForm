import React from "react";
import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
} from "./MainTemplate.styles";
import FrontCard from "components/FrontCard/FrontCard";
import BackCard from "components/BackCard/BackCard";

const MainTemplate = () => {
  
  return (
    <Wrapper>
      <LeftWrapper>
      
          <FrontCard />
          <BackCard  />
        
      </LeftWrapper>
      <RightWrapper></RightWrapper>
    </Wrapper>
  );
};

export default MainTemplate;
