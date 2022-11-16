import React from "react";
import logo from "assets/images/icon-complete.svg";
import { Wrapper, Button } from "components/Success/Success.styles";
import { Link } from "react-router-dom";

const Success = ({ resetForm }) => {
  return (
    <Wrapper>
      <img alt="ok" src={logo} />
      <h1>THANK YOU!</h1>
      <p>We've added you card details</p>
      <Link to="/">
        <Button type="reset" onClick={resetForm}>
          Continue
        </Button>
      </Link>
    </Wrapper>
  );
};

export default Success;
