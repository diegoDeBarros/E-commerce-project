import styled from "styled-components";


export const SearchInputContainer = styled.div`
position: relative;
display: inline-block;
width: 50vw;
height: 7vh;
`

export const SearchInput = styled.input`
height:100%;
width:100%;
border: 1px solid gray;
border-radius:.25rem;
outline:1rem;
font-family: 'Dosis', sans-serif;
font-weight: 600;
letter-spacing: .15em;
text-transform: uppercase;
padding-left: 1rem;
`

export const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  padding: 8px;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;