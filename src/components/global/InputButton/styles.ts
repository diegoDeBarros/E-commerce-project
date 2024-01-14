import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

export const Button = styled.button`
  background-color: white;
  color: #4caf50;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  height: 100%;

  &:active {
    background-color: #00b081;
    color: white;
  }
`;

export const Input = styled.input`
  width: 100%;
  text-align: center;
  font-size: 16px;
  height: 100%;
  border: none;
  outline: none;
`;

