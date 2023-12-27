import styled from 'styled-components';

export const CategoryBarContainer = styled.nav`
background-color:gray;
width: 100%;
height:auto;
min-height: 40px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

`

export const CategoryName = styled.span`
font-size:14px;
color:black;
max-width: 100%;
/* padding: 5px; */
color: black;
font-family: 'Dosis', sans-serif;
font-weight: 400;
letter-spacing: .15em;
text-transform: uppercase;
box-sizing: border-box;
padding:5px;

&:hover{
    text-decoration: underline;
    cursor: pointer;
    color: orange;
}

`