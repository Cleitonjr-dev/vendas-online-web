import { BackgroundImage, ContainerLogin, LogoImage } from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LogoImage src="./logo.png" />
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
