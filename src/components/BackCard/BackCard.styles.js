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

  @media screen and (min-width: 768px) {
    width: 70%;
    min-width: 300px;
    max-width: 530px;
    transform: translate(18%, 5%);
  }
  @media screen and (min-width: 1000px) {
    width: 70%;
    min-width: 300px;
    max-width: 730px;
    transform: translate(40%, 5%);
  }
`;

export const NumberCard = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.colors.white};
  top: 31%;
  left: 77%;
  font-size: 4vw;

  @media screen and (min-width: 768px) {
    top: 29%;
    left: 75%;
    font-size: 1.2em;
  }
  @media screen and (min-width: 1000px) {
    top: 31%;
    left: 75%;
    font-size: 1.6vw;
  }
`;
