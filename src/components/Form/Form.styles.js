import styled from "styled-components";

export const Wrapper = styled.form`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  width: 90%;
  margin-bottom: 5%;
  letter-spacing: -1px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.standard};

  @media screen and (min-width: 768px) {
    min-width: 400px;
    max-width: 60%;
    margin-bottom: 0;
    margin-left: -5%;
  }

  &::placeholder {
    color: red;
  }
`;

export const WrapperMini = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.standard};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.standard};
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.standard};
  background-color: ${({ theme }) => theme.colors.letters};
  border-radius: 10px;
  padding: 12px;
  margin-top: 10px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;

  &:hover {
    transform: scale(1.01);
  }

  @media screen and (min-width: 389px) {
    margin-top: 0;
  }
`;
