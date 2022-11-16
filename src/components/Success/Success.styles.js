import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  img {
    width: 40%;
  }
  p {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.fontSize.standard};
    margin: 10px 0px 30px 0px;
  }
  h1 {
    color: ${({ theme }) => theme.colors.black};
    margin: 10px 0px 0px 0px;
  }
`;

export const Button = styled.button`
  padding: 10px 68px;
  border: none;
  background-color: ${({ theme }) => theme.colors.letters};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.standard};
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    transform: scale(1.01);
  }
`;
