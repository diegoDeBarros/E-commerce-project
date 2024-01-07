import {
  StyledForm,
  Input,
  SubmitButton,
  Label,
  TopBar,
  LoginContainer,
  StyledSpan,
  OuContainer,
  StyledLine,
  ForgottenPasswordSpan,
  OuSpan,
  GoogleLoginButton,
} from "./styles";

export const LoginScreen: React.FC = () => {
  return (
    <LoginContainer>
      <TopBar>Identificação</TopBar>
      <StyledForm action="/login" method="post">
        <Label htmlFor="email">*Email:</Label>
        <Input type="email" id="email" name="email" required />

        <Label htmlFor="senha">*Senha:</Label>
        <Input type="password" id="senha" name="senha" required />
        <StyledSpan>Esqueci minha senha</StyledSpan>
        <SubmitButton type="submit" value="Entrar" />
      </StyledForm>
      <OuContainer>
        <StyledLine />
        <OuSpan>ou</OuSpan>
        <StyledLine />
      </OuContainer>
      <ForgottenPasswordSpan>
        FAÇA SEU LOGIN COM REDE SOCIAL
      </ForgottenPasswordSpan>
      <GoogleLoginButton />
    </LoginContainer>
  );
};
