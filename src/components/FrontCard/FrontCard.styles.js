import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 70%;
  transition-duration: 0.5s;
  transform: translate(-15%, 100%);
  @media screen and (min-width: 390px) {
    transform: translate(-15%, 120%);
  }
  @media screen and (min-width: 585px) {
    transform: translate(-15%, 120%);
  }
  @media screen and (min-width: 768px) {
    width: 80%;
    min-width: 300px;
    max-width: 530px;
    transform: translate(15%, 0%);
  }
  @media screen and (min-width: 900px) {
    width: 80%;
    min-width: 300px;
    max-width: 530px;
    transform: translate(40%, 0%);
  }
  @media screen and (min-width: 1200px) {
    width: 80%;
    max-width: 530px;
    transform: translate(40%, 0%);
  }
  @media screen and (min-width: 2100px) {
    width: 80%;
    max-width: 530px;
    transform: translate(65%, 0%);
  }
`;
export const CardImg = styled.img`
  width: 100%;
  z-index: 5;
  position: relative;
`;
export const LogoImg = styled.img`
  width: 15%;
  z-index: 8;
  position: absolute;
  top: 10%;
  left: 10%;
`;
export const InfoCard = styled.div`
  z-index: 7;
  position: absolute;
  width: 80%;
  height: 60%;
  top: 0;
  margin: 10% 10% 0% 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: ${({ theme }) => theme.fontSize.standard};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;

export const InfoCardTwo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
  color: ${({ theme }) => theme.colors.white};
`;
export const Span = styled.span`
  font-size: 14px;
  @media screen and (min-width: 390px) {
    font-size: 1.1rem;
  }
  @media screen and (min-width: 585px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.45rem;
  }
`;
