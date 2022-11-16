import styled from "styled-components";
import bgDesktop from "assets/images/bg-main-desktop.png";

export const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
  }
`;

export const LeftWrapper = styled.div`
  background: url(${bgDesktop});
  background-size: 100%;
  background-repeat: round;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 80%;
    height: 100vh;
    background-repeat: round;
  }
`;

export const RightWrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  @media screen and (min-width: 768px) {
    align-items: center;
    justify-items: center;
  }
`;
