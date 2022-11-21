import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 70%;
  transition-duration: 0.5s;
  transform: translate(-15%, 100%);

  @media screen and (min-width: 768px) {
    width: 70%;
    min-width: 300px;
    max-width: 730px;
    transform: translate(18%, 0%);
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
  font-size: 4vw;
  @media screen and (min-width: 768px) {
    font-size: 1.5vw; 
  }
  
`;
