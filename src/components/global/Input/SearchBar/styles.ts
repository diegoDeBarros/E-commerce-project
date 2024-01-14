import styled from "styled-components";

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #f2f2f2;
  border-top: 1px solid #f2f2f2;
`;

export const SearchInput = styled.input`
  width: 85%;
  padding-left:18px;
  font-size: 1.5rem;
  border:none;
  outline: none;
  font-family: 'Dosis', sans-serif;
  font-weight: 600;
  letter-spacing: .15em;
  text-transform: uppercase;
`;
