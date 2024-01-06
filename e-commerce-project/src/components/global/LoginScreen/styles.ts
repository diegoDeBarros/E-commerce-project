import styled from "styled-components";

export const LoginContainer = styled.div`
display:flex;
flex-direction: column;
height: 100vh;
width: 100vw;
background-color: white;
z-index: 6;
position: absolute;
top:0;
gap:40px;
font-family: dosis;
text-align: center;


`

export const StyledForm = styled.form`
    /* max-width: 100%; */
    /* margin: 0 auto; */
    display: flex;
    z-index: 6;
    flex-direction: column;
    align-items: center;
    gap:35px;
    
  
`;

export const TopBar = styled.div`
display:flex;
height:50px;
width:100%;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px; /* Adiciona uma sombra leve */
font-weight: 500;
font-size:22px;
font-family: dosis;
justify-content: center;
align-items:center;
z-index: 6;



`
export const Label = styled.label`
    display: flex;
    margin-bottom: 4px;
    
    width:80%;
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;
   
`;

export const Input = styled.input`
    width: 80%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border:none;
    border-bottom:1px solid black;
    appearance: none;
     /* Adicione uma borda opcional para melhorar a visibilidade */
    margin: 0;
    padding: 0;
    outline: none;
    padding-bottom:8px;

`;

export const SubmitButton = styled.button`
    width: 80%;
    min-height:40px;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    
    cursor: pointer;
    
`;

export const StyledSpan = styled.span`
width:80%;
text-align: right;
text-decoration: underline;


`

export const OuContainer = styled.div`
display:flex;
flex-direction:row;

align-items: center;
justify-content: center;
width:100%;
gap:2.6%;


`

export const StyledLine = styled.div`

height: 1px;
width:35%;
background-color:gray;
display:flex;
margin-top:8px;
`
export const OuSpan = styled.span`
`

export const ForgottenPasswordSpan = styled.span`
font-size:14px;

`

export const GoogleLoginButton = styled.button`
display:flex !important;
justify-content: center;
align-items: center;
width:44px;
height:44px;
background-color:red;
margin-left:44%;

`
