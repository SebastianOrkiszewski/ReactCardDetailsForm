import styled from "styled-components";

export const Wrapper = styled.div`
  img {
    width: 100%;
    position: relative;
  }
  text-align: center;
  width: 70%;
  transition-duration: 0.5s;
  transform: translate(15%, -60%);

  @media screen and (min-width: 390px) {
    transform: translate(15%, -40%);
  }
  @media screen and (min-width: 585px) {
    transform: translate(15%, -40%);
  }
  @media screen and (min-width: 768px) {
    width: 80%;
    min-width: 300px;
    max-width: 530px;
    transform: translate(15%, 5%);
  }
  @media screen and (min-width: 900px) {
    width: 80%;
    min-width: 300px;
    max-width: 530px;
    transform: translate(40%, 5%);
  }
  @media screen and (min-width: 1200px) {
    width: 80%;
    max-width: 530px;
    transform: translate(60%, 5%);
  }
`;

export const NumberCard = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.colors.white};
  top: 31%;
  left: 77%;

  font-size: 4vw;
  @media screen and (min-width: 768px) {
    top: 30%;
    left: 77%;
    font-size: 2vw;
  }
`;
