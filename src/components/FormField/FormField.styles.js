import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 5px 0px 0px;
  height: 60px;
  p{
    color: red;
    margin-top: 1%;
    font-size: 14px;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  letter-spacing: -1px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px;
  border-radius: 10px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.lightGray};
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSize.standard};

  &::placeholder{
    color: ${({ theme }) => theme.colors.darkGray};;
  }
`;
